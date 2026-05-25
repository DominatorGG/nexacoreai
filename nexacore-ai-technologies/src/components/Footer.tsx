import React from 'react';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { PageId } from '../types';
import Logo from './Logo';

interface FooterProps {
  setActivePage: (page: PageId) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  
  const handlePageClick = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerColumns = [
    {
      title: 'Company',
      links: [
        { label: 'About', page: 'about' as PageId },
        { label: 'Careers', page: 'contact' as PageId },
        { label: 'Blog', page: 'about' as PageId },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Data Engineering', page: 'services' as PageId },
        { label: 'Generative AI', page: 'services' as PageId },
        { label: 'Agentic AI', page: 'services' as PageId },
      ],
    },
    {
      title: 'Industries',
      links: [
        { label: 'Banking', page: 'industries' as PageId },
        { label: 'Finance', page: 'industries' as PageId },
        { label: 'Healthcare', page: 'industries' as PageId },
        { label: 'Ecommerce & Retail', page: 'industries' as PageId },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact Us', page: 'contact' as PageId },
        { label: 'Consult Expert', page: 'contact' as PageId },
      ],
    },
  ];

  return (
    <footer className="relative bg-transparent overflow-hidden pt-10 border-t border-[#1E293B]/20">
      {/* Cinematic Ambient Glows */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#1D4ED8]/10 blur-[120px] pointer-events-none rounded-t-full" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E293B]/40 to-transparent" />
      
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10 pb-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
          {/* Logo & Vision Section */}
          <div className="shrink-0 max-w-sm space-y-4">
            <button
              id="footer-logo-btn"
              onClick={() => handlePageClick('home')}
              className="cursor-pointer focus:outline-none"
            >
              <Logo />
            </button>
            <p className="text-[13px] text-neutral-400 leading-relaxed font-sans max-w-[320px]">
              Architecting the autonomous enterprise. We build secure data pipelines, deploy generative intelligence, and orchestrate multi-agent swarms.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {footerColumns.map((col, idx) => (
              <div key={idx} className="min-w-[120px]">
                <h4 className="font-mono text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/60 border border-[#3B82F6]/50" />
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <button
                        id={`footer-nav-${idx}-${linkIdx}`}
                        onClick={() => handlePageClick(link.page)}
                        className="text-[13px] text-neutral-400 hover:text-[#60A5FA] transition-colors cursor-pointer flex items-center gap-1.5 group"
                      >
                        <span className="w-0 h-[1px] bg-[#60A5FA] transition-all duration-300 group-hover:w-2" />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="shrink-0">
            <h4 className="font-mono text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/60 border border-[#3B82F6]/50" />
              Follow us
            </h4>
            <div className="flex items-center gap-2.5">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Github, label: 'GitHub' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  id={`footer-social-${idx}`}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-[#0A0F1E]/80 border border-[#1E293B] flex items-center justify-center text-neutral-400 hover:text-[#3B82F6] hover:border-[#3B82F6]/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all group"
                >
                  <social.icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative border-t border-[#1E293B]/40 bg-[#060B18]/30 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[12px] text-neutral-500 font-mono tracking-wide">
            © 2026 NEXACORE AI TECHNOLOGIES. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-4 text-[12px] text-neutral-500 font-sans">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
