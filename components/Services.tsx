'use client';

import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const FullStackIcon = () => (
  <svg className="w-[58px] h-[58px] text-[#059669]" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="6" width="20" height="20" stroke="currentColor" strokeWidth="1.5" />
    <rect x="14" y="14" width="20" height="20" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="1.5" fill="currentColor" />
  </svg>
);

const SaaSDevelopmentIcon = () => (
  <svg className="w-[58px] h-[58px] text-[#059669]" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="26" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" fill="white" />
  </svg>
);

const FrontendUiIcon = () => (
  <svg className="w-[58px] h-[58px] text-[#059669]" viewBox="0 0 40 40" fill="none">
    <path d="M10 28L20 8L30 28H10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 32C14 30 26 30 34 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="30" cy="26" r="1.75" fill="currentColor" />
  </svg>
);

const BackendApiIcon = () => (
  <svg className="w-[58px] h-[58px] text-[#059669]" viewBox="0 0 40 40" fill="none">
    <path d="M20 8L32 20L20 32L8 20L20 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="20" cy="14" r="1.5" fill="currentColor" />
  </svg>
);

const AiIntegrationIcon = () => (
  <svg className="w-[58px] h-[58px] text-[#059669]" viewBox="0 0 40 40" fill="none">
    <circle cx="16" cy="20" r="11" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="20" r="11" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const CloudPerformanceIcon = () => (
  <svg className="w-[58px] h-[58px] text-[#059669]" viewBox="0 0 40 40" fill="none">
    <path d="M20 6L32 13V27L20 34L8 27V13L20 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="8" y1="27" x2="32" y2="13" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

const servicesList = [
  {
    icon: FullStackIcon,
    title: "Full-Stack Web Apps",
    description: "End-to-end web application development with modern Next.js, React, Node.js, and TypeScript architectures.",
  },
  {
    icon: SaaSDevelopmentIcon,
    title: "SaaS Platform Engineering",
    description: "Custom multi-tenant SaaS platforms, payment gateway integrations, authentication, and subscription management.",
  },
  {
    icon: FrontendUiIcon,
    title: "High-Performance Frontend",
    description: "Pixel-perfect, ultra-fast web interfaces with responsive layouts, micro-animations, and full accessibility.",
  },
  {
    icon: BackendApiIcon,
    title: "Backend & API Systems",
    description: "Scalable REST & GraphQL APIs, microservices, database schema design, and serverless background workers.",
  },
  {
    icon: AiIntegrationIcon,
    title: "AI & Automation Solutions",
    description: "Integrating LLM workflows, automated data processing pipelines, and AI features into web applications.",
  },
  {
    icon: CloudPerformanceIcon,
    title: "Cloud Deployment & DevOps",
    description: "CI/CD automation, cloud hosting setups (Vercel, AWS, Docker), performance optimization, and SEO.",
  },
];

export default function Services() {
  return (
    <SectionWrapper className="py-20 md:py-28" id="services">
      <section className="space-y-7 font-host-grotesk">

        {/* ── Section Tag ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="font-host-grotesk font-normal text-[18px] leading-[1.4] tracking-[0%] text-[#10B981] inline-block">
            ( What I Do )
          </span>
        </motion.div>

        {/* ── Main Container ── */}
        <div className="flex flex-col lg:flex-row gap-[60px] items-start justify-between w-full max-w-[1300px]">

          {/* Left Column (Sticky Heading & Description) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="w-full lg:w-[480px] lg:sticky lg:top-[120px] space-y-6"
          >
            <h2 className="font-host-grotesk text-[#031811] font-normal text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] tracking-[-0.03em]">
              End-to-end <br />
              <span className="font-instrument italic font-normal text-[#031811]">product engineering</span>
            </h2>

            <p className="font-host-grotesk font-normal text-[#7D838F] !text-[18px] sm:!text-[22px] md:!text-[24px] leading-[1.3] tracking-[0%]">
              Whether you&apos;re launching a new digital product or scaling an existing web app, I engineer solutions that are fast, scalable, and intuitive.
            </p>

            <div className="pt-4">
              <Link
                href="#contact-cta"
                className="px-7 py-3.5 bg-[#10B981] hover:bg-[#059669] text-white font-host-grotesk font-medium text-[16px] rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                Let&apos;s Talk
                <FiArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column (Services Grid) */}
          <div className="w-full lg:w-[746px] min-h-0 lg:min-h-[851px] flex flex-col justify-between gap-y-[32px] sm:gap-y-[48px]">

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] gap-y-[32px] sm:gap-y-[48px] border-b border-zinc-100 pb-8 sm:pb-12">
              {servicesList.slice(0, 2).map((srv, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 * idx }}
                  className="w-full sm:w-[349px] h-auto min-h-[190px] sm:h-[219px] flex flex-col justify-start"
                >
                  <srv.icon />
                  <h3 className="font-host-grotesk font-medium !text-[22px] sm:!text-[24px] leading-[1.0] tracking-[-0.02em] text-[#031811] mt-5 sm:mt-7 mb-3 sm:mb-5">
                    {srv.title}
                  </h3>
                  <p className="font-host-grotesk font-normal text-[#7D838F] !text-[16px] sm:!text-[18px] leading-[1.4] tracking-[0%]">
                    {srv.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] gap-y-[32px] sm:gap-y-[48px] border-b border-zinc-100 pb-8 sm:pb-12">
              {servicesList.slice(2, 4).map((srv, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 * idx }}
                  className="w-full sm:w-[349px] h-auto min-h-[190px] sm:h-[219px] flex flex-col justify-start"
                >
                  <srv.icon />
                  <h3 className="font-host-grotesk font-medium !text-[22px] sm:!text-[24px] leading-[1.0] tracking-[-0.02em] text-[#031811] mt-5 sm:mt-7 mb-3 sm:mb-5">
                    {srv.title}
                  </h3>
                  <p className="font-host-grotesk font-normal text-[#7D838F] !text-[16px] sm:!text-[18px] leading-[1.4] tracking-[0%]">
                    {srv.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] gap-y-[32px] sm:gap-y-[48px]">
              {servicesList.slice(4, 6).map((srv, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 * idx }}
                  className="w-full sm:w-[349px] h-auto min-h-[190px] sm:h-[219px] flex flex-col justify-start"
                >
                  <srv.icon />
                  <h3 className="font-host-grotesk font-medium !text-[22px] sm:!text-[24px] leading-[1.0] tracking-[-0.02em] text-[#031811] mt-5 sm:mt-7 mb-3 sm:mb-5">
                    {srv.title}
                  </h3>
                  <p className="font-host-grotesk font-normal text-[#7D838F] !text-[16px] sm:!text-[18px] leading-[1.4] tracking-[0%]">
                    {srv.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </section>
    </SectionWrapper>
  );
}
