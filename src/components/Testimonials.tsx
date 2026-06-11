import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeTest = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative quotes graphic */}
      <div className="absolute right-[5%] top-[10%] opacity-5 pointer-events-none select-none">
        <Quote className="h-44 w-44 text-brand-navy" strokeWidth={1} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="testimonials-header" className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-brand-red/10">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight">
            Reviews From Texas Business Leaders
          </h2>
          <p className="text-sm text-gray-550 leading-relaxed">
            We operate with absolute transparency. Here is how our clients rate our web design, reliable fast hosting, on-point SEO rank adjustments, and customer support.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          id="testimonial-slider-card"
          className="relative bg-gray-50 border border-gray-150 rounded-3xl p-8 sm:p-12 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          {/* Accent decoration line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-red" />

          {/* Slider content body */}
          <div className="space-y-6 flex flex-col items-center text-center">
            
            {/* Stars */}
            <div className="flex text-amber-400 gap-1" id="review-stars-row">
              {Array.from({ length: activeTest.rating }).map((_, idx) => (
                <Star key={idx} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans italic max-w-2xl">
              "{activeTest.content}"
            </p>

            {/* Testimonial Author profile bio details */}
            <div className="flex flex-col items-center gap-3 pt-4 border-t border-gray-200 w-2/3">
              <div className="h-12 w-12 rounded-full bg-brand-blue text-white font-display font-bold flex items-center justify-center text-lg shadow-sm">
                {activeTest.avatarLetter}
              </div>
              <div>
                <h4 className="font-display font-bold text-brand-navy text-sm">
                  {activeTest.name}
                </h4>
                <p className="text-xs text-brand-blue font-semibold mt-0.5">
                  {activeTest.role} • {activeTest.company}
                </p>
              </div>
            </div>

          </div>

          {/* Left / Right chevron navigation controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-6">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-xl bg-white hover:bg-brand-navy hover:text-white text-brand-navy border border-gray-150 hover:border-transparent cursor-pointer shadow-xs hover:shadow-md transition-all focus:outline-none"
              aria-label="Previous slider testimonial"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6">
            <button
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-xl bg-white hover:bg-brand-navy hover:text-white text-brand-navy border border-gray-150 hover:border-transparent cursor-pointer shadow-xs hover:shadow-md transition-all focus:outline-none"
              aria-label="Next slider testimonial"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

        </div>

        {/* Dynamic Index Dots markers */}
        <div id="testimonial-dots" className="flex items-center justify-center gap-2.5 mt-8 select-none">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full cursor-pointer transition-all ${
                activeIndex === idx ? 'w-8 bg-brand-blue' : 'w-2.5 bg-gray-300 hover:bg-gray-450'
              }`}
              aria-label={`Jump to review slides index ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
