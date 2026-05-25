import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  TrendingUp, 
  ShoppingBag, 
  Landmark, 
  Cpu, 
  Database, 
  Check, 
  ArrowUpRight, 
  Layers, 
  TrendingDown, 
  Activity, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { IndustryDetail } from '../types';

export default function Industries() {
  const [selectedIndustryIdx, setSelectedIndustryIdx] = useState(0);

  // Industry mapping
  const industries: IndustryDetail[] = [
    {
      id: 'banking',
      name: 'Retail & Investment Banking',
      description: 'Automate credit risk profiling, mortgage document underwriting, and KYC compliance verifications. Maintain extreme state security using localized HSM partition key-exchange nodes.',
      useCase: 'Automated Credit Scoring & KYC Ingestion',
      impactMetrics: [
        { label: 'Underwriting Latency', value: '2.8s total' },
        { label: 'Risk Scoring Match', value: '99.4% precision' },
        { label: 'Compliance Audit cost', value: '-65% monthly' }
      ],
      techStack: ['Nexacore BankTune-70B', 'Postgres pgvector', 'HSM Vault Shield'],
      icon: 'banking'
    },
    {
      id: 'finance',
      name: 'Quantitative Wealth & Asset Management',
      description: 'Perform multi-portfolio asset allocations, analyze real-time market signals, and autogenerate investment prospectuses using secure localized compliance nodes.',
      useCase: 'Real-time Portfolio Risk Simulation',
      impactMetrics: [
        { label: 'Signal Scan Latency', value: '1.2 seconds' },
        { label: 'Portfolio Margin Drift', value: '< 0.05%' },
        { label: 'Report Compilation', value: '15x faster' }
      ],
      techStack: ['FinGPT-34B Engine', 'Milvus DB Cluster', 'Distributed Ledger Sync'],
      icon: 'finance'
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce & Interactive Commerce',
      description: 'Scale conversational shopping assistants, dynamic catalog routing, and multi-agent automated inventory ordering swarms synchronized across supplier warehouses.',
      useCase: 'Semantic Search & Automated Cart Swarms',
      impactMetrics: [
        { label: 'Conv. Rate Increase', value: '+18.2% avg' },
        { label: 'Catalog Search Speed', value: '0.04s' },
        { label: 'Cart Drop-off Reduction', value: '-34% lower' }
      ],
      techStack: ['Qwen-2.5-Agent-72B', 'Elasticsearch Vector', 'Swarm Routing Mesh'],
      icon: 'ecommerce'
    },
    {
      id: 'healthcare',
      name: 'Clinical Intelligence & Healthcare',
      description: 'Accelerate diagnosis synthesis, cross-validate clinical trial cohorts, and automate patient intake form parsing with strict, local HIPAA-compliant PII masking protocols.',
      useCase: 'Regulatory Clinical Cohort Extraction',
      impactMetrics: [
        { label: 'Trial Match Loop', value: '12x speed' },
        { label: 'HIPAA PII Redaction', value: '100% secure' },
        { label: 'Summarization Accuracy', value: '99.8% precision' }
      ],
      techStack: ['Biomed-Llama-3-70B', 'Qdrant Vector Mesh', 'PII Redaction Sentry'],
      icon: 'healthcare'
    }
  ];

  /* --- Interactive Simulation States inside the Industry Panel --- */
  // Simulate active processes in the background (Live logs feed)
  const [tickerLogs, setTickerLogs] = useState<string[]>([]);
  useEffect(() => {
    const handleLogs = () => {
      const activeIdx = selectedIndustryIdx;
      let logs_pool = [];
      if (activeIdx === 0) {
        logs_pool = [
          'BANKING: Credit scoring engine verifying file CSDT-882...',
          'BANKING: Isolating safe HSM credentials for transaction verification process.',
          'BANKING: Multi-signature bank ledger check completed successfully.',
        ];
      } else if (activeIdx === 1) {
        logs_pool = [
          'FINANCE: Portfolio signal scanner scanning futures and derivatives markets...',
          'FINANCE: Document audit processing for regulatory compliance filing FL-302...',
          'FINANCE: Compiling asset margin drift values... Deviation < 0.05%',
        ];
      } else if (activeIdx === 2) {
        logs_pool = [
          'ECOMMERCE: User intent mapping retrieved for active catalog retrieval...',
          'ECOMMERCE: Swarm inventory coordinator dispatched to supplier ERP endpoints.',
          'ECOMMERCE: Processing cart affinity weightings... Catalog matches found.',
        ];
      } else {
        logs_pool = [
          'HEALTHCARE: Clinical trial cohort scanner auditing file ID-998...',
          'HEALTHCARE: Masking patient national identity IDs at local cluster node.',
          'HEALTHCARE: Matching medical trial documents... Cosine Similarity: 98.6%',
        ];
      }
      setTickerLogs(logs_pool);
    };

    handleLogs();
    const interval = setInterval(handleLogs, 4000);
    return () => clearInterval(interval);
  }, [selectedIndustryIdx]);

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      {/* Immersive Background Canvas */}
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#1D4ED8]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-24">
        
        {/* Cinematic Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-[#1E293B] shadow-[inset_0_0_15px_rgba(59,130,246,0.05)]">
            <Layers className="w-4 h-4 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold">Target Sectors Blueprint</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white tracking-tight leading-none">
            Industries <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Served</span>
          </h1>
          <p className="text-[#94A3B8] text-lg sm:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Every vertical requires specific security guidelines and custom prompt formatting. Nexacore designs role-bound, local network models optimized for individual sector constraints.
          </p>
        </motion.div>

        {/* Industry visual layout: Large Horizontal Tabs + Config Dashboard */}
        <div className="space-y-10">
          
          {/* Tabs header bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, idx) => {
              const isActive = selectedIndustryIdx === idx;
              return (
                <button
                  id={`tab-ind-${idx}`}
                  key={ind.id}
                  onClick={() => setSelectedIndustryIdx(idx)}
                  className={`p-5 rounded-2xl border font-mono text-[11px] uppercase font-bold tracking-[0.15em] transition-all duration-500 cursor-pointer text-center relative overflow-hidden flex flex-col justify-center items-center gap-3 focus:outline-none group ${
                    isActive 
                      ? 'bg-[#0F172A] border-[#3B82F6]/50 text-[#60A5FA] shadow-[0_10px_30px_rgba(37,99,235,0.1),inset_0_0_20px_rgba(59,130,246,0.15)] scale-[1.02] z-10' 
                      : 'border-[#1E293B] bg-[#0A1020]/40 text-[#94A3B8] hover:border-[#3B82F6]/30 hover:bg-[#0A1020]/80'
                  }`}
                >
                  {/* Glowing Bottom Line for Active Tab */}
                  {isActive && (
                    <motion.div layoutId="active-ind-tab" className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-[#60A5FA] shadow-[0_0_10px_rgba(96,165,250,1)] rounded-t-full" />
                  )}

                  {/* Icon resolver */}
                  {ind.id === 'banking' && <Landmark className={`w-6 h-6 transition-colors duration-500 ${isActive ? 'text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-neutral-500 group-hover:text-neutral-400'}`} strokeWidth={1.5} />}
                  {ind.id === 'finance' && <TrendingUp className={`w-6 h-6 transition-colors duration-500 ${isActive ? 'text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-neutral-500 group-hover:text-neutral-400'}`} strokeWidth={1.5} />}
                  {ind.id === 'ecommerce' && <ShoppingBag className={`w-6 h-6 transition-colors duration-500 ${isActive ? 'text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-neutral-500 group-hover:text-neutral-400'}`} strokeWidth={1.5} />}
                  {ind.id === 'healthcare' && <Heart className={`w-6 h-6 transition-colors duration-500 ${isActive ? 'text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-neutral-500 group-hover:text-neutral-400'}`} strokeWidth={1.5} />}
                  <span>{ind.name.split(' & ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Large Interactive Visual Dashboard */}
          <motion.div 
            key={selectedIndustryIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0A1020]/80 backdrop-blur-2xl border border-[#1E293B] rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_0_40px_rgba(30,41,59,0.5)] relative overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1D4ED8]/5 blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
              
              {/* Left Column: Sector Specs & Use-Case detailed analysis */}
              <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F172A] border border-[#1E293B] font-mono text-[10px] text-[#60A5FA] font-bold uppercase tracking-[0.15em] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
                    Core Target Case: {industries[selectedIndustryIdx].useCase}
                  </div>
                  <h3 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                    {industries[selectedIndustryIdx].name}
                  </h3>
                  <p className="text-[#94A3B8] leading-relaxed text-[15px] font-sans">
                    {industries[selectedIndustryIdx].description}
                  </p>
                </div>

                {/* Technical Stack Pills */}
                <div className="space-y-4 pt-6 border-t border-[#1E293B]">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">
                    Engineered Technology Architecture
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {industries[selectedIndustryIdx].techStack.map((tech, i) => (
                      <span key={i} className="px-3.5 py-1.5 bg-[#050B14] rounded-md text-[11px] font-mono text-neutral-400 border border-[#1E293B] shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Infographics & Metric outcomes */}
              <div className="lg:col-span-6 flex flex-col justify-between bg-[#050B14] border border-[#1E293B] rounded-2xl p-8 relative gap-8 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute top-5 right-5 flex items-center gap-2 font-mono text-[9px] text-[#64748B] uppercase font-bold tracking-widest">
                  <Activity className="w-3.5 h-3.5 text-[#60A5FA] animate-pulse drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]" />
                  Live HUD telemetry
                </div>

                {/* Target Metric Arrays */}
                <div className="space-y-4 mt-4">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold block mb-2">Empirical Speed Gains:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {industries[selectedIndustryIdx].impactMetrics.map((met, idx) => (
                      <div key={idx} className="p-4 bg-[#0A1020]/50 rounded-xl border border-[#1E293B] text-center flex flex-col justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                        <span className="block font-display text-xl font-bold text-white tracking-tight leading-none text-center">
                          {met.value}
                        </span>
                        <span className="block text-[9px] text-[#60A5FA] font-mono uppercase tracking-widest mt-2 leading-tight text-center">
                          {met.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sector Simulator Infographic Visuals */}
                <div className="h-40 bg-[#0A1020]/50 rounded-xl border border-[#1E293B] relative p-5 flex flex-col justify-between overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                  <span className="font-mono text-[9px] text-neutral-500 font-bold tracking-[0.2em] uppercase relative z-10">Simulated Neural Flow:</span>

                  {/* Dynamic Graphic animations based on selected industry */}
                  <div className="flex-1 my-2 relative flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {selectedIndustryIdx === 0 && (
                        <motion.div
                          key="banking-visual"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full flex flex-col items-center justify-center gap-3"
                        >
                          <div className="flex items-center gap-4">
                            <Landmark className="w-10 h-10 text-[#60A5FA] animate-pulse drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" strokeWidth={1} />
                            <div className="h-10 w-[1px] bg-[#1E293B]" />
                            <div className="text-left font-mono">
                              <span className="text-[11px] text-emerald-400 font-bold tracking-widest block drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]">HSM SECURE ENCLAVE</span>
                              <span className="text-[9px] text-neutral-500 block mt-1 tracking-wider">ENCRYPTION: AES-256-GCM</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      {selectedIndustryIdx === 1 && (
                        <motion.div
                          key="fin-visual"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-4/5 h-full border border-dashed border-[#3B82F6]/30 rounded-lg flex items-center justify-around bg-[#0F172A]/50"
                        >
                          {/* Financial risk indicators */}
                          <div className="text-center">
                            <span className="font-mono text-[9px] text-neutral-500 font-bold tracking-widest block mb-1">RISK FACTOR:</span>
                            <span className="font-mono text-[13px] text-emerald-400 font-bold block tracking-wider drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]">LOW SECURE</span>
                          </div>
                          <div className="w-[1px] h-10 bg-[#1E293B]" />
                          <div className="text-center">
                            <span className="font-mono text-lg text-white font-bold tracking-widest block drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">&lt; 1.2ms</span>
                          </div>
                        </motion.div>
                      )}
                      {selectedIndustryIdx === 2 && (
                        <motion.div
                          key="ret-visual"
                          initial={{ opacity: 0, rotate: 0 }}
                          animate={{ opacity: 1, rotate: 360 }}
                          exit={{ opacity: 0 }}
                          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                          className="w-20 h-20 relative border border-dashed border-[#3B82F6]/40 rounded-full flex items-center justify-center"
                        >
                          <ShoppingBag className="w-6 h-6 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1} />
                          <div className="absolute top-[-4px] w-2.5 h-2.5 rounded-full bg-[#60A5FA] shadow-[0_0_10px_rgba(96,165,250,1)]" />
                          <div className="absolute bottom-[-4px] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />
                        </motion.div>
                      )}
                      {selectedIndustryIdx === 3 && (
                        <motion.div
                          key="med-visual"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full flex justify-around items-center px-4"
                        >
                          {/* Simulated patient diagnostics node bar charts */}
                          {[40, 80, 20, 95, 55, 15].map((val, i) => (
                            <div key={i} className="w-5 bg-[#0F172A] border border-[#1E293B] h-20 rounded-md relative overflow-hidden">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${val}%` }}
                                transition={{ delay: i * 0.1, duration: 1, ease: 'easeOut' }}
                                className="absolute bottom-0 w-full bg-gradient-to-t from-[#1D4ED8] to-[#60A5FA] shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                              />
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Live ticker logs footer inside visual panel */}
                  <div className="border-t border-[#1E293B] pt-2.5 flex items-center gap-2 font-mono text-[9px] text-[#94A3B8] relative z-10 font-bold tracking-widest">
                    <span className="text-[#60A5FA] drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]">&gt;&gt;</span>
                    <span className="truncate">{tickerLogs[0] || 'System waiting on user selection...'}</span>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
