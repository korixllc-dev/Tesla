import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, CalendarCheck, ShieldCheck, Megaphone, Loader2 } from 'lucide-react';
import { Lead } from '../types';

interface ContactProps {
  onAddLead: (lead: Omit<Lead, 'id' | 'submittedAt' | 'status'>) => void;
  preselectedService: string;
}

export default function Contact({ onAddLead, preselectedService }: ContactProps) {
  // Form input states
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Website Design');
  const [message, setMessage] = useState('');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');

  // Handle service preselection scrolls
  useEffect(() => {
    if (preselectedService) {
      setServiceNeeded(preselectedService);
      // Highlight form boundary
      const el = document.getElementById('lead-submission-form-container');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-brand-blue/30', 'scale-[1.01]');
        const timer = setTimeout(() => {
          el.classList.remove('ring-4', 'ring-brand-blue/30', 'scale-[1.01]');
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    // Basic fields validation
    if (!fullName.trim()) {
      setErrorText('Full Name is required.');
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      setErrorText('Please specify a valid business email address.');
      return;
    }
    if (!message.trim()) {
      setErrorText('Please outline some project requirements.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write delay
    setTimeout(() => {
      onAddLead({
        fullName,
        companyName,
        email,
        phone,
        serviceNeeded,
        message,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear inputs
      setFullName('');
      setCompanyName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  const validateEmail = (val: string) => {
    return /^[\w\.-]+@[\w\.-]+\.\w+$/.test(val);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* Mesh Background */}
      <div className="absolute left-[5%] bottom-[5%] w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Left: Business metadata & Texas vector map layout */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-red font-mono text-xs uppercase tracking-widest font-bold block">
                Get In Touch
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight leading-none">
                Start Your Project <br />
                <span className="text-brand-blue">With Texas Experts</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-sans">
                Our local team members are standing by to guide your digital transformation. Direct consultations, itemized pricing structures, and quick turnarounds.
              </p>
            </div>

            {/* Standard contact list metadata */}
            <div className="space-y-4 pt-4 border-t border-gray-150">
              
              {/* Location Card */}
              <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-2xl border border-gray-150">
                <div className="p-2.5 bg-white shadow-sm rounded-xl text-brand-blue text-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-navy">Texas Headquarters</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    100 Congress Ave., Suite 2000, Austin, TX 78701
                  </p>
                  <span className="text-[10px] text-brand-red font-mono font-bold uppercase mt-1 inline-block">Registered Texas LLC</span>
                </div>
              </div>

              {/* Telephone card */}
              <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-2xl border border-gray-150">
                <div className="p-2.5 bg-white shadow-sm rounded-xl text-brand-blue text-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-navy">Direct Consultation Desk</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Phone:{' '}
                    <a href="tel:5125550190" className="font-bold text-brand-blue hover:underline">
                      (512) 555-0190
                    </a>
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Emergency lines dispatch active 24/7</p>
                </div>
              </div>

              {/* Email Address card */}
              <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-2xl border border-gray-150">
                <div className="p-2.5 bg-white shadow-sm rounded-xl text-brand-blue text-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-navy">Technician Email Inbox</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    General Inquiries:{' '}
                    <a href="mailto:korixllc@gmail.com" className="font-bold text-brand-blue hover:underline">
                      korixllc@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-2xl border border-gray-150">
                <div className="p-2.5 bg-white shadow-sm rounded-xl text-brand-blue text-sm">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-navy">Business Hours</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Monday – Friday: 8:00 AM – 6:00 PM CST <br />
                    Saturday: 9:00 AM – 2:00 PM CST
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Right: Lead intake form card */}
          <div className="lg:col-span-7">
            
            <div
              id="lead-submission-form-container"
              className="bg-gray-50 border border-gray-150 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-350"
            >
              <div className="border-b border-gray-200/80 pb-5 mb-6 flex justify-between items-center">
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-navy">Request a Free consultation</h3>
                  <p className="text-xs text-gray-500 mt-1">Receive custom itemized estimates within 1 business day.</p>
                </div>
                <div className="p-2.5 bg-brand-blue/10 rounded-xl text-brand-blue hidden sm:block shrink-0">
                  <CalendarCheck className="h-5 w-5" />
                </div>
              </div>

              {isSuccess ? (
                /* Submission Success Banner */
                <div id="contact-success-state" className="text-center py-10 px-4 space-y-4 animate-in fade-in duration-200">
                  <div className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/25">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-brand-navy">Consultation Requested!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you! Your project goals have been successfully synchronized to our Texas developer CRM board. A company specialist will call or email you shortly.
                  </p>
                  
                  <div className="bg-white border border-gray-150 p-3 rounded-xl max-w-sm mx-auto my-3 text-[11px] font-mono text-brand-blue">
                    ✓ Mock Lead added to CRM desk (Local Storage)
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-2.5 bg-brand-navy text-white hover:bg-brand-blue duration-150 uppercase text-xs tracking-wider rounded-lg font-bold shadow-xs hover:shadow-md cursor-pointer inline-block"
                  >
                    Request Another Service
                  </button>
                </div>
              ) : (
                /* Intake Form Fields */
                <form id="contact-intake-form" onSubmit={handleSubmit} className="space-y-4">
                  {errorText && (
                    <div className="p-3.5 rounded-xl bg-brand-red/10 border border-brand-red/25 text-brand-red text-xs font-semibold leading-relaxed">
                      ⚠️ {errorText}
                    </div>
                  )}

                  {/* Two columns: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-navy block uppercase tracking-wider">
                        Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full text-sm p-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-navy block uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Texas Enterprises LLC"
                        className="w-full text-sm p-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Two columns: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-navy block uppercase tracking-wider">
                        Business Email <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full text-sm p-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-navy block uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(512) 555-0190"
                        className="w-full text-sm p-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Dropdown: Service Needed */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy block uppercase tracking-wider">
                      Service Needed <span className="text-brand-red">*</span>
                    </label>
                    <select
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      className="w-full text-sm p-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none font-sans"
                    >
                      <option value="Website Design">Website Design (Mockups, UX/UI, Redesigns)</option>
                      <option value="Website Development">Website Development (React, Custom functional, E-commerce)</option>
                      <option value="Web Hosting Solutions">Web Hosting Solutions (Fast Servers, SSL, daily backups)</option>
                      <option value="SEO Optimization">SEO Optimization (Technical SEO, local search ranks)</option>
                      <option value="Website Maintenance">Website Maintenance (Plugin updates, emergency assistance)</option>
                      <option value="Business Digital Solutions">Business Digital Solutions (Workflows, CRM setups)</option>
                      <option value="Specialized Custom Architecture">Specialized Custom Architecture (Full Stack Enterprise project)</option>
                    </select>
                  </div>

                  {/* Textarea: Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy block uppercase tracking-wider">
                      Business Goals & Requirements <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share a short summary of what goals you want to focus, execute, and win..."
                      rows={4}
                      className="w-full text-sm p-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none font-sans"
                      required
                    />
                  </div>

                  {/* Compliance Agreement disclosure */}
                  <p className="text-[11px] text-gray-400 leading-relaxed pt-2">
                    By requesting a consultation, you agree that KORIX LLC collects and manages personal information in accordance with state and federal requirements under our Privacy Policy.
                  </p>

                  {/* Form Submission Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#C8102E] text-white hover:bg-neutral-900 font-sans font-bold uppercase text-xs tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.01] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin shrink-0" />
                          Scheduling Auditor...
                        </>
                      ) : (
                        'Request Free Consultation'
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
