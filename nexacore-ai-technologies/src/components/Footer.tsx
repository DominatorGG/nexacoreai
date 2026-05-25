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
    <footer className="relative z-10 bg-transparent overflow-hidden pt-6 border-t border-[#1E293B]/10">
      {/* Cinematic Ambient Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[150px] bg-[#1D4ED8]/5 blur-[90px] pointer-events-none rounded-t-full" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E293B]/20 to-transparent" />
      
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10 pb-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo, Description & Socials Column */}
          <div className="col-span-2 space-y-3 pr-4">
            <button
              id="footer-logo-btn"
              onClick={() => handlePageClick('home')}
              className="cursor-pointer focus:outline-none block"
            >
              <Logo />
            </button>
            <p className="text-[14px] text-neutral-400 leading-relaxed font-sans max-w-[320px]">
              Architecting the autonomous enterprise. We build secure data pipelines, deploy generative intelligence, and orchestrate multi-agent swarms.
            </p>
            
            {/* Social Icons inside Brand Column */}
            <div className="flex items-center gap-2 pt-1">
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
                  className="w-8 h-8 rounded-full bg-[#0A0F1E]/80 border border-[#1E293B] flex items-center justify-center text-neutral-400 hover:text-[#3B82F6] hover:border-[#3B82F6]/50 hover:shadow-[0_0_12px_rgba(59,130,246,0.15)] transition-all duration-300 group"
                >
                  <social.icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns (4 Columns) */}
          {footerColumns.map((col, idx) => (
            <div key={idx} className="col-span-1 min-w-[120px]">
              <h4 className="font-mono text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5 select-none">
                <span className="w-1 h-1 rounded-full bg-[#2563EB] animate-pulse" />
                {col.title}
              </h4>
              <ul className="space-y-1">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <button
                      id={`footer-nav-${idx}-${linkIdx}`}
                      onClick={() => handlePageClick(link.page)}
                      className="text-[14px] text-neutral-400 hover:text-[#60A5FA] hover:translate-x-0.5 transition-all duration-300 cursor-pointer flex items-center gap-1 group font-sans text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative border-t border-[#1E293B]/10 bg-transparent py-2.5 mt-4">
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-neutral-500 font-mono tracking-wider">
          <span>
            © 2026 NEXACORE AI TECHNOLOGIES. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-4 font-sans font-medium text-[12px]">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
