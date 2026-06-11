import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Smartphone, Search, Zap, Lock, Sliders, Headphones, Receipt, Trophy, Users, ShieldAlert, Clock } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data';

export default function WhyChooseUs() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Counter values
  const [websitesDelivered, setWebsitesDelivered] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [uptimePercentage, setUptimePercentage] = useState(90.00);
  const [supportTime, setSupportTime] = useState(60);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Fast counters increments
    let webTimer = setInterval(() => {
      setWebsitesDelivered((prev) => {
        if (prev >= 380) {
          clearInterval(webTimer);
          return 380;
        }
        return prev + 10;
      });
    }, 45);

    let satTimer = setInterval(() => {
      setClientSatisfaction((prev) => {
        if (prev >= 99) {
          clearInterval(satTimer);
          return 99.8; // Set float at end
        }
        return prev + 2;
      });
    }, 30);

    let uptimeTimer = setInterval(() => {
      setUptimePercentage((prev) => {
        if (prev >= 99.99) {
          clearInterval(uptimeTimer);
          return 99.99;
        }
        return parseFloat((prev + 0.15).toFixed(2));
      });
    }, 20);

    let supportTimer = setInterval(() => {
      setSupportTime((prev) => {
        if (prev <= 12) {
          clearInterval(supportTimer);
          return 12;
        }
        return prev - 2;
      });
    }, 40);

    return () => {
      clearInterval(webTimer);
      clearInterval(satTimer);
      clearInterval(uptimeTimer);
      clearInterval(supportTimer);
    };
  }, [hasAnimated]);

  // Safe mapper for why choose us icons
  const resolveIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="h-5 w-5 text-brand-red" />;
      case 'Smartphone':
        return <Smartphone className="h-5 w-5 text-brand-blue" />;
      case 'Search':
        return <Search className="h-5 w-5 text-brand-blue" />;
      case 'Zap':
        return <Zap className="h-5 w-5 text-emerald-500" />;
      case 'Lock':
        return <Lock className="h-5 w-5 text-amber-500" />;
      case 'Sliders':
        return <Sliders className="h-5 w-5 text-brand-navy" />;
      case 'Headphones':
        return <Headphones className="h-5 w-5 text-teal-500" />;
      case 'Receipt':
        return <Receipt className="h-5 w-5 text-purple-500" />;
      default:
        return <MapPin className="h-5 w-5 text-brand-red" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      
      {/* Visual background swoosh */}
      <div className="absolute left-[-5%] top-[20%] w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div id="choice-header" className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-brand-red/10">
            Engineered For Lead Conversion
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight">
            Why Successful Organizations Align With KORIX LLC
          </h2>
          <p className="text-base text-gray-550 leading-relaxed max-w-2xl mx-auto">
            From technical performance scores to secure client databases, our Texas web developer squad guarantees standard-breaking execution alongside direct B2B consulting.
          </p>
        </div>

        {/* Core Stats Counters Banner */}
        <div
          id="animated-stats-dashboard"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-linear-to-b from-brand-navy to-slate-900 text-white rounded-3xl p-8 mb-20 shadow-xl border border-white/5 relative overflow-hidden"
        >
          {/* Subtle decoration inside banner */}
          <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-brand-blue/10 blur-2xl pointer-events-none" />

          {/* Websites delivered */}
          <div className="text-center space-y-2 flex flex-col items-center">
            <div className="p-2 bg-white/5 rounded-xl border border-white/10 shrink-0 w-11 h-11 flex items-center justify-center">
              <Trophy className="h-5 w-5 text-brand-blue" />
            </div>
            <div>
              <span className="block font-display font-bold text-3xl sm:text-4xl lg:text-5.51">
                {websitesDelivered === 380 ? '380+' : `${websitesDelivered}`}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-450 uppercase font-mono tracking-wider">
                Websites Delivered
              </span>
            </div>
          </div>

          {/* Client satisfaction */}
          <div className="text-center space-y-2 flex flex-col items-center">
            <div className="p-2 bg-white/5 rounded-xl border border-white/10 shrink-0 w-11 h-11 flex items-center justify-center">
              <Users className="h-5 w-5 text-brand-red" />
            </div>
            <div>
              <span className="block font-display font-bold text-3xl sm:text-4xl lg:text-5.51">
                {clientSatisfaction === 99.8 ? '99.8%' : `${Math.floor(clientSatisfaction)}%`}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-450 uppercase font-mono tracking-wider">
                Client Satisfaction Score
              </span>
            </div>
          </div>

          {/* Uptime */}
          <div className="text-center space-y-2 flex flex-col items-center">
            <div className="p-2 bg-white/5 rounded-xl border border-white/10 shrink-0 w-11 h-11 flex items-center justify-center">
              <ShieldAlert className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <span className="block font-display font-bold text-3xl sm:text-4xl lg:text-5.51">
                {uptimePercentage.toFixed(2)}%
              </span>
              <span className="text-[10px] sm:text-xs text-gray-450 uppercase font-mono tracking-wider">
                Server Guard Uptime
              </span>
            </div>
          </div>

          {/* Support response */}
          <div className="text-center space-y-2 flex flex-col items-center">
            <div className="p-2 bg-white/5 rounded-xl border border-white/10 shrink-0 w-11 h-11 flex items-center justify-center">
              <Clock className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <span className="block font-display font-bold text-3xl sm:text-4xl lg:text-5.51">
                &lt; {supportTime} Min
              </span>
              <span className="text-[10px] sm:text-xs text-gray-450 uppercase font-mono tracking-wider">
                Emergency Support Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Feature blocks 8 layout */}
        <div id="choice-feature-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_DATA.map((reason, idx) => (
            <div
              key={idx}
              id={`choice-badge-block-${idx}`}
              className="bg-white hover:bg-gray-50/50 p-6 rounded-2xl border border-gray-150 hover:border-brand-blue/20 transition-all shadow-xs group"
            >
              {/* Feature Icon box */}
              <div className="p-3 bg-gray-50 border border-gray-150 rounded-xl w-11 h-11 flex items-center justify-center mb-4 group-hover:bg-brand-navy/5 group-hover:scale-105 transition-all">
                {resolveIcon(reason.icon)}
              </div>

              {/* Title & Descr */}
              <h4 className="font-display font-bold text-sm text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                {reason.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
