import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Award, Users, ArrowUpRight, Cpu, Compass, Milestone, Database, Server, Layout } from 'lucide-react';
import { TeamMember } from '../types';

export default function About() {
  const values = [
    {
      icon: <Cpu className="w-5 h-5 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />,
      title: "Model Sovereignty",
      desc: "We believe in private models and edge-hosted data storage. Intellectual property must never be shared across public cloud proxies."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />,
      title: "Pragmatic Intelligence",
      desc: "No corporate fluff. We build AI RAG engines to directly impact business speeds and automate core engineering, delivering high ROI."
    },
    {
      icon: <Milestone className="w-5 h-5 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />,
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
    const cls = "w-7 h-7 text-[#60A5FA] drop-shadow-[0_0_10px_rgba(96,165,250,0.6)] group-hover:scale-110 transition-transform duration-500 group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.9)]";
    switch (name) {
      case "AI Engineers": return <Cpu className={cls} strokeWidth={1.2} />;
      case "Data Engineers": return <Database className={cls} strokeWidth={1.2} />;
      case "Cloud & Deployment Engineers": return <Server className={cls} strokeWidth={1.2} />;
      case "UI Engineers": return <Layout className={cls} strokeWidth={1.2} />;
      default: return <Cpu className={cls} strokeWidth={1.2} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      {/* Cinematic Background Assets */}
      <div className="absolute top-[10%] right-0 w-[600px] h-[600px] rounded-full bg-[#1D4ED8]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-28">
        
        {/* Cinematic Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-[#1E293B] shadow-[inset_0_0_15px_rgba(59,130,246,0.05)]">
            <Users className="w-4 h-4 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold">Core Identity Protocol</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white tracking-tight leading-none">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Nexacore</span>
          </h1>
          <p className="text-[#94A3B8] text-lg sm:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            We are a team of neural researchers, vector database developers, and multi-agent systems engineers localized in the Silicon Valley of India, Bengaluru, driven to replace manual digital workflows with corporate-bound autonomous entities.
          </p>
        </motion.div>

        {/* Narrative Block: Vision & Mission Dual Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="p-10 sm:p-12 rounded-3xl bg-[#0A1020]/90 backdrop-blur-xl border border-[#1E293B] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_0_30px_rgba(30,41,59,0.5)] flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="p-3.5 w-fit rounded-xl bg-[#0F172A] border border-[#1E293B] group-hover:border-[#3B82F6]/40 transition-colors duration-500 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                <Eye className="w-7 h-7 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-3xl font-bold text-white tracking-tight group-hover:text-[#60A5FA] transition-colors duration-500">Our Ultimate Vision</h3>
              <p className="text-[#94A3B8] leading-relaxed text-[15px] font-sans">
                To create a state of absolute digital autonomy where enterprise frameworks coordinate their own expansion, code optimization, data analysis, and security updates seamlessly—safeguarding corporate data assets entirely on sovereign, localized computing grids. We work to usher in the post-manual workflows era.
              </p>
            </div>
            <div className="pt-6 font-mono text-[11px] text-[#3B82F6] tracking-[0.2em] uppercase flex items-center justify-between border-t border-[#1E293B] mt-8 font-bold">
              <span>Sovereignty Priority Axis</span>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="p-10 sm:p-12 rounded-3xl bg-[#0A1020]/90 backdrop-blur-xl border border-[#1E293B] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_0_30px_rgba(30,41,59,0.5)] flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="p-3.5 w-fit rounded-xl bg-[#0F172A] border border-[#1E293B] group-hover:border-[#3B82F6]/40 transition-colors duration-500 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                <Award className="w-7 h-7 text-[#60A5FA] drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-3xl font-bold text-white tracking-tight group-hover:text-[#60A5FA] transition-colors duration-500">Our Engineering Mission</h3>
              <p className="text-[#94A3B8] leading-relaxed text-[15px] font-sans">
                By designing isolated, private-host RAG vector architectures, state-of-the-art token scaling mechanics, and collaborative role-based agent hives, we transform large-scale manual organizational tasks into instantaneous automated pipelines. We engineer practical microsecond model performance.
              </p>
            </div>
            <div className="pt-6 font-mono text-[11px] text-[#3B82F6] tracking-[0.2em] uppercase flex items-center justify-between border-t border-[#1E293B] mt-8 font-bold">
              <span>Latency Reductions Target</span>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>

        {/* Corporate Core Values Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-3">
            <h3 className="font-display text-4xl font-bold text-white tracking-tight">Our Foundations</h3>
            <p className="text-[#64748B] text-base font-sans">The mathematical alignment guiding our computational frameworks</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl bg-[#0A1020]/80 backdrop-blur-md border border-[#1E293B] flex flex-col space-y-5 hover:shadow-[0_10px_40px_rgba(37,99,235,0.1),inset_0_0_20px_rgba(59,130,246,0.05)] hover:border-[#3B82F6]/30 transition-all duration-500 group"
              >
                <div className="p-3 w-fit bg-[#0F172A] rounded-xl border border-[#1E293B] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] group-hover:border-[#3B82F6]/40 transition-colors">
                  {v.icon}
                </div>
                <h4 className="font-display font-bold text-2xl text-white tracking-tight">{v.title}</h4>
                <p className="text-[#94A3B8] text-[14px] leading-relaxed font-sans">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Executive Swarm Intelligence: Corporate Team */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-3">
            <h3 className="font-display text-4xl font-bold text-white tracking-tight">Our Team</h3>
            <p className="text-[#64748B] text-base font-sans max-w-2xl mx-auto">Our expert divisions across neural intelligence, high-integrity vector systems, secure cloud orchestration, and responsive interfaces</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                className="group relative bg-[#0A1020]/90 backdrop-blur-xl border border-[#1E293B] rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden hover:border-[#3B82F6]/30 transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                {/* Tech Icon Visual Element replacing team member avatar */}
                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#0F172A] border border-[#1E293B] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] z-10 group-hover:border-[#3B82F6]/40 transition-colors duration-500">
                  {getTeamIcon(member.name)}
                </div>

                <div className="space-y-2.5 relative z-10">
                  <h4 className="font-display font-bold text-xl text-white tracking-tight group-hover:text-[#60A5FA] transition-colors duration-300">
                    {member.name}
                  </h4>
                  <span className="block font-mono text-[10px] tracking-[0.15em] text-[#3B82F6] uppercase font-bold">
                    {member.role}
                  </span>
                  <p className="text-[#94A3B8] font-sans text-[13px] pt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Cinematic Ambient Hover Glow inside card */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1D4ED8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Styled geometric design lines in bottom-right corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#1E293B] group-hover:border-[#3B82F6]/50 transition-colors duration-500 rounded-br-2xl m-4 opacity-50 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
