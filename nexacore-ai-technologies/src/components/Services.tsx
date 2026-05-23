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

  // Target services: GEN AI, Agentic AI, Data Engineering
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

  /* --- Interactive Service Configurator States --- */
  // Service 1 (GEN AI) parameters
  const [modelSize, setModelSize] = useState<'8b' | '70b' | '72b'>('70b');
  const [tokenWindow, setTokenWindow] = useState<number>(128); // in k-tokens

  // Service 2 (Agentic AI) parameters
  const [workerCount, setWorkerCount] = useState<number>(6);
  const [permSkills, setPermSkills] = useState({
    codeAnalyze: true,
    dataExtraction: true,
    vulnerabilityScan: false,
    autoReporting: true
  });

  // Service 3 (Data Engineering) parameters
  const [dataThroughput, setDataThroughput] = useState<number>(250); // in k-records

  // Calculations for GEN AI
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

    // adjust by token window
    throughput = Math.max(30, Math.ceil(throughput - (tokenWindow / 16)));

    return {
      speed: throughput,
      hardwareCost,
      modelVibe,
      memorySize: modelSize === '8b' ? '16 GB' : modelSize === '70b' ? '140 GB' : '144 GB'
    };
  };

  // Calculations for Agentic AI
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

  // Calculations for Data Engineering
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

  // Helper to resolve icon by string key safely
  const renderIcon = (name: string, active: boolean) => {
    const cls = `w-7 h-7 transition-colors duration-300 ${active ? 'text-brand-blue-bright light:text-brand-blue' : 'text-neutral-500 light:text-neutral-400'}`;
    switch (name) {
      case 'cpu': return <Cpu className={cls} />;
      case 'workflow': return <Workflow className={cls} />;
      case 'database': return <Database className={cls} />;
      default: return <Cpu className={cls} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-dark pt-28 pb-20 overflow-hidden">
      {/* Immersive background layouts */}
      <div className="absolute inset-0 cyber-grid opacity-35" />
      <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] rounded-full bg-brand-blue-bright/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-blue-bright/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Simple Page Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-brand-blue-bright/20 animate-pulse">
            <Settings className="w-3.5 h-3.5 text-brand-blue-bright light:text-brand-blue" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">Core Capabilities Module</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white light:text-brand-dark tracking-tight leading-none animate-fade-in">
            Sovereign <span className="text-brand-blue-bright light:text-brand-blue">AI Services</span>
          </h1>
          <p className="text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed">
            From modern private LLM hosting to adaptive multi-agent teams and robust high-integrity data pipelines, Nexacore builds software that executes with security and performance.
          </p>
        </div>

        {/* Main Double Grid Section: Service Selectors vs Sovereign Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Service Action Picker List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {services.map((item, idx) => {
              const isActive = selectedServiceIdx === idx;
              return (
                <button
                  id={`service-card-${idx}`}
                  key={item.id}
                  onClick={() => setSelectedServiceIdx(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col gap-4 cursor-pointer focus:outline-none ${
                    isActive 
                      ? 'bg-neutral-900/90 light:bg-neutral-50 shadow-2xl border-brand-blue-bright light:border-brand-blue scale-[1.01] z-10' 
                      : 'bg-neutral-950/40 light:bg-white border-neutral-900 light:border-neutral-150 opacity-70 hover:opacity-100 hover:border-neutral-800'
                  }`}
                >
                  {/* Decorative corner indicator for active selection */}
                  {isActive && (
                    <div className="absolute top-0 right-0 w-3 h-3 bg-brand-blue-bright light:bg-brand-blue rounded-bl-lg" />
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border transition-colors ${
                      isActive 
                        ? 'bg-brand-blue-bright/10 border-brand-blue-bright/30 text-brand-blue-bright light:text-brand-blue shadow-md' 
                        : 'bg-neutral-900 border-neutral-800'
                    }`}>
                      {renderIcon(item.iconName, isActive)}
                    </div>
                    <div className="space-y-1 my-0.5">
                      <span className="block font-mono text-[9px] tracking-widest uppercase text-neutral-500 font-semibold">
                        {item.category}
                      </span>
                      <h3 className={`font-display text-base font-bold ${
                        isActive ? 'text-white light:text-brand-dark' : 'text-neutral-300 light:text-neutral-600'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Block: Dynamic Interactive Configurator Sandbox */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900/90 light:bg-neutral-50 border border-neutral-800 light:border-neutral-200 p-6 sm:p-8 rounded-2xl relative shadow-2xl space-y-6">
              
              {/* Header HUD info of the Configurator */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="space-y-0.5">
                  <span className="font-mono text-[9px] tracking-widest uppercase text-brand-blue-bright light:text-brand-blue font-bold flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    Sovereign Customizer Simulator
                  </span>
                  <h3 className="font-display font-medium text-white light:text-brand-dark text-lg uppercase tracking-wide">
                    {services[selectedServiceIdx].title}
                  </h3>
                </div>
                <div className="p-1 px-3.5 bg-neutral-950/80 rounded border border-neutral-800 font-mono text-[10px] text-zinc-500 font-bold">
                  SIM PROTOCOL: ACTIVE
                </div>
              </div>

              {/* Sandbox Control inputs according to selected index */}
              {selectedServiceIdx === 0 && (
                <div className="space-y-6">
                  <p className="text-neutral-400 light:text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed">
                    Configure custom Generative AI hosting variables. Set targeted weights and sliding sequence context models to project inference limits.
                  </p>
                  
                  {/* Selector of model parameters */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-wider">Target Model Weights Scale</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: '8b', label: '8B Compact Precision' },
                        { id: '70b', label: '70B Rich Enterprise' },
                        { id: '72b', label: '72B High Consensus' }
                      ].map((model) => (
                        <button
                          id={`config-model-${model.id}`}
                          key={model.id}
                          onClick={() => setModelSize(model.id as any)}
                          className={`p-3 rounded-lg border text-center font-mono text-[10px] uppercase font-bold tracking-wider transition-colors cursor-pointer ${
                            modelSize === model.id
                              ? 'bg-brand-blue-bright/10 border-brand-blue-bright text-brand-blue-bright light:text-brand-blue'
                              : 'border-neutral-800 bg-brand-dark hover:border-neutral-750 text-neutral-500'
                          }`}
                        >
                          {model.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Context length slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-[10px] text-neutral-500 uppercase">
                      <span>In-Context Sequence Token Limit</span>
                      <span className="text-brand-blue-bright light:text-brand-blue font-bold font-mono">{tokenWindow}k Tokens</span>
                    </div>
                    <input
                      id="config-rag-context"
                      type="range"
                      min="32"
                      max="512"
                      step="32"
                      className="w-full accent-brand-blue-bright cursor-pointer"
                      value={tokenWindow}
                      onChange={(e) => setTokenWindow(parseInt(e.target.value))}
                    />
                  </div>

                  {/* Computed output values cards */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-800/80">
                    <div className="bg-neutral-950 p-3.5 rounded border border-neutral-900 text-center relative">
                      <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Inference speed</span>
                      <span className="font-display font-bold text-xl sm:text-2xl text-white font-mono">{getGenAiMetrics().speed} tok/s</span>
                    </div>
                    <div className="bg-neutral-950 p-3.5 rounded border border-neutral-900 text-center">
                      <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Hardware weight memory</span>
                      <span className="font-display font-bold text-xl sm:text-2xl text-emerald-400 font-mono">{getGenAiMetrics().memorySize}</span>
                    </div>
                    <div className="bg-neutral-950 p-3.5 rounded border border-neutral-900 text-center">
                      <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Execution style</span>
                      <span className="font-display font-bold text-[10px] text-brand-blue-bright light:text-brand-blue font-mono truncate block mt-2.5 uppercase font-semibold">{getGenAiMetrics().modelVibe}</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedServiceIdx === 1 && (
                <div className="space-y-6">
                  <p className="text-neutral-400 light:text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed">
                    Configure multi-agent coordination environments. Scale workforce size and permission active skills securely.
                  </p>

                  {/* Worker count slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-[10px] text-neutral-500 uppercase">
                      <span>Autonomous Swarm Workers</span>
                      <span className="text-brand-blue-bright light:text-brand-blue font-bold font-mono">{workerCount} active agents</span>
                    </div>
                    <input
                      id="config-swarm-count"
                      type="range"
                      min="2"
                      max="24"
                      step="1"
                      className="w-full accent-brand-blue-bright cursor-pointer"
                      value={workerCount}
                      onChange={(e) => setWorkerCount(parseInt(e.target.value))}
                    />
                  </div>

                  {/* Skills checkboxes */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-wider">Permitted Operational Swarm Capabilities</label>
                    <div className="grid grid-cols-2 gap-3.5">
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
                          className={`p-3 text-left rounded-lg border flex items-center justify-between font-mono text-[10px] transition-colors cursor-pointer ${
                            (permSkills as any)[skill.id]
                              ? 'bg-brand-blue-bright/5 border-brand-blue-bright/50 text-white'
                              : 'border-neutral-850 bg-brand-dark text-neutral-500 hover:border-neutral-800'
                          }`}
                        >
                          <span>{skill.label}</span>
                          <div className={`w-3 h-3 rounded-full border ${
                            (permSkills as any)[skill.id] ? 'bg-brand-blue-bright border-brand-blue-bright' : 'border-neutral-700'
                          }`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Swarm calculated outputs */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-800/80">
                    <div className="bg-neutral-950 p-3.5 rounded border border-neutral-900 text-center">
                      <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Consensus Operations speed</span>
                      <span className="font-display font-bold text-sm sm:text-base text-white font-mono">{getAgenticSwarmMetrics().stream} ops/s</span>
                    </div>
                    <div className="bg-neutral-950 p-3.5 rounded border border-neutral-900 text-center">
                      <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Local GPU Hardware Nodes</span>
                      <span className="font-display font-bold text-xl text-brand-blue-bright light:text-brand-blue font-mono">x{getAgenticSwarmMetrics().gpus} L40S</span>
                    </div>
                    <div className="bg-neutral-950 p-3.5 rounded border border-neutral-900 text-center">
                      <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Process Core Complexity</span>
                      <span className="font-display font-bold text-xl text-emerald-400 font-mono">{getAgenticSwarmMetrics().load} GFLOPS</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedServiceIdx === 2 && (
                <div className="space-y-6">
                  <p className="text-neutral-400 light:text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed">
                    Tune high-integrity corporate ingestion parameters. Adjust dataset partitions to design processing pipelines and map vector nodes.
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-[10px] text-neutral-500 uppercase">
                      <span>Aggregate Ingestion volume</span>
                      <span className="text-brand-blue-bright light:text-brand-blue font-bold font-mono">{dataThroughput}k Document Records</span>
                    </div>
                    <input
                      id="config-employee-slider"
                      type="range"
                      min="50"
                      max="1500"
                      step="50"
                      className="w-full accent-brand-blue-bright cursor-pointer"
                      value={dataThroughput}
                      onChange={(e) => setDataThroughput(parseInt(e.target.value))}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-800/80">
                    <div className="bg-neutral-950 p-3.5 rounded border border-neutral-900 text-center">
                      <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Pipeline Build Time</span>
                      <span className="font-display font-bold text-xl text-white font-mono">~{getDataEngineeringMetrics().durationWeeks} Weeks</span>
                    </div>
                    <div className="bg-neutral-950 p-3.5 rounded border border-neutral-900 text-center">
                      <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Data Model Scope</span>
                      <span className="font-display font-bold text-[10px] text-brand-blue-bright light:text-brand-blue font-mono block mt-2 leading-tight uppercase font-semibold">{getDataEngineeringMetrics().pipelineScale}</span>
                    </div>
                    <div className="bg-neutral-950 p-3.5 rounded border border-neutral-900 text-center col-span-1">
                      <span className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Recommended Index Clusters</span>
                      <span className="font-display font-bold text-xl text-emerald-400 font-mono">x{getDataEngineeringMetrics().targetHardware} Nodes</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Display list of features from service catalog */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col space-y-3">
                <h4 className="font-display font-bold text-xs uppercase text-neutral-300 tracking-wider">Features included in bundle:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {services[selectedServiceIdx].features.map((feat, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs font-sans text-neutral-400 light:text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-brand-blue-bright light:text-brand-blue shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
