import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Workflow, 
  Sliders, 
  Settings, 
  Database,
  Users,
  CheckCircle,
  FileText,
  Mail,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ServiceDetail } from '../types';

export default function Services() {
  const [selectedServiceIdx, setSelectedServiceIdx] = useState(0);

  const services: ServiceDetail[] = [
    {
      id: 'gen-ai',
      title: 'Generative AI & Enterprise LLMs',
      category: 'Cognitive Intelligence',
      description: 'Host, deploy, and fine-tune private Generative AI models. Achieve maximum prompt processing speeds using secure localized server layers insulated from corporate threat vectors.',
      features: [
        'Dedicated secure private hosting of Llama-3-70B & Qwen-2.5',
        'Proprietary enterprise document weight fine-tuning',
        'Weight encryption & leak prevention shield boundaries',
        'AWQ 4-bit and 8-bit precision server quantization specs'
      ],
      specs: [
        { label: 'Inference Velocity', value: '> 110 tok/sec' },
        { label: 'Benchmark Lift', value: '98.6% accuracy' },
        { label: 'Compute Power', value: 'Sovereign local GPUs' }
      ],
      iconName: 'cpu'
    },
    {
      id: 'agentic-ai',
      title: 'Autonomous Multi-Agent Swarms',
      category: 'System Autonomy',
      description: 'Deploy cooperative multi-agent autonomous swarms styled with specific role configurations that organize tasks asynchronously for unmatched speed optimizations.',
      features: [
        'Self-documenting, consensus-driven task loop orchestration',
        'Fully isolated sandboxed script testing environments',
        'Live system telemetry and automated vulnerability limits',
        'Distributed self-healing mesh recovery protocols'
      ],
      specs: [
        { label: 'Agent Limit', value: 'Up to 50 unified nodes' },
        { label: 'Scale Efficiency', value: '600% task velocity' },
        { label: 'Supported Engines', value: 'TypeScript, Python, Rust' }
      ],
      iconName: 'workflow'
    },
    {
      id: 'data-engineering',
      title: 'High-Throughput Data Engineering',
      category: 'Cognitive Ingestion',
      description: 'Design and deploy robust vector pipelines. Collect, process, and chunk structured and unstructured corporate data streams into hyper-receptive semantic index stores.',
      features: [
        'End-to-end multi-vector model ingestion meshes',
        'Asynchronous chunking & indexing via Qdrant & Milvus DBs',
        'Dual-route dense vector and high-speed lexical search pipelines',
        'In-line clinical / financial PII redaction layer security'
      ],
      specs: [
        { label: 'Latency Loop', value: '< 40ms retrieval' },
        { label: 'Ingestion scale', value: '1.2M records/min' },
        { label: 'Source types', value: 'SQL, NoSQL, GDrive, PDFs' }
      ],
      iconName: 'database'
    }
  ];

  const [modelSize, setModelSize] = useState<'8b' | '70b' | '72b'>('70b');
  const [tokenWindow, setTokenWindow] = useState<number>(128);

  const [workerCount, setWorkerCount] = useState<number>(6);
  const [permSkills, setPermSkills] = useState({
    codeAnalyze: true,
    dataExtraction: true,
    vulnerabilityScan: false,
    autoReporting: true
  });

  const [dataThroughput, setDataThroughput] = useState<number>(250);

  const getGenAiMetrics = () => {
    let throughput = 125;
    let hardwareCost = 'Low (Single Node GPU)';
    let modelVibe = 'Llama-3-8B Config';

    if (modelSize === '8b') {
      throughput = 165;
      hardwareCost = 'Standard x1 L40S';
      modelVibe = 'Fast Compact LLM';
    } else if (modelSize === '70b') {
      throughput = 95;
      hardwareCost = 'High Performance x4 L40S';
      modelVibe = 'Deep Sovereign LLM';
    } else {
      throughput = 85;
      hardwareCost = 'Extreme Mesh x8 L40S';
      modelVibe = 'Sovereign Agent Backbone';
    }

    throughput = Math.max(30, Math.ceil(throughput - (tokenWindow / 16)));

    return {
      speed: throughput,
      hardwareCost,
      modelVibe,
      memorySize: modelSize === '8b' ? '16 GB' : modelSize === '70b' ? '140 GB' : '144 GB'
    };
  };

  const getAgenticSwarmMetrics = () => {
    let activeSkills = Object.values(permSkills).filter(Boolean).length;
    let operationsStream = workerCount * activeSkills * 190;
    let computeNeeded = Math.ceil((workerCount * 4) / 8);
    let processCoreLoad = (workerCount * activeSkills * 12.5).toFixed(1);

    return {
      stream: operationsStream.toLocaleString(),
      gpus: computeNeeded,
      load: processCoreLoad
    };
  };

  const getDataEngineeringMetrics = () => {
    let durationWeeks = Math.ceil(Math.sqrt(dataThroughput) * 0.35 + 1);
    let targetHardware = Math.ceil(dataThroughput * 0.05);
    let pipelineScale = dataThroughput > 800 ? 'Deep Corporate Lake' : dataThroughput > 200 ? 'Mid-Sized Corporate Cluster' : 'Direct Target Mesh';

    return {
      durationWeeks,
      targetHardware,
      pipelineScale
    };
  };

  const renderIcon = (name: string, active: boolean) => {
    const cls = `w-6 h-6 transition-all duration-500 ${active ? 'text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] scale-110' : 'text-neutral-500'}`;
    switch (name) {
      case 'cpu': return <Cpu className={cls} strokeWidth={1.5} />;
      case 'workflow': return <Workflow className={cls} strokeWidth={1.5} />;
      case 'database': return <Database className={cls} strokeWidth={1.5} />;
      default: return <Cpu className={cls} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      {/* Cinematic Background Assets */}
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#1D4ED8]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-24">
        
        {/* Cinematic Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-[#1E293B] shadow-[inset_0_0_15px_rgba(59,130,246,0.05)] animate-pulse">
            <Settings className="w-4 h-4 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold">Core Capabilities Module</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white tracking-tight leading-none">
            Sovereign <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">AI Services</span>
          </h1>
          <p className="text-[#94A3B8] text-lg sm:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            From modern private LLM hosting to adaptive multi-agent teams and robust high-integrity data pipelines, Nexacore builds software that executes with absolute security and performance.
          </p>
        </motion.div>

        {/* Main Double Grid Section: Service Selectors vs Sovereign Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Block: Service Action Picker List */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {services.map((item, idx) => {
              const isActive = selectedServiceIdx === idx;
              return (
                <button
                  id={`service-card-${idx}`}
                  key={item.id}
                  onClick={() => setSelectedServiceIdx(idx)}
                  className={`w-full text-left p-6 rounded-3xl border transition-all duration-500 relative overflow-hidden flex flex-col gap-4 cursor-pointer focus:outline-none group ${
                    isActive 
                      ? 'bg-[#0A1020]/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(37,99,235,0.15),inset_0_0_20px_rgba(37,99,235,0.05)] border-[#3B82F6]/40 scale-[1.02] z-10' 
                      : 'bg-[#0A1020]/40 backdrop-blur-md border-[#1E293B] opacity-70 hover:opacity-100 hover:border-[#3B82F6]/20'
                  }`}
                >
                  {/* Decorative corner indicator for active selection */}
                  {isActive && (
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#3B82F6]/40 to-transparent" />
                  )}

                  <div className="flex items-start gap-5">
                    <div className={`p-4 rounded-2xl border transition-all duration-500 ${
                      isActive 
                        ? 'bg-[#0F172A] border-[#3B82F6]/40 shadow-[inset_0_0_15px_rgba(59,130,246,0.2)]' 
                        : 'bg-[#0F172A]/50 border-[#1E293B] group-hover:border-[#3B82F6]/20'
                    }`}>
                      {renderIcon(item.iconName, isActive)}
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <span className={`block font-mono text-[10px] tracking-[0.2em] uppercase font-bold transition-colors duration-500 ${isActive ? 'text-[#3B82F6]' : 'text-neutral-500'}`}>
                        {item.category}
                      </span>
                      <h3 className={`font-display text-xl font-bold tracking-tight transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Block: Dynamic Interactive Configurator HUD */}
          <motion.div 
            key={selectedServiceIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0A1020]/80 backdrop-blur-2xl border border-[#1E293B] p-8 sm:p-10 rounded-3xl relative shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_0_40px_rgba(30,41,59,0.5)] space-y-8 overflow-hidden">
              
              {/* Internal HUD scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(29,78,216,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

              {/* Header HUD info of the Configurator */}
              <div className="flex items-center justify-between border-b border-[#1E293B] pb-6 relative z-10">
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] font-bold flex items-center gap-2">
                    <Sliders className="w-4 h-4" strokeWidth={1.5} />
                    Sovereign Customizer Simulator
                  </span>
                  <h3 className="font-display font-bold text-white text-2xl tracking-tight">
                    {services[selectedServiceIdx].title}
                  </h3>
                </div>
                <div className="px-4 py-1.5 bg-[#0F172A] rounded-md border border-[#1E293B] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-widest">LIVE</span>
                </div>
              </div>

              {/* Sandbox Control inputs according to selected index */}
              <div className="relative z-10">
                {selectedServiceIdx === 0 && (
                  <div className="space-y-8">
                    <p className="text-[#94A3B8] text-[14px] font-sans leading-relaxed">
                      Configure custom Generative AI hosting variables. Set targeted weights and sliding sequence context models to project inference limits.
                    </p>
                    
                    {/* Selector of model parameters */}
                    <div className="space-y-3">
                      <label className="block font-mono text-[10px] text-neutral-500 font-bold uppercase tracking-[0.15em]">Target Model Weights Scale</label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { id: '8b', label: '8B Compact Precision' },
                          { id: '70b', label: '70B Rich Enterprise' },
                          { id: '72b', label: '72B High Consensus' }
                        ].map((model) => (
                          <button
                            id={`config-model-${model.id}`}
                            key={model.id}
                            onClick={() => setModelSize(model.id as any)}
                            className={`p-4 rounded-xl border text-center font-mono text-[10px] uppercase font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                              modelSize === model.id
                                ? 'bg-[#1D4ED8]/10 border-[#3B82F6]/50 text-[#60A5FA] shadow-[inset_0_0_15px_rgba(59,130,246,0.15)]'
                                : 'border-[#1E293B] bg-[#050B14] hover:border-[#3B82F6]/30 text-neutral-500 hover:text-neutral-300'
                            }`}
                          >
                            {model.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Context length slider */}
                    <div className="space-y-3">
                      <div className="flex justify-between font-mono text-[10px] font-bold uppercase">
                        <span className="text-neutral-500 tracking-[0.15em]">In-Context Sequence Limit</span>
                        <span className="text-[#60A5FA] drop-shadow-[0_0_5px_rgba(96,165,250,0.5)] tracking-widest">{tokenWindow}k Tokens</span>
                      </div>
                      <input
                        id="config-rag-context"
                        type="range"
                        min="32"
                        max="512"
                        step="32"
                        className="w-full accent-[#3B82F6] cursor-pointer h-1.5 bg-[#1E293B] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        value={tokenWindow}
                        onChange={(e) => setTokenWindow(parseInt(e.target.value))}
                      />
                    </div>

                    {/* Computed output values cards */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1E293B]">
                      <div className="bg-[#050B14] p-5 rounded-2xl border border-[#1E293B] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center">
                        <span className="block font-mono text-[9px] text-neutral-500 font-bold uppercase tracking-[0.2em] mb-2">Inference speed</span>
                        <span className="font-display font-bold text-2xl text-white tracking-tight">{getGenAiMetrics().speed} <span className="text-[14px] text-neutral-400 font-sans font-normal">tok/s</span></span>
                      </div>
                      <div className="bg-[#050B14] p-5 rounded-2xl border border-[#1E293B] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center">
                        <span className="block font-mono text-[9px] text-neutral-500 font-bold uppercase tracking-[0.2em] mb-2">Hardware memory</span>
                        <span className="font-display font-bold text-2xl text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)] tracking-tight">{getGenAiMetrics().memorySize}</span>
                      </div>
                      <div className="bg-[#050B14] p-5 rounded-2xl border border-[#1E293B] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center">
                        <span className="block font-mono text-[9px] text-neutral-500 font-bold uppercase tracking-[0.2em] mb-2">Execution style</span>
                        <span className="font-mono font-bold text-[11px] text-[#60A5FA] truncate block mt-1 tracking-wider">{getGenAiMetrics().modelVibe}</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedServiceIdx === 1 && (
                  <div className="space-y-8">
                    <p className="text-[#94A3B8] text-[14px] font-sans leading-relaxed">
                      Configure multi-agent coordination environments. Scale workforce size and permission active skills securely.
                    </p>

                    {/* Worker count slider */}
                    <div className="space-y-3">
                      <div className="flex justify-between font-mono text-[10px] font-bold uppercase">
                        <span className="text-neutral-500 tracking-[0.15em]">Autonomous Swarm Workers</span>
                        <span className="text-[#60A5FA] drop-shadow-[0_0_5px_rgba(96,165,250,0.5)] tracking-widest">{workerCount} active agents</span>
                      </div>
                      <input
                        id="config-swarm-count"
                        type="range"
                        min="2"
                        max="24"
                        step="1"
                        className="w-full accent-[#3B82F6] cursor-pointer h-1.5 bg-[#1E293B] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        value={workerCount}
                        onChange={(e) => setWorkerCount(parseInt(e.target.value))}
                      />
                    </div>

                    {/* Skills checkboxes */}
                    <div className="space-y-3">
                      <label className="block font-mono text-[10px] text-neutral-500 font-bold uppercase tracking-[0.15em]">Permitted Operational Capabilities</label>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { id: 'codeAnalyze', label: 'Autonomous Code Analysis' },
                          { id: 'dataExtraction', label: 'Dynamic Web & API Extractor' },
                          { id: 'vulnerabilityScan', label: 'Risk Factor Scan Limits' },
                          { id: 'autoReporting', label: 'Sovereign Telemetry Reports' }
                        ].map((skill) => (
                          <button
                            id={`config-skill-btn-${skill.id}`}
                            key={skill.id}
                            onClick={() => setPermSkills(prev => ({ ...prev, [skill.id]: !(prev as any)[skill.id] }))}
                            className={`p-4 text-left rounded-xl border flex items-center justify-between font-mono text-[10px] font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                              (permSkills as any)[skill.id]
                                ? 'bg-[#1D4ED8]/10 border-[#3B82F6]/50 text-white shadow-[inset_0_0_15px_rgba(59,130,246,0.1)]'
                                : 'border-[#1E293B] bg-[#050B14] text-neutral-500 hover:border-[#3B82F6]/30 hover:text-neutral-300'
                            }`}
                          >
                            <span>{skill.label}</span>
                            <div className={`w-3.5 h-3.5 rounded-sm border transition-colors duration-300 ${
                              (permSkills as any)[skill.id] ? 'bg-[#3B82F6] border-[#60A5FA] shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'border-[#334155] bg-[#0F172A]'
                            }`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Swarm calculated outputs */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1E293B]">
                      <div className="bg-[#050B14] p-5 rounded-2xl border border-[#1E293B] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center">
                        <span className="block font-mono text-[9px] text-neutral-500 font-bold uppercase tracking-[0.2em] mb-2">Consensus speed</span>
                        <span className="font-display font-bold text-2xl text-white tracking-tight">{getAgenticSwarmMetrics().stream} <span className="text-[14px] text-neutral-400 font-sans font-normal">ops/s</span></span>
                      </div>
                      <div className="bg-[#050B14] p-5 rounded-2xl border border-[#1E293B] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center">
                        <span className="block font-mono text-[9px] text-neutral-500 font-bold uppercase tracking-[0.2em] mb-2">GPU Hardware Nodes</span>
                        <span className="font-display font-bold text-2xl text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] tracking-tight">x{getAgenticSwarmMetrics().gpus} L40S</span>
                      </div>
                      <div className="bg-[#050B14] p-5 rounded-2xl border border-[#1E293B] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center">
                        <span className="block font-mono text-[9px] text-neutral-500 font-bold uppercase tracking-[0.2em] mb-2">Process Complexity</span>
                        <span className="font-display font-bold text-2xl text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)] tracking-tight">{getAgenticSwarmMetrics().load} <span className="text-[14px] text-neutral-400 font-sans font-normal">GFLOPS</span></span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedServiceIdx === 2 && (
                  <div className="space-y-8">
                    <p className="text-[#94A3B8] text-[14px] font-sans leading-relaxed">
                      Tune high-integrity corporate ingestion parameters. Adjust dataset partitions to design processing pipelines and map vector nodes.
                    </p>

                    <div className="space-y-3">
                      <div className="flex justify-between font-mono text-[10px] font-bold uppercase">
                        <span className="text-neutral-500 tracking-[0.15em]">Aggregate Ingestion volume</span>
                        <span className="text-[#60A5FA] drop-shadow-[0_0_5px_rgba(96,165,250,0.5)] tracking-widest">{dataThroughput}k Document Records</span>
                      </div>
                      <input
                        id="config-employee-slider"
                        type="range"
                        min="50"
                        max="1500"
                        step="50"
                        className="w-full accent-[#3B82F6] cursor-pointer h-1.5 bg-[#1E293B] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        value={dataThroughput}
                        onChange={(e) => setDataThroughput(parseInt(e.target.value))}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1E293B]">
                      <div className="bg-[#050B14] p-5 rounded-2xl border border-[#1E293B] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center">
                        <span className="block font-mono text-[9px] text-neutral-500 font-bold uppercase tracking-[0.2em] mb-2">Pipeline Build Time</span>
                        <span className="font-display font-bold text-2xl text-white tracking-tight">~{getDataEngineeringMetrics().durationWeeks} Weeks</span>
                      </div>
                      <div className="bg-[#050B14] p-5 rounded-2xl border border-[#1E293B] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center">
                        <span className="block font-mono text-[9px] text-neutral-500 font-bold uppercase tracking-[0.2em] mb-2">Data Model Scope</span>
                        <span className="font-mono font-bold text-[11px] text-[#60A5FA] tracking-wider uppercase mt-1">{getDataEngineeringMetrics().pipelineScale}</span>
                      </div>
                      <div className="bg-[#050B14] p-5 rounded-2xl border border-[#1E293B] shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center">
                        <span className="block font-mono text-[9px] text-neutral-500 font-bold uppercase tracking-[0.2em] mb-2">Index Clusters</span>
                        <span className="font-display font-bold text-2xl text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)] tracking-tight">x{getDataEngineeringMetrics().targetHardware} Nodes</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Display list of features from service catalog */}
                <div className="pt-6 mt-8 border-t border-[#1E293B] flex flex-col space-y-4">
                  <h4 className="font-mono font-bold text-[10px] uppercase text-[#94A3B8] tracking-[0.15em]">Included Sovereign Architecture:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services[selectedServiceIdx].features.map((feat, index) => (
                      <div key={index} className="flex items-start gap-3 text-[13px] font-sans text-[#cbd5e1]">
                        <CheckCircle className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" strokeWidth={2} />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
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
