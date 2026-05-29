import { contactInfo, bioData } from '../data';
import { Mail, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 border-t border-neutral-850 mt-12 bg-[#08080A]/40" id="portfolio-footer">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        
        {/* Bio summary and trademark */}
        <div className="space-y-3.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-widest bg-neutral-905 border border-neutral-800 p-1 px-2.5 rounded-md shadow-xs">
              xinwei.io
            </span>
          </div>
          <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
            Designed as a high-fidelity Single-Page-App based on GitHub Pages specifications. Crafted in California.
          </p>
          <div className="text-[10px] font-mono text-neutral-500 font-medium">
            &copy; {currentYear} {bioData.name}. All systems functional.
          </div>
        </div>

        {/* Dynamic Contact details layout */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 shrink-0 text-center sm:text-left" id="footer-contact-links">
          
          {/* Email dispatch section */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono uppercase font-bold text-neutral-500 tracking-wider">
              Secure Communications
            </h4>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="flex items-center justify-center sm:justify-start gap-2 text-sm text-neutral-300 hover:text-emerald-400 transition-colors font-medium group"
            >
              <Mail className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
              <span>{contactInfo.email}</span>
              <ExternalLink className="h-3 w-3 text-neutral-600 group-hover:text-neutral-400 transition-colors opacity-0 group-hover:opacity-100" />
            </a>
            <p className="text-[10px] text-neutral-500 font-mono">Replies typically within 24 hours</p>
          </div>

          {/* Social indices profiles details */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono uppercase font-bold text-neutral-505 tracking-wider">
              Professional Indices
            </h4>
            <div className="flex flex-col gap-1.5 font-medium text-sm text-neutral-300">
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center sm:justify-start gap-2 hover:text-emerald-400 transition-colors group"
              >
                <Linkedin className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="h-3 w-3 text-neutral-600 group-hover:text-neutral-400 transition-colors opacity-0 group-hover:opacity-100" />
              </a>
              
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center sm:justify-start gap-2 hover:text-emerald-400 transition-colors group"
              >
                <Github className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                <span>GitHub Developer Page</span>
                <ExternalLink className="h-3 w-3 text-neutral-600 group-hover:text-neutral-400 transition-colors opacity-0 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
