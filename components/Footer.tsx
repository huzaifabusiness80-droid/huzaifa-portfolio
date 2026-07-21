'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';

const NAV_CARDS = [
  {
    label: 'Home',
    href: '#hero',
    icon: (
      <svg className="w-7 h-7 text-[#09090b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
      </svg>
    ),
  },
  {
    label: 'Services',
    href: '#services',
    icon: (
      <svg className="w-7 h-7 text-[#09090b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'About',
    href: '#about',
    icon: (
      <svg className="w-7 h-7 text-[#09090b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: (
      <svg className="w-7 h-7 text-[#09090b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

const SOCIALS = [
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:huzaifabusiness60@gmail.com',
    icon: (
      <svg className="w-5 h-5 fill-none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer
        id="footer"
        className="bg-[#edf1f7] text-[#09090b] relative z-10 py-12 sm:py-16 lg:py-20 px-6 sm:px-10 font-sans overflow-hidden border-t border-slate-200/90"
      >
        {/* Soft Purple Ambient Radial Glow Spotlights (Same as Services, Projects, About) */}
        <div className="pointer-events-none absolute top-0 -left-48 w-[700px] h-[700px] bg-purple-400/25 blur-[150px] rounded-full" />
        <div className="pointer-events-none absolute top-0 -right-48 w-[700px] h-[700px] bg-purple-400/25 blur-[150px] rounded-full" />

        <div className="mx-auto max-w-[1340px] flex flex-col gap-10 lg:gap-12 relative z-10">

          {/* Top Section: Headline & Action Pill + Circle Arrow */}
          <div className="flex flex-col items-start gap-6">
            
            <h2 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-semibold text-[#09090b] tracking-tight leading-[1.12] max-w-[22ch]">
              Ready To Start <span className="font-serif italic font-normal text-[#6366f1]">Something Great?</span>
            </h2>

            {/* Action Buttons: Solid Black Pill + Solid Black Circle Arrow */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#09090b] text-white text-base font-bold rounded-full px-8 py-3.5 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-md"
              >
                Get In Touch
              </button>

              <button
                onClick={() => setModalOpen(true)}
                aria-label="Get in touch arrow"
                className="bg-[#09090b] text-white w-13 h-13 p-3.5 rounded-full flex items-center justify-center hover:scale-[1.05] active:scale-[0.95] transition-all shadow-md"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

          </div>

          {/* Middle Nav Cards Row (4 LARGER White Cards matching portfolio theme) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-[840px]">
            {NAV_CARDS.map((card) => (
              <a
                key={card.label}
                href={card.href}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-[150px] sm:h-[165px] hover:shadow-md hover:border-[#6366f1]/40 hover:scale-[1.03] transition-all duration-300 group shadow-xs"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                <span className="text-xl sm:text-2xl font-bold text-[#09090b] tracking-tight">
                  {card.label}
                </span>
              </a>
            ))}
          </div>

          {/* Horizontal Translucent Divider Line */}
          <div className="w-full h-px bg-slate-200/80" />

          {/* Bottom Bar: Designed & Developed By + Circular White Social Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-1">
            
            {/* Left Notice: Copyright & Professional Tagline */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium text-[#475569]">
              <span className="text-[#09090b] font-bold">© 2026 Muhammad Huzaifa</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-[#6366f1] font-extrabold">Crafting High-Performance Digital Products</span>
            </div>

            {/* Right Social Circular Icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="w-11 h-11 rounded-full bg-white border border-slate-200/80 text-[#09090b] hover:text-[#6366f1] flex items-center justify-center hover:scale-110 hover:border-[#6366f1]/40 transition-all shadow-xs"
                >
                  {soc.icon}
                </a>
              ))}
            </div>

          </div>

        </div>
      </footer>

      {/* Full-screen Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
