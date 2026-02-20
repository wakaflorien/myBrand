'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', href: '#about', label: 'About' },
  { id: 'work', href: '#work', label: 'Work' },
  { id: 'contact', href: '#contact', label: 'Contact' },
] as const;

const Nav = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) {
      setActiveId(null);
      return;
    }

    const sectionIds: string[] = SECTIONS.map((s) => s.id);
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (sectionIds.includes(id)) {
            if (entry.isIntersecting) visible.add(id);
            else visible.delete(id);
          }
        }
        // Active = last section in document order that is visible (section we're "in")
        const active = [...sectionIds].reverse().find((id) => visible.has(id)) ?? null;
        setActiveId(active);
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null);

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 lg:py-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl lg:text-2xl font-heading font-bold text-slate-100 tracking-tighter hover:text-primary transition-colors"
        >
          FN<span className="text-primary">.</span>
        </Link>

        <div className="flex items-center gap-6 lg:gap-10">
          <div className="hidden sm:flex gap-6 lg:gap-8 text-sm font-medium tracking-widest uppercase">
            {SECTIONS.map(({ id, href, label }) => (
              <Link
                key={id}
                href={href}
                className={
                  isHome && activeId === id
                    ? 'text-primary transition-colors'
                    : 'text-slate-400 hover:text-primary transition-colors'
                }
                aria-current={isHome && activeId === id ? 'true' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-background font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all duration-300"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
