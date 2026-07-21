'use client';

import { useEffect, useRef, useState } from 'react';
import ContactModal from './ContactModal';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/', id: 'social-github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', id: 'social-linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/', id: 'social-twitter' },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.85s cubic-bezier(0.16,1,0.3,1)';
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section
        id="contact"
        ref={ref}
        className="bg-[#edf1f7] text-[#09090b] relative z-10 py-16 sm:py-24 lg:py-32 px-6 sm:px-10 font-sans border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-[1340px] flex flex-col gap-12 lg:gap-16">

          {/* Section Header */}
          <div className="flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-[#6366f1]">
              <svg className="w-5 h-5 fill-current text-[#6366f1]" viewBox="0 0 24 24">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="text-[#09090b] text-base sm:text-lg font-extrabold">Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-[#09090b] leading-[1.15] tracking-tight max-w-[28ch]">
              Ready to start your next <span className="font-serif italic font-normal text-[#6366f1]">digital vision?</span>
            </h2>
          </div>

          {/* Master Contact Card */}
          <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            
            {/* Direct Email & Location Info */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-extrabold text-[#6366f1] uppercase tracking-wider">
                  Direct Contact
                </span>
                <a
                  href="mailto:huzaifabusiness60@gmail.com"
                  id="contact-email"
                  className="text-2xl sm:text-3xl font-bold text-[#09090b] hover:text-[#6366f1] transition-colors tracking-tight"
                >
                  huzaifabusiness60@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-[#475569]">
                  Based in Karachi, Pakistan • Open for Remote Global Work
                </span>
              </div>

              {/* Social Navigation Links */}
              <nav className="flex items-center gap-6 pt-2" aria-label="Social media links">
                {SOCIALS.map(({ label, href, id }) => (
                  <a
                    key={id}
                    id={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#09090b] hover:text-[#6366f1] transition-colors relative group"
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6366f1] transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Modal Trigger Action Button */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <button
                onClick={() => setModalOpen(true)}
                id="contact-cta-btn"
                className="w-full lg:w-auto bg-[#09090b] text-white text-base font-bold rounded-full px-9 py-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-3"
              >
                <span>Send Me A Message</span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Full-screen slide-up contact modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
