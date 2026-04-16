'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Scene ────────────────────────────────────────────
    const scene    = new THREE.Scene();
    const W        = mount.clientWidth;
    const H        = mount.clientHeight;
    const camera   = new THREE.PerspectiveCamera(55, W / H, 0.1, 1000);
    camera.position.set(0, 0, 52);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Particle wave grid ───────────────────────────────
    const COLS = 80, ROWS = 45;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(COLS * ROWS * 3);
    const origins   = new Float32Array(COLS * ROWS * 2);

    for (let i = 0; i < COLS; i++) {
      for (let j = 0; j < ROWS; j++) {
        const idx = (i * ROWS + j);
        const x = (i / (COLS - 1) - 0.5) * 130;
        const y = (j / (ROWS - 1) - 0.5) * 75;
        positions[idx * 3]     = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = 0;
        origins[idx * 2]     = x;
        origins[idx * 2 + 1] = y;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const sizes = new Float32Array(COLS * ROWS).fill(1.8);
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      color:       new THREE.Color('#74A567'),
      size:        0.45,
      transparent: true,
      opacity:     0.22,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ── Thin line mesh ───────────────────────────────────
    const lineMat = new THREE.LineBasicMaterial({
      color:       new THREE.Color(0xffffff),
      transparent: true,
      opacity:     0.04,
    });

    const lines: THREE.Line[] = [];
    // Horizontal flow lines
    for (let j = 0; j < ROWS; j += 3) {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i < COLS; i++) {
        const x = (i / (COLS - 1) - 0.5) * 130;
        const y = (j / (ROWS - 1) - 0.5) * 75;
        pts.push(new THREE.Vector3(x, y, 0));
      }
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const l = new THREE.Line(lineGeo, lineMat);
      lines.push(l);
      scene.add(l);
    }

    // Theme detection
    const updateThemeStyles = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      lineMat.color.set(isLight ? 0x000000 : 0xffffff);
      lineMat.opacity = isLight ? 0.08 : 0.04;
      material.opacity = isLight ? 0.4 : 0.22;
    };

    updateThemeStyles();
    const observer = new MutationObserver(updateThemeStyles);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // ── Mouse parallax ───────────────────────────────────
    let targetX = 0, targetY = 0;
    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth  - 0.5) * 6;
      targetY = (e.clientY / window.innerHeight - 0.5) * 3;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Animation loop ───────────────────────────────────
    let animId: number;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.006;

      const pos = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < ROWS; j++) {
          const idx = (i * ROWS + j);
          const ox  = origins[idx * 2];
          const oy  = origins[idx * 2 + 1];
          pos[idx * 3 + 2] =
            Math.sin(ox * 0.07 + t)     * Math.cos(oy * 0.07 + t * 0.7) * 5 +
            Math.sin(ox * 0.03 + t * 1.3) * 2;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Camera easing
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (-targetY - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

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
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
}
