'use client';

import React, { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="relative overflow-hidden bg-white min-h-[88vh] flex flex-col justify-center">
      {/* ── Left smoky emerald mist blob ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-20 w-[650px] h-[650px] translate-y-1/4 opacity-75 blur-[100px] z-0"
        style={{
          background: "radial-gradient(circle, rgba(5, 150, 105, 0.35) 0%, rgba(16, 185, 129, 0.12) 50%, transparent 75%)"
        }}
      />

      {/* ── Right smoky emerald mist blob ── */}
      <div
        className="pointer-events-none absolute bottom-0 right-20 w-[650px] h-[650px] translate-y-1/4 opacity-70 blur-[100px] z-0"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(16, 185, 129, 0.12) 50%, transparent 75%)"
        }}
      />

      {/* ── Middle bottom glow ── */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-[500px] z-0 opacity-40 blur-[90px]"
        style={{
          background: "radial-gradient(100% 70% at 50% 100%, rgba(16, 185, 129, 0.20) 0%, transparent 80%)"
        }}
      />

      <SectionWrapper className="relative z-10 pt-32 pb-40 md:pt-40 md:pb-52" id="home">
        <div ref={ref} className="relative">
          <div className="flex flex-col items-center text-center max-w-[900px] mx-auto space-y-7">

            {/* ── Centered Avatar ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
              className="relative w-[150px] h-[150px] rounded-[113.6px] bg-[#10B981]/10 overflow-hidden flex justify-center items-end"
            >
              <Image
                src="/Adobe Express - file (1).png"
                alt="Huzaifa — Full Stack Developer"
                width={200}
                height={200}
                quality={100}
                className="w-full h-auto object-contain object-bottom scale-110"
                style={{
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
                }}
                priority
              />
            </motion.div>

            {/* ── Headline ── */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="font-host-grotesk font-medium text-zinc-950 leading-[1.2] tracking-[-0.03em] text-[28px] sm:text-[40px] md:text-[54px]"
            >
              Designing Digital Products <br className="hidden sm:inline" />
              that Feel <span className="font-instrument italic font-normal text-zinc-900">intuitive</span>, Look <span className="font-instrument italic font-normal text-zinc-900">Exceptional</span>, <br className="hidden sm:inline" />
              and Create <span className="font-instrument italic font-normal text-zinc-900">Real Impact</span>.
            </motion.h1>

            {/* ── Sub Copy ── */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
              className="text-[#7D838F] font-host-grotesk font-normal leading-[1.3] tracking-[0%] text-center max-w-[800px] text-[17px] sm:text-[20px] md:text-[24px]"
            >
              I&apos;m a Full Stack Developer &amp; Product Engineer building high-performance web applications, scalable backends, and intuitive user experiences with Next.js, TypeScript &amp; Cloud Systems.
            </motion.p>

            {/* ── CTA Buttons ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[24px] pt-2 w-full justify-center"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-[10px] w-full sm:w-auto h-[54px] py-[16px] px-[24px] bg-[#10B981] text-white text-[15px] font-medium rounded-[40px] hover:bg-[#059669] transition-all duration-300 group cursor-pointer"
              >
                Explore Work
                <FiArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>

              <a
                href="/Muhammad_Huzaifa_FullStack_Resume.pdf"
                download="Muhammad_Huzaifa_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-[10px] w-full sm:w-[228px] h-[54px] py-[16px] px-[24px] bg-white border border-zinc-200 text-zinc-900 text-[15px] font-medium rounded-[40px] hover:bg-zinc-50 transition-all duration-300 group cursor-pointer"
              >
                Download Resume
                <FiDownload size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
            </motion.div>

          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
