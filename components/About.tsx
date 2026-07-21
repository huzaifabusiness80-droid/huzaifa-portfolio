'use client';

import { useEffect, useRef } from 'react';

// Strategy SVG Icons (Prominent, High-Impact Size)
const LightningIcon = () => (
  <svg className="w-12 h-12 text-[#6366f1]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-12 h-12 text-[#6366f1]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const LayoutIcon = () => (
  <svg className="w-12 h-12 text-[#6366f1]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.006 1.62l3.387-1.62m-3.387 1.62v3.75m1.5-12.75l-4.125 4.125a.75.75 0 000 1.06l1.06 1.06a.75.75 0 001.06 0l4.125-4.125a.75.75 0 000-1.06l-1.06-1.06a.75.75 0 00-1.06 0z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-12 h-12 text-[#6366f1]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);

// Professional Tech Stack Brand Icons
const NextjsIcon = () => (
  <svg className="w-5 h-5 text-[#09090b]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.83 17.53L10.5 8.1v9.26H8.7V6.64h1.85l7.33 9.43v-9.43h1.8v10.89h-1.85z" />
  </svg>
);

const ReactIcon = () => (
  <svg className="w-5 h-5 text-[#00d8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="9" ry="3.5" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const TypescriptIcon = () => (
  <svg className="w-5 h-5 text-[#3178c6]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.398 10.377h5.127v1.89h-3.136v9.42h-2.072v-9.42h-.002v-1.89h.083zm-6.196 1.89c-.643-.53-1.52-.823-2.483-.823-1.63 0-2.61.85-2.61 2.053 0 1.168.804 1.765 2.27 2.296l.66.24c1.196.432 1.638.823 1.638 1.572 0 .862-.756 1.48-1.928 1.48-1.22 0-2.185-.56-2.73-1.442l-1.59 1.13c.874 1.42 2.47 2.19 4.32 2.19 2.42 0 3.978-1.272 3.978-3.328 0-1.42-.85-2.22-2.464-2.812l-.65-.24c-1.077-.393-1.472-.73-1.472-1.378 0-.643.57-1.17 1.47-1.17.886 0 1.554.343 2.03.95l1.372-1.178z" />
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-5 h-5 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const NodeIcon = () => (
  <svg className="w-5 h-5 text-[#5fa04e]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L1.75 5.92v11.84L12 23.68l10.25-5.92V5.92L12 0zm0 2.5l7.5 4.33v8.67L12 19.83l-7.5-4.33V6.83L12 2.5z" />
  </svg>
);

const PostgresIcon = () => (
  <svg className="w-5 h-5 text-[#4169e1]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.82.61-3.5 1.64-4.83L12 17.5l6.36-10.33C19.39 8.5 20 10.18 20 12c0 4.41-3.59 8-8 8z" />
  </svg>
);

const MongoIcon = () => (
  <svg className="w-5 h-5 text-[#47a248]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 3c2.4 0 4.5 2.1 4.5 4.5S14.4 12 12 12s-4.5-2.1-4.5-4.5S9.6 3 12 3zm0 18c-4.41 0-8-3.59-8-8 0-1.5.4-2.9 1.1-4.1L12 18l6.9-9.1c.7 1.2 1.1 2.6 1.1 4.1 0 4.41-3.59 8-8 8z" />
  </svg>
);

const DockerIcon = () => (
  <svg className="w-5 h-5 text-[#2496ed]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 5.43h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185zm-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.074a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.716h2.119a.186.186 0 00.185-.185V6.29a.186.186 0 00-.185-.186H8.074a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954 2.716h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.716h2.119a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.186H5.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.955 2.716h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.165a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185z" />
  </svg>
);

const AwsIcon = () => (
  <svg className="w-5 h-5 text-[#ff9900]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
  </svg>
);

const StripeIcon = () => (
  <svg className="w-5 h-5 text-[#635bff]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C17.766.726 15.096 0 12.085 0 6.643 0 2.87 2.844 2.87 7.5c0 6.27 8.358 6.545 8.358 9.9 0 1.05-.886 1.48-2.186 1.48-2.613 0-5.592-1.144-7.464-2.175L.68 22.2C2.64 23.36 5.92 24 9.1 24c5.78 0 9.77-2.73 9.77-7.65 0-6.66-8.894-6.96-8.894-10.2z" />
  </svg>
);

const FigmaIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83" />
    <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF" />
    <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E" />
    <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262" />
    <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE" />
  </svg>
);

const GitIcon = () => (
  <svg className="w-5 h-5 text-[#f05032]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.378-.063 1.884.444.516.515.665 1.259.438 1.909l2.657 2.657c.65-.227 1.394-.078 1.909.437.703.704.703 1.844 0 2.548-.705.705-1.844.705-2.549 0-.541-.541-.68-1.332-.416-2.006l-2.476-2.476v6.62c.19.106.365.249.516.402.704.704.704 1.844 0 2.548-.705.705-1.844.705-2.549 0-.704-.704-.704-1.844 0-2.548.2-.2.435-.337.683-.418V9.117c-.248-.08-.483-.218-.683-.418-.543-.542-.68-1.336-.412-2.01L7.153 3.999.452 10.7c-.603.604-.603 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.186 0l10.428-10.428c.604-.603.604-1.581 0-2.187z" />
  </svg>
);

const AiIcon = () => (
  <svg className="w-5 h-5 text-[#6366f1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

const STEPS = [
  {
    id: 1,
    title: 'Performance First Engineering',
    desc: 'I build web applications optimized for sub-100ms response times, 60fps interaction smoothness, and zero layout shifts for an extraordinary user experience.',
    icon: <LightningIcon />,
    colSpan: 'lg:col-span-7', // Wider Card
  },
  {
    id: 2,
    title: 'Scalable Architecture',
    desc: 'Writing modular TypeScript code with strict type safety, clean API layers, and maintainable state design for enterprise scale.',
    icon: <CodeIcon />,
    colSpan: 'lg:col-span-5', // Smaller Card
  },
  {
    id: 3,
    title: 'Pixel-Perfect UI/UX Systems',
    desc: 'Designing fluid user flows, cohesive color tokens, micro-animations, and seamless responsive behaviors across all devices.',
    icon: <LayoutIcon />,
    colSpan: 'lg:col-span-6', // Equal Card
  },
  {
    id: 4,
    title: 'SEO & Web Vitals Standards',
    desc: 'Baking semantic markup, open-graph metadata, accessibility compliance, and Core Web Vitals optimization directly into production builds.',
    icon: <ShieldCheckIcon />,
    colSpan: 'lg:col-span-6', // Equal Card
  },
];

const TECH_CATEGORIES = [
  {
    title: 'Frontend & UI Engineering',
    desc: 'Building responsive, ultra-fast user interfaces',
    skills: [
      { name: 'Next.js 15', icon: <NextjsIcon />, tag: 'App Router' },
      { name: 'React 19', icon: <ReactIcon />, tag: 'UI Library' },
      { name: 'TypeScript', icon: <TypescriptIcon />, tag: 'Type Safe' },
      { name: 'Tailwind CSS', icon: <TailwindIcon />, tag: 'Styling' },
      { name: 'Shadcn UI', icon: <AiIcon />, tag: 'Components' },
      { name: 'Framer Motion', icon: <LightningIcon />, tag: 'Animations' },
    ],
  },
  {
    title: 'Backend & Cloud Systems',
    desc: 'Scalable APIs, databases & cloud hosting',
    skills: [
      { name: 'Node.js & Express', icon: <NodeIcon />, tag: 'Server' },
      { name: 'PostgreSQL', icon: <PostgresIcon />, tag: 'Relational DB' },
      { name: 'MongoDB', icon: <MongoIcon />, tag: 'NoSQL' },
      { name: 'Prisma ORM', icon: <CodeIcon />, tag: 'Data Layer' },
      { name: 'Docker', icon: <DockerIcon />, tag: 'Containers' },
      { name: 'AWS & Vercel', icon: <AwsIcon />, tag: 'Cloud Host' },
    ],
  },
  {
    title: 'Integrations & Workflow',
    desc: 'AI capabilities, payments & version control',
    skills: [
      { name: 'AI Integrations', icon: <AiIcon />, tag: 'LLMs & RAG' },
      { name: 'REST & GraphQL', icon: <CodeIcon />, tag: 'API Specs' },
      { name: 'Stripe Payments', icon: <StripeIcon />, tag: 'Checkout' },
      { name: 'Figma to Code', icon: <FigmaIcon />, tag: 'UI Design' },
      { name: 'Git & GitHub', icon: <GitIcon />, tag: 'VCS & CI/CD' },
      { name: 'Zod Validation', icon: <ShieldCheckIcon />, tag: 'Schema' },
    ],
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
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
    <section
      id="strategy"
      ref={ref}
      className="bg-[#edf1f7] text-[#09090b] relative z-10 py-16 sm:py-24 lg:py-32 px-6 sm:px-10 font-sans overflow-hidden"
    >
      {/* Soft Purple Ambient Radial Glow Spotlights on Left & Right */}
      <div className="pointer-events-none absolute top-0 -left-48 w-[700px] h-[700px] bg-purple-400/25 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute top-0 -right-48 w-[700px] h-[700px] bg-purple-400/25 blur-[150px] rounded-full" />

      <div className="mx-auto max-w-[1340px] flex flex-col gap-14 lg:gap-20 relative z-10">

        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-[#6366f1]">
            <svg className="w-5 h-5 fill-current text-[#6366f1]" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <span className="text-[#09090b] text-base sm:text-lg font-extrabold">Strategic Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-semibold text-[#09090b] leading-[1.15] tracking-tight max-w-[28ch]">
            How I Engineer <span className="font-serif italic font-normal text-[#6366f1]">Scalable Digital Products</span>
          </h2>
        </div>

        {/* Asymmetric Bento Cards Grid (Clean Refined Corners rounded-2xl & Prominent Icons) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className={`${step.colSpan} bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xs hover:shadow-md hover:border-[#6366f1]/50 transition-all duration-300 flex flex-col justify-between gap-8 min-h-[310px] group relative overflow-hidden`}
            >
              {/* Prominent Large SVG Icon (No Container Background) */}
              <div className="group-hover:scale-105 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Title & Larger Readable Description */}
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#09090b] tracking-tight leading-tight">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg font-medium text-[#475569] leading-relaxed max-w-[48ch]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Matrix Section (Neat, Clean, Professional Portfolio Design - Zero Emojis) */}
        <div className="flex flex-col gap-8 pt-4">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-[#6366f1]">
              <svg className="w-5 h-5 fill-current text-[#6366f1]" viewBox="0 0 24 24">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="text-[#09090b] text-base sm:text-lg font-extrabold">Technical Stack</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-[#09090b] leading-[1.15] tracking-tight">
              Technologies & <span className="font-serif italic font-normal text-[#6366f1]">Tools I Master</span>
            </h3>
          </div>

          {/* 3 Columns Tech Stack Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {TECH_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-7 sm:p-9 shadow-xs hover:shadow-md hover:border-[#6366f1]/40 transition-all flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-1.5 pb-4 border-b border-slate-100">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#09090b]">
                    {cat.title}
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-[#475569]">
                    {cat.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-[#f8fafc] border border-slate-200/80 rounded-xl p-3.5 flex items-center justify-between hover:bg-white hover:border-[#6366f1]/40 hover:scale-[1.01] transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/70 flex items-center justify-center shadow-xs">
                          {skill.icon}
                        </div>
                        <span className="text-base font-bold text-[#09090b]">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#6366f1] bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
