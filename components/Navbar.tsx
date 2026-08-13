"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const navItems = [
  { label: "About",     href: "#about"      },
  { label: "Services",  href: "#services"   },
  { label: "Work",      href: "#work"       },
  { label: "Resume",    href: "#experience" },
  { label: "Contact",   href: "#contact-cta"},
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 font-host-grotesk transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-4 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        {/* ── Brand / Logo ── */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-host-grotesk font-semibold text-[24px] text-zinc-950 tracking-tight">
            Huzaifa<span className="text-[#10B981]">.</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative group px-4 py-2 font-host-grotesk font-normal text-[16px] leading-[1.2] tracking-[0%] text-center text-zinc-600 hover:text-[#10B981] transition-colors duration-200 select-none"
            >
              {item.label}
              <span className="absolute bottom-1 left-4 right-4 h-[1.5px] rounded-full bg-[#10B981] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>

        {/* ── Right Actions ── */}
        <div className="flex items-center gap-2.5">
          <Link
            href="#contact-cta"
            className="inline-flex items-center justify-center gap-[10px] w-[153px] h-[54px] px-[24px] py-[16px] bg-[#10B981] text-white text-[16px] font-medium rounded-[40px] hover:bg-[#059669] active:scale-95 cursor-pointer transition-all duration-300 group"
          >
            Let&apos;s Talk
            <FiArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </Link>

          {/* Mobile Hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={19} /> : <FiMenu size={19} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="px-6 md:px-12 max-w-[1300px] mx-auto">
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              <div className="px-3 py-3 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl text-[15px] font-medium text-zinc-600 hover:text-[#10B981] hover:bg-emerald-50 transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2 mt-1 border-t border-gray-100">
                  <Link
                    href="#contact-cta"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-1.5 w-full py-3 rounded-xl bg-[#10B981] text-white text-[14px] font-semibold cursor-pointer hover:bg-[#059669] transition-colors duration-200"
                  >
                    Let&apos;s Talk <FiArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
