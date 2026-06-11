import React from 'react';
import { Mail, Phone, ExternalLink, Facebook, Linkedin, ArrowUpRight, ShieldAlert } from 'lucide-react';
import KorixLogo from './KorixLogo';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenCompliance: (type: 'privacy' | 'terms' | 'cookie' | 'accessibility' | 'disclaimer') => void;
}

export default function Footer({ onScrollToSection, onOpenCompliance }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-brand-navy text-gray-350 pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Subtle bottom gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-20">
        <div className="absolute left-[10%] bottom-[10%] w-[300px] h-[300px] bg-brand-red/10 rounded-full blur-3xl" />
        <div className="absolute right-[10%] top-[40%] w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Logo & Company details */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => onScrollToSection('hero')}
              className="cursor-pointer text-left focus:outline-none"
              aria-label="Scroll to home page"
            >
              <KorixLogo size="md" showMotto={true} light={true} />
            </button>
            <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-sm">
              We engineer high-fidelity webs, secure hosting systems, and strategic enterprise workflows from our headquarters in Texas, helping organizations execute objectives and win online.
            </p>
            <div className="flex gap-3 text-white">
              <a
                href="#"
                className="h-9 w-9 bg-white/5 hover:bg-brand-blue/20 rounded-lg flex items-center justify-center transition-all cursor-pointer border border-white/10"
                aria-label="Follow KORIX on Twitter/X"
              >
                {/* Custom X font symbol matching standard icons */}
                <span className="font-sans font-black text-sm select-none">𝕏</span>
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-white/5 hover:bg-brand-blue/20 rounded-lg flex items-center justify-center transition-all cursor-pointer border border-white/10"
                aria-label="Follow KORIX on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-white/5 hover:bg-brand-blue/20 rounded-lg flex items-center justify-center transition-all cursor-pointer border border-white/10"
                aria-label="Follow KORIX on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Agency
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Capable Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('why-choose-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Partner With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Case Studies Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Deployment Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Free Consultation Office
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services panel */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-2">
              Agency Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Website Design & UX</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0 text-gray-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Website Development & Shopify</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0 text-gray-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Texas Web Cloud Hosting</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0 text-gray-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Technical & Local SEO Ranks</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0 text-gray-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Defensive Website Maintenance</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0 text-gray-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Workflows & CRM Automation</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance declarations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-2">
              Texas & Regulatory Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenCompliance('privacy')}
                  className="hover:text-white text-left transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Privacy Policy (TDPSA)</span>
                  <span className="bg-brand-red/20 text-brand-red text-[8px] font-bold tracking-wider px-1.5 py-0.2 rounded-full font-mono uppercase">State Compliant</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCompliance('terms')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Terms of Service Agreement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCompliance('cookie')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Standard Cookie Notice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCompliance('accessibility')}
                  className="hover:text-white text-left transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Accessibility (WCAG 2.1 AA)</span>
                  <span className="bg-brand-blue/20 text-brand-blue text-[8px] font-bold tracking-wider px-1.5 py-0.2 rounded-full font-mono uppercase font-bold">AA Compliant</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCompliance('disclaimer')}
                  className="hover:text-white text-left transition-colors cursor-pointer text-gray-400 italic"
                >
                  State & Federal Disclaimer
                </button>
              </li>
            </ul>

            {/* Micro disclaimer box */}
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[10px] text-gray-450 leading-relaxed font-sans" id="regulatory-disclaimer-box">
              <ShieldAlert className="h-3 w-3 text-amber-500 inline mr-1 mb-0.5" />
              <span>
                KORIX LLC operates in compliance with applicable Texas and United States business regulations.
              </span>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-white/5 w-full" />

        {/* Bottom copyright line, compliance terms, trademark motto */}
        <div id="footer-bottom-bar" className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500 select-none">
          
          {/* Trademark text */}
          <div className="font-display font-medium text-gray-400">
            KORIX LLC™ – Focus • Execute • Win
          </div>

          {/* Standard copyright and credits */}
          <div className="font-sans text-center sm:text-right">
            <span>&copy; {currentYear} KORIX LLC. All Rights Reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
