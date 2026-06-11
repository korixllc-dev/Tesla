import React from 'react';
import { Ship, Heart, Map, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Headphones, Compass, Smartphone } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Texas Based Company',
      descr: 'Based in the heart of Texas, we understand local US business markets, compliance standards, and deliver reliable, near-shore consulting.',
      icon: <Compass className="h-5 w-5 text-brand-red" />
    },
    {
      title: 'Responsive Designs',
      descr: 'Guaranteed compatibility across every modern screen size, ensuring a premium customer journey on desktop, tablet, and mobile browsers alike.',
      icon: <Smartphone className="h-5 w-5 text-brand-blue" />
    },
    {
      title: 'Fast Hosting',
      descr: 'Localized high-performance server grids designed to drive down loading speeds, boost SEO indexes, and prevent customer latency drops.',
      icon: <Zap className="h-5 w-5 text-emerald-500" />
    },
    {
      title: 'Secure Infrastructure',
      descr: 'Zero-Trust SSL encryption, routine firewall sweeps, daily automated folder backups, and strict compliance with state privacy parameters.',
      icon: <ShieldCheck className="h-5 w-5 text-indigo-500" />
    },
    {
      title: 'Ongoing Support',
      descr: 'Direct channels to a dedicated local support desk. No robotic foreign answer queues; real Texas developers assist with immediate requests.',
      icon: <Headphones className="h-5 w-5 text-teal-500" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Grid Mesh */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-30 pointer-events-none select-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="rgba(11, 44, 111, 0.05)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="25" stroke="rgba(30, 115, 190, 0.05)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Left: High-Polished Corporate Tech Badge Panel */}
          <div className="lg:col-span-5 relative" id="about-visual-hub">
            <div className="space-y-6">
              
              {/* Main Visual Box representing Texas Core */}
              <div
                id="texas-badge-container"
                className="bg-linear-to-br from-brand-navy to-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-white/10"
              >
                {/* Simulated Texas Map Pattern */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                  <svg className="w-full h-full p-4" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M40,20 L55,20 L60,35 L75,45 L70,65 L55,80 L35,80 L20,60 L25,35 Z" />
                  </svg>
                </div>

                <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-bold block mb-1">
                  Established Presence
                </span>
                
                <h3 className="font-display font-bold text-2xl mb-4 leading-snug">
                  Providing Texas-Wide Enterprise Coverage
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6">
                  From Austin's tech nodes up to Dallas business hubs, we help companies establish digital dominance. Our local deployment ensures unmatched reliability.
                </p>

                {/* State Hub Stats */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div>
                    <span className="block text-2xl font-display font-bold text-brand-blue">Austin</span>
                    <span className="text-[10px] text-gray-400 font-mono">Central HQ & Tech Hub</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-display font-bold text-brand-red">Houston</span>
                    <span className="text-[10px] text-gray-400 font-mono">Operations & Commerce</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-brand-blue font-semibold">
                  <span>Authorized Statewide LLC</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Auxiliary trust floating banner */}
              <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy font-bold text-lg font-display">
                  US
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-navy max-w-[200px] leading-tight">
                    100% United States Professional Workforce
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    No sub-contracts. Dedicated, vetted native engineers.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* About Right: Detailed Text & List Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-red uppercase font-mono text-xs tracking-widest font-bold block">
              Digital Agency Mission
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight leading-none">
              Built in Texas. <br />
              <span className="text-brand-blue">Designed for Growth.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              KORIX LLC is a Texas-based digital agency providing professional website design, hosting, SEO, and digital business solutions. We help organizations establish a powerful online presence with modern technology and exceptional support.
            </p>

            <div className="h-[1px] bg-gray-150 w-full my-4" />

            {/* highlights list */}
            <div className="space-y-4 pt-2">
              <span className="text-xs font-bold text-gray-400 font-mono uppercase tracking-widest block mb-4">
                Core Competencies Built Into Your Project
              </span>

              <div id="highlights-checklist" className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex gap-3 items-start group">
                    <div className="p-2 bg-gray-50 border border-gray-150 rounded-xl shrink-0 group-hover:bg-brand-navy/5 group-hover:border-brand-navy/10 transition-colors">
                      {h.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-brand-navy">
                        {h.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {h.descr}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
