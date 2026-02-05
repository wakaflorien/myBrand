'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center mix-blend-difference">
      <Link href="/" className="text-2xl font-heading font-bold text-white tracking-tighter">
        FN<span className="text-primary">.</span>
      </Link>

      <div className="flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-white/70">
        <Link href="#work" className="hover:text-primary transition-colors">Work</Link>
        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
