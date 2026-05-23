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
    <div className="relative min-h-screen bg-brand-dark pt-28 pb-20 overflow-hidden">
      {/* Immersive Background Canvas */}
      <div className="absolute inset-0 cyber-grid opacity-35" />
      <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-brand-blue-bright/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-blue-bright/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Simple Page Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-brand-blue-bright/20">
            <Layers className="w-3.5 h-3.5 text-brand-blue-bright light:text-brand-blue" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">Target Sectors Blueprint</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white light:text-brand-dark tracking-tight leading-none">
            Industries <span className="text-brand-blue-bright light:text-brand-blue">Served</span>
          </h1>
          <p className="text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed">
            Every vertical requires specific security guidelines and custom prompt formatting. Nexacore designs role-bound, local network models optimized for individual sector constraints.
          </p>
        </div>

        {/* Industry visual layout: Large Horizontal Tabs + Config Dashboard */}
        <div className="space-y-8">
          
          {/* Tabs header bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {industries.map((ind, idx) => {
              const isActive = selectedIndustryIdx === idx;
              return (
                <button
                  id={`tab-ind-${idx}`}
                  key={ind.id}
                  onClick={() => setSelectedIndustryIdx(idx)}
                  className={`p-4 rounded-xl border font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer text-center relative overflow-hidden flex flex-col justify-center items-center gap-2 focus:outline-none ${
                    isActive 
                      ? 'bg-neutral-905 light:bg-neutral-50 border-brand-blue-bright light:border-brand-blue text-brand-blue-bright light:text-brand-blue shadow-lg scale-102 z-10' 
                      : 'border-neutral-900 bg-neutral-950/40 text-neutral-400 hover:border-neutral-800'
                  }`}
                >
                  {/* Icon resolver */}
                  {ind.id === 'banking' && <Landmark className={`w-5 h-5 ${isActive ? 'text-brand-blue-bright light:text-brand-blue' : 'text-neutral-600'}`} />}
                  {ind.id === 'finance' && <TrendingUp className={`w-5 h-5 ${isActive ? 'text-brand-blue-bright light:text-brand-blue' : 'text-neutral-600'}`} />}
                  {ind.id === 'ecommerce' && <ShoppingBag className={`w-5 h-5 ${isActive ? 'text-brand-blue-bright light:text-brand-blue' : 'text-neutral-600'}`} />}
                  {ind.id === 'healthcare' && <Heart className={`w-5 h-5 ${isActive ? 'text-brand-blue-bright light:text-brand-blue' : 'text-neutral-600'}`} />}
                  <span>{ind.name.split(' & ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Large Interactive Visual Dashboard */}
          <div className="bg-neutral-900/90 light:bg-neutral-100 border border-neutral-800 light:border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Column: Sector Specs & Use-Case detailed analysis */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-950 border border-neutral-850 font-mono text-[9px] text-brand-blue-bright light:text-brand-blue font-bold uppercase">
                    Core Target Case: {industries[selectedIndustryIdx].useCase}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white light:text-brand-dark">
                    {industries[selectedIndustryIdx].name}
                  </h3>
                  <p className="text-neutral-400 light:text-neutral-600 leading-relaxed text-sm">
                    {industries[selectedIndustryIdx].description}
                  </p>
                </div>

                {/* Technical Stack Pills */}
                <div className="space-y-2 pt-4 border-t border-neutral-800/40 light:border-neutral-200/40">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Engineered Technology Architecture
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {industries[selectedIndustryIdx].techStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-brand-dark rounded text-[10px] font-mono text-neutral-300 border border-neutral-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Infographics & Metric outcomes */}
              <div className="lg:col-span-6 flex flex-col justify-between bg-neutral-950 border border-neutral-900 rounded-xl p-6 relative gap-8">
                <div className="absolute top-4 right-4 flex items-center gap-1 font-mono text-[8px] text-zinc-600 uppercase">
                  <Activity className="w-3 h-3 text-brand-blue-bright light:text-brand-blue animate-pulse" />
                  Live HUD telemetry
                </div>

                {/* Target Metric Arrays */}
                <div className="space-y-3.5">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">Empirical Speed Gains:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {industries[selectedIndustryIdx].impactMetrics.map((met, idx) => (
                      <div key={idx} className="p-3 bg-brand-dark rounded-lg border border-neutral-900 text-center flex flex-col justify-center">
                        <span className="block font-display text-base font-bold text-white font-mono tracking-tight leading-none text-center">
                          {met.value}
                        </span>
                        <span className="block text-[8px] text-brand-blue-bright light:text-brand-blue font-mono uppercase tracking-wider mt-1.5 leading-tight text-center">
                          {met.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sector Simulator Infographic Visuals */}
                <div className="h-32 bg-brand-dark rounded-lg border border-neutral-900 relative p-4 flex flex-col justify-between overflow-hidden">
                  <span className="font-mono text-[8px] text-neutral-500 uppercase">Simulated Neural Flow:</span>

                  {/* Dynamic Graphic animations based on selected industry */}
                  <div className="flex-1 my-2 relative flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {selectedIndustryIdx === 0 && (
                        <motion.div
                          key="banking-visual"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full flex flex-col items-center justify-center gap-2"
                        >
                          <div className="flex items-center gap-3">
                            <Landmark className="w-8 h-8 text-brand-blue-bright animate-pulse" />
                            <div className="h-8 w-[1px] bg-neutral-800" />
                            <div className="text-left font-mono">
                              <span className="text-[10px] text-emerald-400 font-bold block">HSM SECURE ENCLAVE</span>
                              <span className="text-[8px] text-zinc-500 block">ENCRYPTION: AES-256-GCM</span>
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
                          className="w-4/5 h-full border border-dashed border-brand-blue-bright/20 rounded flex items-center justify-around"
                        >
                          {/* Financial risk indicators */}
                          <div className="text-center">
                            <span className="font-mono text-[9px] text-zinc-500 block">RISK FACTOR:</span>
                            <span className="font-mono text-sm text-emerald-400 font-bold block">LOW SECURE</span>
                          </div>
                          <div className="w-[1px] h-8 bg-neutral-800" />
                          <div className="text-center">
                            <span className="font-mono text-sm text-white font-bold block">&lt; 1.2ms</span>
                          </div>
                        </motion.div>
                      )}
                      {selectedIndustryIdx === 2 && (
                        <motion.div
                          key="ret-visual"
                          initial={{ opacity: 0, rotate: 0 }}
                          animate={{ opacity: 1, rotate: 360 }}
                          exit={{ opacity: 0 }}
                          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                          className="w-16 h-16 relative border border-separate border-neutral-800 rounded-full flex items-center justify-center"
                        >
                          <ShoppingBag className="w-4 h-4 text-brand-blue-bright light:text-brand-blue" />
                          <div className="absolute top-0 w-2.5 h-2.5 rounded-full bg-brand-blue-bright border border-white" />
                        </motion.div>
                      )}
                      {selectedIndustryIdx === 3 && (
                        <motion.div
                          key="med-visual"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full flex justify-around items-center"
                        >
                          {/* Simulated patient diagnostics node bar charts */}
                          {[40, 80, 20, 95, 55, 10].map((val, i) => (
                            <div key={i} className="w-4 bg-neutral-900 h-16 rounded-sm relative overflow-hidden">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${val}%` }}
                                transition={{ delay: i * 0.1, duration: 1 }}
                                className="absolute bottom-0 w-full bg-brand-blue-bright"
                              />
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Live ticker logs footer inside visual panel */}
                  <div className="border-t border-neutral-900 pt-1.5 flex items-center gap-1.5 font-mono text-[8px] text-neutral-400">
                    <span className="text-brand-blue-bright light:text-brand-blue font-bold">&gt;&gt;</span>
                    <span className="truncate">{tickerLogs[0] || 'System waiting on user selection...'}</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
