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
  const [mobileOpen, setMobileOpen] = useState(false);

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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 lg:py-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl lg:text-2xl font-heading font-bold text-slate-100 tracking-tighter hover:text-primary transition-colors"
          onClick={closeMobile}
        >
          FN<span className="text-primary">.</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">
          {/* Desktop links */}
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

          {/* Mobile menu button - inline SVG so it always shows (no Iconify load on slow mobile) */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="sm:hidden flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-primary text-background hover:bg-primary/90 transition-colors shrink-0"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>

          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-primary text-background font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all duration-300"
            onClick={closeMobile}
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Mobile menu panel - inline background so it's never transparent */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{ backgroundColor: '#0f172a' }}
        className={`sm:hidden fixed inset-x-0 top-[57px] bg-background bottom-0 z-40 border-t border-slate-800/50 shadow-[0_-4px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col pt-8 px-6 gap-1">
          {SECTIONS.map(({ id, href, label }) => (
            <Link
              key={id}
              href={href}
              onClick={closeMobile}
              className={
                isHome && activeId === id
                  ? 'py-4 text-lg font-medium text-primary border-b border-slate-800'
                  : 'py-4 text-lg font-medium text-slate-300 hover:text-primary border-b border-slate-800 transition-colors'
              }
              aria-current={isHome && activeId === id ? 'true' : undefined}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={closeMobile}
            className="mt-6 inline-flex items-center justify-center px-6 py-4 bg-primary text-background font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-primary/90 transition-colors w-fit"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
