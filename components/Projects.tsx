'use client';

import React from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const caseStudyProjects = [
  {
    title: "Platteros",
    subtitle: "AI Restaurant Management SaaS",
    subtitleColor: "text-[#10B981]",
    bgColor: "bg-[#F0FDF4]",
    btnColor: "bg-[#10B981] hover:bg-[#059669]",
    description: "An AI-powered SaaS platform for restaurant management, automated sales tracking, table bookings, and real-time operational analytics.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
    link: "https://www.platteros.com/",
  },
  {
    title: "CareerHelpp",
    subtitle: "Enterprise Student Management Portal",
    subtitleColor: "text-[#0EA5E9]",
    bgColor: "bg-[#F5FBFE]",
    btnColor: "bg-[#0EA5E9] hover:bg-[#0284C7]",
    description: "Full-stack enterprise student management portal for application tracking, university placements, and automated timeline workflows.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    link: "https://careerhelpp.com/",
  },
  {
    title: "Business Management System",
    subtitle: "Enterprise ERP & Resource Planning",
    subtitleColor: "text-[#8B5CF6]",
    bgColor: "bg-[#F7F5FE]",
    btnColor: "bg-[#8B5CF6] hover:bg-[#7C3AED]",
    description: "Comprehensive ERP & business management system for tracking inventory, financial analytics, employee workflows, and client invoicing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    link: "#",
  },
  {
    title: "Ahmad Tours",
    subtitle: "International Tourism & Booking Engine",
    subtitleColor: "text-[#F59E0B]",
    bgColor: "bg-[#FFFDF7]",
    btnColor: "bg-[#F59E0B] hover:bg-[#D97706]",
    description: "Modern travel booking platform for customized tour packages, flight reservations, hotel bookings, and automated travel itineraries.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85",
    link: "https://ahmadtours.com/",
  },
  {
    title: "Punjab Intl Travels",
    subtitle: "Global Visa & Flight Booking Platform",
    subtitleColor: "text-[#059669]",
    bgColor: "bg-[#ECFDF5]",
    btnColor: "bg-[#059669] hover:bg-[#047857]",
    description: "Full-service travel agency portal featuring real-time flight search, visa processing assistance, and group tour booking workflows.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    link: "https://punjabintltravels.com/",
  },
  {
    title: "Prime Path Travels",
    subtitle: "Luxury Travel & Corporate Mobility",
    subtitleColor: "text-[#EC4899]",
    bgColor: "bg-[#FDF2F8]",
    btnColor: "bg-[#EC4899] hover:bg-[#DB2777]",
    description: "Premium corporate mobility and luxury travel management platform providing personalized itineraries, VIP bookings, and 24/7 customer support.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    link: "https://primepathtravels.com/",
  },
];

export default function Projects() {
  return (
    <SectionWrapper className="py-20 md:py-28" id="work">
      <section className="space-y-16 font-host-grotesk">

        {/* ── Section Header (Centered) ── */}
        <div className="text-center space-y-7 max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="font-host-grotesk font-normal text-[18px] leading-[1.4] tracking-[0%] text-[#10B981] inline-block">
              ( Works )
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="font-host-grotesk text-[#031811] font-normal text-[32px] sm:text-[42px] md:text-[44px] leading-[1.2] tracking-[-0.03em]"
          >
            Selected <span className="font-instrument italic font-normal text-[#031811]">case studies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
            className="font-host-grotesk font-normal text-[#7D838F] !text-[18px] sm:!text-[22px] md:!text-[24px] leading-[1.3] tracking-[0%] max-w-[620px] mx-auto"
          >
            A curated showcase of 6 full stack products, enterprise systems, SaaS platforms, and digital booking applications.
          </motion.p>
        </div>

        {/* ── 6 Clean Shadowless Sticky Stacking Case Study Cards ── */}
        <div className="relative space-y-[40px] w-full max-w-[1300px] mx-auto pb-12">
          {caseStudyProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                top: `${100 + idx * 20}px`,
                zIndex: idx + 10,
              }}
              className={`sticky rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-[48px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 h-auto lg:h-[550px] w-full max-w-[1300px] transition-all duration-300 overflow-hidden shadow-none ${project.bgColor}`}
            >
              {/* Left Column: Project Text Box */}
              <div className="w-full lg:w-[544px] flex flex-col justify-between h-full py-2">
                <div className="space-y-[18px]">
                  <div>
                    <h3 className="font-host-grotesk font-medium text-[26px] sm:text-[32px] md:text-[30px] text-zinc-950 leading-[1.1] tracking-[-0.02em]">
                      {project.title}
                    </h3>
                    <p className={`font-host-grotesk font-normal text-[17px] sm:text-[20px] leading-[1.3] tracking-[0%] mt-1.5 ${project.subtitleColor}`}>
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="font-host-grotesk font-normal text-[#7D838F] !text-[16px] sm:!text-[19px] leading-[1.4] tracking-[0%] max-w-[544px] pt-2">
                    {project.description}
                  </p>
                </div>

                {/* Read Case Study Button with Matching Card Theme Color */}
                <div className="pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-[216px] h-[54px] px-[24px] py-[16px] gap-[10px] ${project.btnColor} text-white font-host-grotesk font-medium text-[16px] rounded-[40px] inline-flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-[1.02]`}
                  >
                    Read Case Study
                    <FiArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Right Column: High Quality Image Showcase */}
              <div className="w-full lg:w-[620px] h-[240px] sm:h-[350px] lg:h-[460px] relative flex justify-end items-center overflow-hidden rounded-[20px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={620}
                  height={460}
                  quality={95}
                  unoptimized
                  className="w-full h-full object-cover object-center hover:scale-[1.04] transition-transform duration-700 rounded-[20px]"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </SectionWrapper>
  );
}
