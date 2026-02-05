'use client';

import { motion } from 'motion/react';
import { projects } from '../data/projects';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <section id="work" className="py-24 px-8 lg:px-24 bg-background">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-primary font-medium tracking-widest uppercase text-xs block mb-2">Portfolio</span>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-slate-100 italic">Selected Work</h2>
        </div>
        <p className="text-slate-500 hidden lg:block text-sm max-w-[200px]">
          Fusing technical precision with visual harmony.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group flex flex-col ${index % 2 === 1 ? 'md:mt-24' : ''}`}
          >
            <Link href={`/projects/${project.title}`} className="block relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface mb-6 border border-slate-800/50 group-hover:border-primary/30 transition-colors duration-500">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
            </Link>

            <div className="space-y-3 px-2">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-heading font-bold text-slate-100 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest pt-2">
                  {project.timeline}
                </span>
              </div>
              <p className="text-slate-400 font-sans leading-relaxed">
                {project.summary}
              </p>
              <div className="flex gap-2 pt-2">
                {project.stack.split(',').slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[10px] uppercase tracking-widest py-1 px-3 border border-slate-800 rounded-full text-slate-500">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
