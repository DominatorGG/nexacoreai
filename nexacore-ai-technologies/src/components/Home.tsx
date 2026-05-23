import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Database, 
  Workflow, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Globe, 
  Compass, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Activity, 
  RefreshCw,
  Search,
  Lock,
  UserCheck,
  MapPin,
  Server,
  ArrowUpRight
} from 'lucide-react';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export default function Home({ setActivePage }: HomeProps) {
  const [activeSection, setActiveSection] = useState(0);

  // Section titles representing the 8 Cinematic Chapters (Pillars of Nexacore)
  const sections = [
    { id: 'nucleus', title: 'The Nucleus', desc: 'Sovereign Core System' },
    { id: 'matrix', title: 'Cognitive Matrix', desc: 'Interactive Neural Path' },
    { id: 'rag-vault', title: 'Enterprise RAG DB', desc: 'Extreme Vector Engine' },
    { id: 'agent-swarm', title: 'Synth Agents', desc: 'Autonomous Multi-Swarm' },
    { id: 'defender', title: 'Cybernet Defender', desc: 'Quantum Shield Protocol' },
    { id: 'roi', title: 'Value Accelerator', desc: 'Interactive ROI Engine' },
    { id: 'mesh', title: 'Mesh Topology', desc: 'Bengaluru Global Grid' },
    { id: 'roadmap', title: 'AGI Horizon', desc: 'The Sovereign Era' },
  ];

  // Helper to scroll to section element
  const scrollToSection = (index: number) => {
    setActiveSection(index);
    const element = document.getElementById(`home-sec-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Tracking scroll to update current dot indicator
  useEffect(() => {
    const handleScroll = () => {
      const parent = document.getElementById('scroller-container');
      if (!parent) return;
      const scrollPosition = parent.scrollTop;
      const viewportHeight = parent.clientHeight;
      const index = Math.round(scrollPosition / viewportHeight);
      if (index >= 0 && index < sections.length) {
        setActiveSection(index);
      }
    };

    const container = document.getElementById('scroller-container');
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  /* --- Interactive States for Section 2: Cognitive Matrix --- */
  const [pulsingNodes, setPulsingNodes] = useState<number[]>([1, 4, 7]);
  const [matrixLog, setMatrixLog] = useState<string>('Matrix online. Awaiting system pulse input...');
  const triggerMatrixPulse = () => {
    const randomNodes = Array.from({ length: 4 }, () => Math.floor(Math.random() * 12));
    setPulsingNodes(randomNodes);
    const optimizations = [
      'Token processing throughput boosted: +32%',
      'Active vector pipeline cache refreshed in 2.1ms',
      'Cognitive neural loop locked (Model Temperature: 0.12)',
      'Marathahalli HQ secondary cluster synchronized successfully',
    ];
    setMatrixLog(optimizations[Math.floor(Math.random() * optimizations.length)]);
  };

  /* --- Interactive States for Section 3: Neural Memory Vault (RAG) --- */
  const [ragQuery, setRagQuery] = useState('');
  const [isQueryingRAG, setIsQueryingRAG] = useState(false);
  const [ragResult, setRagResult] = useState<any>(null);
  const runRAGSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ragQuery.trim()) return;
    setIsQueryingRAG(true);
    setTimeout(() => {
      setIsQueryingRAG(false);
      setRagResult({
        chunkId: `VEC-FX-${Math.floor(Math.random() * 9000 + 1000)}`,
        score: (0.91 + Math.random() * 0.08).toFixed(4),
        latency: '4.82ms',
        summary: `Match found regarding '${ragQuery}'. The sovereign enterprise layer has validated this against local database chunk arrays within Bengaluru Marathahalli secure storage nodes. Response contextualized correctly with 0% token hallucination risk.`,
      });
    }, 1200);
  };

  /* --- Interactive States for Section 4: Synth Agent Swarm --- */
  const [agentSwarmRoutine, setAgentSwarmRoutine] = useState<'harvest' | 'codesync' | 'defender'>('harvest');
  const [agentLogs, setAgentLogs] = useState<string[]>([
    'System: Swarm initialization phase authenticated.',
    'Agent_001: Operational buffer online.',
  ]);
  const handleAgentRoutineChange = (type: 'harvest' | 'codesync' | 'defender') => {
    setAgentSwarmRoutine(type);
    let newLogs: string[] = [];
    if (type === 'harvest') {
      newLogs = [
        'Routine Alpha triggered: Global Enterprise Document Scrape',
        'Agent_Hustler_01: Ingress initialized for 4,800 records/sec',
        'Agent_Hustler_02: Vector transformation pipelines online',
        'Verification: No anomalies detected in data buffer.',
      ];
    } else if (type === 'codesync') {
      newLogs = [
        'Routine Beta triggered: Autogenous Code Quality Audit',
        'Agent_Synthesizer_01: Core framework diagnostic verified',
        'Agent_Synthesizer_02: TypeScript types structural compliance validated (0 errors)',
        'Status: Automatic Hot Patch applied securely.',
      ];
    } else {
      newLogs = [
        'Routine Gamma triggered: Threat Mitigation Protocols Active',
        'Agent_Sentinel_01: Marathahalli server rack load audited',
        'Agent_Sentinel_02: Threat anomaly vectors blocked on port 3000',
        'Security Status: Extreme system vaulting intact.',
      ];
    }
    setAgentLogs(newLogs);
  };

  /* --- Interactive States for Section 5: Quantum Shield Defender --- */
  const [shieldActive, setShieldActive] = useState({
    ragVerify: true,
    anonymizer: true,
    piiCore: false,
    rateLimiter: true
  });
  const toggleShield = (key: keyof typeof shieldActive) => {
    setShieldActive(prev => ({ ...prev, [key]: !prev[key] }));
  };
  const getSystemVulnerability = () => {
    let base = 95;
    if (shieldActive.ragVerify) base -= 25;
    if (shieldActive.anonymizer) base -= 30;
    if (shieldActive.piiCore) base -= 25;
    if (shieldActive.rateLimiter) base -= 13;
    return Math.max(1.2, base).toFixed(1);
  };

  /* --- Interactive States for Section 6: ROI & Acceleration Engine --- */
  const [queries, setQueries] = useState(50000); // Daily requests
  const [modelType, setModelType] = useState<'standard' | 'nexacore_rag' | 'nexacore_swarm'>('nexacore_rag');
  const [automationFactor, setAutomationFactor] = useState(65); // percentage

  const calculateROI = () => {
    const tokenMultiplier = modelType === 'standard' ? 1.0 : modelType === 'nexacore_rag' ? 8.4 : 15.6;
    const tokensProcessed = (queries * 1280 * tokenMultiplier).toLocaleString();
    const developerHoursSaved = Math.round(queries * 0.04 * (automationFactor / 100));
    
    // Cost savings estimation: standard cost $0.0015/query vs Nexacore localized model $0.0001/query
    const savings = Math.round(queries * 0.0014 * (automationFactor / 100) * 30);
    
    return {
      tokens: tokensProcessed,
      hours: developerHoursSaved,
      cost: savings,
    };
  };
  const roiValue = calculateROI();

  /* --- Interactive States for Section 7: Bengaluru HQ Global Anchor --- */
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const globalNodes = [
    { city: 'Bengaluru (Sovereign HQ)', coords: '12.9562° N, 77.7025° E', load: 'Optimized 100%', ip: '10.52.0.1' },
    { city: 'Silicon Valley Node', coords: '37.7749° N, 122.4194° W', load: 'Synchronized 98.4%', ip: '10.52.1.20' },
    { city: 'Frankfurt Cluster', coords: '50.1109° N, 8.6821° E', load: 'Synchronized 99.1%', ip: '10.52.2.40' },
    { city: 'Tokyo Edge Core', coords: '35.6762° N, 139.6503° E', load: 'Synchronized 97.9%', ip: '10.52.3.60' },
  ];

  /* --- Interactive States for Section 8: Roadmap --- */
  const [selectedPhase, setSelectedPhase] = useState(0);
  const roadmapData = [
    {
      phase: 'Phase 01',
      title: 'Adaptive Agent Mesh',
      timeline: 'Q3 2026',
      details: 'Deploying self-repairing agent clusters across local private networks. Ground Zero focus: Marathahalli advanced infrastructure.'
    },
    {
      phase: 'Phase 02',
      title: 'Decoupled Vector Streaming',
      timeline: 'Q1 2027',
      details: 'Zero-latency vector dataset synchronization bypassing traditional memory backplanes. Accelerated embedding indexing via custom GPUs.'
    },
    {
      phase: 'Phase 03',
      title: 'Sovereign Llama Finetunes',
      timeline: 'Q4 2027',
      details: 'High-speed local corporate models customized for specific Indian business logic, optimized for sub-10ms prompt compilation latencies.'
    },
    {
      phase: 'Phase 04',
      title: 'Full Autonomous Enterprise',
      timeline: 'Q2 2028',
      details: 'Self-regulating business ops pipelines that allocate digital system capital dynamically based on actual ROI feedback loops.'
    },
  ];

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden flex">
      {/* HUD-style Fixed Bullet Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6 items-end">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500 mr-2">
          System Module: {activeSection + 1}/8
        </span>
        <div className="flex flex-col gap-3.5">
          {sections.map((sec, idx) => (
            <button
              id={`sec-dot-btn-${idx}`}
              key={sec.id}
              onClick={() => scrollToSection(idx)}
              className="group flex items-center gap-3 relative focus:outline-none cursor-pointer"
            >
              {/* Tooltip description */}
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 font-display text-[10px] tracking-widest font-semibold uppercase bg-neutral-900/90 text-brand-blue-bright light:text-brand-blue border border-brand-blue-bright/30 px-2.5 py-1 rounded-sm shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                {sec.title}
              </span>
              {/* Bullet circle */}
              <div className="relative w-5 h-5 flex items-center justify-center">
                {activeSection === idx && (
                  <motion.div
                    layoutId="current-dot-outline"
                    className="absolute inset-0 rounded-full border border-brand-blue-bright"
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  />
                )}
                <div 
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    activeSection === idx ? 'bg-brand-blue-bright animate-pulse' : 'bg-neutral-700 group-hover:bg-brand-blue-bright/60'
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Multi-Screen Snapped Scroll Container */}
      <div 
        id="scroller-container"
        className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        {/* ================= SECTION 01: HERO CORE SYSTEM ================= */}
        <div 
          id="home-sec-0" 
          className="snap-start relative w-full h-screen shrink-0 flex items-center justify-center overflow-hidden"
        >
          {/* Futuristic Visual Elements */}
          <div className="absolute inset-0 cyber-grid opacity-35" />
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-blue-bright/5 blur-[120px] pointer-events-none" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full pt-16">
            {/* Written Intel */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 light:bg-neutral-100 border border-brand-blue-bright/20 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-brand-blue-bright" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-300 light:text-neutral-700 uppercase">
                  Agent hustler architecture certified
                </span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-6xl font-bold text-white light:text-brand-dark tracking-tight leading-tight">
                Architecting the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-bright to-cyan-400">Autonomous Enterprise</span>
              </h1>
              
              <p className="text-neutral-400 light:text-neutral-600 text-lg sm:text-xl font-normal max-w-xl">
                Nexacore AI Technologies pioneers high-performance custom neural models, secure localized vector banks, and multi-agent corporate intelligence systems from Bengaluru.
              </p>

              {/* Action Array */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  id="hero-services-route-btn"
                  onClick={() => setActivePage('services')}
                  className="px-8 py-4 bg-brand-blue-bright text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-[0_4px_30px_rgba(37,99,235,0.35)] hover:scale-105 hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                >
                  Inspect Infrastructure
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  id="hero-contact-route-btn"
                  onClick={() => setActivePage('contact')}
                  className="px-8 py-4 bg-neutral-900/80 light:bg-neutral-100 text-white light:text-brand-dark font-mono text-xs font-bold uppercase tracking-wider rounded-lg border border-neutral-800 light:border-neutral-200 hover:border-brand-blue-bright light:hover:border-brand-blue-bright transition-all duration-300 hover:bg-neutral-900/60 cursor-pointer"
                >
                  Establish Comms
                </button>
              </div>

              {/* Real-time Telemetry Metadata */}
              <div className="pt-8 border-t border-neutral-800/40 light:border-neutral-200/40 flex items-center gap-10 font-mono text-xs text-neutral-500">
                <div>
                  <span className="block text-neutral-400 font-bold uppercase text-[10px] tracking-wider mb-1">HQ Anchor</span>
                  <span className="text-white light:text-brand-dark">Marathahalli, IN</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-bold uppercase text-[10px] tracking-wider mb-1">Node Latency</span>
                  <span className="text-brand-blue-bright font-bold font-mono">4.18ms</span>
                </div>
                <div>
                  <span className="block text-neutral-400 font-bold uppercase text-[10px] tracking-wider mb-1">Integrations</span>
                  <span className="text-white light:text-brand-dark">Private RAG & Swarms</span>
                </div>
              </div>
            </div>

            {/* Central 3D-Like Kinetic Hologram */}
            <div className="lg:col-span-5 flex justify-center items-center relative aspect-square max-w-[400px] lg:max-w-none mx-auto">
              <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-brand-blue-bright/10 animate-pulse" />
              <div className="absolute w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full border border-dashed border-neutral-800 light:border-neutral-200" />
              
              {/* Dynamic spinning core circles representing a neuro-sphere */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                className="absolute w-[180px] h-[180px] md:w-[240px] md:h-[240px] flex items-center justify-center"
              >
                <svg className="w-full h-full text-brand-blue-bright" viewBox="0 0 100 100">
                  <ellipse cx="50" cy="50" rx="48" ry="12" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                  <ellipse cx="50" cy="50" rx="12" ry="48" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                  <ellipse cx="50" cy="50" rx="35" ry="35" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,15" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                className="absolute w-[130px] h-[130px] md:w-[170px] md:h-[170px]"
              >
                <svg className="w-full h-full text-white light:text-brand-dark" viewBox="0 0 100 100">
                  <ellipse cx="50" cy="50" rx="46" ry="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10, 5" />
                  <ellipse cx="50" cy="50" rx="16" ry="46" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10, 5" />
                </svg>
              </motion.div>

              {/* Core holographic orb */}
              <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-brand-blue-bright to-cyan-400 rounded-full flex items-center justify-center p-[2px] shadow-[0_0_60px_rgba(37,99,235,0.5)]">
                <div className="w-full h-full bg-brand-dark rounded-full flex flex-col items-center justify-center p-3 text-center overflow-hidden">
                  <Cpu className="w-6 h-6 md:w-8 md:h-8 text-brand-blue-bright animate-bounce" />
                  <span className="font-mono text-[8px] md:text-[10px] uppercase font-bold text-neutral-300 mt-1">CORE 01</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 02: COGNITIVE DECISION MATRIX ================= */}
        <div 
          id="home-sec-1" 
          className="snap-start relative w-full h-screen shrink-0 flex items-center justify-center overflow-hidden bg-brand-darker"
        >
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-brand-blue-bright/5 blur-[100px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full pt-16">
            <div className="lg:col-span-5 text-left space-y-5">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-blue-bright light:text-brand-blue font-bold flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                02 / Cognitive Matrix
              </div>
              
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white light:text-brand-dark tracking-tight">
                Self-Regulating Neuro Node Paths
              </h2>
              
              <p className="text-neutral-400 light:text-neutral-600 font-sans text-sm sm:text-base leading-relaxed">
                Rather than linear computations, our neural networks evaluate systems across multi-dimensional matrices. Use the cognitive optimization trigger to simulate real-time model inference tuning.
              </p>

              {/* Interactive Module Controls */}
              <div className="bg-neutral-900/80 border border-neutral-800/80 p-5 rounded-xl space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-neutral-300 tracking-wider">Simulated Path Pulse</span>
                  <button 
                    id="matrix-pulse-trigger"
                    onClick={triggerMatrixPulse}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue-bright text-white font-mono text-[10px] font-bold uppercase rounded hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    <Activity className="w-3.5 h-3.5" />
                    Trigger System Pulse
                  </button>
                </div>
                
                <div className="bg-brand-dark/90 p-3.5 rounded border border-neutral-950 font-mono text-xs text-neutral-400">
                  <span className="text-brand-blue-bright font-bold">&gt; </span>
                  {matrixLog}
                </div>
              </div>
            </div>

            {/* Neural Matrix Interactive Board */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="w-full max-w-[500px] bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl relative shadow-2xl overflow-hidden aspect-video">
                <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Sync Status
                </div>
                
                {/* Node Grid representation */}
                <div className="grid grid-cols-4 gap-6 h-full items-center">
                  {[...Array(12)].map((_, i) => {
                    const isPulsing = pulsingNodes.includes(i);
                    return (
                      <div key={i} className="flex flex-col items-center justify-center relative">
                        <motion.div
                          animate={isPulsing ? {
                            scale: [1, 1.3, 1],
                            borderColor: ['#3B82F6', '#60A5FA', '#3B82F6'],
                            boxShadow: ['0 0 0px rgba(0,0,0,0)', '0 0 15px rgba(59,130,246,0.5)', '0 0 0px rgba(0,0,0,0)']
                          } : {}}
                          transition={{ duration: 1.5 }}
                          className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all ${
                            isPulsing 
                              ? 'border-brand-blue-bright bg-brand-blue-bright/10' 
                              : 'border-neutral-800 bg-brand-dark hover:border-neutral-700'
                          }`}
                        >
                          <Cpu className={`w-5 h-5 ${isPulsing ? 'text-brand-blue-bright' : 'text-neutral-600'}`} />
                        </motion.div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 mt-2">
                          N-{i < 10 ? '0' + i : i}
                        </span>
                        
                        {/* Connecting Lines Representation using absolute positioning */}
                        {isPulsing && i % 3 === 0 && (
                          <span className="absolute w-24 h-[2px] bg-brand-blue-bright top-1/2 left-10 scanner-line z-0" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 03: NEURAL MEMORY VAULT (RAG) ================= */}
        <div 
          id="home-sec-2" 
          className="snap-start relative w-full h-screen shrink-0 flex items-center justify-center overflow-hidden bg-brand-dark"
        >
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-brand-blue-bright/5 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full pt-16">
            {/* Left Interactive RAG Shell */}
            <div className="lg:col-span-7 flex justify-center items-center order-2 lg:order-1">
              <div className="w-full max-w-[550px] bg-neutral-900/90 border border-neutral-800 p-6 rounded-xl shadow-2xl font-mono text-xs">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-neutral-400 font-bold ml-2 uppercase text-[10px]">VAULT_RAG_SHELL_v2.0</span>
                  </div>
                  <Database className="w-4 h-4 text-brand-blue-bright light:text-brand-blue" />
                </div>

                <form onSubmit={runRAGSearch} className="space-y-4">
                  <div className="flex items-center gap-2 bg-brand-dark/90 p-2 border border-neutral-800/80 rounded-lg">
                    <Search className="w-4 h-4 text-neutral-500 shrink-0" />
                    <input
                      id="rag-query-input"
                      type="text"
                      className="bg-transparent border-none text-white focus:outline-none w-full placeholder-neutral-600 font-mono text-xs"
                      placeholder="Input semantic lookup query (eg. Corporate policy)..."
                      value={ragQuery}
                      onChange={(e) => setRagQuery(e.target.value)}
                    />
                    <button
                      id="rag-submit-btn"
                      type="submit"
                      disabled={isQueryingRAG}
                      className="px-3 py-1.5 bg-brand-blue-bright font-bold text-white uppercase text-[10px] rounded cursor-pointer shrink-0 disabled:opacity-55 hover:bg-blue-600"
                    >
                      {isQueryingRAG ? 'Scanning...' : 'RUN QUERY'}
                    </button>
                  </div>
                </form>

                {/* Response area */}
                <div className="mt-4 p-4 bg-brand-darker rounded border border-neutral-950 min-h-[140px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {isQueryingRAG ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center space-y-2 h-[120px]"
                      >
                        <RefreshCw className="w-6 h-6 text-brand-blue-bright animate-spin" />
                        <span className="text-[10px] tracking-widest text-neutral-500 uppercase">Calculating embeddings & similarity cosines...</span>
                      </motion.div>
                    ) : ragResult ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between text-[10px] text-neutral-500 uppercase pb-1 border-b border-neutral-900">
                          <span>Chunk: <strong className="text-neutral-300">{ragResult.chunkId}</strong></span>
                          <span>Score: <strong className="text-brand-blue-bright light:text-brand-blue">{ragResult.score}</strong></span>
                          <span>Latency: <strong className="text-emerald-500">{ragResult.latency}</strong></span>
                        </div>
                        <p className="text-neutral-300 leading-relaxed font-sans text-xs">
                          {ragResult.summary}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-1 h-[120px] text-neutral-600">
                        <Database className="w-8 h-8 text-neutral-800" />
                        <span className="text-[10px] uppercase font-bold tracking-wider">Awaiting query parameters</span>
                        <span className="text-[9px] text-neutral-700">Type something in input and hit 'RUN QUERY'</span>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Intellectual Content */}
            <div className="lg:col-span-5 text-left space-y-5 order-1 lg:order-2">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-blue-bright light:text-brand-blue font-bold flex items-center gap-2">
                <Database className="w-4 h-4" />
                03 / Vector Store & RAG
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white light:text-brand-dark tracking-tight leading-tight">
                Decoupled Knowledge Engines
              </h2>
              <p className="text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed">
                Nexacore engineers state-of-the-art retrieval-augmented generation. By bypassing static context boundaries, models query dynamic in-memory databases utilizing top-k cosine logic securely mapped in local Indian data centers.
              </p>
              <ul className="space-y-2 text-sm font-mono text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue-bright light:text-brand-blue shrink-0" />
                  Hallucination Rates reduced below 0.1%
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue-bright light:text-brand-blue shrink-0" />
                  Hybrid dense-sparse lexical indexing
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= SECTION 04: SYNTH INTEGRATED MULTI-AGENT SWARMS ================= */}
        <div 
          id="home-sec-3" 
          className="snap-start relative w-full h-screen shrink-0 flex items-center justify-center overflow-hidden bg-brand-darker"
        >
          <div className="absolute inset-0 cyber-grid opacity-25" />
          <div className="absolute top-[20%] left-[20%] w-[380px] h-[380px] rounded-full bg-brand-blue-bright/5 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full pt-16">
            <div className="lg:col-span-5 text-left space-y-5">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-blue-bright light:text-brand-blue font-bold flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                04 / Autonomous Agent Swarms
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white light:text-brand-dark tracking-tight">
                Collaborative Multi-Agent Systems
              </h2>
              <p className="text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed">
                Rather than individual monolithic models, Nexacore deploys structured, role-specific agents that synchronize tasks to automate business, software development, or cyber security routines with extreme speed.
              </p>

              {/* Selector buttons */}
              <div className="flex flex-wrap gap-2.5">
                {[
                  { id: 'harvest', label: 'Data Scraper Cluster' },
                  { id: 'codesync', label: 'TS Code Integrity Audits' },
                  { id: 'defender', label: 'Cyber Threat Blockers' },
                ].map((btn) => (
                  <button
                    id={`agent-routine-btn-${btn.id}`}
                    key={btn.id}
                    onClick={() => handleAgentRoutineChange(btn.id as any)}
                    className={`px-3 py-2 text-xs font-mono font-bold rounded-lg border transition-all cursor-pointer ${
                      agentSwarmRoutine === btn.id 
                        ? 'bg-brand-blue-bright border-brand-blue-bright text-white shadow-md' 
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Swarm visual representation */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="w-full max-w-[500px] bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl relative shadow-2xl aspect-video overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 font-mono text-[10px] text-neutral-400 dark:text-neutral-500 uppercase">
                  <span>SWARM PROTOCOL: {agentSwarmRoutine.toUpperCase()}</span>
                  <span>Active Workers: 4 nodes</span>
                </div>

                {/* Kinetic orbits */}
                <div className="flex-1 relative flex items-center justify-center my-4 overflow-hidden h-36">
                  {/* Central Objective Anchor */}
                  <div className="w-12 h-12 bg-neutral-800 rounded-full border border-brand-blue-bright/40 flex items-center justify-center text-brand-blue-bright z-10 relative">
                    <Cpu className="w-5 h-5 animate-spin duration-3000" />
                  </div>

                  {/* Radiating wave */}
                  <div className="absolute w-24 h-24 border border-brand-blue-bright/20 rounded-full animate-ping" />

                  {/* Orbits & Agent positions */}
                  <div className="absolute w-[80%] h-[80%] border border-dashed border-neutral-800 rounded-full" />

                  {/* Swarm particles positions adjusted by state */}
                  <AnimatePresence mode="wait">
                    {agentSwarmRoutine === 'harvest' && (
                      <motion.div 
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 1, rotate: 360 }}
                        exit={{ opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                        className="absolute inset-0 flex items-center justify-between"
                      >
                        <div className="w-4 h-4 bg-brand-blue-bright rounded-full border border-white neon-glow shadow-blue-500" />
                        <div className="w-3 h-3 bg-brand-blue-bright rounded-full" />
                      </motion.div>
                    )}
                    {agentSwarmRoutine === 'codesync' && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col justify-around py-4 items-center"
                      >
                        <div className="w-5 h-5 bg-emerald-500 text-white font-mono text-[8px] font-bold rounded-lg flex items-center justify-center">TS</div>
                        <div className="w-5 h-5 bg-emerald-500 text-white font-mono text-[8px] font-bold rounded-lg flex items-center justify-center">TS</div>
                      </motion.div>
                    )}
                    {agentSwarmRoutine === 'defender' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex justify-center items-center gap-12"
                      >
                        <div className="w-6 h-6 border-2 border-dashed border-red-500 rounded-full animate-spin" />
                        <div className="w-4 h-4 bg-red-500 rounded" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Swarm Live Diagnostic Panel */}
                <div className="bg-neutral-950 p-4 rounded border border-neutral-900 font-mono text-[10px] space-y-1">
                  {agentLogs.map((log, idx) => (
                    <div key={idx} className="text-neutral-400">
                      <span className="text-brand-blue-bright font-bold">&gt;&gt;</span> {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 05: QUANTUM DEFENDER SHIELD ================= */}
        <div 
          id="home-sec-4" 
          className="snap-start relative w-full h-screen shrink-0 flex items-center justify-center overflow-hidden bg-brand-dark"
        >
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-brand-blue-bright/5 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full pt-16">
            {/* Left Interactive HUD Shield Panel */}
            <div className="lg:col-span-7 flex justify-center items-center order-2 lg:order-1">
              <div className="w-full max-w-[500px] bg-neutral-900/90 border border-neutral-800 p-6 rounded-2xl relative shadow-2xl">
                <div className="absolute top-4 right-4 text-right flex flex-col">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase">Risk Index</span>
                  <span className={`font-mono text-xl font-bold ${parseFloat(getSystemVulnerability()) > 40 ? 'text-brand-blue-bright light:text-brand-blue mr-1 animate-pulse' : 'text-emerald-400'}`}>
                    {getSystemVulnerability()}%
                  </span>
                </div>
                
                <div className="flex items-center gap-2 pb-4 mb-6 border-b border-neutral-800">
                  <ShieldCheck className="w-5 h-5 text-brand-blue-bright light:text-brand-blue" />
                  <span className="font-display font-medium text-sm text-white uppercase tracking-wider">Quantum Shield Controls</span>
                </div>

                <div className="space-y-4">
                  {[
                    { id: 'ragVerify', title: 'Dense Semantic Validation', desc: 'Queries verified against structured vectors to prevent external hijack injection' },
                    { id: 'anonymizer', title: 'Metadata Anonymizer Core', desc: 'Scrubs client parameters and IPs at the ingress server boundary' },
                    { id: 'piiCore', title: 'PII Redaction filter', desc: 'Identifies and standardizes cell numbers, credit, and PAN cards automatically' },
                    { id: 'rateLimiter', title: 'Dynamic API Flood Shield', desc: 'Throttles high frequency loops using sliding token caches' },
                  ].map((ctrl) => {
                    const isActive = (shieldActive as any)[ctrl.id];
                    return (
                      <button
                        id={`shield-toggle-${ctrl.id}`}
                        key={ctrl.id}
                        onClick={() => toggleShield(ctrl.id as any)}
                        className={`w-full text-left p-3.5 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-brand-blue-bright/5 border-brand-blue-bright/50 text-white' 
                            : 'bg-neutral-900/40 border-neutral-850 text-neutral-500 hover:border-neutral-800'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <h4 className={`text-xs font-mono font-bold ${isActive ? 'text-brand-blue-bright light:text-brand-blue' : 'text-neutral-400'}`}>
                            {ctrl.title}
                          </h4>
                          <p className="text-[10px] text-neutral-500 max-w-[340px] leading-relaxed">
                            {ctrl.desc}
                          </p>
                        </div>
                        <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${isActive ? 'bg-brand-blue-bright' : 'bg-neutral-800'}`}>
                          <div className={`w-3 h-3 rounded-full bg-white transition-transform ${isActive ? 'translate-x-4' : 'translate-x-0'}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Intellectual Content */}
            <div className="lg:col-span-5 text-left space-y-5 order-1 lg:order-2">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-blue-bright light:text-brand-blue font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                05 / Cybersecurity Guard
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white light:text-brand-dark tracking-tight leading-tight">
                Quantum Armor for Sovereignty
              </h2>
              <p className="text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
                Corporate LLM prompts expose massive corporate liabilities. Nexacore intercepts every server packet with dedicated sanitizers. Engage the cryptographic toggles to model the mathematical decline of corporate threat vulnerability.
              </p>
              <div className="p-4 rounded-xl bg-neutral-900/50 light:bg-neutral-100 border border-brand-blue-bright/10 font-mono text-xs flex items-center gap-3">
                <Lock className="w-5 h-5 text-brand-blue-bright light:text-brand-blue" />
                <span>Encrypted using server-bound HSM with zero key-sharing parameters.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 06: VALUE & ROI ACCELERATOR SIMULATOR ================= */}
        <div 
          id="home-sec-5" 
          className="snap-start relative w-full h-screen shrink-0 flex items-center justify-center overflow-hidden bg-brand-darker"
        >
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute top-[10%] left-[20%] w-[450px] h-[450px] rounded-full bg-brand-blue-bright/5 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full pt-16">
            <div className="lg:col-span-5 text-left space-y-5">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-blue-bright light:text-brand-blue font-bold flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                06 / ROI Estimator Engine
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white light:text-brand-dark tracking-tight">
                Quantify the Automation Curve
              </h2>
              <p className="text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed">
                Calculate real ROI by projecting query workloads against localized custom models compared to standard cloud-hosted third-party LLMs.
              </p>

              {/* Sliders Control Deck */}
              <div className="space-y-4 bg-neutral-900/80 p-5 rounded-xl border border-neutral-800">
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-[10px] text-neutral-400">
                    <span>DAILY INFERENCE OPERATIONS</span>
                    <span className="text-brand-blue-bright light:text-brand-blue font-bold">{queries.toLocaleString()} TX</span>
                  </div>
                  <input
                    id="slider-queries-input"
                    type="range"
                    min="5000"
                    max="500000"
                    step="5000"
                    className="w-full accent-brand-blue-bright cursor-pointer"
                    value={queries}
                    onChange={(e) => setQueries(parseInt(e.target.value))}
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-[10px] text-neutral-400">
                    <span>AUTOMATION TARGET FACTOR</span>
                    <span className="text-brand-blue-bright light:text-brand-blue font-bold">{automationFactor}% Efficiency</span>
                  </div>
                  <input
                    id="slider-automation-input"
                    type="range"
                    min="10"
                    max="95"
                    step="5"
                    className="w-full accent-brand-blue-bright cursor-pointer"
                    value={automationFactor}
                    onChange={(e) => setAutomationFactor(parseInt(e.target.value))}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[
                    { id: 'standard', label: 'Vanilla API' },
                    { id: 'nexacore_rag', label: 'Nexa RAG' },
                    { id: 'nexacore_swarm', label: 'Nexa Swarm' },
                  ].map((m) => (
                    <button
                      id={`model-selector-${m.id}`}
                      key={m.id}
                      onClick={() => setModelType(m.id as any)}
                      className={`py-2 text-[10px] font-mono font-bold rounded-md uppercase tracking-wider border cursor-pointer ${
                        modelType === m.id 
                          ? 'bg-brand-blue-bright/10 border-brand-blue-bright text-brand-blue-bright' 
                          : 'border-neutral-800 bg-brand-dark hover:border-neutral-700 text-neutral-500'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Output Graphic */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="w-full max-w-[500px] bg-gradient-to-br from-neutral-900 to-brand-dark border border-neutral-800 p-8 rounded-2xl relative shadow-2xl space-y-6">
                <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[8px] text-neutral-500 uppercase">
                  <span>Sovereign GPU Compute Mode</span>
                </div>

                <h3 className="font-display font-bold text-sm text-neutral-300 uppercase tracking-widest border-b border-neutral-800 pb-3">Projected Monthly Savings</h3>

                {/* Output metrics cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900 relative overflow-hidden">
                    <span className="block font-mono text-[9px] text-neutral-500 uppercase tracking-widest mb-1">Monthly Cost Reduced</span>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-emerald-400 font-mono tracking-tight">
                      ${roiValue.cost.toLocaleString()}
                    </span>
                    <div className="absolute right-3 bottom-3 text-emerald-500/10">
                      <TrendingUp className="w-12 h-12" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900 relative overflow-hidden">
                    <span className="block font-mono text-[9px] text-neutral-500 uppercase tracking-widest mb-1">Engineering Hours Freed</span>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-brand-blue-bright light:text-brand-blue font-mono tracking-tight">
                      ~{roiValue.hours.toLocaleString()} hrs
                    </span>
                    <div className="absolute right-3 bottom-3 text-brand-blue-bright/10">
                      <Zap className="w-12 h-12" />
                    </div>
                  </div>
                </div>

                {/* Tokens Generated visual simulation mapping */}
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900">
                  <div className="flex justify-between font-mono text-[9px] text-neutral-400 mb-2">
                    <span>ESTIMATED TOKENS STREAMED/MONTH</span>
                    <span className="text-white font-bold">{roiValue.tokens} TK</span>
                  </div>
                  {/* Styled Dynamic Progress Bar */}
                  <div className="w-full h-3 bg-neutral-900 rounded-full overflow-hidden p-[2px]">
                    <motion.div
                      animate={{ width: `${Math.min(100, Math.max(10, (queries / 500000) * 100))}%` }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="h-full bg-gradient-to-r from-brand-blue-bright to-cyan-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Action to capture user interest */}
                <button
                  id="roi-connect-btn"
                  onClick={() => setActivePage('contact')}
                  className="w-full py-4.5 bg-neutral-900 hover:bg-neutral-900/60 text-white border border-brand-blue-bright/20 hover:border-brand-blue-bright transition-colors font-mono text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Retrieve System Proposal
                  <ArrowUpRight className="w-4 h-4 text-brand-blue-bright light:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 07: BENGALURU GEOGRAPHIC CORE MESH ================= */}
        <div 
          id="home-sec-6" 
          className="snap-start relative w-full h-screen shrink-0 flex items-center justify-center overflow-hidden bg-brand-dark"
        >
          <div className="absolute inset-0 cyber-grid opacity-35" />
          <div className="absolute bottom-[20%] left-[20%] w-[450px] h-[450px] rounded-full bg-brand-blue-bright/5 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full pt-16">
            {/* Left geographical graphics */}
            <div className="lg:col-span-7 flex justify-center items-center order-2 lg:order-1">
              <div className="w-full max-w-[500px] h-[340px] bg-neutral-900/80 border border-neutral-800 rounded-2xl relative shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                  <span>Anchor Node Array</span>
                  <span>IPv6 Connected Core</span>
                </div>

                {/* Interactive map coordinates representations */}
                <div className="flex-1 relative my-4 flex items-center justify-center">
                  {/* Draw global connections as stylized custom vector graph */}
                  <svg className="absolute w-full h-full text-neutral-800" viewBox="0 0 100 100">
                    <line x1="50" y1="50" x2="15" y2="35" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3, 3" />
                    <line x1="50" y1="50" x2="80" y2="25" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3, 3" />
                    <line x1="50" y1="50" x2="85" y2="70" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3, 3" />
                  </svg>

                  {/* Bengaluru Center Node Anchor */}
                  <div 
                    onMouseEnter={() => setHoveredNode('bengaluru')}
                    className="absolute z-15 cursor-pointer flex flex-col items-center"
                    style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-blue-bright/20 border-2 border-brand-blue-bright flex items-center justify-center relative">
                      <span className="absolute w-4 h-4 rounded-full bg-brand-blue-bright animate-ping" />
                      <div className="w-3 h-3 rounded-full bg-brand-blue-bright shadow-[0_0_10px_#3B82F6]" />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-white uppercase mt-1 bg-neutral-950 px-1.5 py-0.5 rounded border border-neutral-800">Bengaluru (HQ)</span>
                  </div>

                  {/* Silicon Valley Node */}
                  <div 
                    onMouseEnter={() => setHoveredNode('silicon_valley')}
                    className="absolute z-10 cursor-pointer flex flex-col items-center"
                    style={{ left: '15%', top: '35%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="w-4 h-4 rounded-full bg-neutral-800 border border-neutral-600 hover:border-brand-blue-bright hover:bg-brand-blue-bright/20" />
                    <span className="font-mono text-[8px] text-neutral-500 mt-1">Silicon Valley</span>
                  </div>

                  {/* Frankfurt Node */}
                  <div 
                    onMouseEnter={() => setHoveredNode('frankfurt')}
                    className="absolute z-10 cursor-pointer flex flex-col items-center"
                    style={{ left: '80%', top: '25%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="w-4 h-4 rounded-full bg-neutral-800 border border-neutral-600 hover:border-brand-blue-bright hover:bg-brand-blue-bright/20" />
                    <span className="font-mono text-[8px] text-neutral-500 mt-1">Frankfurt Node</span>
                  </div>

                  {/* Tokyo Node */}
                  <div 
                    onMouseEnter={() => setHoveredNode('tokyo')}
                    className="absolute z-10 cursor-pointer flex flex-col items-center"
                    style={{ left: '85%', top: '70%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="w-4 h-4 rounded-full bg-neutral-800 border border-neutral-600 hover:border-brand-blue-bright hover:bg-brand-blue-bright/20" />
                    <span className="font-mono text-[8px] text-neutral-500 mt-1">Tokyo Edge</span>
                  </div>
                </div>

                {/* Displaying details of the node */}
                <div className="mt-2 bg-neutral-950 p-3 rounded border border-neutral-900 font-mono text-[10px] grid grid-cols-2 gap-2 text-neutral-400">
                  <div>
                    <span className="text-neutral-500 block">CURRENT SELECTION</span>
                    <span className="text-white font-bold uppercase">
                      {hoveredNode === 'bengaluru' ? 'Bengaluru Sovereign HQ' : hoveredNode === 'silicon_valley' ? 'Silicon Valley Edge' : hoveredNode === 'frankfurt' ? 'Frankfurt Hub' : hoveredNode === 'tokyo' ? 'Tokyo Core Segment' : 'Hover a node anchor'}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">LATENCY PROJECTION</span>
                    <span className="text-brand-blue-bright font-bold font-mono">
                      {hoveredNode === 'bengaluru' ? 'Local Dedicated' : hoveredNode === 'silicon_valley' ? '128.4ms Sync' : hoveredNode === 'frankfurt' ? '110.2ms Sync' : hoveredNode === 'tokyo' ? '92.1ms Sync' : '---'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right intellectual content */}
            <div className="lg:col-span-5 text-left space-y-5 order-1 lg:order-2">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-blue-bright light:text-brand-blue font-bold flex items-center gap-2">
                <Globe className="w-4 h-4" />
                07 / Grid Topology
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white light:text-brand-dark tracking-tight leading-tight">
                Global Edge Computing Mesh
              </h2>
              <p className="text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed">
                Nexacore manages multi-region deployments designed to protect server sovereignty. Powered from our command center inside Marathahalli Bengaluru, model compute limits scale automatically to nearest client proxies.
              </p>
              <div className="flex gap-4">
                <div className="border border-neutral-800 p-3 rounded bg-zinc-900/60 font-mono text-center shrink-0">
                  <span className="block font-bold text-brand-blue-bright light:text-brand-blue text-lg">99.99%</span>
                  <span className="text-[9px] text-neutral-500">SYSTEM UPTIME</span>
                </div>
                <div className="border border-neutral-800 p-3 rounded bg-zinc-900/60 font-mono text-center shrink-0">
                  <span className="block font-bold text-white text-lg">N+1</span>
                  <span className="text-[9px] text-neutral-500">BACKUP SLOTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 08: ROADMAP TO AGI ================= */}
        <div 
          id="home-sec-7" 
          className="snap-start relative w-full h-screen shrink-0 flex items-center justify-center overflow-hidden bg-brand-darker"
        >
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute top-[20%] right-[20%] w-[450px] h-[450px] rounded-full bg-brand-blue-bright/5 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full pt-16">
            <div className="lg:col-span-5 text-left space-y-5">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-blue-bright light:text-brand-blue font-bold flex items-center gap-2">
                <Compass className="w-4 h-4" />
                08 / AGI Horizon Roadmap
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white light:text-brand-dark tracking-tight leading-tight">
                Charting the Autonomous Era
              </h2>
              <p className="text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed">
                Future-proofing modern enterprises isn't a passive task. Our blueprint designs self-evolving systems. Click each launch segment to see what we are manufacturing next.
              </p>

              <button
                id="roadmap-connect-cta"
                onClick={() => setActivePage('contact')}
                className="px-6 py-3.5 bg-brand-blue-bright hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                Join Sovereign Cohort
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Interactive Milestones Selector */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="w-full max-w-[500px] h-[340px] bg-neutral-900 border border-neutral-850 p-6 rounded-2xl relative shadow-2xl flex flex-col justify-between">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">Corporate System Roadmap</span>
                  <span className="font-mono text-[9px] text-brand-blue-bright light:text-brand-blue font-bold">2026 - 2028 Blueprint</span>
                </div>

                {/* Milestone Pills */}
                <div className="grid grid-cols-4 gap-2.5 my-4">
                  {roadmapData.map((tech, idx) => (
                    <button
                      id={`roadmap-item-${idx}`}
                      key={idx}
                      onClick={() => setSelectedPhase(idx)}
                      className={`p-3 rounded-lg border text-left font-mono transition-all cursor-pointer ${
                        selectedPhase === idx 
                          ? 'border-brand-blue-bright bg-brand-blue-bright/10 text-white' 
                          : 'border-neutral-850 bg-neutral-950 text-neutral-500 hover:border-neutral-800'
                      }`}
                    >
                      <span className="block text-[8px] text-brand-blue-bright light:text-brand-blue font-bold">{tech.timeline}</span>
                      <span className="block text-xs font-bold font-display mt-1">{tech.phase}</span>
                    </button>
                  ))}
                </div>

                {/* Detailed view of active milestone phase */}
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-900 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white mb-1 uppercase tracking-wide">
                      {roadmapData[selectedPhase].title}
                    </h4>
                    <p className="text-neutral-400 font-sans text-xs leading-relaxed">
                      {roadmapData[selectedPhase].details}
                    </p>
                  </div>
                  
                  {/* Phase status node check lines */}
                  <div className="pt-2 border-t border-neutral-900/60 flex items-center justify-between text-[10px] text-neutral-500 font-mono uppercase">
                    <span>Validation Nodes</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Status: ACTIVE SETUP
                    </span>
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
