import React from 'react';
import { X, ShieldCheck, Scale, Cookie, Accessibility, Building } from 'lucide-react';

interface ComplianceModalProps {
  type: 'privacy' | 'terms' | 'cookie' | 'accessibility' | 'disclaimer' | null;
  onClose: () => void;
}

export default function ComplianceModals({ type, onClose }: ComplianceModalProps) {
  if (!type) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: <ShieldCheck className="h-6 w-6 text-brand-blue" />,
      tagline: 'Last updated: June 2026 | Compliant with TDPSA & Federal Regulations',
      body: (
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            KORIX LLC (“we”, “our”, or “us”) operates in compliance with the{' '}
            <strong>Texas Data Privacy and Security Act (TDPSA)</strong> and federal privacy protections.
            This Privacy Policy governs the manner in which KORIX LLC collects, uses, maintains, and
            discloses information collected from users (each, a “Visitor”) of our website.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">1. Personal Information Collection</h4>
          <p>
            We may collect personal identification information from Visitors in a variety of ways,
            including but not limited to, when Visitors visit our site, fill out the “Get a Free Consultation”
            or lead generation form, and in connection with our operational services. Visitors can expect transparent
            collection, where they provide their Full Name, Email, Phone Number, Company, and project context.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">2. Your Rights Under the TDPSA</h4>
          <p>
            As a Texas resident, under the Texas Data Privacy and Security Act, you have explicit rights
            regarding your personal data:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Right to Access:</strong> Confirm whether we are processing your personal data and access
              the specific details of what we collected.
            </li>
            <li>
              <strong>Right to Correct:</strong> Request correction of inaccuracies in your processed personal data.
            </li>
            <li>
              <strong>Right to Delete:</strong> Request deletion of personal data provided by or obtained about you.
            </li>
            <li>
              <strong>Right to Opt-Out:</strong> Opt-out of the processing of your personal data for purposes of
              targeted advertising, selling, or profiling in furtherance of decisions that produce legal effects.
            </li>
          </ul>
          <h4 className="font-bold text-gray-900 text-base mt-2">3. How We Guard and Use Collected Data</h4>
          <p>
            We adopt secure data collection, storage, and processing practices, backed by robust server-level firewalls,
            to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.
            We <strong>never sell, lease, or trade</strong> your personal information to third parties.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">4. Support and Exercise of Rights</h4>
          <p>
            To exercise any of your rights or request further explanation, contact us directly at{' '}
            <span className="text-brand-blue font-medium">korixllc@gmail.com</span>. We will respond within
            the legally mandated 45-day response window under the TDPSA.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms of Service',
      icon: <Scale className="h-6 w-6 text-brand-blue" />,
      tagline: 'Last updated: June 2026',
      body: (
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            Please read these Terms of Service (“Terms”, “Agreement”) carefully before using this website operated by
            KORIX LLC (“KORIX”, “us”, “we”, or “our”). This Agreement sets forth the legally binding terms and
            conditions for your use of the KORIX One-Page Website and associated consulting requests.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">1. Intellectual Property Disclaimer</h4>
          <p>
            The website and its original content, features, vector icons, custom logo, typography designs, and structural
            layout are owned by KORIX LLC and are protected by applicable United States copyright, trademark, and other
            intellectual property laws.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">2. Lead Generation and Form Submissions</h4>
          <p>
            By submitting an inquiry via our “Request Consultation” form, you warrant that all information provided is
            accurate, real, and belongs to you. We reserve the right to decline consultations or ignore spam inputs
            without prior notification.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">3. Limitation of Liability</h4>
          <p>
            In no event shall KORIX LLC, nor its directors, technicians, or affiliates, be held responsible for any
            indirect, accidental, or punitive damages arising from your access to, preview of, or use of our hosting,
            technical resources, or digital consulting outcomes. All custom projects are subject to specialized signed SLAs.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">4. Governing Law</h4>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of Texas, United
            States, without regarding its conflict of law provisions. Any litigation will take place exclusively in state
            or federal courts located within Texas.
          </p>
        </div>
      ),
    },
    cookie: {
      title: 'Cookie Notice',
      icon: <Cookie className="h-6 w-6 text-brand-blue" />,
      tagline: 'Ensuring transparent, secure navigation',
      body: (
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            To provide a responsive, personalized, and rapid digital experience, KORIX LLC uses Standard browser
            Cookies. This Cookie Notice details why we use cookies and how you can manage them.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">1. What Are Cookies?</h4>
          <p>
            Cookies are simple, lightweight text files stored on your desktop or mobile phone when you visit a website.
            They help browser navigation, store preferences, and analyze anonymized layout performance to improve web load speeds.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">2. Types of Cookies We Deploy</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Essential Cookies:</strong> Required to keep our responsive forms functional and store local user state. For example, if you submit a form or manage leads locally, these preferences depend on local memory.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Anonymously measure layout clicks or scrolling transitions to help us optimize Google Core Web Vitals.
            </li>
          </ul>
          <h4 className="font-bold text-gray-900 text-base mt-2">3. Managing Your Choices</h4>
          <p>
            Most web browsers permit you to decline cookies via browser settings. Refer to your browser instructions
            to clear or block them. Note that blocking cookies may affect the operational features of forms.
          </p>
        </div>
      ),
    },
    accessibility: {
      title: 'Accessibility Statement',
      icon: <Accessibility className="h-6 w-6 text-brand-blue" />,
      tagline: 'WCAG 2.1 AA Compliance Pledge',
      body: (
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            KORIX LLC is dedicated to ensuring digital accessibility for everyone, including individuals with disabilities.
            We are actively working to align this corporate one-page agency platform with{' '}
            <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> standards.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">1. Actions and Optimization</h4>
          <p>
            To achieve our digital inclusion standards, we have implemented several core enhancements:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Contrast Ratio Validation:</strong> All core text elements, brand buttons, and hover configurations have been verified to exceed a contrast ratio of at least 4.5:1.
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Form inputs, interactive modals, and navigation nodes support direct tab keys and enter-command triggers.
            </li>
            <li>
              <strong>Descriptive Layout Tagging:</strong> SVG brand marks and design vectors include explicit `aria-hidden="true"` tags or structured labels to ensure compatibility with modern screen readers.
            </li>
          </ul>
          <h4 className="font-bold text-gray-900 text-base mt-2">2. Continuous Feedback</h4>
          <p>
            We are continually reviewing and improving our technical interfaces. If you encounter any barriers or need help accessing any information on this site, contact our local team leader at{' '}
            <span className="text-brand-blue font-semibold">korixllc@gmail.com</span>, and we will immediately accommodate your needs.
          </p>
        </div>
      ),
    },
    disclaimer: {
      title: 'Business & Regulatory Disclaimer',
      icon: <Building className="h-6 w-6 text-brand-blue" />,
      tagline: 'Texas Compliance & Legal Status Notice',
      body: (
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            This business disclaimer outlines the regulatory and corporate standing of KORIX LLC.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">1. Texas State Compliance</h4>
          <p>
            KORIX LLC operates in strict compliance with applicable State of Texas and United States business
            regulations. We are registered in Texas and coordinate with partners internationally and locally.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">2. Professional Consultative Deliverables</h4>
          <p>
            The informational content on this agency portfolio website is intended solely for client evaluation.
            All estimates, schedules, quotes, and technology audits provided during consultations are prelimary; formal
            contractual obligations only arise upon signing an explicit Master Services Agreement (MSA) with us.
          </p>
          <h4 className="font-bold text-gray-900 text-base mt-2">3. Secure Infrastructure Scope</h4>
          <p>
            While KORIX LLC designs and hosts high-security websites with daily automated backups and SSL tunnels, third-party hosting dependencies operate on external SLA terms. We coordinate and choose high-speed, military-grade cloud hosts, but do not own the global physical web lines.
          </p>
        </div>
      ),
    },
  };

  const selected = content[type];

  return (
    <div id="compliance-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dimmed Background Overlay */}
      <div
        id="compliance-overlay"
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* Modal Card */}
      <div
        id="compliance-modal-card"
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-100 flex flex-col max-h-[85vh] z-10 transition-transform duration-350 scale-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div id="compliance-modal-header" className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-3">
            <span id="modal-title-icon">{selected.icon}</span>
            <div>
              <h3 id="modal-title-heading" className="text-xl font-display font-bold text-brand-navy">
                {selected.title}
              </h3>
              <p id="modal-title-tagline" className="text-xs text-brand-blue/80 font-mono mt-0.5 font-medium">
                {selected.tagline}
              </p>
            </div>
          </div>
          <button
            id="close-modal-x"
            onClick={onClose}
            className="p-1 px-1.5 text-gray-400 hover:text-brand-red rounded-lg hover:bg-gray-100 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-label="Close modal dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div id="compliance-modal-body" className="px-6 py-6 overflow-y-auto space-y-4">
          {selected.body}
        </div>

        {/* Footer actions */}
        <div id="compliance-modal-footer" className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-brand-navy text-white hover:bg-brand-blue transition-all cursor-pointer shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
