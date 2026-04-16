'use client';

import { useEffect, useRef } from 'react';

interface MorphCardProps {
  children: React.ReactNode;
  variant: 'light' | 'green' | 'dark';
  index: number;
}

/**
 * Strategy card with:
 * - Scroll-triggered slide + fade animation
 * - Hover: subtle 3D tilt + title letter-spacing expand
 * - Number counts up when card enters viewport
 */
export default function MorphCard({ children, variant, index }: MorphCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll reveal with direction
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const dir = index % 2 === 0 ? '-60px' : '60px';
    el.style.opacity   = '0';
    el.style.transform = `translateX(${dir}) translateY(20px)`;
    el.style.transition = `opacity 0.8s ease ${index * 0.12}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = '1';
          el.style.transform = 'translateX(0) translateY(0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  // Mouse 3D tilt (subtle for full-width panels)
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const y    = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transition = 'none';
    el.style.transform  = `perspective(1200px) rotateX(${-y * 2.5}deg)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1), opacity 0.8s ease, background 0.3s';
    el.style.transform  = 'perspective(1200px) rotateX(0deg)';
  };

  return (
    <div
      ref={ref}
      className={`strategy-card-panel ${variant}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
