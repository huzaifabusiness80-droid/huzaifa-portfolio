'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FloatingOrb() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Outer wireframe sphere ────────────────────────────
    const outerGeo = new THREE.IcosahedronGeometry(1, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color:       0x74A567,
      wireframe:   true,
      transparent: true,
      opacity:     0.35,
    });
    const outerSphere = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerSphere);

    // ── Inner solid sphere ────────────────────────────────
    const innerGeo = new THREE.SphereGeometry(0.65, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color:       0x1a1a1a,
      roughness:   0.3,
      metalness:   0.8,
      transparent: true,
      opacity:     0.9,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // ── Orbiting ring ─────────────────────────────────────
    const ringGeo = new THREE.TorusGeometry(1.3, 0.006, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color:       0x74A567,
      transparent: true,
      opacity:     0.5,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    const ring2 = ring.clone();
    ring2.rotation.x = -Math.PI / 5;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // ── Ambient + point light ─────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const ptLight = new THREE.PointLight(0x74A567, 2, 10);
    ptLight.position.set(2, 2, 2);
    scene.add(ptLight);

    // Theme detection
    const updateThemeStyles = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      innerMat.color.set(isLight ? 0xffffff : 0x1a1a1a);
      innerMat.opacity = isLight ? 1 : 0.9;
      ambientLight.intensity = isLight ? 1.2 : 0.4;
      outerMat.opacity = isLight ? 0.6 : 0.35;
    };

    updateThemeStyles();
    const observer = new MutationObserver(updateThemeStyles);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // ── Mouse ─────────────────────────────────────────────
    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);

    // ── Animate ───────────────────────────────────────────
    let animId: number;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.008;

      outerSphere.rotation.y  = t * 0.4  + mx * 0.3;
      outerSphere.rotation.x  = t * 0.15 + my * 0.2;
      ring.rotation.z         = t * 0.6;
      ring2.rotation.z        = -t * 0.4;
      const s = 1 + Math.sin(t * 1.2) * 0.03;
      outerSphere.scale.setScalar(s);

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '110px', height: '110px', flexShrink: 0 }}
      aria-hidden="true"
    />
  );
}
