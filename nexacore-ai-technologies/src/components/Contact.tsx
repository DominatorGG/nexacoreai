import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle, 
  Send, 
  Terminal, 
  Activity, 
  Cpu, 
  Building, 
  Sparkles 
} from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'rag_integration'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple verification
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please populate required credentials (*). Name, email and message lines are essential.');
      return;
    }

    if (!formData.email.includes('@')) {
      setValidationError('Invalid email routing path. Missing typical domain indicators.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API database synchronization
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form variables
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        interest: 'rag_integration'
      });
    }, 1800);
  };

  return (
    <div className="relative min-h-screen bg-brand-dark pt-28 pb-20 overflow-hidden">
      {/* Structural background assets */}
      <div className="absolute inset-0 cyber-grid opacity-35" />
      <div className="absolute top-[10%] left-[10%] w-[450px] h-[450px] rounded-full bg-brand-blue-bright/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[380px] h-[380px] rounded-full bg-brand-blue-bright/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple Page Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-brand-blue-bright/20">
            <Terminal className="w-3.5 h-3.5 text-brand-blue-bright light:text-brand-blue" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">Secure Consultation Port</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white light:text-brand-dark tracking-tight leading-none">
            Connect <span className="text-brand-blue-bright light:text-brand-blue">Sovereign</span>
          </h1>
          <p className="text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed">
            Establish communication secure lines with Nexacore's Marathahalli headquarters. Schedule strategic model evaluations or sandbox trials.
          </p>
        </div>

        {/* Double Column: Contact Form vs Bengaluru Vector HUB Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Form Sandbox */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-neutral-900/90 light:bg-neutral-50 border border-neutral-800 light:border-neutral-200 p-6 sm:p-8 rounded-2xl shadow-2xl relative h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit} 
                    className="space-y-5 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                        <h3 className="font-display font-medium text-white light:text-brand-dark text-base uppercase tracking-wider flex items-center gap-2">
                          <Building className="w-4 h-4 text-brand-blue-bright light:text-brand-blue" />
                          Evaluation Proposal Form
                        </h3>
                        <span className="font-mono text-[9px] text-neutral-500 uppercase">SSL Engaged</span>
                      </div>

                      {/* Validation Warn message */}
                      {validationError && (
                        <div className="p-3.5 rounded-lg border border-red-500/20 bg-red-500/5 font-mono text-xs text-red-400">
                          {validationError}
                        </div>
                      )}

                      {/* Grid Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1 text-left">
                          <label className="block font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">User Identity *</label>
                          <input
                            id="form-name-input"
                            type="text"
                            name="name"
                            className="w-full bg-brand-dark/90 light:bg-white text-white light:text-brand-dark border border-neutral-800 light:border-neutral-250 p-3 rounded-lg focus:border-brand-blue-bright focus:outline-none font-sans text-xs transition-colors"
                            placeholder="Enter full name..."
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="space-y-1 text-left">
                          <label className="block font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">Email Routing Port *</label>
                          <input
                            id="form-email-input"
                            type="text"
                            name="email"
                            className="w-full bg-brand-dark/90 light:bg-white text-white light:text-brand-dark border border-neutral-800 light:border-neutral-250 p-3 rounded-lg focus:border-brand-blue-bright focus:outline-none font-sans text-xs transition-colors"
                            placeholder="Enter corporate email..."
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Company Name & Interest */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1 text-left">
                          <label className="block font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">Corporate Entity</label>
                          <input
                            id="form-company-input"
                            type="text"
                            name="company"
                            className="w-full bg-brand-dark/90 light:bg-white text-white light:text-brand-dark border border-neutral-800 light:border-neutral-250 p-3 rounded-lg focus:border-brand-blue-bright focus:outline-none font-sans text-xs transition-colors"
                            placeholder="Company Pvt Ltd / LLC..."
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="space-y-1 text-left">
                          <label className="block font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">System Capability Interest</label>
                          <select
                            id="form-interest-select"
                            name="interest"
                            className="w-full bg-brand-dark/90 light:bg-white text-white light:text-brand-dark border border-neutral-800 light:border-neutral-250 p-3 rounded-lg focus:border-brand-blue-bright focus:outline-none font-mono text-xs transition-colors"
                            value={formData.interest}
                            onChange={handleInputChange}
                          >
                            <option value="rag_integration">LLMs & Private RAG Databases</option>
                            <option value="autonomous_swarm">Intelligent Swarm Automation</option>
                            <option value="strategic_consulting">Sovereign Transformation Audit</option>
                            <option value="cuda_infra">GPU Compute Cluster Alignments</option>
                          </select>
                        </div>
                      </div>

                      {/* Project Message */}
                      <div className="space-y-1 text-left">
                        <label className="block font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">Audit Parameter specifications *</label>
                        <textarea
                          id="form-message-input"
                          name="message"
                          rows={4}
                          className="w-full bg-brand-dark/90 light:bg-white text-white light:text-brand-dark border border-neutral-800 light:border-neutral-250 p-3 rounded-lg focus:border-brand-blue-bright focus:outline-none font-sans text-xs transition-colors leading-relaxed"
                          placeholder="Detail your operational bottlenecks or required context windows..."
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Action trigger button */}
                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand-blue-bright hover:bg-blue-600 disabled:opacity-50 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-[0_4px_30px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 group mt-6 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-spin text-white" />
                          Synchronizing Credentials...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          Transmit Secure Signals
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-5"
                  >
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <h3 className="font-display font-bold text-xl text-white">Signal Transmitted Successful</h3>
                      <p className="text-neutral-400 font-sans text-sm max-w-md">
                        Your strategic AI consultation signal has bypassed model firewalls and synchronized in our database. Our expert coordinator (Marathahalli center) will initiate secure contact within 8 operating hours.
                      </p>
                    </div>

                    <button
                      id="success-form-reset"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-neutral-900 border border-neutral-800 hover:border-brand-blue-bright light:hover:border-brand-blue text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded"
                    >
                      Open New Signal Channel
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Physical Headquarters Map & Mail Dispatch */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Custom Vector HUD Map */}
            <div className="bg-neutral-900 border border-neutral-850 p-5 rounded-2xl relative shadow-2xl overflow-hidden aspect-video flex-1 flex flex-col">
              <div className="flex items-center justify-between border-b border-neutral-850 pb-2.5 font-mono text-[8px] uppercase text-neutral-500">
                <span>Marathahalli, Bengaluru GIS Grid</span>
                <span className="text-brand-blue-bright light:text-brand-blue font-bold font-mono">12.9562° N, 77.7025° E</span>
              </div>

              {/* Graphic container */}
              <div className="flex-1 relative my-3 overflow-hidden flex items-center justify-center rounded-lg bg-brand-dark">
                {/* SVG lines mimicking airport/high-tech grid */}
                <svg className="absolute w-full h-full text-neutral-900" viewBox="0 0 100 100">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.25" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.25" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.25" />
                  <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.25" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.25" />
                  <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.25" />

                  {/* Concentric rings around center Marathahalli headquarters pin */}
                  <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-neutral-800" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-neutral-800" />

                  {/* Glowing signal ring expansion */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="0.5"
                    animate={{ scale: [0.2, 1], opacity: [0.8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                  />
                </svg>

                {/* HQ Glowing Dot Anchor */}
                <div className="absolute z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-blue-bright/20 border border-brand-blue-bright flex items-center justify-center relative">
                    <span className="absolute w-4 h-4 rounded-full bg-brand-blue-bright animate-ping" />
                    <MapPin className="w-4 h-4 text-brand-blue-bright fill-brand-blue-bright" />
                  </div>
                  <span className="font-mono text-[8px] font-bold text-white uppercase mt-1 bg-neutral-950 px-1.5 py-0.5 rounded border border-neutral-800 shadow-md">
                    Nexacore HQ
                  </span>
                </div>

                {/* HUD Compass coordinate Overlay */}
                <div className="absolute bottom-2 left-2 p-1 px-2.5 rounded bg-neutral-950 border border-neutral-850 font-mono text-[8px] text-zinc-500 uppercase flex items-center gap-1">
                  <Activity className="w-3 h-3 text-brand-blue-bright light:text-brand-blue animate-pulse" />
                  HQ COORDINATES CONFIRMED
                </div>
              </div>

              {/* Physical Location Text Block */}
              <div className="pt-2 font-sans text-xs text-neutral-400 text-left border-t border-neutral-850 leading-relaxed font-sans">
                <p>#52, 3rd Cross, Aswath Nagar, Marathahalli, Bengaluru, Karnataka-560037, India.</p>
              </div>
            </div>

            {/* Email triggers box */}
            <div className="p-5 bg-neutral-905 border border-neutral-850 rounded-2xl flex flex-col space-y-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-[0.15em] text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue-bright light:text-brand-blue" />
                Dispatch Direct Inbound Mail
              </h4>
              <p className="text-neutral-500 text-xs font-sans leading-relaxed text-left">
                Bypass evaluation forms entirely. Trigger direct operating communication protocols with specialized departments.
              </p>

              {/* Clickable real email accounts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="direct-hr-email"
                  href="mailto:hr@nexacoreai.com"
                  className="p-3 bg-neutral-950 border border-neutral-900 rounded-xl hover:border-brand-blue-bright/50 group transition-all flex flex-col items-start gap-1"
                >
                  <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider font-semibold">Human Resources & Careers</span>
                  <span className="font-mono text-xs text-neutral-300 group-hover:text-brand-blue-bright light:group-hover:text-brand-blue transition-colors flex items-center gap-1 font-bold">
                    hr@nexacoreai.com
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  id="direct-mounika-email"
                  href="mailto:mounika@nexacoreai.com"
                  className="p-3 bg-neutral-950 border border-neutral-900 rounded-xl hover:border-brand-blue-bright/50 group transition-all flex flex-col items-start gap-1"
                >
                  <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider font-semibold">Executive & Sales</span>
                  <span className="font-mono text-xs text-neutral-300 group-hover:text-brand-blue-bright light:group-hover:text-brand-blue transition-colors flex items-center gap-1 font-bold">
                    mounika@nexacoreai.com
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
