'use client';

import { useEffect, useRef, useState } from 'react';

export default function Loader() {
  const numRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 8) + 2;
      if (count >= 100) { 
        count = 100; 
        clearInterval(interval);
        setTimeout(() => setActive(false), 800);
      }
      el.textContent = count + '%';
    }, 45);
    return () => clearInterval(interval);
  }, []);

  if (!active) return null;

  return (
    <div 
      className={`fixed inset-0 z-[10000] bg-bg flex items-center justify-center transition-opacity duration-1000 ${!active ? 'opacity-0' : 'opacity-100'}`} 
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-baseline gap-2 overflow-hidden">
          <span className="text-muted text-[0.6rem] font-bold uppercase tracking-widest">Portfolio Loading</span>
          <span ref={numRef} className="font-display text-4xl lg:text-5xl font-bold text-text">0%</span>
        </div>
        <div className="w-48 h-px bg-border relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-accent animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
