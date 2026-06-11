import React from 'react';
import { Palette, CodeXml, Server, TrendingUp, ShieldCheck, Cpu, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  // Safe Icon Resolver mapping static imports
  const resolveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="h-6 w-6 text-brand-blue" />;
      case 'CodeXml':
        return <CodeXml className="h-6 w-6 text-brand-red" />;
      case 'Server':
        return <Server className="h-6 w-6 text-indigo-500" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6 text-emerald-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-teal-500" />;
      case 'Cpu':
        return <Cpu className="h-6 w-6 text-purple-500" />;
      default:
        return <Palette className="h-6 w-6 text-brand-blue" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50/50 border-y border-gray-100 relative overflow-hidden">
      
      {/* Mesh Background */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none select-none opacity-40">
        <div className="absolute left-[5%] top-[10%] w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute right-[5%] bottom-[10%] w-80 h-80 rounded-full bg-brand-red/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="services-section-header" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-brand-red/10">
            Professional Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight">
            Our Enterprise Digital Solutions
          </h2>
          <p className="text-sm sm:text-base text-gray-650 max-w-2xl mx-auto leading-relaxed">
            From modern responsive interfaces to lightning-fast hosting and local Texas search rankings, we build robust frameworks designed to acquire customers and scale operations.
          </p>
        </div>

        {/* Services Cards Grid Layout */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv: Service) => (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv.title)}
              id={`service-card-${srv.id}`}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-blue/30 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Card Top: ICON & BADGE */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-brand-navy/5 group-hover:scale-105 transition-all">
                    {resolveIcon(srv.icon)}
                  </div>
                  {srv.subBadge && (
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-navy/5 text-brand-navy group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      {srv.subBadge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-lg text-brand-navy group-hover:text-brand-blue transition-colors">
                  {srv.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed min-h-[60px]">
                  {srv.description}
                </p>

                {/* Bullet Points */}
                <div className="pt-2 border-t border-gray-100/80 space-y-2">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex gap-2 items-start text-xs text-gray-700">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-brand-blue shrink-0 font-bold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-brand-navy group-hover:text-brand-red transition-colors">
                <span>Select & Request Consultation</span>
                <div className="flex items-center gap-0.5 translate-x-0 group-hover:translate-x-1.5 transition-transform">
                  <span>Get Started</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Contact Pre-callout bar */}
        <div className="mt-16 bg-brand-navy text-white p-8 rounded-2xl text-center relative overflow-hidden shadow-lg border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-left">
            <h4 className="font-display font-bold text-lg">Need custom functionality or an enterprise hosting plan?</h4>
            <p className="text-xs text-blue-200">Our local engineers will construct a tailor-made strategic roadmap for your organization.</p>
          </div>
          <button
            onClick={() => onSelectService('Specialized Custom Architecture')}
            className="px-6 py-3 bg-brand-red text-white hover:bg-red-700 uppercase font-sans font-bold text-xs tracking-wider rounded-xl transition-all hover:scale-[1.03] shadow-md cursor-pointer whitespace-nowrap"
          >
            Consult Dedicated Architect
          </button>
        </div>

      </div>
    </section>
  );
}
