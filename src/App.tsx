import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComplianceModals from './components/ComplianceModals';
import LeadDashboard from './components/LeadDashboard';
import { Lead } from './types';

// Prepopulated high-fidelity consulting leads for Texas operations demonstration
const SAMPLE_MOCK_LEADS: Lead[] = [
  {
    id: 'lead-mock-1',
    fullName: 'John Henderson',
    companyName: 'Apex Financial Advisories',
    email: 'j.henderson@apexfinancial.com',
    phone: '(512) 555-8291',
    serviceNeeded: 'Website Design',
    message: 'We are seeking a premium, high-converting corporate redesign for our wealth management firm. Real-time portfolio displays and rich typography are key requirements.',
    submittedAt: '2026-06-08T09:30:00.000Z',
    status: 'In Progress',
    notes: 'Schedules established for Zoom prototype review on Friday. John requested deep slate accents and clear trust signals.'
  },
  {
    id: 'lead-mock-2',
    fullName: 'Marcus Sterling',
    companyName: 'Sterling Logistics Solutions',
    email: 'm.sterling@sterlingways.net',
    phone: '(214) 555-0922',
    serviceNeeded: 'Web Hosting Solutions',
    message: 'Our shipping software is experiencing latency spikes on our legacy host. We need secure, high-speed Texas-based SSD hosting clusters with automated daily backups.',
    submittedAt: '2026-06-09T14:45:00.000Z',
    status: 'New',
    notes: 'Pending initial server bandwidth audit. Will recommend KORIX secure tier-3 Texas server array.'
  },
  {
    id: 'lead-mock-3',
    fullName: 'Dr. Evelyn Ross',
    companyName: 'Fort Worth Dental Practice',
    email: 'evelynross@rossfamilydental.com',
    phone: '(817) 555-3344',
    serviceNeeded: 'SEO Optimization',
    message: 'We want to capture patient search traffic in the Tarrant County area. Please run a comprehensive local SEO keywords audit and inject index structured schema.',
    submittedAt: '2026-06-10T11:15:00.000Z',
    status: 'Contacted',
    notes: 'Audit delivered last Tuesday. Patient bookings showed a 24% increase. Ongoing keyword targets mapped.'
  }
];

export default function App() {
  // Leads list state synced to local storage
  const [leads, setLeads] = useState<Lead[]>([]);
  
  // Modals / Overlays control state
  const [activeComplianceModal, setActiveComplianceModal] = useState<'privacy' | 'terms' | 'cookie' | 'accessibility' | 'disclaimer' | null>(null);
  const [isCRMOpen, setIsCRMOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  // Initial load: sync or bootstrap fallback sample leads
  useEffect(() => {
    const stored = localStorage.getItem('korix_leads');
    if (stored) {
      try {
        setLeads(JSON.parse(stored));
      } catch (err) {
        setLeads(SAMPLE_MOCK_LEADS);
      }
    } else {
      setLeads(SAMPLE_MOCK_LEADS);
      localStorage.setItem('korix_leads', JSON.stringify(SAMPLE_MOCK_LEADS));
    }
  }, []);

  // Save changes helper
  const saveLeadsToStorage = (updatedList: Lead[]) => {
    setLeads(updatedList);
    localStorage.setItem('korix_leads', JSON.stringify(updatedList));
  };

  // Add lead callback from public intake form
  const handleAddLead = (newFields: Omit<Lead, 'id' | 'submittedAt' | 'status'>) => {
    const freshLead: Lead = {
      ...newFields,
      id: `lead-f-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'New',
      notes: ''
    };
    const newList = [freshLead, ...leads];
    saveLeadsToStorage(newList);
  };

  // Update notes, status, etc., in CRM
  const handleUpdateLead = (id: string, updatedFields: Partial<Lead>) => {
    const newList = leads.map(l => l.id === id ? { ...l, ...updatedFields } : l);
    saveLeadsToStorage(newList);
  };

  // Delete lead
  const handleDeleteLead = (id: string) => {
    const newList = leads.filter(l => l.id !== id);
    saveLeadsToStorage(newList);
  };

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 85,
        behavior: 'smooth',
      });
    }
  };

  // Click on service card -> sets dropdown & scroll Down to form
  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    setTimeout(() => {
      // Clear preselection state after scroll injection
      setPreselectedService('');
    }, 1500);
  };

  return (
    <div id="korix-app-root" className="min-h-screen bg-gray-50/50 flex flex-col font-sans selection:bg-brand-blue selection:text-white antialiased text-gray-800">
      
      {/* Dynamic Header */}
      <Header onOpenCRM={() => setIsCRMOpen(true)} leadsCount={leads.length} />

      {/* Main Structural Page Layout */}
      <main className="flex-grow">
        
        {/* 1. Hero banner stage with float particles & trust factors */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* 2. About KORIX agency information & local certifications */}
        <About />

        {/* 3. Services catalog with preselection scroll targets */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Why partnership features Blocks & animated counter metrics */}
        <WhyChooseUs />

        {/* 5. Modern portfolio filter showcase gallery & dialog case views */}
        <Portfolio />

        {/* 6. Client testimonials slide carousel */}
        <Testimonials />

        {/* 7. Focus • Plan • Execute • Win timelines */}
        <Process />

        {/* 8. Lead generation responsive Contact Form & localized cards */}
        <Contact onAddLead={handleAddLead} preselectedService={preselectedService} />

      </main>

      {/* Footer link anchors & regulatory descriptors */}
      <Footer onScrollToSection={handleScrollToSection} onOpenCompliance={setActiveComplianceModal} />

      {/* Compliance policies overlay modals subsystem */}
      <ComplianceModals type={activeComplianceModal} onClose={() => setActiveComplianceModal(null)} />

      {/* Leads administrative CRM Console desk */}
      <LeadDashboard
        isOpen={isCRMOpen}
        onClose={() => setIsCRMOpen(false)}
        leads={leads}
        onUpdateLead={handleUpdateLead}
        onDeleteLead={handleDeleteLead}
      />

    </div>
  );
}
