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
      <section id="contact">
        <div ref={headRef}>
          <p className="section-eyebrow" style={{ marginBottom: '24px' }}>04 — Contact</p>
        </div>

        <div ref={bigRef}>
          <h2 className="contact-big">
            Have an idea?<br />
            <em>Let&apos;s build</em><br />
            it together.
          </h2>
        </div>

        <div ref={gridRef} className="contact-grid">
          <div>
            <a href="mailto:huzaifabusiness60@gmail.com" className="contact-email" id="contact-email">
              huzaifabusiness60@gmail.com
            </a>
            <span className="contact-location">Karachi, Pakistan</span>
            <nav className="contact-socials" aria-label="Social media links">
              {SOCIALS.map(({ label, href, id }) => (
                <a key={id} id={id} href={href} className="social-link" target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            {/* Triggers the slide-up modal */}
            <button
              onClick={() => setModalOpen(true)}
              className="contact-cta-btn"
              id="contact-cta-btn"
            >
              Send me a message <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Full-screen slide-up form */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
