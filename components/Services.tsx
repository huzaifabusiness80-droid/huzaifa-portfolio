'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    num: '01',
    nameHtml: 'AI <em>Solutions</em>',
    desc: 'Bringing the power of Artificial Intelligence to your business. I integrate advanced LLMs, custom chatbots, and automated AI workflows to make your applications smarter and more efficient.',
    cta: 'Get AI ready',
    id: 'service-ai',
  },
  {
    num: '02',
    nameHtml: 'SaaS (Software as a <em>Service</em>)',
    desc: 'End-to-end development of Software as a Service platforms. From multi-tenant architecture and secure authentication to automated billing systems and scalable cloud infrastructure.',
    cta: 'Start a project',
    id: 'service-saas',
  },
  {
    num: '03',
    nameHtml: 'Web <em>Development</em>',
    desc: 'Bespoke web applications built with modern frameworks like React and Next.js. I focus on high performance, SEO optimization, and exceptional user experiences that drive real-world business results.',
    cta: 'Discuss project',
    id: 'service-web-development',
  },
  {
    num: '04',
    nameHtml: 'Mobile App <em>Development</em>',
    desc: 'Cross-platform mobile applications that feel native. Leveraging technologies like React Native and Flutter to deliver smooth, reliable, and engaging apps for both iOS and Android platforms.',
    cta: 'Explore more',
    id: 'service-mobile-app-dev',
  },
  {
    num: '05',
    nameHtml: 'E-commerce <em>Development</em>',
    desc: 'Building robust, secure, and user-friendly online storefronts. From complex product catalogs and inventory management to secure payment gateway integrations that convert visitors into customers.',
    cta: 'Open shop',
    id: 'service-ecommerce',
  },
  {
    num: '06',
    nameHtml: 'API <em>Integration</em>',
    desc: 'Connecting your platform with powerful third-party services. I build custom API wrappers, handle complex webhooks, and ensure seamless data flow between all your digital tools.',
    cta: 'Connect now',
    id: 'service-api',
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
