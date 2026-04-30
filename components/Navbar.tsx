'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About'    },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact',  label: 'Contact'  },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light';
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <button
      className="w-11 h-11 flex items-center justify-center rounded-full border border-border hover:border-border-med transition-colors text-text"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-[18px] h-[18px]">
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </div>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav 
        id="nav" 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b ${
          scrolled ? 'bg-bg/90 backdrop-blur-md border-border py-3' : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-[1490px] px-[var(--section-pad)] flex items-center justify-between">
          <Link href="#hero" className="font-display text-xl font-bold tracking-tighter text-text hover:opacity-80 transition-opacity uppercase">
            Muhammad Huzaifa
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <a 
                key={href} 
                href={href} 
                className="font-body text-[0.8rem] font-medium tracking-widest uppercase text-dim hover:text-text hover:bg-bg3 px-3 py-2 rounded-full transition-all"
              >
                {label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="flex lg:hidden items-center gap-2 bg-text text-bg text-[0.75rem] font-bold tracking-widest uppercase rounded-full px-5 py-2.5 hover:opacity-90 transition-all shadow-sm"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[2000] transition-all duration-700 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={close}
      >
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-700 ${open ? 'opacity-100' : 'opacity-0'}`} />
        <div 
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-bg border-l border-border p-8 flex flex-col transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="self-end text-muted hover:text-text text-sm uppercase tracking-widest mb-12" onClick={close}>
            Close ✕
          </button>
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-4xl font-display font-bold text-text hover:text-accent transition-colors"
                onClick={close}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
