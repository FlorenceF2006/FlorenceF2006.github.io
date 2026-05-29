import { bioData, contactInfo } from '../data';
import { MapPin, Mail, Linkedin, Github, FileText, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative py-12 md:py-16 border-b border-neutral-900" id="portfolio-header">
      {/* Decorative clean radial background accent */}
      <div className="absolute top-0 right-0 -z-10 w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-12 -z-10 w-96 h-96 rounded-full bg-neutral-900/10 blur-3xl" />
      
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          {/* Active Work Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400 tracking-wide shadow-xs" id="badge-status">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            xinwei.io
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none" id="developer-name">
            {bioData.name}<span className="text-emerald-500 ml-1">.io</span>
          </h1>
          
          <p className="font-display text-lg md:text-xl font-medium text-emerald-400/90 leading-snug" id="developer-title">
            {bioData.title}
          </p>
          
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl" id="developer-bio">
            {bioData.about}
          </p>

          {/* Quick contact tags */}
          <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2 text-xs md:text-sm text-neutral-400 font-medium" id="contact-pills">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-emerald-500" />
              <span>{contactInfo.location}</span>
            </div>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-emerald-500" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
        </div>

        {/* CSS-designed avatar terminal panel */}
        <div className="flex flex-col items-center sm:items-start md:items-end shrink-0" id="terminal-profile">
          <div className="w-56 overflow-hidden rounded-xl border border-neutral-800 bg-[#111113] shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#141416] border-b border-neutral-800">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              </div>
              <span className="text-[10px] font-mono text-neutral-550 font-semibold uppercase tracking-wider">xinwei.io</span>
            </div>

            {/* Profile Avatar Graphics */}
            <div className="relative h-44 bg-neutral-950 flex flex-col items-center justify-center p-6 text-center select-none">
              <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              <div className="relative animate-pulse-slow font-mono font-bold text-3xl text-emerald-400 tracking-wider">
                &lt;XF /&gt;
              </div>
              <div className="mt-2 font-mono text-[10px] text-neutral-500">
                01111000 01100110
              </div>
            </div>

            {/* Social Link Quick Access */}
            <div className="flex items-center divide-x divide-neutral-800 border-t border-neutral-800 bg-[#141416]/90 py-2.5 text-center">
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-1 flex justify-center text-neutral-450 hover:text-emerald-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-1 flex justify-center text-neutral-450 hover:text-emerald-400 transition-colors"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex-1 py-1 flex justify-center text-neutral-450 hover:text-emerald-400 transition-colors"
                title="Email Me"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono font-medium text-neutral-400 uppercase tracking-widest bg-neutral-900 border border-neutral-850 p-1.5 px-3 rounded-md">
            <Sparkles className="h-3 w-3 text-emerald-500" />
            Static .io deployment
          </div>
        </div>
      </div>
    </header>
  );
}
