import React, { useState, useEffect } from 'react';
import { Menu, X, Database, PhoneCall, ChevronRight } from 'lucide-react';
import KorixLogo from './KorixLogo';

interface HeaderProps {
  onOpenCRM: () => void;
  leadsCount: number;
}

export default function Header({ onOpenCRM, leadsCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose-us', label: 'Why Us' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Shifting navigation design on scroll
      setIsScrolled(window.scrollY > 40);

      // Simple active section highlights based on viewport
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-305 ${
        isScrolled
          ? 'bg-brand-navy border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo Trigger */}
        <button
          onClick={() => handleScrollToSection('hero')}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg"
          aria-label="Scroll to home page"
        >
          <KorixLogo size="sm" showMotto={false} light={isScrolled ? true : false} />
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-navbar" className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollToSection(link.id)}
              className={`text-sm font-semibold tracking-wide cursor-pointer transition-colors focus:outline-none focus:ring-1 focus:ring-brand-blue rounded px-1.5 py-0.5 ${
                activeSection === link.id
                  ? isScrolled
                    ? 'text-white border-b-2 border-brand-red font-bold'
                    : 'text-brand-blue border-b-2 border-brand-red font-bold'
                  : isScrolled
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-brand-navy'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Call to Actions & CRM desk trigger */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Leads Database trigger to review submitted consultations */}
          <button
            onClick={onOpenCRM}
            className={`p-2 rounded-lg relative cursor-pointer group flex items-center gap-1.5 font-mono text-xs font-bold border transition-all ${
              isScrolled
                ? 'bg-white/5 hover:bg-white/15 text-white border-white/10'
                : 'bg-brand-blue/5 hover:bg-brand-blue/15 text-brand-blue border-brand-blue/10'
            }`}
            title="Open Inbox CRM Desk"
          >
            <Database className="h-4 w-4" />
            <span>CRM Desk</span>
            {leadsCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-red text-[8px] font-bold text-white ring-2 ring-white">
                {leadsCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => handleScrollToSection('contact')}
            className={`flex items-center gap-1 cursor-pointer font-sans font-bold text-xs uppercase px-4 py-2.5 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
              isScrolled
                ? 'bg-brand-red text-white hover:bg-red-700'
                : 'bg-brand-navy text-white hover:bg-brand-blue'
            }`}
          >
            <PhoneCall className="h-3 w-3" />
            Free Consultation
          </button>
        </div>

        {/* Mobile Navbar Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* CRM shortcut on Mobile */}
          <button
            onClick={onOpenCRM}
            className={`p-2 rounded-lg relative ${
              isScrolled ? 'text-white' : 'text-brand-navy'
            }`}
            aria-label="Open consultations inbox database"
          >
            <Database className="h-5 w-5" />
            {leadsCount > 0 && (
              <span className="absolute top-1.5 right-1 text-[8px] h-3.5 w-3.5 font-bold flex items-center justify-center bg-brand-red text-white rounded-full">
                {leadsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg cursor-pointer ${
              isScrolled ? 'text-white hover:bg-white/10' : 'text-gray-750 hover:bg-gray-150'
            }`}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[73px] bg-brand-navy/98 backdrop-blur-lg border-b border-white/10 text-white shadow-xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollToSection(link.id)}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                  activeSection === link.id
                    ? 'bg-brand-blue text-white font-bold'
                    : 'text-gray-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCRM();
                }}
                className="w-full flex items-center justify-between border border-white/20 bg-white/5 py-2.5 px-4 rounded-xl text-sm font-bold text-gray-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Access Leads CRM Desk
                </span>
                <span className="bg-brand-red px-1.5 py-0.5 text-[10px] rounded text-white">
                  {leadsCount} items
                </span>
              </button>

              <button
                onClick={() => handleScrollToSection('contact')}
                className="w-full flex items-center justify-center gap-1.5 bg-brand-red text-white py-2.5 px-4 rounded-xl text-sm font-bold hover:bg-red-700 transition-all shadow-md cursor-pointer"
              >
                Request Consultation
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
