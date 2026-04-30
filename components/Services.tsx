'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    name: 'AI Solutions',
    desc: 'Integrating practical AI features like chat assistants, workflow automation, and smart data handling for optimized business operations.',
    cta: 'Get AI Ready',
    id: 'service-ai',
  },
  {
    name: 'SaaS Platforms',
    desc: 'Building complete, scalable software solutions with secure authentication, billing flows, and robust backend architectures.',
    cta: 'Start Scaling',
    id: 'service-saas',
  },
  {
    name: 'High-End Web Dev',
    desc: 'Creating modern, high-performance websites with clean structure and SEO-focused foundations to drive online growth.',
    cta: 'Discuss Project',
    id: 'service-web-development',
  },
  {
    name: 'Mobile Experience',
    desc: 'Delivering cross-platform mobile applications with smooth UI, stable performance, and native-like user experiences.',
    cta: 'Explore Apps',
    id: 'service-mobile-app-dev',
  },
  {
    name: 'E-commerce Systems',
    desc: 'Conversion-focused online stores with optimized product flows, secure payments, and intuitive management tools.',
    cta: 'Open Shop',
    id: 'service-ecommerce',
  },
  {
    name: 'API Engineering',
    desc: 'Connecting products with third-party ecosystems through clean API integrations and stable data synchronization.',
    cta: 'Connect API',
    id: 'service-api',
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ServiceItem({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`;

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
  }, [index]);

  return (
    <div ref={ref} className="service-item-new">
      <div className="service-item-content">
        <h3 className="service-item-title">{service.name}</h3>
        <p className="service-item-desc">{service.desc}</p>
      </div>
      <a href="#contact" className="service-item-link" id={service.id}>
        <span>{service.cta}</span>
        <div className="service-link-icon">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <span className="section-eyebrow">Services</span>
        <h2 className="services-title-new">
          Delivering <span>digital excellence</span><br />
          through specialized solutions.
        </h2>
      </div>

      <div className="services-list">
        {SERVICES.map((s, i) => (
          <ServiceItem key={s.id} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}

