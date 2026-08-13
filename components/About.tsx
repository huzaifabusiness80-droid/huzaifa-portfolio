'use client';

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <div className="bg-[#F3FBF7] w-full" id="experience">
      <SectionWrapper className="py-20 md:py-28">
        <section className="font-host-grotesk text-center space-y-7 max-w-[900px] mx-auto">

          {/* ── Tag ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="font-host-grotesk font-normal text-[18px] leading-[1.4] tracking-[0%] text-[#10B981] inline-block">
              ( Resume )
            </span>
          </motion.div>

          {/* ── Headline ── */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="font-host-grotesk text-[#031811] font-normal text-[26px] sm:text-[40px] md:text-[54px] leading-[1.2] tracking-[-0.03em] max-w-[700px] mx-auto"
          >
            Explore my <span className="font-instrument italic font-normal text-[#031811]">professional</span> background
          </motion.h2>

          {/* ── Description ── */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
            className="font-host-grotesk font-normal text-[#7D838F] !text-[18px] sm:!text-[22px] md:!text-[24px] leading-[1.3] tracking-[0%] max-w-[800px] mx-auto"
          >
            A quick overview of my full stack experience, core technologies, software engineering journey, and the production applications I&apos;ve shipped.
          </motion.p>

          {/* ── Action Button ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.3 }}
            className="pt-4 flex justify-center"
          >
            <a
              href="/Muhammad_Huzaifa_FullStack_Resume.pdf"
              download="Muhammad_Huzaifa_FullStack_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[228px] h-[54px] px-[24px] py-[16px] gap-[10px] bg-[#10B981] hover:bg-[#059669] text-white font-host-grotesk font-medium text-[16px] rounded-[40px] inline-flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02]"
            >
              Download Resume
              <FiDownload size={18} />
            </a>
          </motion.div>

        </section>
      </SectionWrapper>
    </div>
  );
}
