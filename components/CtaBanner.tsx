'use client';

import { useEffect, useRef } from 'react';

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'scale(0.97) translateY(40px)';
    el.style.transition = 'opacity 0.9s ease, transform 1s cubic-bezier(0.16,1,0.3,1)';
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = '1';
          el.style.transform = 'scale(1) translateY(0)';
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="cta-banner" ref={ref}>
      <h2 className="cta-banner-title">
        Ready to build<br />something great?
      </h2>
      <a href="#contact" className="cta-banner-btn" id="cta-banner-btn">
        Let&apos;s talk <ArrowIcon />
      </a>
    </div>
  );
}
