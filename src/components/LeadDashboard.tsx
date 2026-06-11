import React, { useState } from 'react';
import { X, Calendar, ClipboardList, Mail, Phone, Building, Layers, Trash2, Check, CloudDownload } from 'lucide-react';
import { Lead } from '../types';

interface LeadDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  leads: Lead[];
  onUpdateLead: (id: string, updated: Partial<Lead>) => void;
  onDeleteLead: (id: string) => void;
}

export default function LeadDashboard({
  isOpen,
  onClose,
  leads,
  onUpdateLead,
  onDeleteLead
}: LeadDashboardProps) {
  const [activeLeadId, setActiveLeadId] = useState<string | null>(leads[0]?.id || null);
  const [notesText, setNotesText] = useState('');

  if (!isOpen) return null;

  const activeLead = leads.find(l => l.id === activeLeadId) || leads[0];

  const handleStatusChange = (id: string, status: 'New' | 'In Progress' | 'Contacted') => {
    onUpdateLead(id, { status });
  };

  const handleSaveNotes = () => {
    if (activeLead) {
      onUpdateLead(activeLead.id, { notes: notesText });
    }
  };

  const handleSelectLead = (lead: Lead) => {
    setActiveLeadId(lead.id);
    setNotesText(lead.notes || '');
  };

  // Export Leads to JSON file
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(leads, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `korix_leads_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div id="lead-crm-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Overlay */}
      <div
        id="lead-crm-overlay"
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy/70 backdrop-blur-md transition-opacity duration-300"
      ></div>

      {/* Main CRM Card */}
      <div
        id="lead-crm-card"
        className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-gray-100 flex flex-col md:flex-row h-[85vh] z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        
        {/* Left Side: Sidebar Lead List */}
        <div id="crm-sidebar" className="w-full md:w-80 border-r border-gray-100 flex flex-col bg-gray-50/50">
          <div id="crm-sidebar-header" className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-brand-navy text-lg flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-brand-blue" />
                Consultation CRM
              </h3>
              <p className="text-[11px] font-mono text-gray-500">Stored in DB (Local Storage)</p>
            </div>
            <span className="bg-brand-blue/15 text-brand-blue text-[11px] font-bold px-2 py-0.5 rounded-full">
              {leads.length} Leads
            </span>
          </div>

          {/* Lead List Scroll Wrapper */}
          <div id="crm-sidebar-list" className="flex-grow overflow-y-auto divide-y divide-gray-50">
            {leads.length === 0 ? (
              <div className="p-8 text-center text-gray-400 text-sm">
                No consultations requested yet. Use the public contact form to submit a lead!
              </div>
            ) : (
              leads.map((l) => {
                const isSelected = activeLead?.id === l?.id;
                const statusColors = {
                  New: 'bg-brand-red text-white',
                  'In Progress': 'bg-amber-400 text-gray-900',
                  Contacted: 'bg-emerald-500 text-white'
                };
                return (
                  <button
                    key={l.id}
                    onClick={() => handleSelectLead(l)}
                    className={`w-full text-left p-4 hover:bg-gray-100/70 transition-all flex flex-col gap-1 cursor-pointer focus:outline-none ${
                      isSelected ? 'bg-white border-l-4 border-brand-blue shadow-inner' : ''
                    }`}
                  >
                    <div className="flex justify-between items-baseline">
                      <span className="font-display font-bold text-sm text-brand-navy truncate max-w-[120px]">
                        {l.fullName}
                      </span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${statusColors[l.status]}`}>
                        {l.status}
                      </span>
                    </div>

                    <div className="text-[11px] text-gray-600 truncate flex items-center gap-1">
                      <Building className="h-3 w-3 inline opacity-75" />
                      {l.companyName || 'No Company'}
                    </div>

                    <div className="text-[10px] text-gray-400 font-mono mt-1 flex items-center justify-between">
                      <span className="flex items-center gap-0.5">
                        <Calendar className="h-3 w-3 inline opacity-75" />
                        {new Date(l.submittedAt).toLocaleDateString()}
                      </span>
                      <span className="text-[11px] font-semibold text-brand-blue truncate max-w-[90px]">
                        {l.serviceNeeded}
                      </span>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Export Panel */}
          {leads.length > 0 && (
            <div className="p-3 border-t border-gray-100 bg-gray-100 flex gap-2">
              <button
                onClick={handleExportJSON}
                className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-brand-navy bg-white hover:bg-brand-blue hover:text-white rounded-lg shadow-sm border border-gray-200 transition-all cursor-pointer"
              >
                <CloudDownload className="h-4 w-4" />
                Export CRM JSON
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Active Lead Detail Panel */}
        <div id="crm-body" className="flex-grow flex flex-col bg-white">
          <div id="crm-body-header" className="p-4 border-b border-gray-150 flex justify-between items-center bg-gray-50/20">
            <div>
              <h4 className="font-display font-bold text-brand-navy text-base">Inquiry Detailed Records</h4>
              <p className="text-[11px] text-gray-400">Review, update lead states, and persist notes.</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 px-1.5 rounded-lg text-gray-400 hover:text-brand-red hover:bg-gray-100 transition-all cursor-pointer focus:outline-none"
              aria-label="Close Leads CRM Console"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Detail Grid */}
          {activeLead ? (
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              
              {/* Profile Card & Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-brand-navy text-white font-display font-bold text-xl flex items-center justify-center shadow-md">
                      {activeLead.fullName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy leading-none">
                        {activeLead.fullName}
                      </h3>
                      <p className="text-sm text-brand-blue font-medium mt-1">
                        {activeLead.companyName ? `Company: ${activeLead.companyName}` : 'Independent Entrepreneur'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-sm my-3 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-4 w-4 text-brand-blue shrink-0" />
                      <a href={`mailto:${activeLead.email}`} className="hover:underline hover:text-brand-blue">
                        {activeLead.email}
                      </a>
                    </div>
                    {activeLead.phone && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4 text-brand-blue shrink-0" />
                        <a href={`tel:${activeLead.phone}`} className="hover:underline">
                          {activeLead.phone}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-600">
                      <Layers className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Service Requested: <strong className="text-brand-blue">{activeLead.serviceNeeded}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Status Controls */}
                <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-150 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                      Update Administrative Workflow Status
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {(['New', 'In Progress', 'Contacted'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => handleStatusChange(activeLead.id, st)}
                          className={`py-1.5 px-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                            activeLead.status === st
                              ? st === 'New'
                                ? 'bg-brand-red text-white shadow-sm'
                                : st === 'In Progress'
                                ? 'bg-amber-400 text-gray-900 shadow-sm'
                                : 'bg-emerald-500 text-white shadow-sm'
                              : 'bg-white hover:bg-gray-100 border border-gray-200 text-gray-700'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200/60 pt-3 mt-3">
                    <span className="text-[11px] font-mono text-gray-400">
                      Inbound Date: {new Date(activeLead.submittedAt).toLocaleString()}
                    </span>
                    <button
                      onClick={() => {
                        onDeleteLead(activeLead.id);
                        if (leads.length > 1) {
                          setActiveLeadId(leads.find(l => l.id !== activeLead.id)?.id || null);
                        }
                      }}
                      className="p-1 px-2 hover:bg-brand-red/10 text-gray-400 hover:text-brand-red rounded-lg transition-all flex items-center gap-1 text-xs cursor-pointer"
                      title="Remove lead"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {/* Message Block */}
              <div id="crm-message-block">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Inbound Message / Project Requirement
                </span>
                <div id="crm-inbound-msg-pane" className="bg-gray-50/80 p-4 rounded-xl border border-gray-150 text-sm text-gray-700 leading-relaxed italic whitespace-pre-line">
                  "{activeLead.message}"
                </div>
              </div>

              {/* Technician Notes Panel */}
              <div id="crm-tech-notes-panel" className="space-y-2 border-t border-gray-100 pt-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex justify-between">
                  <span>Internal Technician Notes</span>
                  <span className="text-[10px] font-mono normal-case text-brand-blue">Auto-saved on change</span>
                </span>
                <textarea
                  value={notesText}
                  onChange={(e) => {
                    setNotesText(e.target.value);
                    onUpdateLead(activeLead.id, { notes: e.target.value });
                  }}
                  placeholder="Insert notes regarding phone consultations, budget specifications, timeline estimations..."
                  rows={4}
                  className="w-full text-sm p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none bg-white font-sans text-gray-800"
                />
              </div>

            </div>
          ) : (
            <div id="crm-dashboard-empty" className="flex-grow flex flex-col items-center justify-center p-8 text-center text-gray-400">
              <ClipboardList className="h-16 w-16 opacity-25 mb-3" />
              <p className="text-sm font-medium">Please select a lead from the sidebar or wait for submissions.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
