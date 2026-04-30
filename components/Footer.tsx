'use client';

import { useEffect, useRef } from 'react';

const LINKS = [
  { href: '#strategy', label: 'About'    },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact'  },
];

export default function Footer() {
  const ref  = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.8s ease 0.1s, transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s';
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const year = new Date().getFullYear();
  return (
    <footer ref={ref} className="mx-auto max-w-[1510px] py-12 px-[var(--section-pad)] border-t border-border/50">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4">
        {/* Logo in border box */}
        <div className="border border-border/40 px-6 py-3 rounded-xl hover:border-accent/40 transition-colors duration-500">
          <a href="#hero" className="font-display text-lg font-bold tracking-[-0.03em] text-text uppercase whitespace-nowrap">
            Muhammad Huzaifa
          </a>
        </div>

        {/* Copyright center */}
        <p className="text-muted text-[0.6rem] uppercase tracking-[0.15em] font-medium lg:absolute lg:left-1/2 lg:-translate-x-1/2 whitespace-nowrap">
          ©{year} Huzaifa. All Rights Reserved.
        </p>

        {/* Nav links right */}
        <nav className="flex items-center gap-8" aria-label="Footer navigation">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="text-muted hover:text-text text-[0.65rem] font-bold tracking-widest uppercase transition-colors">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
