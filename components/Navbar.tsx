'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Works' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Testimonial' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] w-full px-6 sm:px-10 transition-all duration-300 ${
          scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border/40 py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-[1340px] flex items-center justify-between">
          {/* Left Brand Logo: Serif Italic matching Madison. */}
          <Link href="#hero" className="font-serif italic text-2xl sm:text-3xl font-bold tracking-tight text-text hover:opacity-80 transition-opacity">
            Huzaifa.
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-lg font-semibold text-text/80 hover:text-text transition-colors tracking-wide"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-accent hover:bg-accent-light text-white text-sm font-bold rounded-full px-7 py-3.5 transition-all"
            >
              Download Resume
            </a>

            {/* Mobile Menu Trigger */}
            <button
              className="md:hidden text-text p-1 focus:outline-none"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[2000] transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
        <div
          className={`absolute right-4 top-4 bottom-4 w-[calc(100%-2rem)] max-w-[320px] bg-bg border border-border p-6 rounded-2xl flex flex-col justify-between shadow-2xl transition-all duration-300 ${
            open ? 'translate-x-0' : 'translate-x-6'
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <span className="font-serif italic text-2xl font-bold text-text">Huzaifa.</span>
            <button onClick={close} className="text-muted hover:text-text">✕</button>
          </div>
          <div className="flex flex-col gap-5 my-auto">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="text-2xl font-serif italic text-text hover:text-accent"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={close}
            className="w-full text-center bg-text text-bg text-xs font-bold rounded-full py-3"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
