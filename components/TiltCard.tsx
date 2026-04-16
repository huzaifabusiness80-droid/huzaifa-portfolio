'use client';

import { useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({
  children,
  className = '',
  intensity = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect  = el.getBoundingClientRect();
    const x     = (e.clientX - rect.left) / rect.width  - 0.5;
    const y     = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transition = 'none';
    el.style.transform  =
      `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * (intensity * 0.6)}deg) scale3d(1.02,1.02,1.02)`;
    // Glare element
    const glare = el.querySelector<HTMLDivElement>('.tilt-glare');
    if (glare) {
      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
    }
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1)';
    el.style.transform  = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    const glare = el.querySelector<HTMLDivElement>('.tilt-glare');
    if (glare) glare.style.opacity = '0';
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {/* Glare overlay */}
      <div
        className="tilt-glare"
        style={{
          position:      'absolute',
          inset:          0,
          borderRadius:  'inherit',
          opacity:        0,
          pointerEvents: 'none',
          transition:    'opacity 0.3s ease',
          zIndex:         2,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
