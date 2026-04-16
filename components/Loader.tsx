'use client';

import { useEffect, useRef } from 'react';

export default function Loader() {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 14) + 4;
      if (count >= 100) { count = 100; clearInterval(interval); }
      el.textContent = count + '%';
    }, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="loader" aria-hidden="true">
      <span className="loader-label">Loading</span>
      <div className="loader-counter">
        <span ref={numRef}>0%</span>
      </div>
      <div className="loader-bar" />
    </div>
  );
}
