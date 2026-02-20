'use client';

import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-24 px-8 lg:px-24 bg-background border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-primary font-medium tracking-widest uppercase text-xs block mb-4">
              About
            </span>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-100 tracking-tight mb-6">
              Build on trust, driven by precision
            </h2>
            <p className="text-slate-400 font-sans leading-relaxed text-lg">
              I focus on high-performance web and mobile applications that bridge complex logic with clear, elegant interfaces. From product design to deployment, I aim to make each project better than imagined.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-wrap gap-4"
          >
            {['Frontend', 'Fullstack', 'TypeScript', 'React', 'Next.js', 'APIs'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-surface/60 border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
