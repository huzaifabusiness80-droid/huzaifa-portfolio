'use client';

import { useEffect, useRef, useState } from 'react';
import ContactModal from './ContactModal';

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/',   id: 'social-github'   },
  { label: 'LinkedIn', href: 'https://linkedin.com/', id: 'social-linkedin' },
  { label: 'Twitter',  href: 'https://twitter.com/',  id: 'social-twitter'  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = `opacity 0.8s ease ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

export default function Contact() {
  const headRef = useReveal(0);
  const bigRef  = useReveal(100);
  const gridRef = useReveal(200);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="px-[var(--section-pad)] py-20 lg:py-40 border-t border-border bg-bg">
        <div ref={headRef} className="max-w-[var(--section-max)] mx-auto">
          <p className="text-muted uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-10">Contact</p>
        </div>

        <div ref={bigRef} className="max-w-[var(--section-max)] mx-auto">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-text uppercase mb-12 lg:mb-16 max-w-[15ch]">
            Ready to build<br />
            your next <span className="text-accent">Vision?</span>
          </h2>
        </div>

        <div ref={gridRef} className="max-w-[var(--section-max)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <a 
                href="mailto:huzaifabusiness60@gmail.com" 
                className="text-lg lg:text-xl font-display font-bold text-text hover:text-accent transition-colors uppercase tracking-tight"
                id="contact-email"
              >
                huzaifabusiness60@gmail.com
              </a>
              <p className="text-muted mt-4 text-[0.6rem] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" /> Karachi, Pakistan
              </p>
            </div>
            
            <nav className="flex items-center gap-6" aria-label="Social media links">
              {SOCIALS.map(({ label, href, id }) => (
                <a 
                  key={id} 
                  id={id} 
                  href={href} 
                  className="text-muted hover:text-text text-[0.62rem] font-bold tracking-[0.2em] uppercase transition-colors relative group/link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover/link:w-full" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex justify-start lg:justify-end">
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-4 bg-transparent border border-border-med text-text px-8 py-4 rounded-full text-[0.65rem] font-bold tracking-[0.2em] uppercase hover:bg-text hover:text-bg hover:border-text transition-all duration-500 shadow-xl"
              id="contact-cta-btn"
            >
              Send me a message 
              <span className="w-8 h-8 rounded-full border border-border-med flex items-center justify-center group-hover:border-bg/20 transition-all duration-500 transform group-hover:rotate-45">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Full-screen slide-up form */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
