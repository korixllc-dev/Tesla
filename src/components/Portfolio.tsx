import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';
import { Project } from '../types';
import { ArrowUpRight, Code, Laptop, Sparkles, X, Star, Calendar, Globe, ServerCrash } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Design' | 'Development' | 'Hosting' | 'SEO'>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: ('All' | 'Design' | 'Development' | 'Hosting' | 'SEO')[] = [
    'All',
    'Design',
    'Development',
    'SEO',
    'Hosting'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(proj => proj.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-gray-50/50 border-y border-gray-150 relative overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute right-[10%] bottom-[5%] w-80 h-80 rounded-full bg-brand-red/5 blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="portfolio-header" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-brand-red/10">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight">
            Our Texas Digital Masterpieces
          </h2>
          <p className="text-sm sm:text-base text-gray-550 leading-relaxed max-w-2xl mx-auto">
            Review detailed case studies of live responsive systems, Shopify engines, secure portal platforms, and SEO ranking strategies built by KORIX LLC.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div id="portfolio-tabs" className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/15 scale-[1.03]'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-brand-navy border border-gray-150'
              }`}
            >
              {cat === 'All' ? 'View All Projects' : `${cat} Work`}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div id="portfolio-gallery" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              id={`portfolio-item-${proj.id}`}
              className="bg-white rounded-2xl border border-gray-150 hover:border-brand-blue/20 shadow-xs hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all duration-300 group overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Header representing simulated web browser mockup */}
                <div className={`h-48 bg-gradient-to-tr ${proj.imagePlaceholderColor} p-5 relative overflow-hidden flex items-end`}>
                  {/* Absolute subtle mesh grid overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none select-none" />

                  {/* Mock browser top decoration */}
                  <div className="absolute top-4 left-4 flex gap-1 items-center">
                    <span className="w-2 h-2 rounded-full bg-white/20 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-white/20 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-white/20 inline-block" />
                  </div>

                  {/* Floating badge for category */}
                  <span className="absolute top-4 right-4 bg-white/15 backdrop-blur-md text-[10px] text-white font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/10 font-mono">
                    {proj.category}
                  </span>

                  {/* Interactive floating elements showing code or layout icon */}
                  <div className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all text-white shadow-md">
                    <Code className="h-4 w-4" />
                  </div>

                  {/* Title and Badge embedded details */}
                  <div className="space-y-1 relative z-10 text-white">
                    <h3 className="font-display font-bold text-lg leading-tight tracking-wide drop-shadow-sm">
                      {proj.title}
                    </h3>
                    <p className="text-[10px] text-white/80 font-mono drop-shadow-sm uppercase tracking-widest font-semibold">
                      Client Business Case Study
                    </p>
                  </div>
                </div>

                {/* Card description padding details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed min-h-[44px]">
                    {proj.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-gray-150 text-[10px] text-gray-600 font-mono font-medium px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger in Footer */}
              <div className="px-6 pb-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                <span>View Full Success Review</span>
                <div className="p-1 px-1.5 rounded-lg bg-gray-50 group-hover:bg-brand-navy/5 transition-all text-brand-navy group-hover:text-brand-blue flex items-center gap-0.5">
                  <span>Open Audit</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Secondary project footer count informational */}
        <p className="text-center text-xs text-gray-400 font-mono mt-12 select-none">
          Showing {filteredProjects.length} of {PORTFOLIO_DATA.length} major system architectures • Updated June 10, 2026
        </p>

      </div>

      {/* Interactive Project Details Quick-View Modal */}
      {activeProject && (
        <div id="portfolio-modal-box" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            id="portfolio-modal-overlay"
            onClick={() => setActiveProject(null)}
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity"
          ></div>

          <div
            id="portfolio-modal-wrapper"
            className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-100 flex flex-col z-10 max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal header with matching gradient backdrop */}
            <div className={`p-6 bg-gradient-to-tr ${activeProject.imagePlaceholderColor} text-white relative`}>
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0 cursor-pointer focus:outline-none"
                aria-label="Close Case Study Details"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="uppercase text-[9px] font-mono tracking-[0.2em] font-bold block mb-1 text-white/90">
                KORIX LLC Case Deployment Study
              </span>
              
              <h3 className="font-display font-bold text-2xl tracking-wide">
                {activeProject.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-mono font-medium">
                <span className="bg-white/15 px-2.5 py-1 rounded border border-white/10 uppercase font-bold text-xs">
                  {activeProject.category} Service
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  Score: 100/100 Core speed
                </span>
              </div>
            </div>

            {/* Detailed Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-sm text-gray-600">
              
              {/* Project Abstract description */}
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-brand-navy text-sm uppercase tracking-wider">
                  Operational Core Overview
                </h4>
                <p className="leading-relaxed text-gray-650">
                  {activeProject.description} KORIX LLC planned, structured, and executed the entire technology deployment locally in Texas.
                </p>
              </div>

              {/* Success metrics */}
              <div className="grid grid-cols-3 gap-4 border-y border-gray-100 py-4 font-sans text-center">
                <div>
                  <span className="block font-display font-bold text-lg sm:text-xl text-brand-blue">100%</span>
                  <span className="text-[10px] text-gray-400 font-mono">Mobile-Ready</span>
                </div>
                <div>
                  <span className="block font-display font-bold text-lg sm:text-xl text-emerald-500">0.8 Seconds</span>
                  <span className="text-[10px] text-gray-400 font-mono">Server Loading Time</span>
                </div>
                <div>
                  <span className="block font-display font-bold text-lg sm:text-xl text-brand-red">+40% Leads</span>
                  <span className="text-[10px] text-gray-400 font-mono">Inbound Conversions</span>
                </div>
              </div>

              {/* Detailed scope deliverables list */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-brand-navy text-sm uppercase tracking-wider">
                  Technology scope deliverables
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Responsive UI architecture constructed from scratch with high-contrast color matching.</li>
                  <li>Technical SEO tuning with indexed schemas, direct Google Maps search embedding, and clean tags.</li>
                  <li>Hosted on fast, secure SSD portals with automated daily restoration points and Zero-Trust SSL tunnels.</li>
                  <li>Continuous monthly core security patch management.</li>
                </ul>
              </div>

              {/* Tech tag list */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-brand-navy text-xs uppercase tracking-wider">
                  Platform framework tags
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((tag, idx) => (
                    <span key={idx} className="bg-brand-navy/5 text-brand-navy text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal action button footer */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2 text-xs font-bold text-gray-700 hover:text-brand-navy hover:bg-gray-150 border border-gray-200 bg-white rounded-lg transition-all cursor-pointer shadow-xs focus:outline-none"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
