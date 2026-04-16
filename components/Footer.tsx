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
    <footer ref={ref}>
      <a href="#hero" className="footer-logo" aria-label="Back to top">HUZAIFA.DEV</a>
      <p className="footer-copy"><small>©{year} Huzaifa. All Rights Reserved.</small></p>
      <nav className="footer-links" aria-label="Footer navigation">
        {LINKS.map(({ href, label }) => (
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>
    </footer>
  );
}
