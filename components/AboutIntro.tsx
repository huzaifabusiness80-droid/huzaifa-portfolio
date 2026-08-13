'use client';

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const experienceCards = [
  {
    role: "Full Stack Developer",
    company: "Oriole Lume",
    dates: "May 2025 • Present",
    badge: "Current Role",
  },
  {
    role: "Full Stack Developer",
    company: "3PL Dynamics",
    dates: "May 2024 • April 2025",
    badge: "Full-Time",
  },
  {
    role: "MERN Stack Developer",
    company: "Tech Ludis",
    dates: "May 2024 • Nov 2024",
    badge: "Internship",
  },
];

export default function AboutIntro() {
  return (
    <div className="bg-[#F3FBF7] w-full" id="about">
      <SectionWrapper className="py-20 md:py-28">
        <section className="space-y-7 font-host-grotesk">

          {/* ── Tag ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="font-host-grotesk font-normal text-[18px] leading-[1.4] tracking-[0%] text-[#10B981] inline-block">
              ( About Me )
            </span>
          </motion.div>

          {/* ── Top Row: Left Heading + Right Copy ── */}
          <div className="flex flex-col lg:flex-row gap-[60px] items-start justify-between min-h-[372px] w-full max-w-[1300px]">

            {/* Left Column (Heading) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
              className="w-full lg:w-[500px]"
            >
              <h2 className="font-host-grotesk text-zinc-950 font-normal text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] tracking-[-0.03em]">
                A Full Stack Developer creating <span className="font-instrument italic font-normal text-zinc-900">meaningful</span> digital products.
              </h2>
            </motion.div>

            {/* Right Column (Description) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-[740px]"
            >
              <p className="font-host-grotesk font-normal text-[#7D838F] !text-[18px] sm:!text-[22px] md:!text-[24px] leading-[1.3] tracking-[0%]">
                Great applications are built by combining frontend elegance, robust backend infrastructure, and strategic product thinking.
                <br /><br />
                As a Full Stack Engineer, I specialize in transforming complex business challenges into seamless web experiences that perform under load. I collaborate closely with founders, designers, and engineering teams to build products that scale from initial architecture to final production deployment.
                <br /><br />
                My goal is to deliver clean code, accessible interfaces, and high-impact digital solutions that users love and teams are proud to maintain.
              </p>
            </motion.div>

          </div>

          {/* ── Bottom Achievement Bento Cards (Exactly 3 Experience Cards) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-10 sm:pt-14 w-full">
            {experienceCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 * idx }}
                className="bg-white rounded-[16px] p-[24px] sm:p-[32px] w-full h-auto min-h-[210px] sm:h-[228px] shadow-none transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#10B981]/10 text-[#059669] rounded-full">
                    {card.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-host-grotesk font-medium text-[20px] text-zinc-950">
                    {card.role}
                  </h3>
                  <p className="font-host-grotesk font-normal text-[16px] text-[#7D838F] mt-1">
                    {card.company}
                  </p>
                  <p className="font-host-grotesk font-normal text-[14px] text-[#9FA4B0] mt-2">
                    {card.dates}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </section>
      </SectionWrapper>
    </div>
  );
}
