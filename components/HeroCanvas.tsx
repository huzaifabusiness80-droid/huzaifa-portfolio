'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isActiveRef = useRef(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Detect mobile/tablet for performance optimization
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    const isTablet = window.innerWidth < 1024;
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Adjust particle density based on device
    const COLS = isMobile ? 40 : isTablet ? 60 : 80;
    const ROWS = isMobile ? 25 : isTablet ? 35 : 45;

    // ── Scene ────────────────────────────────────────────
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const W = mount.clientWidth;
    const H = mount.clientHeight;
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 1000);
    camera.position.set(0, 0, 52);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ── Particle wave grid ───────────────────────────────
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(COLS * ROWS * 3);
    const origins = new Float32Array(COLS * ROWS * 2);

    const xScale = isMobile ? 80 : 130;
    const yScale = isMobile ? 50 : 75;

    for (let i = 0; i < COLS; i++) {
      for (let j = 0; j < ROWS; j++) {
        const idx = i * ROWS + j;
        const x = (i / (COLS - 1) - 0.5) * xScale;
        const y = (j / (ROWS - 1) - 0.5) * yScale;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = 0;
        origins[idx * 2] = x;
        origins[idx * 2 + 1] = y;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const sizes = new Float32Array(COLS * ROWS).fill(isMobile ? 1.5 : 1.8);
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      color: new THREE.Color('#9d00ff'),
      size: isMobile ? 0.35 : 0.45,
      transparent: true,
      opacity: 0.28,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    pointsRef.current = points;

    // Theme detection
    const updateThemeStyles = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      material.opacity = isLight ? 0.34 : 0.2;
    };

    updateThemeStyles();
    const observer = new MutationObserver(updateThemeStyles);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // ── Mouse parallax (disabled on touch devices) ───────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 6;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 3;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    // ── Visibility handling ──────────────────────────────
    const onVisibilityChange = () => {
      isActiveRef.current = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // ── Animation loop ───────────────────────────────────
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      if (!isActiveRef.current || shouldReduceMotion) {
        renderer.render(scene, camera);
        return;
      }

      timeRef.current += isMobile ? 0.004 : 0.006;
      const t = timeRef.current;
      const pos = geometry.attributes.position.array as Float32Array;

      // Animate wave - simplified on mobile
      const waveIntensity = isMobile ? 0.05 : 0.07;
      const zScale = isMobile ? 3 : 5;

      for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < ROWS; j++) {
          const idx = i * ROWS + j;
          const ox = origins[idx * 2];
          const oy = origins[idx * 2 + 1];
          pos[idx * 3 + 2] =
            Math.sin(ox * waveIntensity + t) * Math.cos(oy * waveIntensity + t * 0.7) * zScale +
            Math.sin(ox * 0.03 + t * 1.3) * 2;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Camera easing with lerp
      const ease = isMobile ? 0.02 : 0.04;
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * ease;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * ease;
      camera.position.x = mouseRef.current.x;
      camera.position.y = -mouseRef.current.y;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize handler ───────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize, { passive: true });

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
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
