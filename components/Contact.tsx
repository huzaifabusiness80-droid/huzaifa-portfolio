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
          <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1] tracking-tighter text-text uppercase mb-16 lg:mb-24">
            Have an idea?<br />
            Let&apos;s build<br />
            it together.
          </h2>
        </div>

        <div ref={gridRef} className="max-w-[var(--section-max)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <a 
                href="mailto:huzaifabusiness60@gmail.com" 
                className="text-xl lg:text-2xl font-display font-bold text-text hover:text-accent transition-colors uppercase tracking-tight"
                id="contact-email"
              >
                huzaifabusiness60@gmail.com
              </a>
              <p className="text-muted mt-5 text-[0.65rem] font-bold tracking-[0.2em] uppercase">
                Karachi, Pakistan
              </p>
            </div>
            
            <nav className="flex items-center gap-6" aria-label="Social media links">
              {SOCIALS.map(({ label, href, id }) => (
                <a 
                  key={id} 
                  id={id} 
                  href={href} 
                  className="text-muted hover:text-text text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex justify-start lg:justify-end">
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-4 bg-text text-bg px-10 py-5 rounded-full text-[0.7rem] font-bold tracking-[0.1em] uppercase hover:scale-105 active:scale-95 transition-all shadow-xl"
              id="contact-cta-btn"
            >
              Send me a message 
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
