'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      bar.style.transform = `scaleX(${progress / 100})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position:   'fixed',
        top:         0,
        left:        0,
        right:       0,
        height:     '2px',
        zIndex:      9997,
        background: 'transparent',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <div
        ref={barRef}
        style={{
          width:          '100%',
          height:         '100%',
          background:     'var(--accent)',
          transformOrigin: 'left center',
          transform:      'scaleX(0)',
          transition:     'transform 0.1s linear',
        }}
      />
    </div>
  );
}
