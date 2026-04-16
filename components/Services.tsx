'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    num: '01',
    nameHtml: 'Front<em>end</em>',
    desc: 'Pixel-perfect, responsive UIs built with React, Next.js, and TypeScript. Smooth animations, clean components, and performance-first architecture that users love.',
    cta: 'Discuss project',
    id: 'service-frontend',
  },
  {
    num: '02',
    nameHtml: 'Back<em>end</em>',
    desc: 'Scalable APIs, server logic, and database design with Node.js, Express, PostgreSQL, and MongoDB. Built for performance, security, and long-term reliability.',
    cta: 'Learn more',
    id: 'service-backend',
  },
  {
    num: '03',
    nameHtml: 'Full <em>Stack</em>',
    desc: 'End-to-end product development from database schema to polished UI. I own the entire technical stack so every layer works together seamlessly.',
    cta: 'Start a project',
    id: 'service-fullstack',
  },
];

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ServiceRow({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(48px)';
    el.style.transition = `opacity 0.8s ease ${index * 0.12}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="service-row">
      <div className="service-num">{service.num}</div>
      <h3
        className="service-name"
        dangerouslySetInnerHTML={{ __html: service.nameHtml }}
      />
      <p className="service-desc">{service.desc}</p>
      <a href="#contact" className="service-pill" id={service.id}>
        {service.cta} <ArrowIcon />
      </a>
    </div>
  );
}

function SectionTitle() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(36px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.85s cubic-bezier(0.16,1,0.3,1)';

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
  }, []);

  return (
    <div ref={ref}>
      <p className="services-eyebrow">Services</p>
      <p className="services-tagline">
        Building <em>end-to-end</em><br />
        digital products<br />
        that actually work.
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services">
      <SectionTitle />
      {SERVICES.map((s, i) => (
        <ServiceRow key={s.id} service={s} index={i} />
      ))}
    </section>
  );
}
