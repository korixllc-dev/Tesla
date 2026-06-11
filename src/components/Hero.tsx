import React from 'react';
import { motion } from 'motion/react';
import { Palette, CodeXml, Server, ShieldCheck, ArrowRight, Laptop, Sparkles, Star } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // Floating technology elements
  const techIcons = [
    { icon: <Palette className="h-6 w-6 text-brand-blue" />, label: 'UI/UX', styling: 'top-12 left-[10%] animate-bounce' },
    { icon: <CodeXml className="h-6 w-6 text-brand-red" />, label: 'React / Web', styling: 'top-40 right-[15%] animate-pulse' },
    { icon: <Server className="h-6 w-6 text-emerald-500" />, label: 'Texas Host', styling: 'bottom-20 left-[18%] animate-bounce' },
    { icon: <ShieldCheck className="h-6 w-6 text-amber-500" />, label: 'SSL Secured', styling: 'bottom-24 right-[12%] animate-pulse' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-100 pt-32 pb-20 flex items-center overflow-hidden"
    >
      {/* Dynamic Back-grid Elements */}
      <div className="absolute inset-0 z-0 opacity-40 select-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(11, 44, 111, 0.05)" strokeWidth="1" />
            </pattern>
            <radialGradient id="grad" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="rgba(30, 115, 190, 0.12)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <circle cx="80%" cy="30%" r="500" fill="url(#grad)" />
          <circle cx="20%" cy="80%" r="400" fill="url(#grad)" />
        </svg>
      </div>

      {/* Decorative Brand Colors Swoops */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-navy/5 blur-3xl" />
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-3xl" />

      {/* Hero Outer Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Copy Panel */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Texas Badge label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-semibold"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-red animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-brand-red absolute" />
              <span className="ml-1 pl-1">Based in Texas • Results-Oriented Engineering</span>
            </motion.div>

            {/* Headline tag */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-bold text-brand-navy leading-[1.1] tracking-tight"
            >
              Texas Web Design & <br className="hidden md:inline" />
              <span className="text-brand-blue">Hosting Solutions</span> <br />
              That Help Businesses Grow
            </motion.h1>

            {/* Subheadline copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 font-sans max-w-xl leading-relaxed"
            >
              KORIX LLC builds high-performance websites, secure hosting solutions, and digital experiences that help businesses attract customers and increase revenue.
            </motion.p>

            {/* Brand Motto Subscript */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-brand-navy/70 uppercase text-xs font-mono font-bold tracking-[0.3em] flex items-center gap-2"
            >
              <span>Focus</span>
              <span className="text-brand-red font-sans">•</span>
              <span>Execute</span>
              <span className="text-brand-red font-sans">•</span>
              <span>Win</span>
            </motion.p>

            {/* CTAs Button Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => onScrollToSection('contact')}
                className="px-8 py-4 bg-brand-red text-white hover:bg-red-700 font-sans font-bold uppercase text-xs tracking-wider rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                id="hero-primary-cta"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onScrollToSection('services')}
                className="px-8 py-4 bg-brand-navy text-white hover:bg-brand-blue font-sans font-bold uppercase text-xs tracking-wider rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                id="hero-secondary-cta"
              >
                View Our Services
              </button>
            </motion.div>

            {/* Micro Trust Indicators Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-6 border-t border-gray-200"
            >
              <div className="flex items-center gap-1.5 text-xs text-gray-700 font-semibold" id="trust-indicator-stars">
                <div className="flex text-amber-400">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <span>5-Star Rated Support</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-brand-navy font-bold" id="uptime-sla-badge">
                <Server className="h-4 w-4 text-brand-blue" />
                <span>99.9% Uptime SLA Guarantee</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-brand-navy font-bold">
                <Laptop className="h-4 w-4 text-brand-red" />
                <span>Texas Registered Agency</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Media Panel (Interactive browser mockup) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-sm lg:max-w-none"
            >
              
              {/* Outer Decorative Glow Rings */}
              <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-tr from-brand-blue/20 to-brand-red/10 rounded-2xl blur-3xl -z-10 animate-pulse-slow" />

              {/* Browser mockup container */}
              <div
                id="interactive-web-mockup"
                className="w-full bg-brand-navy rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform hover:-translate-y-1 transition-transform duration-350"
              >
                {/* Browser top-bar */}
                <div className="px-4 py-3 bg-brand-navy border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                  </div>
                  <div className="bg-white/5 text-[11px] font-mono text-gray-400 px-4 py-0.5 rounded-md w-1/2 text-center truncate">
                    https://korix.com/client-success
                  </div>
                  <span className="w-3 h-3" />
                </div>

                {/* Simulated Web Application GUI */}
                <div className="p-5 bg-slate-900 text-white min-h-[300px] space-y-4 font-sans text-xs">
                  
                  {/* Mockup Top Row */}
                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-brand-red animate-pulse" />
                      <div>
                        <span className="text-[10px] uppercase font-mono block opacity-60">SEO Health Index</span>
                        <span className="text-sm font-bold text-white tracking-wide">Optimization Level 98%</span>
                      </div>
                    </div>
                    <span className="text-xs bg-emerald-500/15 text-emerald-400 font-bold px-2 py-0.5 rounded">Google Elite</span>
                  </div>

                  {/* Mockup Chart Area */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex flex-col justify-between h-24">
                      <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-mono">Conversion rate</span>
                      <span className="text-2xl font-bold font-display text-brand-blue">+154%</span>
                      <span className="text-[9px] text-emerald-400 font-medium">▲ Year over year expansion</span>
                    </div>

                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex flex-col justify-between h-24">
                      <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-mono">Core Web Vitals</span>
                      <span className="text-2xl font-bold font-display text-emerald-400">0.8s</span>
                      <span className="text-[9px] text-gray-400">Excellent loading speeds</span>
                    </div>
                  </div>

                  {/* Interactive mock CRM items */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Incoming leads pipeline</span>
                    <div className="space-y-1.5">
                      <div className="bg-white/5 p-2 rounded-lg flex items-center justify-between border border-white/5">
                        <span className="font-semibold text-[11px]">Texas Land Holdings LLC</span>
                        <span className="text-[9px] bg-brand-red text-white py-0.5 px-1.5 rounded">New consultation</span>
                      </div>
                      <div className="bg-white/5 p-2 rounded-lg flex items-center justify-between border border-white/5">
                        <span className="font-semibold text-[11px]">Chen Medical Clinic</span>
                        <span className="text-[9px] bg-brand-blue text-white py-0.5 px-1.5 rounded">SEO Audit</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Surrounded Floating Tech Badge widgets */}
              {techIcons.map((badge, idx) => (
                <div
                  key={idx}
                  className={`absolute z-25 hidden sm:flex items-center gap-2 bg-white rounded-2xl shadow-xl px-3 py-2 border border-gray-100 cursor-default hover:scale-105 transition-transform ${badge.styling}`}
                >
                  {badge.icon}
                  <span className="text-xs font-display font-medium text-brand-navy whitespace-nowrap">{badge.label}</span>
                </div>
              ))}

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
