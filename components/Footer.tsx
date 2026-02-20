'use client';

const Footer = () => {
  return (
    <footer id="contact" className="py-24 px-8 lg:px-24 bg-background border-t border-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-5xl lg:text-7xl font-heading font-bold text-slate-100 tracking-tighter">
            Let&apos;s build <br />
            <span className="text-primary italic">together.</span>
          </h2>
          <div className="space-y-2">
            <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Email me</p>
            <a href="mailto:waka.florien45@gmail.com" className="text-2xl lg:text-3xl font-sans text-slate-200 hover:text-primary transition-colors">
              waka.florien45@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-end space-y-12">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Socials</p>
              <ul className="space-y-2 text-slate-300">
                <li><a href="https://www.linkedin.com/in/florien-niyongabo-7b7971142/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/wakaflorien" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://x.com/florienwaka" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Details</p>
              <ul className="space-y-2 text-slate-300">
                <li>Based in Rwanda</li>
                <li>Hiring availability: Yes</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center pt-12 border-t border-slate-900">
            <p className="text-slate-600 text-xs uppercase tracking-widest font-medium">
              © 2026 Florien N.
            </p>
            <p className="text-slate-600 text-xs uppercase tracking-widest font-medium italic">
              Simple. Elegant. Effective.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
