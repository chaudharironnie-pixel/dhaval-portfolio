//import { Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-dark-950 py-8">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-slate-500">
            &copy; {year} {personalInfo.fullName}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">Built with passion &amp; modern web technologies</p>
        </div>
      </div>
    </footer>
  );
}
