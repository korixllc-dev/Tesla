import React from 'react';
import { PROCESS_STEPS_DATA } from '../data';
import { Target, Compass, Rocket, Trophy, ChevronRight, CheckCircle } from 'lucide-react';

export default function Process() {
  const resolveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="h-6 w-6 text-brand-red font-bold" />;
      case 'Compass':
        return <Compass className="h-6 w-6 text-brand-blue font-bold" />;
      case 'Rocket':
        return <Rocket className="h-6 w-6 text-emerald-500 font-bold" />;
      case 'Trophy':
        return <Trophy className="h-6 w-6 text-amber-500 font-bold" />;
      default:
        return <Target className="h-6 w-6 text-brand-navy font-bold" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-gray-50/50 border-y border-gray-150 relative overflow-hidden">
      
      {/* Dynamic background accents */}
      <div className="absolute right-0 top-[20%] w-[400px] h-[400px] bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="process-header" className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-brand-red/10">
            Our Texas Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight">
            How KORIX Engineers Your Success
          </h2>
          <p className="text-base text-gray-550 max-w-2xl mx-auto leading-relaxed">
            Four rigorous phases geared towards understanding your core targets, coding clean scalable systems, and maintaining persistent leads conversion.
          </p>
        </div>

        {/* Timeline Grid layout (Connected line on desktop) */}
        <div className="relative" id="timeline-container">
          
          {/* Horizontal Connector Line in between steps on desktop screen scale */}
          <div className="hidden lg:block absolute top-[43px] left-[5%] right-[5%] h-0.5 bg-gray-200" />

          {/* Core Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS_DATA.map((step) => (
              <div
                key={step.stepNumber}
                id={`timeline-node-${step.phase.toLowerCase()}`}
                className="bg-white rounded-2xl border border-gray-150 p-6 flex flex-col justify-between relative shadow-xs hover:shadow-lg transition-all duration-300 group hover:border-brand-blue/25"
              >
                
                {/* Timeline node details */}
                <div className="space-y-4">
                  
                  {/* Step indicator & icon */}
                  <div className="flex justify-between items-center relative z-10">
                    <div className="h-14 w-14 rounded-2xl bg-gray-50 border border-gray-150 group-hover:bg-brand-navy group-hover:scale-105 transition-all text-brand-navy group-hover:text-white flex items-center justify-center shadow-xs">
                      {resolveIcon(step.icon)}
                    </div>
                    
                    <span className="font-display font-bold text-3xl text-gray-200 group-hover:text-brand-red/25 select-none transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Phase name badge */}
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-[#C8102E] bg-brand-red/10 px-2 py-0.5 rounded-md">
                    Phase: {step.phase}
                  </span>

                  {/* Title & Descr */}
                  <h3 className="font-display font-bold text-base text-brand-navy leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed min-h-[50px]">
                    {step.description}
                  </p>

                  {/* Audit parameters */}
                  <div className="border-t border-gray-100/90 pt-3 space-y-1.5">
                    {step.details.map((det, dIdx) => (
                      <div key={dIdx} className="flex gap-2 items-center text-[11px] text-gray-700">
                        <CheckCircle className="h-3.5 w-3.5 text-brand-blue text-[8px] font-bold shrink-0" />
                        <span>{det}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Motto Callout Bar at bottom of Process section */}
        <div className="mt-16 text-center select-none py-6 border-t border-b border-gray-150 max-w-xl mx-auto flex items-center justify-center gap-4 font-display font-bold uppercase tracking-[0.25em] text-brand-navy/60 text-xs sm:text-sm">
          <span>Focus</span>
          <ChevronRight className="h-4 w-4 text-brand-red font-bold shrink-0" />
          <span>Execute</span>
          <ChevronRight className="h-4 w-4 text-brand-red font-bold shrink-0" />
          <span>Win</span>
        </div>

      </div>
    </section>
  );
}
