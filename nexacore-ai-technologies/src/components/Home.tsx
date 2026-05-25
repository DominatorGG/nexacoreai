import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight,
  Shield,
  Zap,
  Lock,
  Database,
  Workflow,
  Globe,
  Send,
  Mail,
  Phone,
  MapPin,
  Cpu,
  Network,
  Layers,
  Brain,
  Code,
  Activity,
  Server,
  ShieldCheck,
  Hexagon,
  Fingerprint,
  Bot,
  Target
} from 'lucide-react';

interface HomeProps {
  setActivePage: (page: string) => void;
}

/* Scroll-triggered reveal */
function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number; key?: any }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home({ setActivePage }: HomeProps) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hubMousePos, setHubMousePos] = useState({ x: 0, y: 0 });

  const handleHubMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHubMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); setFormData({ name: '', email: '', company: '', message: '' }); }, 1500);
  };

  // @ts-ignore
  const base = (import.meta as any).env?.BASE_URL || '/Nexacore/';

  return (
    <div className="bg-transparent min-h-screen">
      
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-10">
        {/* Background glow */}
        <div className="absolute top-[10%] left-[5%] w-[700px] h-[700px] rounded-full bg-[#2563EB]/[0.04] blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] rounded-full bg-[#2563EB]/[0.03] blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1536px] mx-auto px-8 lg:px-12 pt-24 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ">
            {/* Left: Text content */}
            <div className="lg:col-span-6 space-y-7">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="font-mono text-[14px] tracking-[0.25em] text-[#3B82F6] uppercase"
              >
                AI-POWERED. FUTURE-READY.
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="font-display text-[4rem] lg:text-[4.75rem] font-bold text-white leading-[1.08] tracking-tight"
              >
                Architecting the<br />
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">Autonomous</span><br />
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">Enterprise</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-[#94A3B8] text-[19px] leading-[1.7] max-w-[440px]"
              >
                Nexacore AI Technologies builds intelligent systems
                that think, learn, and evolve. We empower enterprises
                with secure data, generative intelligence, and
                autonomous multi-agent orchestration.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="flex items-center gap-4 pt-1"
              >
                <button
                  id="hero-explore-btn"
                  onClick={() => setActivePage('services')}
                  className="group flex items-center gap-2.5 px-7 py-3 bg-[#2563EB] text-white text-sm font-medium rounded-full shadow-[0_4px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_32px_rgba(37,99,235,0.5)] hover:bg-[#3B82F6] transition-all duration-300 cursor-pointer"
                >
                  Explore Our System
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  id="hero-consult-btn"
                  onClick={() => setActivePage('contact')}
                  className="px-7 py-3 text-white text-sm font-medium rounded-full border border-[#1E293B] hover:border-[#3B82F6]/40 bg-[#0F172A]/60 transition-all duration-300 cursor-pointer"
                >
                  Consult Expert
                </button>
              </motion.div>

              {/* Feature pills with dividers */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-stretch gap-0 pt-6 border-t border-[#1E293B]/60 mt-2"
              >
                {[
                  { top: 'Multi-Agent', bot: 'Orchestration' },
                  { top: 'Secure', bot: 'AI Infrastructure' },
                  { top: 'Scalable', bot: 'Enterprise AI' },
                  { top: 'Future-Ready', bot: 'Intelligence' },
                ].map((p, i) => (
                  <div key={i} className={`flex-1 py-2 ${i > 0 ? 'border-l border-[#1E293B]/50 pl-5' : ''} ${i < 3 ? 'pr-5' : ''}`}>
                    <span className="block text-[15px] font-semibold text-white leading-snug">{p.top}</span>
                    <span className="block text-[14px] text-[#94A3B8] mt-0.5">{p.bot}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: AI Orb */}
            <motion.div
              className="lg:col-span-6 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full max-w-[750px] flex items-center justify-center">
                {/* Cinematic Ambient Glow Behind Video */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#3B82F6]/15 blur-[100px] rounded-full pointer-events-none" />

                {/* Video — mix-blend-mode: screen makes all black pixels invisible */}
                <video
                  className="relative w-full h-auto scale-[1.55]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ 
                    mixBlendMode: 'screen',
                    filter: 'contrast(1.1) brightness(1.05)', 
                  }}
                >
                  <source src={`${base}assets/videos/crpnex_loop.webm`} type="video/webm" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: TRUSTED COMPANIES
          ═══════════════════════════════════════════ */}
      <section className="relative py-8">
        <div className="max-w-[1536px] mx-auto px-8 lg:px-12">
          <Reveal>
            {/* Top divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent mb-8" />
            
            <p className="text-center font-mono text-[14px] font-medium tracking-[0.2em] text-[#94A3B8] uppercase mb-8">
              Trusted by forward-thinking enterprises
            </p>

            <div className="flex items-center justify-center gap-14 flex-wrap">
              {[
                { name: 'AVENBANK', prefix: '△', sub: 'BANKING' },
                { name: 'Finova', prefix: '◇', sub: 'FINANCE' },
                { name: 'MediCore', prefix: '+', sub: 'HEALTHCARE' },
                { name: 'ShopX', prefix: '◉', sub: 'RETAIL' },
                { name: 'PayNex', prefix: '▽', sub: 'PAYMENTS' },
              ].map((logo, i) => (
                <div key={i} className="flex items-center gap-2.5 opacity-50 hover:opacity-80 transition-opacity duration-300 select-none">
                  <span className="text-white text-lg font-light">{logo.prefix}</span>
                  <div>
                    <span className="font-display text-[18px] font-bold text-white tracking-wide">{logo.name}</span>
                    <span className="block text-[11px] text-[#94A3B8] tracking-[0.15em] uppercase">{logo.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent mt-8" />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: SERVICES (CORE CAPABILITIES)
          ═══════════════════════════════════════════ */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1536px] mx-auto px-8 lg:px-12">
          {/* Header */}
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-16">
              <div className="max-w-xl">
                <div className="inline-block border border-[#1E293B] rounded-full px-4 py-1.5 mb-6">
                  <span className="font-mono text-[13px] tracking-[0.25em] font-bold text-[#3B82F6] uppercase">CORE CAPABILITIES</span>
                </div>
                <h2 className="font-display text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
                  AI Solutions for the<br />Modern Enterprise
                </h2>
              </div>
              <p className="text-[#94A3B8] text-[16px] leading-[1.8] max-w-[360px] lg:mt-12">
                We deliver end-to-end AI capabilities
                built on robust data engineering,
                generative models, and autonomous
                multi-agent systems.
              </p>
            </div>
          </Reveal>

          {/* Service Cards - exact horizontal split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              { 
                num: '01', 
                title: 'Data Engineering', 
                desc: 'Build resilient data pipelines, unify enterprise data, and unlock real-time intelligence at scale.', 
                img: 'service-data-engineering.png',
                accent: 'text-[#3B82F6]',
                hoverAccent: 'group-hover:text-[#60A5FA]'
              },
              { 
                num: '02', 
                title: 'Generative AI', 
                desc: 'Create, generate, and innovate with secure, enterprise-grade generative AI solutions.', 
                img: 'service-generative-ai.png',
                accent: 'text-[#A855F7]', // Purple
                hoverAccent: 'group-hover:text-[#C084FC]'
              },
              { 
                num: '03', 
                title: 'Agentic AI', 
                desc: 'Deploy autonomous multi-agent systems that plan, reason, and execute complex workflows.', 
                img: 'service-agentic-ai.png',
                accent: 'text-[#2DD4BF]', // Teal/Cyan
                hoverAccent: 'group-hover:text-[#5EEAD4]'
              },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="relative bg-[#050B14] border border-[#1E293B]/60 rounded-xl overflow-hidden group hover:border-[#3B82F6]/30 transition-all duration-500 h-[220px] lg:h-[240px] flex">
                  
                  {/* Left Content (Text) */}
                  <div className="relative z-20 w-[58%] p-5 lg:p-6 flex flex-col h-full">
                    <span className="font-mono text-[14px] text-[#94A3B8] font-medium tracking-wider mb-3 block">{s.num}</span>
                    <h3 className="font-display text-[20px] font-bold text-white mb-2 tracking-tight">{s.title}</h3>
                    <p className="text-[#CBD5E1] text-[15px] leading-[1.6] flex-grow pr-2">{s.desc}</p>
                    <button
                      onClick={() => setActivePage('services')}
                      className={`inline-flex items-center gap-2 ${s.accent} ${s.hoverAccent} text-[15px] font-semibold transition-all cursor-pointer mt-2`}
                    >
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Right Content (Image or Video) */}
                  <div className="absolute z-10 top-0 right-0 bottom-0 w-[60%] flex items-center justify-center overflow-hidden pointer-events-none">
                    {/* Gradient fade to blend smoothly into the left text area */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050B14] to-transparent z-10" />
                    
                    {s.num === '01' ? (
                      <video
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 mix-blend-screen"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ 
                          filter: 'brightness(1.2) contrast(1.15)',
                        }}
                      >
                        <source src={`${base}assets/videos/datavid_transparent.webm`} type="video/webm" />
                      </video>
                    ) : s.num === '02' ? (
                      <video
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 mix-blend-screen"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ 
                          filter: 'brightness(1.2) contrast(1.15)',
                        }}
                      >
                        <source src={`${base}assets/videos/brainai_transparent.webm`} type="video/webm" />
                      </video>
                    ) : s.num === '03' ? (
                      <video
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 mix-blend-screen"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ 
                          filter: 'brightness(1.2) contrast(1.15)',
                        }}
                      >
                        <source src={`${base}assets/videos/neur1_transparent.webm`} type="video/webm" />
                      </video>
                    ) : (
                      <img
                        src={`${base}images/${s.img}`}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-screen"
                        style={{ filter: 'brightness(1.1) contrast(1.1)' }}
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* View All */}
          <Reveal delay={0.3}>
            <div className="mt-14 flex flex-col items-center justify-center">
              <button onClick={() => setActivePage('services')} className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#3B82F6] text-[16px] font-medium transition-colors cursor-pointer mb-2">
                View all services <ArrowRight className="w-4 h-4" />
              </button>
              {/* Subtle glowing line under the button like in the reference */}
              <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" />
              <div className="w-24 h-[1px] -mt-[1px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent shadow-[0_0_8px_#3B82F6]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: INDUSTRIES
          ═══════════════════════════════════════════ */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1536px] mx-auto px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-14">
              <div className="max-w-xl">
                <p className="font-mono text-[13px] tracking-[0.25em] text-[#3B82F6] font-bold uppercase mb-4">INDUSTRIES WE TRANSFORM</p>
                <h2 className="font-display text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
                  Intelligence That Powers<br />Every Industry
                </h2>
              </div>
              <p className="text-[#94A3B8] text-[16px] leading-[1.8] max-w-[300px] lg:mt-10 lg:text-right">
                Tailored AI solutions for
                mission-critical industries.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Banking', desc: 'Intelligent risk, fraud detection & automation.', img: 'industry-banking.png', accent: 'text-[#3B82F6]', hoverAccent: 'group-hover:text-[#60A5FA]' },
              { name: 'Finance', desc: 'Smarter analytics, trading, & forecasting.', img: 'industry-finance.png', accent: 'text-[#A855F7]', hoverAccent: 'group-hover:text-[#C084FC]' }, // Purple accent
              { name: 'Healthcare', desc: 'AI for diagnostics, patient care & more.', img: 'industry-healthcare.png', accent: 'text-[#3B82F6]', hoverAccent: 'group-hover:text-[#60A5FA]' },
              { name: 'Ecommerce & Retail', desc: 'Personalization, demand forecasting & automation.', img: 'industry-ecommerce.png', accent: 'text-[#3B82F6]', hoverAccent: 'group-hover:text-[#60A5FA]' },
            ].map((ind, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[#050B14] border border-[#1E293B]/80 rounded-2xl overflow-hidden group hover:border-[#3B82F6]/40 transition-all duration-500 flex flex-col h-full">
                  <div className="relative h-[130px] lg:h-[150px] overflow-hidden">
                    <img src={`${base}images/${ind.img}`} alt={ind.name} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-4 lg:p-5 flex-grow flex flex-col">
                    <h3 className="font-display text-[20px] font-bold text-white mb-1.5 tracking-tight">{ind.name}</h3>
                    <p className="text-[#CBD5E1] text-[15px] leading-[1.6] mb-4 flex-grow">{ind.desc}</p>
                    <button onClick={() => setActivePage('industries')} className={`inline-flex items-center gap-1.5 ${ind.accent} ${ind.hoverAccent} text-[15px] font-semibold transition-all cursor-pointer`}>
                      Explore <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-14 flex flex-col items-center justify-center">
              <button onClick={() => setActivePage('industries')} className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#3B82F6] text-[16px] font-medium transition-colors cursor-pointer mb-2">
                View all industries <ArrowRight className="w-4 h-4" />
              </button>
              {/* Glowing line matching the services section */}
              <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" />
              <div className="w-24 h-[1px] -mt-[1px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent shadow-[0_0_8px_#3B82F6]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: AI OPERATING SYSTEM
          ═══════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.04] blur-[200px] pointer-events-none" />

        <div className="relative z-10 max-w-[1536px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left text */}
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-mono text-[13px] tracking-[0.25em] text-[#3B82F6] uppercase mb-4">OUR INTELLIGENCE LAYER</p>
                <h2 className="font-display text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight mb-5">
                  The Nexacore AI<br />Operating System
                </h2>
                <p className="text-[#CBD5E1] text-[16px] leading-[1.7] max-w-[380px]">
                  A secure, scalable, and autonomous AI infrastructure
                  layer that orchestrates data, models, and agents
                  across your enterprise.
                </p>
              </Reveal>
            </div>

            {/* Right: Hub diagram */}
            <div className="lg:col-span-8">
              <Reveal delay={0.15}>
                <div 
                  className="relative flex flex-col lg:flex-row items-center justify-center py-4 lg:py-10"
                  onMouseMove={handleHubMouseMove}
                >
                  {/* Mouse Spotlight (only visible on hover) */}
                  <div 
                    className="absolute pointer-events-none rounded-full bg-[#3B82F6]/20 blur-[100px] w-[300px] h-[300px] transition-opacity duration-300 opacity-0 lg:group-hover:opacity-100"
                    style={{
                      left: hubMousePos.x - 150,
                      top: hubMousePos.y - 150,
                    }}
                  />

                  {/* Left labels */}
                  <div className="flex flex-col gap-6 lg:gap-8 items-end z-10 w-full lg:w-auto mt-8 lg:mt-0 order-2 lg:order-1">
                    {[
                      { icon: Database, label: 'Data Sources' },
                      { icon: Server, label: 'Enterprise Systems' },
                      { icon: Code, label: 'APIs & Integrations' },
                      { icon: Activity, label: 'Real-time Streams' }
                    ].map((item, i) => (
                      <motion.div key={i} className="relative group flex items-center gap-3 bg-[#0A1020]/80 backdrop-blur-sm border border-[#1E293B] hover:border-[#3B82F6]/50 rounded-full py-2 px-3 pl-4 transition-all duration-300 w-full lg:w-auto max-w-[240px]" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3 }}>
                        {/* Connecting line right (Desktop only) */}
                        <div className="hidden lg:block absolute top-1/2 -right-[40px] xl:-right-[80px] w-[40px] xl:w-[80px] h-[1px] bg-gradient-to-r from-[#3B82F6]/80 to-transparent opacity-30 group-hover:opacity-100 transition-opacity">
                          {/* Animated flowing data dot */}
                          <div className="absolute top-0 left-0 w-8 h-[1px] bg-white opacity-0 group-hover:opacity-100 group-hover:animate-[scan_1s_ease-in-out_infinite]" style={{ boxShadow: '0 0 10px #fff' }} />
                        </div>
                        
                        <span className="text-[13px] font-medium text-[#94A3B8] group-hover:text-white transition-colors whitespace-nowrap flex-grow text-right lg:text-left">{item.label}</span>
                        <div className="w-7 h-7 rounded-full bg-[#1E293B]/80 border border-[#3B82F6]/30 flex flex-shrink-0 items-center justify-center group-hover:bg-[#3B82F6]/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                          <item.icon className="w-3.5 h-3.5 text-[#3B82F6]" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Center core */}
                  <motion.div 
                    className="relative mx-8 xl:mx-16 flex-shrink-0 z-20 order-1 lg:order-2" 
                    initial={{ opacity: 0, scale: 0.85 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: 0.2, duration: 0.7 }}
                    style={{
                      transform: `perspective(1000px) rotateX(${(hubMousePos.y - 200) / -30}deg) rotateY(${(hubMousePos.x - 200) / 30}deg)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <div className="relative w-56 h-56 lg:w-72 lg:h-72 flex items-center justify-center">
                       {/* Multiple Concentric Rings */}
                       
                       {/* Outer Dashed */}
                       <div className="absolute inset-0 rounded-full border border-dashed border-[#3B82F6]/30 animate-[spin_20s_linear_infinite]" />
                       
                       {/* Mid Solid Glow */}
                       <div className="absolute inset-4 rounded-full border border-[#3B82F6]/40 bg-[#050B14]/40 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.15)] animate-[spin_15s_linear_infinite_reverse]" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }} />

                       {/* Inner Bright Ring */}
                       <div className="absolute inset-10 rounded-full border-2 border-[#3B82F6]/60 shadow-[inset_0_0_20px_rgba(59,130,246,0.3)] animate-[spin_10s_linear_infinite]" />
                       
                       {/* Core Solid */}
                       <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-[#1D4ED8] to-[#06B6D4] flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.6)] group hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
                          {/* Inner dark center */}
                          <div className="w-[88%] h-[88%] rounded-full bg-[#030712] border border-[#3B82F6]/50 flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(37,99,235,0.8)] relative overflow-hidden">
                             {/* Scanning line inside core */}
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B82F6]/20 to-transparent -translate-y-full animate-[scan_2s_ease-in-out_infinite]" />
                             
                             <span className="font-display text-[11px] lg:text-[14px] font-bold tracking-[0.15em] text-white z-10 drop-shadow-md">NEXACORE</span>
                             <span className="font-display text-[9px] lg:text-[10px] font-bold tracking-wider text-[#3B82F6] z-10 mt-0.5">AI CORE</span>
                          </div>
                       </div>
                       
                       {/* Orbiting Nodes */}
                       <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#fff,0_0_30px_#3B82F6]" />
                       </div>
                       <div className="absolute inset-4 animate-[spin_8s_linear_infinite_reverse]">
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_10px_#06B6D4,0_0_20px_#3B82F6]" />
                       </div>
                    </div>
                  </motion.div>

                  {/* Right labels */}
                  <div className="flex flex-col gap-6 lg:gap-8 items-start z-10 w-full lg:w-auto mt-6 lg:mt-0 order-3">
                    {[
                      { icon: Network, label: 'Multi-Agent System' },
                      { icon: Brain, label: 'Reasoning Engine' },
                      { icon: Layers, label: 'Generative Models' },
                      { icon: Workflow, label: 'Actions & Workflows' }
                    ].map((item, i) => (
                      <motion.div key={i} className="relative group flex items-center gap-3 bg-[#0A1020]/80 backdrop-blur-sm border border-[#1E293B] hover:border-[#3B82F6]/50 rounded-full py-2 px-3 pr-4 transition-all duration-300 w-full lg:w-auto max-w-[240px]" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3 }}>
                        {/* Connecting line left (Desktop only) */}
                        <div className="hidden lg:block absolute top-1/2 -left-[40px] xl:-left-[80px] w-[40px] xl:w-[80px] h-[1px] bg-gradient-to-l from-[#3B82F6]/80 to-transparent opacity-30 group-hover:opacity-100 transition-opacity">
                           {/* Animated flowing data dot */}
                           <div className="absolute top-0 right-0 w-8 h-[1px] bg-white opacity-0 group-hover:opacity-100 group-hover:animate-[scan_1s_ease-in-out_infinite]" style={{ boxShadow: '0 0 10px #fff' }} />
                        </div>
                        
                        <div className="w-7 h-7 rounded-full bg-[#1E293B]/80 border border-[#3B82F6]/30 flex flex-shrink-0 items-center justify-center group-hover:bg-[#3B82F6]/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                          <item.icon className="w-3.5 h-3.5 text-[#3B82F6]" />
                        </div>
                        <span className="text-[13px] font-medium text-[#94A3B8] group-hover:text-white transition-colors whitespace-nowrap">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: WHY NEXACORE
          ═══════════════════════════════════════════ */}
      <section className="relative py-24">
        {/* Subtle top ambient glow from screenshot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] rounded-[100%] bg-[#3B82F6]/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1536px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left heading */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="w-full">
                  <p className="font-mono text-[13px] tracking-[0.25em] text-[#3B82F6] uppercase mb-5">WHY NEXACORE -</p>
                  <h2 className="font-display text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight">
                    Built for Security. Designed<br />
                    for Scale. Engineered for the Future.
                  </h2>
                </div>
              </Reveal>
            </div>

            {/* Right: 6 feature icons */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 items-start">
                  {[
                    { icon: ShieldCheck, title: 'Enterprise Grade', sub: 'Security' },
                    { icon: Hexagon, title: 'Scalable & Elastic', sub: 'Infrastructure' },
                    { icon: Fingerprint, title: 'Private & Secure', sub: 'AI Models' },
                    { icon: Database, title: 'RAG & Knowledge', sub: 'Systems' },
                    { icon: Bot, title: 'Autonomous', sub: 'Multi-Agent Orchestration' },
                    { icon: Target, title: 'Responsible', sub: 'AI Framework' },
                  ].map((f, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                      {/* Floating glowing icon container */}
                      <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-5">
                        {/* Ambient blurred aura */}
                        <div className="absolute inset-0 rounded-full bg-[#3B82F6]/10 blur-xl group-hover:bg-[#3B82F6]/20 transition-all duration-500" />
                        
                        {/* The Thin-Line Glowing Icon */}
                        <f.icon 
                          strokeWidth={1.2} 
                          className="w-10 h-10 lg:w-11 lg:h-11 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" 
                          style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.8))' }} 
                        />
                      </div>
                      
                      {/* Centered muted text */}
                      <span className="text-[13px] font-medium text-[#CBD5E1] leading-tight mb-1">{f.title}</span>
                      <span className="text-[12px] text-[#64748B] leading-tight max-w-[120px]">{f.sub}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: CONTACT CTA
          ═══════════════════════════════════════════ */}
      <section className="relative py-24 bg-transparent">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#2563EB]/[0.03] blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1536px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left intro */}
            <div className="lg:col-span-4 lg:pr-8">
              <Reveal>
                <div className="inline-block border border-[#1E293B] shadow-[inset_0_0_15px_rgba(59,130,246,0.05)] bg-[#050B14]/50 rounded-full px-3 py-1.5 mb-6">
                  <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#3B82F6] uppercase">READY TO TRANSFORM?</p>
                </div>
                <h2 className="font-display text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                  Let's Build the<br />Future Together
                </h2>
                <p className="text-[#94A3B8] text-[15px] leading-[1.6]">
                  Partner with Nexacore AI Technologies and unlock the
                  power of autonomous intelligence.
                </p>
              </Reveal>
            </div>

            {/* Center form */}
            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="bg-[#0A1020] border border-[#1E293B]/80 rounded-2xl p-6 lg:p-8 shadow-2xl">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[12px] font-semibold text-[#CBD5E1] mb-1.5">Your Name</label>
                        <input id="cta-name" type="text" name="name" className="w-full bg-[#050B14] border border-[#1E293B]/80 text-white text-[14px] px-4 py-2.5 rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors placeholder:text-[#475569]" placeholder="Enter your name" value={formData.name} onChange={handleInput} />
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-[#CBD5E1] mb-1.5">Work Email</label>
                        <input id="cta-email" type="email" name="email" className="w-full bg-[#050B14] border border-[#1E293B]/80 text-white text-[14px] px-4 py-2.5 rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors placeholder:text-[#475569]" placeholder="Enter your email" value={formData.email} onChange={handleInput} />
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-[#CBD5E1] mb-1.5">Company</label>
                        <input id="cta-company" type="text" name="company" className="w-full bg-[#050B14] border border-[#1E293B]/80 text-white text-[14px] px-4 py-2.5 rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors placeholder:text-[#475569]" placeholder="Enter company name" value={formData.company} onChange={handleInput} />
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-[#CBD5E1] mb-1.5">Your Message</label>
                        <textarea id="cta-message" name="message" rows={3} className="w-full bg-[#050B14] border border-[#1E293B]/80 text-white text-[14px] px-4 py-2.5 rounded-lg focus:border-[#3B82F6] focus:outline-none transition-colors resize-none placeholder:text-[#475569]" placeholder="Tell us about your requirements" value={formData.message} onChange={handleInput} />
                      </div>
                      <button
                        id="cta-submit"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-[#1D4ED8] hover:bg-[#2563EB] disabled:opacity-50 text-white text-[14px] font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all mt-2"
                      >
                        {isSubmitting ? 'Sending...' : <><span>Send Message</span><ArrowRight className="w-4 h-4" /></>}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-10 space-y-3">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
                        <Send className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">Message Sent!</h3>
                      <p className="text-[#64748B] text-[16px]">We'll get back to you within 24 hours.</p>
                      <button onClick={() => setIsSubmitted(false)} className="text-[#3B82F6] text-[16px] font-medium cursor-pointer hover:underline">Send another</button>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right contact info */}
            <div className="lg:col-span-4">
              <Reveal delay={0.2}>
                <div className="bg-[#0A1020] border border-[#1E293B]/80 rounded-2xl p-6 lg:p-8 space-y-8 shadow-2xl h-full">
                  
                  {/* Header Row */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="absolute inset-0 rounded-full border border-[#3B82F6]/30 shadow-[inset_0_0_15px_rgba(59,130,246,0.15)]" />
                      <div className="absolute inset-[3px] rounded-full bg-[#0F172A]" />
                      <Phone className="w-4 h-4 text-[#3B82F6] relative z-10" />
                    </div>
                    <div>
                      <span className="block font-display text-[16px] font-bold text-white mb-1">Get in touch</span>
                      <p className="text-[#94A3B8] text-[13px] leading-[1.6]">
                        We're here to help you build intelligent, future-ready systems.
                      </p>
                    </div>
                  </div>

                  {/* Contact Rows */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0F172A] border border-[#1E293B]/80 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Mail className="w-4 h-4 text-[#94A3B8]" />
                      </div>
                      <div>
                        <span className="block text-[11px] text-[#64748B] font-semibold uppercase tracking-wider mb-0.5">Email</span>
                        <a href="mailto:contact@nexacoreai.com" className="text-[14px] text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">contact@nexacoreai.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0F172A] border border-[#1E293B]/80 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Phone className="w-4 h-4 text-[#94A3B8]" />
                      </div>
                      <div>
                        <span className="block text-[11px] text-[#64748B] font-semibold uppercase tracking-wider mb-0.5">Phone</span>
                        <a href="tel:+919876543210" className="text-[14px] text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">+91 98765 43210</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0F172A] border border-[#1E293B]/80 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <MapPin className="w-4 h-4 text-[#94A3B8]" />
                      </div>
                      <div>
                        <span className="block text-[11px] text-[#64748B] font-semibold uppercase tracking-wider mb-0.5">Location</span>
                        <span className="text-[14px] text-[#CBD5E1]">Marathahalli, Bengaluru, India</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
