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
    <div className="relative min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      {/* Structural background assets */}
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#1D4ED8]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Cinematic Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-6 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-[#1E293B] shadow-[inset_0_0_15px_rgba(59,130,246,0.05)]">
            <Terminal className="w-4 h-4 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold">Secure Consultation Port</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white tracking-tight leading-none">
            Connect <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Sovereign</span>
          </h1>
          <p className="text-[#94A3B8] text-lg sm:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Establish communication secure lines with Nexacore's Marathahalli headquarters. Schedule strategic model evaluations or sandbox trials.
          </p>
        </motion.div>

        {/* Double Column: Contact Form vs Bengaluru Vector HUB Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Form Sandbox */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="bg-[#0A1020]/80 backdrop-blur-2xl border border-[#1E293B] p-8 sm:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_0_40px_rgba(30,41,59,0.5)] relative h-full flex flex-col justify-between">
              {/* Ambient inner glow */}
              <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#1D4ED8]/5 blur-[100px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit} 
                    className="space-y-6 flex-1 flex flex-col justify-between relative z-10"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
                        <h3 className="font-display font-medium text-white text-lg uppercase tracking-widest flex items-center gap-3">
                          <Building className="w-5 h-5 text-[#60A5FA] drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]" />
                          Evaluation Proposal Form
                        </h3>
                        <span className="font-mono text-[10px] text-[#34D399] uppercase font-bold tracking-widest drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]">SSL Engaged</span>
                      </div>

                      {/* Validation Warn message */}
                      {validationError && (
                        <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 font-mono text-[11px] text-red-400 font-bold uppercase tracking-widest">
                          {validationError}
                        </div>
                      )}

                      {/* Grid Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2 text-left">
                          <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold">User Identity *</label>
                          <input
                            id="form-name-input"
                            type="text"
                            name="name"
                            className="w-full bg-[#050B14] text-white border border-[#1E293B] p-4 rounded-xl focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] focus:outline-none font-sans text-sm transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] placeholder-neutral-600"
                            placeholder="Enter full name..."
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="space-y-2 text-left">
                          <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold">Email Routing Port *</label>
                          <input
                            id="form-email-input"
                            type="text"
                            name="email"
                            className="w-full bg-[#050B14] text-white border border-[#1E293B] p-4 rounded-xl focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] focus:outline-none font-sans text-sm transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] placeholder-neutral-600"
                            placeholder="Enter corporate email..."
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Company Name & Interest */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2 text-left">
                          <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold">Corporate Entity</label>
                          <input
                            id="form-company-input"
                            type="text"
                            name="company"
                            className="w-full bg-[#050B14] text-white border border-[#1E293B] p-4 rounded-xl focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] focus:outline-none font-sans text-sm transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] placeholder-neutral-600"
                            placeholder="Company Pvt Ltd / LLC..."
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="space-y-2 text-left">
                          <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold">System Capability Interest</label>
                          <select
                            id="form-interest-select"
                            name="interest"
                            className="w-full bg-[#050B14] text-white border border-[#1E293B] p-4 rounded-xl focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] focus:outline-none font-mono text-sm transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
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
                      <div className="space-y-2 text-left">
                        <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold">Audit Parameter specifications *</label>
                        <textarea
                          id="form-message-input"
                          name="message"
                          rows={4}
                          className="w-full bg-[#050B14] text-white border border-[#1E293B] p-4 rounded-xl focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] focus:outline-none font-sans text-sm transition-all leading-relaxed shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] placeholder-neutral-600"
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
                      className="w-full py-5 bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-50 text-white font-mono text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4),inset_0_2px_5px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-3 group mt-8 cursor-pointer relative overflow-hidden"
                    >
                      {/* Button highlight sweep effect */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      
                      {isSubmitting ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-spin text-white" />
                          Synchronizing Credentials...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
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
                    className="flex flex-col items-center justify-center text-center py-16 space-y-6 h-full"
                  >
                    <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                      <CheckCircle className="w-16 h-16" strokeWidth={1.5} />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-display font-bold text-2xl text-white tracking-tight">Signal Transmitted Successful</h3>
                      <p className="text-[#94A3B8] font-sans text-base max-w-md mx-auto leading-relaxed">
                        Your strategic AI consultation signal has bypassed model firewalls and synchronized in our database. Our expert coordinator (Marathahalli center) will initiate secure contact within 8 operating hours.
                      </p>
                    </div>

                    <button
                      id="success-form-reset"
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3.5 mt-4 bg-[#0F172A] border border-[#1E293B] hover:border-[#3B82F6]/50 text-white font-mono text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                    >
                      Open New Signal Channel
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Physical Headquarters Map & Mail Dispatch */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            
            {/* Custom Vector HUD Map */}
            <div className="bg-[#0A1020]/80 backdrop-blur-2xl border border-[#1E293B] p-6 rounded-3xl relative shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_0_40px_rgba(30,41,59,0.5)] overflow-hidden aspect-square sm:aspect-video lg:aspect-auto flex-1 flex flex-col">
              <div className="flex items-center justify-between border-b border-[#1E293B] pb-4 font-mono text-[10px] uppercase text-neutral-500 font-bold tracking-[0.2em]">
                <span>Marathahalli, Bengaluru GIS Grid</span>
                <span className="text-[#60A5FA] font-bold drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]">12.9562° N, 77.7025° E</span>
              </div>

              {/* Graphic container */}
              <div className="flex-1 relative my-5 overflow-hidden flex items-center justify-center rounded-2xl bg-[#050B14] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border border-[#0F172A]">
                {/* Ambient glow in center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#3B82F6]/10 blur-[50px] rounded-full" />
                
                {/* SVG lines mimicking airport/high-tech grid */}
                <svg className="absolute w-full h-full text-[#1E293B]" viewBox="0 0 100 100">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.5" />

                  {/* Concentric rings around center Marathahalli headquarters pin */}
                  <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#334155]/50" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#334155]/30" />

                  {/* Glowing signal ring expansion */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#60A5FA"
                    strokeWidth="0.5"
                    animate={{ scale: [0.2, 1], opacity: [0.8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeOut' }}
                    style={{ transformOrigin: 'center' }}
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="0.3"
                    animate={{ scale: [0.2, 1], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeOut', delay: 1.5 }}
                    style={{ transformOrigin: 'center' }}
                  />
                </svg>

                {/* HQ Glowing Dot Anchor */}
                <div className="absolute z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1D4ED8]/30 border border-[#60A5FA] shadow-[0_0_20px_rgba(96,165,250,0.6)] flex items-center justify-center relative backdrop-blur-md">
                    <span className="absolute w-5 h-5 rounded-full bg-[#60A5FA] animate-ping opacity-75" />
                    <MapPin className="w-5 h-5 text-white fill-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] relative z-10" />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-white uppercase mt-2 bg-[#0F172A]/90 px-3 py-1 rounded-md border border-[#1E293B] shadow-xl backdrop-blur-sm tracking-widest">
                    Nexacore HQ
                  </span>
                </div>

                {/* HUD Compass coordinate Overlay */}
                <div className="absolute bottom-3 left-3 p-2 px-3 rounded-lg bg-[#0F172A]/80 border border-[#1E293B] font-mono text-[9px] text-[#94A3B8] uppercase flex items-center gap-2 backdrop-blur-sm font-bold tracking-[0.1em]">
                  <Activity className="w-3.5 h-3.5 text-[#60A5FA] animate-pulse drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]" />
                  HQ COORDINATES CONFIRMED
                </div>
              </div>

              {/* Physical Location Text Block */}
              <div className="pt-4 font-sans text-sm text-[#94A3B8] text-left border-t border-[#1E293B] leading-relaxed">
                <p>#52, 3rd Cross, Aswath Nagar, Marathahalli, Bengaluru, Karnataka-560037, India.</p>
              </div>
            </div>

            {/* Email triggers box */}
            <div className="p-7 bg-[#0A1020]/80 backdrop-blur-xl border border-[#1E293B] rounded-3xl flex flex-col space-y-5 shadow-[0_15px_40px_rgba(0,0,0,0.4),inset_0_0_20px_rgba(30,41,59,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/5 blur-[60px] rounded-full pointer-events-none" />
              
              <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-white flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />
                Dispatch Direct Inbound Mail
              </h4>
              <p className="text-[#94A3B8] text-sm font-sans leading-relaxed text-left">
                Bypass evaluation forms entirely. Trigger direct operating communication protocols with specialized departments.
              </p>

              {/* Clickable real email accounts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  id="direct-hr-email"
                  href="mailto:hr@nexacoreai.com"
                  className="p-4 bg-[#050B14] border border-[#1E293B] rounded-2xl hover:border-[#60A5FA]/50 group transition-all duration-300 flex flex-col items-start gap-2 hover:bg-[#0F172A] hover:shadow-[0_5px_15px_rgba(37,99,235,0.15)] relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#60A5FA] transition-all duration-300 group-hover:h-full shadow-[0_0_10px_rgba(96,165,250,1)]" />
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.2em] font-bold">Human Resources</span>
                  <span className="font-mono text-[13px] text-[#E2E8F0] group-hover:text-white transition-colors flex items-center gap-1.5 font-bold">
                    hr@nexacoreai.com
                    <ArrowUpRight className="w-4 h-4 text-[#60A5FA] opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </span>
                </a>

                <a
                  id="direct-mounika-email"
                  href="mailto:mounika@nexacoreai.com"
                  className="p-4 bg-[#050B14] border border-[#1E293B] rounded-2xl hover:border-[#60A5FA]/50 group transition-all duration-300 flex flex-col items-start gap-2 hover:bg-[#0F172A] hover:shadow-[0_5px_15px_rgba(37,99,235,0.15)] relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#60A5FA] transition-all duration-300 group-hover:h-full shadow-[0_0_10px_rgba(96,165,250,1)]" />
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.2em] font-bold">Executive & Sales</span>
                  <span className="font-mono text-[13px] text-[#E2E8F0] group-hover:text-white transition-colors flex items-center gap-1.5 font-bold">
                    mounika@nexacoreai.com
                    <ArrowUpRight className="w-4 h-4 text-[#60A5FA] opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}
