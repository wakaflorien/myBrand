'use client';

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { projects } from "../../../data/projects";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import SmoothScroll from "../../../components/SmoothScroll";
import { motion } from "motion/react";

function ProjectNotFound() {
    return (
        <SmoothScroll>
            <div className="bg-background min-h-screen flex flex-col">
                <Nav />
                <main id="main-content" className="flex-grow pt-32 px-8 lg:px-24 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl font-heading font-bold text-slate-100 mb-4">Project not found</h1>
                    <p className="text-slate-400 mb-8 max-w-md">The project you’re looking for doesn’t exist or the link may have changed.</p>
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
                    >
                        <Icon icon="ph:arrow-left" /> Back to projects
                    </Link>
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default function ProjectPageClient({ projectName }: { projectName: string }) {
    const project = projects.find((item) => item.title === decodeURIComponent(projectName));

    if (!project) {
        return <ProjectNotFound />;
    }

    return (
        <SmoothScroll>
            <div className="bg-background min-h-screen flex flex-col">
                <Nav />

                <main id="main-content" className="flex-grow pt-32 px-8 lg:px-24 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <Link
                            href="/#work"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium mb-8"
                        >
                            <Icon icon="ph:arrow-left" /> Back to projects
                        </Link>
                        <h1 className="text-5xl lg:text-8xl font-heading font-bold text-slate-100 mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl leading-relaxed">
                            {project.summary}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden mb-24 border border-slate-800"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                        <div className="lg:col-span-8 space-y-8">
                            <h2 className="text-3xl font-heading font-bold text-slate-100">The Challenge</h2>
                            <p className="text-lg text-slate-400 leading-relaxed font-sans">
                                {project.description}
                            </p>

                            <div className="pt-8">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline underline-offset-8"
                                >
                                    Visit the Live Website <Icon icon="ph:arrow-up-right" />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Timeline</h3>
                                <p className="text-slate-200">{project.timeline}</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Role</h3>
                                <p className="text-slate-200">{project.role}</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.split(',').map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-surface border border-slate-800 rounded-full text-xs text-slate-400">
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
