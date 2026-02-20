'use client';

import { motion } from 'motion/react';
import { projects } from '../data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Projects = () => {
  return (
    <section id="work" className="py-24 px-8 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-xs block mb-2">
              Selected projects
            </span>
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-slate-100 italic">
              Discover some of my projects
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-[240px]">
            Fusing technical precision with visual harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group flex flex-col ${index % 2 === 1 ? 'md:mt-16 lg:mt-24' : ''}`}
            >
              <Link
                href={`/projects/${project.title}`}
                className="block relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface mb-6 border border-slate-800/50 group-hover:border-primary/40 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/5"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary/95 text-background text-xs font-semibold uppercase tracking-wider rounded-full">
                  {project.timeline}
                </span>
                <span className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-background/90 text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon icon="ph:arrow-up-right" className="w-5 h-5" />
                </span>
              </Link>

              <div className="space-y-3 px-1">
                <h3 className="text-2xl font-heading font-bold text-slate-100 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 font-sans leading-relaxed text-sm lg:text-base">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.split(',').slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] uppercase tracking-widest py-1.5 px-3 border border-slate-700 rounded-full text-slate-500 bg-slate-800/30"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.title}`}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm mt-2 hover:underline underline-offset-4"
                >
                  View project
                  <Icon icon="ph:arrow-right" className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
