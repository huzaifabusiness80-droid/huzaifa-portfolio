'use client';

import React from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaGoogle,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaLinkedinIn size={24} />, href: "https://www.linkedin.com/", label: "LinkedIn" },
  { icon: <FaGithub size={24} />, href: "https://github.com/", label: "GitHub" },
  { icon: <FaTwitter size={24} />, href: "https://twitter.com/", label: "Twitter" },
  { icon: <FaWhatsapp size={24} />, href: "https://wa.me/", label: "WhatsApp" },
  { icon: <FaGoogle size={24} />, href: "mailto:huzaifabusiness80@gmail.com", label: "Email" },
  { icon: <FaInstagram size={24} />, href: "https://instagram.com/", label: "Instagram" },
  { icon: <FaFacebookF size={24} />, href: "https://facebook.com/", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-[#031811] text-white pt-16 pb-10 px-6 md:px-12 font-host-grotesk border-t border-emerald-950">
      <div className="max-w-[1300px] mx-auto">

        {/* ── Top Grid Section ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

          {/* Column 1: Brand & Social Circles (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center">
              <span className="font-host-grotesk font-medium text-[26px] text-white tracking-tight">
                Huzaifa<span className="text-[#10B981]">.</span>
              </span>
            </Link>

            {/* 7 Circle Social Icons */}
            <div className="flex items-center gap-[4px] flex-wrap pt-2">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-[48px] h-[48px] p-[4px] rounded-[36px] border-[0.5px] border-white/20 hover:border-[#10B981] flex items-center justify-center text-white/90 hover:text-white hover:bg-emerald-500/20 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <p className="font-host-grotesk font-normal text-[16px] leading-[1.4] tracking-[0%] text-white">
                Have a question or opportunity? Reach out below
              </p>
              <a
                href="mailto:huzaifabusiness80@gmail.com"
                className="block font-host-grotesk font-medium text-[22px] md:text-[24px] text-[#10B981] hover:text-[#34D399] transition-colors duration-200 mt-1"
              >
                huzaifabusiness80@gmail.com
              </a>
            </div>

            <div>
              <p className="font-host-grotesk font-normal text-[16px] leading-[1.4] tracking-[0%] text-white">
                Direct Contact
              </p>
              <a
                href="mailto:huzaifabusiness80@gmail.com"
                className="block font-host-grotesk font-medium text-[22px] md:text-[24px] text-[#10B981] hover:text-[#34D399] transition-colors duration-200 mt-1"
              >
                Let&apos;s Build Together
              </a>
            </div>
          </div>

          {/* Column 3: Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-host-grotesk font-medium text-[20px] text-white">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/Muhammad_Huzaifa_FullStack_Resume.pdf"
                  download="Muhammad_Huzaifa_FullStack_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-host-grotesk font-normal text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="font-host-grotesk font-normal text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-host-grotesk font-normal text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Tech Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-host-grotesk font-medium text-[20px] text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="font-host-grotesk font-normal text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="font-host-grotesk font-normal text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="font-host-grotesk font-normal text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-cta"
                  className="font-host-grotesk font-normal text-[15px] text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Divider Line ── */}
        <div className="border-t border-emerald-950/80 w-full my-6" />

        {/* ── Bottom Bar: Copyright & Legal ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 font-host-grotesk text-[14px] text-zinc-400 text-center sm:text-left">
          <p>Copyright 2026. Huzaifa All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
