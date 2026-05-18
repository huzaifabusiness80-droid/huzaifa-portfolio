'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
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
      className="w-9 h-9 flex items-center justify-center rounded-full border border-black/[0.08] dark:border-white/10 bg-text/[0.03] hover:bg-text/[0.08] active:scale-95 transition-all text-text shadow-sm"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-[16px] h-[16px]">
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </div>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync theme state so we can compute border classes
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light';
    if (saved) setTheme(saved);
    const observer = new MutationObserver(() => {
      const t = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
      if (t) setTheme(t);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Dynamic Section Tracking Highlighter
      const sections = ['hero', 'about', 'projects', 'services', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
        className="fixed left-4 right-4 z-[1000] mx-auto transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
        style={{
          ...(scrolled ? {
            top: '1rem',
            paddingTop: '0.625rem',
            paddingBottom: '0.625rem',
            maxWidth: '1320px',
            background: theme === 'light' ? 'rgba(255,255,255,0.97)' : 'rgba(var(--color-bg), 0.75)',
            border: theme === 'light' ? '1.5px solid #d1d5db' : '1px solid rgba(255,255,255,0.15)',
            boxShadow: theme === 'light' ? '0 4px 24px rgba(0,0,0,0.08)' : '0 4px 24px rgba(0,0,0,0.20)',
          } : {
            top: '1.5rem',
            paddingTop: '0.875rem',
            paddingBottom: '0.875rem',
            maxWidth: '1380px',
            background: theme === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(var(--color-bg), 0.25)',
            border: theme === 'light' ? '1.5px solid #d1d5db' : '1px solid rgba(255,255,255,0.10)',
            boxShadow: theme === 'light' ? '0 2px 16px rgba(0,0,0,0.05)' : 'none',
          }),
          backdropFilter: 'blur(20px)',
          borderRadius: '9999px',
        }}
      >
        <div className="w-full px-5 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="group flex items-center gap-2 font-display text-sm sm:text-base font-bold tracking-widest text-text hover:opacity-90 transition-opacity uppercase">
            <span>M. Huzaifa</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-text/[0.03] border border-black/[0.04] dark:border-white/[0.02] p-1 rounded-full">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = activeSection === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`font-body text-[0.72rem] font-bold tracking-[0.12em] uppercase px-5 py-2 rounded-full transition-all duration-300 ${isActive
                    ? 'bg-text text-bg shadow-sm'
                    : 'text-muted hover:text-text hover:bg-text/[0.08]'
                    }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Desktop CTA Button */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 bg-accent text-white text-[0.72rem] font-bold tracking-widest uppercase rounded-full px-5 py-2 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 transition-all active:scale-95"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </span>
              Let's Talk
            </a>

            {/* Mobile Menu Trigger */}
            <button
              className="flex lg:hidden items-center gap-2 bg-text text-bg text-[0.72rem] font-bold tracking-widest uppercase rounded-full px-5 py-2 hover:opacity-90 active:scale-95 transition-all shadow-sm border border-black/[0.04] dark:border-white/[0.04] animate-fade-in"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-3.5 h-3 flex flex-col justify-between items-center">
                <span className={`w-3.5 h-0.5 bg-current rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
                <span className={`w-3.5 h-0.5 bg-current rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`w-3.5 h-0.5 bg-current rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-[5px]' : ''}`} />
              </div>
              <span className="leading-none">{open ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[2000] transition-all duration-500 ${open ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
      >
        {/* Backdrop overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={close}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-4 top-4 bottom-4 w-[calc(100%-2rem)] max-w-[380px] bg-bg/95 border border-black/[0.08] dark:border-border/80 p-8 rounded-3xl flex flex-col justify-between shadow-2xl transform transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${open ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-10 scale-95 opacity-0'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Panel Actions */}
          <div className="flex items-center justify-between pb-6">
            <Link href="#hero" className="font-display text-lg font-bold tracking-widest text-text uppercase" onClick={close}>
              M. HUZAIFA<span className="text-accent">.</span>
            </Link>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border border-black/[0.08] dark:border-border hover:border-border-med transition-colors text-muted hover:text-text"
              onClick={close}
            >
              ✕
            </button>
          </div>

          {/* Nav Links List */}
          <div className="flex flex-col gap-5 my-auto">
            <p className="text-[0.62rem] font-bold tracking-[0.25em] text-muted uppercase">Navigation</p>
            {NAV_LINKS.map(({ href, label }, i) => {
              const isActive = activeSection === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`text-4xl font-display font-bold tracking-tight transition-all duration-300 transform ${open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    } ${isActive ? 'text-accent' : 'text-text hover:text-accent'
                    }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={close}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Bottom Footer Info */}
          <div className="pt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[0.62rem] font-bold tracking-widest text-muted uppercase">Say Hello</span>
              <a href="mailto:huzaifabusiness60@gmail.com" className="text-sm font-medium text-text hover:text-accent transition-colors">
                huzaifabusiness60@gmail.com
              </a>
            </div>

            {/* CTA in Drawer */}
            <a
              href="#contact"
              className="w-full flex items-center justify-center gap-2 bg-accent text-white text-[0.75rem] font-bold tracking-widest uppercase rounded-full py-4 hover:bg-accent-light transition-all shadow-md shadow-accent/10 active:scale-95"
              onClick={close}
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
