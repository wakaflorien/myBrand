'use client';

import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center  overflow-hidden bg-background">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto min-w-0 px-8 lg:px-0 lg:py-24">
        <div className="max-w-4xl space-y-8 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-w-0"
          >
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm block mb-4">
              Software Engineer & Creative Dev
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-heading font-bold leading-[0.9] tracking-tighter text-slate-100 break-words">
              Designing <br />
              <span className="text-slate-500">Refined</span> <br />
              Experiences.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg lg:text-2xl text-slate-400 max-w-2xl leading-relaxed font-sans min-w-0"
          >
            Florien Niyongabo. I build high-performance web & mobile applications that bridge the gap between complex logic and elegant human interaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-4"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
