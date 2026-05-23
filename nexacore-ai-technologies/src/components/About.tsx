import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Award, Users, ArrowUpRight, Cpu, Compass, Milestone, Database, Server, Layout } from 'lucide-react';
import { TeamMember } from '../types';

export default function About() {
  const values = [
    {
      icon: <Cpu className="w-6 h-6 text-brand-blue-bright light:text-brand-blue" />,
      title: "Model Sovereignty",
      desc: "We believe in private models and edge-hosted data storage. Intellectual property must never be shared across public cloud proxies."
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-blue-bright light:text-brand-blue" />,
      title: "Pragmatic Intelligence",
      desc: "No corporate fluff. We build AI RAG engines to directly impact business speeds and automate core engineering, delivering high ROI."
    },
    {
      icon: <Milestone className="w-6 h-6 text-brand-blue-bright light:text-brand-blue" />,
      title: "Sustained Evolution",
      desc: "Our engineering targets dynamic self-correcting swarms, adapting to changing business parameters with zero manual recalibration."
    }
  ];

  const team: TeamMember[] = [
    {
      name: "AI Engineers",
      role: "Sovereign Intelligence & Agentics",
      bio: "Our AI engineering team fine-tunes specialized enterprise models and configures autonomous multi-agent swarms. They specialize in local, air-gapped system sandboxing, model quantization, and self-healing consensus layers."
    },
    {
      name: "Data Engineers",
      role: "High-Throughput Vector Systems",
      bio: "Our data engineers build secure, lightning-fast ingestion pipelines. They manage large-scale vector databases including Qdrant and Milvus, handling automated chunking, dense semantic searches, and in-line PII masking solutions."
    },
    {
      name: "Cloud & Deployment Engineers",
      role: "Sovereign Infrastructure & Security",
      bio: "Our infrastructure specialists establish absolute hardware isolation across local GPU partitions. They deploy secure container nodes, orchestrate HSM-level cryptography, and construct secure, scale-optimized physical networks."
    },
    {
      name: "UI Engineers",
      role: "Client Space & Telemetry Interfaces",
      bio: "Our interface engineers focus on crafting ultra-fast, high-precision visual consoles. They unify dense back-end processes into slick interactive control rooms, providing continuous pipeline metrics and visible telemetry logs."
    }
  ];

  const getTeamIcon = (name: string) => {
    const cls = "w-8 h-8 text-brand-blue-bright light:text-brand-blue group-hover:scale-110 transition-transform duration-300";
    switch (name) {
      case "AI Engineers":
        return <Cpu className={cls} />;
      case "Data Engineers":
        return <Database className={cls} />;
      case "Cloud & Deployment Engineers":
        return <Server className={cls} />;
      case "UI Engineers":
        return <Layout className={cls} />;
      default:
        return <Cpu className={cls} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-dark pt-28 pb-20 overflow-hidden">
      {/* Visual background assets */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[10%] right-0 w-[450px] h-[450px] rounded-full bg-brand-blue-bright/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[350px] h-[350px] rounded-full bg-brand-blue-bright/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Cinematic Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-brand-blue-bright/20">
            <Users className="w-3.5 h-3.5 text-brand-blue-bright light:text-brand-blue" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">Core Identity Protocol</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white light:text-brand-dark tracking-tight leading-none">
            About <span className="text-brand-blue-bright light:text-brand-blue">Nexacore</span>
          </h1>
          <p className="text-neutral-400 light:text-neutral-600 text-base sm:text-lg">
            We are a team of neural researchers, vector database developers, and multi-agent systems engineers localized in the Silicon Valley of India, Bengaluru, driven to replace manual digital workflows with corporate-bound autonomous entities.
          </p>
        </div>

        {/* Narrative Block: Vision & Mission Dual Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 sm:p-10 rounded-2xl bg-neutral-900/60 light:bg-neutral-50 border border-neutral-800 light:border-neutral-200 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-lg bg-brand-blue-bright/10 border border-brand-blue-bright/20">
                <Eye className="w-6 h-6 text-brand-blue-bright light:text-brand-blue" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white light:text-brand-dark">Our Ultimate Vision</h3>
              <p className="text-neutral-400 light:text-neutral-600 leading-relaxed text-sm">
                To create a state of absolute digital autonomy where enterprise frameworks coordinate their own expansion, code optimization, data analysis, and security updates seamlessly—safeguarding corporate data assets entirely on sovereign, localized computing grids. We work to usher in the post-manual workflows era.
              </p>
            </div>
            <div className="pt-6 font-mono text-[10px] text-brand-blue-bright light:text-brand-blue tracking-widest uppercase flex items-center gap-1.5 border-t border-neutral-800/40 mt-6 font-bold">
              <span>Sovereignty Priority Axis</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 sm:p-10 rounded-2xl bg-neutral-900/60 light:bg-neutral-50 border border-neutral-800 light:border-neutral-200 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-lg bg-brand-blue-bright/10 border border-brand-blue-bright/20">
                <Award className="w-6 h-6 text-brand-blue-bright light:text-brand-blue" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white light:text-brand-dark">Our Engineering Mission</h3>
              <p className="text-neutral-400 light:text-neutral-600 leading-relaxed text-sm">
                By designing isolated, private-host RAG vector architectures, state-of-the-art token scaling mechanics, and collaborative role-based agent hives, we transform large-scale manual organizational tasks into instantaneous automated pipelines. We engineering practical microsecond model performance.
              </p>
            </div>
            <div className="pt-6 font-mono text-[10px] text-brand-blue-bright light:text-brand-blue tracking-widest uppercase flex items-center gap-1.5 border-t border-neutral-800/40 mt-6 font-bold">
              <span>Latency Reductions Target</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </motion.div>
        </div>

        {/* Corporate Core Values Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <h3 className="font-display text-3xl font-bold text-white light:text-brand-dark">Our Foundations</h3>
            <p className="text-neutral-500 text-sm">The mathematical alignment guiding our computational frameworks</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="p-6 rounded-xl bg-neutral-950/60 light:bg-white border border-neutral-800 light:border-neutral-100 flex flex-col space-y-4 shadow-lg hover:border-brand-blue-bright/30 transition-colors"
              >
                <div className="p-2 w-fit bg-neutral-900 rounded-lg border border-neutral-800">{v.icon}</div>
                <h4 className="font-display font-bold text-lg text-white light:text-brand-dark">{v.title}</h4>
                <p className="text-neutral-400 light:text-neutral-600 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Swarm Intelligence: Corporate Team */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <h3 className="font-display text-3xl font-bold text-white light:text-brand-dark">Our Team</h3>
            <p className="text-neutral-500 text-sm">Our expert divisions across neural intelligence, high-integrity vector systems, secure cloud orchestration, and responsive interfaces</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="group relative bg-neutral-900 light:bg-neutral-50 border border-neutral-800 light:border-neutral-200 rounded-2xl p-6 shadow-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Tech Icon Visual Element replacing team member avatar */}
                <div className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-neutral-950/85 light:bg-neutral-100 border border-brand-blue-bright/20 shadow-inner">
                  {getTeamIcon(member.name)}
                  {/* Subtle neon glow overlay on hover */}
                  <div className="absolute inset-0 rounded-xl bg-brand-blue-bright/0 group-hover:bg-brand-blue-bright/5 transition-colors duration-300" />
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-lg text-white light:text-brand-dark group-hover:text-brand-blue-bright light:group-hover:text-brand-blue transition-colors">
                    {member.name}
                  </h4>
                  <span className="block font-mono text-[10px] tracking-widest text-brand-blue-bright light:text-brand-blue uppercase font-semibold">
                    {member.role}
                  </span>
                  <p className="text-neutral-400 light:text-neutral-600 font-sans text-xs pt-2.5 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Styled geometric design lines in bottom-right corner */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neutral-800 light:border-neutral-200 group-hover:border-brand-blue-bright transition-colors m-3" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
