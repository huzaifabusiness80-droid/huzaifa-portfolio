'use client';

import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    if (!formData.fullName || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSuccess('Your message has been sent successfully! I will get back to you soon.');
      setFormData({ fullName: '', email: '', service: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-white py-20 md:py-28" id="contact-cta">
      {/* ── Top Center Ambient Emerald Glow ── */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[350px] opacity-80 blur-[90px] z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.28) 0%, rgba(16, 185, 129, 0.08) 55%, transparent 80%)"
        }}
      />

      {/* ── Bottom Center Ambient Emerald Glow ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] opacity-90 blur-[110px] z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(16, 185, 129, 0.32) 0%, rgba(16, 185, 129, 0.12) 60%, transparent 85%)"
        }}
      />

      <SectionWrapper className="relative z-10">
        <section className="font-host-grotesk space-y-12">

          {/* ── Top Grid (Left Info + Right Form Box) ── */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 w-full max-w-[1300px] mx-auto">

            {/* Left Column (Heading & Info) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="w-full lg:w-[480px] space-y-5 pt-0 mt-0"
            >
              <span className="font-host-grotesk font-normal text-[17px] leading-none tracking-[0%] text-[#10B981] block -mt-1">
                ( Contact )
              </span>

              <h2 className="font-host-grotesk text-[#031811] font-normal text-[26px] sm:text-[34px] md:text-[40px] leading-[1.2] tracking-[-0.03em]">
                Let&apos;s build something great together.
              </h2>

              <p className="font-host-grotesk font-normal text-[#7D838F] !text-[16px] sm:!text-[19px] md:!text-[21px] leading-[1.35] tracking-[0%]">
                Whether you&apos;re looking for a Full Stack Developer, have a web project in mind, or simply want to connect.
              </p>
            </motion.div>

            {/* Right Column (Form Box) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
              className="w-full lg:w-[678px] min-h-0 bg-[#F3FBF7] rounded-[20px] sm:rounded-[24px] py-8 px-6 sm:pt-[54px] sm:pb-[54px] sm:px-[44px] shadow-none space-y-6 sm:space-y-[28px]"
            >

              {/* Form Title & Subcopy */}
              <div className="space-y-2.5">
                <h3 className="font-host-grotesk font-medium !text-[22px] sm:!text-[27px] md:!text-[31px] leading-[1.15] tracking-[-0.025em] text-[#031811]">
                  Let’s Discuss your Project Details
                </h3>
                <p className="font-host-grotesk font-normal text-[#7D838F] !text-[15px] sm:!text-[17px] md:!text-[19px] leading-[1.35] tracking-[0%]">
                  I’d love to hear from you and I’ll get back to you within 24hrs.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 pt-1">
                {error && <div className="text-red-500 text-sm">{error}</div>}
                {success && <div className="text-emerald-700 text-sm font-medium">{success}</div>}

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block font-host-grotesk font-medium text-[16px] leading-[1.4] tracking-[0%] text-[#031811]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full max-w-[582px] h-[45px] pt-[10px] pb-[10px] border-b border-zinc-300 font-host-grotesk text-[16px] text-zinc-900 placeholder-[#A1A7B3] bg-transparent focus:outline-none focus:border-[#10B981] transition-colors duration-200"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="block font-host-grotesk font-medium text-[16px] leading-[1.4] tracking-[0%] text-[#031811]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full max-w-[582px] h-[45px] pt-[10px] pb-[10px] border-b border-zinc-300 font-host-grotesk text-[16px] text-zinc-900 placeholder-[#A1A7B3] bg-transparent focus:outline-none focus:border-[#10B981] transition-colors duration-200"
                    required
                  />
                </div>

                {/* Service Select */}
                <div className="space-y-1 relative">
                  <label className="block font-host-grotesk font-medium text-[16px] leading-[1.4] tracking-[0%] text-[#031811]">
                    Service
                  </label>
                  <div className="relative max-w-[582px]">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full h-[45px] pt-[10px] pb-[10px] border-b border-zinc-300 font-host-grotesk text-[16px] appearance-none bg-transparent focus:outline-none focus:border-[#10B981] transition-colors duration-200 cursor-pointer ${
                        formData.service ? 'text-zinc-900' : 'text-[#A1A7B3]'
                      }`}
                    >
                      <option value="" disabled className="text-[#A1A7B3] bg-white">
                        Service Type
                      </option>
                      <option value="Full-Stack Web Development" className="text-zinc-900 bg-white">Full-Stack Web Development</option>
                      <option value="SaaS & AI Application" className="text-zinc-900 bg-white">SaaS &amp; AI Application</option>
                      <option value="Frontend UI Architecture" className="text-zinc-900 bg-white">Frontend UI Architecture</option>
                      <option value="API & Backend Engineering" className="text-zinc-900 bg-white">API &amp; Backend Engineering</option>
                    </select>
                    <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1 relative">
                  <label className="block font-host-grotesk font-medium text-[16px] leading-[1.4] tracking-[0%] text-[#031811]">
                    Message
                  </label>
                  <div className="relative max-w-[582px]">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={4}
                      className="w-full p-4 rounded-xl border border-zinc-300 font-host-grotesk text-[16px] text-zinc-900 placeholder-[#A1A7B3] bg-transparent focus:outline-none focus:border-[#10B981] transition-colors duration-200 resize-none min-h-[115px]"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#10B981] hover:bg-[#059669] text-white font-host-grotesk font-medium text-[16px] rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-none cursor-pointer disabled:opacity-50 hover:scale-[1.02]"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <FiArrowUpRight size={18} />
                  </button>
                </div>
              </form>

            </motion.div>

          </div>

        </section>
      </SectionWrapper>
    </div>
  );
}
