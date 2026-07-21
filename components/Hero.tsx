import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-44 pb-24 sm:pt-52 sm:pb-28 lg:pt-[350px]  px-6 sm:px-10 min-h-[100vh] flex items-center justify-center">
      {/* Purple Ambient Radial Background Glow (Top & Bottom) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1300px] h-[650px] bg-gradient-to-b from-purple-300/30 via-accent/15 to-transparent dark:from-purple-900/30 dark:via-purple-950/10 dark:to-transparent pointer-events-none rounded-full blur-3xl z-0" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-gradient-to-r from-purple-500/20 via-accent/25 to-indigo-500/20 blur-[130px] pointer-events-none rounded-full" />

      {/* Bottom Purple Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[300px] bg-gradient-to-t from-purple-300/35 via-accent/20 to-transparent dark:from-purple-900/35 dark:via-purple-950/15 dark:to-transparent pointer-events-none rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[650px] h-[220px] bg-gradient-to-r from-purple-500/25 via-accent/30 to-indigo-500/25 blur-[120px] pointer-events-none rounded-full z-0" />

      {/* Main Layout Container */}
      <div className="relative w-full max-w-[1340px] mx-auto z-10">

        {/* Background Serif Header with Purple Gradient: "Hey, there" */}
        <div className="absolute -top-27 left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none select-none">
          <h2 className="font-serif italic text-6xl sm:text-8xl lg:text-[13.5rem] tracking-tight font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-900/30 via-accent/45 to-purple-900/30 dark:from-purple-200/35 dark:via-accent/50 dark:to-purple-200/35 leading-[1.15] pb-4">
            Hey, there
          </h2>
        </div>

        {/* 3-Column Grid: Left Content, Center Portrait, Right Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end pt-12 sm:pt-16 lg:pt-20">

          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:h-[460px] order-2 lg:order-1 pb-4">
            {/* Top Pill Badge directly above I AM HUZAIFA */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-bg2 border border-purple-500 bor border-border-med  text-xs sm:text-sm font-semibold text-text mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
              <span>Available for new opportunities</span>
            </div>

            {/* Bottom Large Heading */}
            <div className="flex flex-col font-sans font-semibold uppercase leading-[0.82] text-text text-5xl sm:text-7xl lg:text-[5.8rem]">
              <span>I AM</span>
              <span>HUZAIFA</span>
            </div>
          </div>

          {/* Center Image Column (Pure Standalone Image) */}
          <div className="lg:col-span-4 flex justify-center items-end order-1 lg:order-2 mx-auto w-full">
            <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[520px] mx-auto flex justify-center lg:translate-x-6 lg:-translate-y-6 scale-105 sm:scale-125 lg:scale-[1.18] origin-bottom">
              <Image
                src="/Adobe Express - file (1).png"
                alt="Muhammad Huzaifa"
                width={1000}
                height={1150}
                priority
                className="w-full h-auto object-contain object-center shadow-none border-none bg-transparent pointer-events-none"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end lg:h-[460px] order-3 pb-0 lg:-translate-y-6">
            {/* Mid Text Paragraph */}
            <p className="text-xs sm:text-[22px] font-semibold leading-snug text-text/85 max-w-[380px] text-left lg:text-right mb-4">
              Specialized in Web Design, UX / UI, Next.js, and Front End Development.
            </p>

            {/* Bottom Right Heading */}
            <div className="flex flex-col font-sans font-bold  uppercase leading-[0.85] text-text text-3xl sm:text-4xl lg:text-[3rem] text-left lg:text-right">
              <span>DIGITAL</span>
              <span>PRODUCT</span>
              <span>ENGINEER</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
