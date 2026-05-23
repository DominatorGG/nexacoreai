import React from 'react';
import { Mail, MapPin, PhoneCall, ArrowUpRight, ShieldCheck, Heart, Copyright } from 'lucide-react';
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

  return (
    <footer className="relative bg-brand-dark/95 light:bg-neutral-50 text-neutral-400 light:text-neutral-600 border-t border-neutral-800/80 light:border-neutral-200/80 overflow-hidden pt-16 pb-8">
      {/* Structural Neon Ambient Blobs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-blue-bright/5 blur-[120px] pointer-events-none -mr-40 -mb-40" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-blue-bright/3 blur-[100px] pointer-events-none -ml-40 -mt-20" />

      {/* Cyber Grid background element */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand Presentation Cluster */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <button id="footer-logo-btn" onClick={() => handlePageClick('home')} className="text-left w-fit focus:outline-none cursor-pointer">
              <Logo />
            </button>
            <p className="text-sm text-neutral-400 light:text-neutral-600 max-w-md h-auto leading-relaxed">
              Empowering global enterprises with adaptive neuro-inspired AI systems, extreme efficiency RAG setups, custom multi-agent swarms, and sovereign intelligence hosting.
            </p>
            {/* Certifications / Trust Signals */}
            <div className="flex items-center gap-3 py-1 px-3 w-fit rounded-lg bg-neutral-900/60 light:bg-neutral-100 border border-brand-blue-bright/10">
              <ShieldCheck className="w-4 h-4 text-brand-blue-bright light:text-brand-blue" />
              <span className="font-mono text-[10px] tracking-widest text-neutral-300 light:text-neutral-700 uppercase font-semibold">
                Sovereign Model Protection Standard
              </span>
            </div>
          </div>

          {/* Quick Navigation Panel */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white light:text-brand-dark">
              Neural Systems Map
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              {[
                { label: 'Prime Operator (Home)', page: 'home' },
                { label: 'Core Integrity (About)', page: 'about' },
                { label: 'Capabilities (Services)', page: 'services' },
                { label: 'Sectors (Industries)', page: 'industries' },
                { label: 'Terminal Interface (Connect)', page: 'contact' },
              ].map((link, idx) => (
                <button
                  id={`footer-link-${idx}`}
                  key={idx}
                  onClick={() => handlePageClick(link.page as PageId)}
                  className="flex items-center gap-1.5 hover:text-brand-blue-bright light:hover:text-brand-blue text-left transition-colors duration-200 cursor-pointer text-neutral-400 light:text-neutral-600 focus:outline-none"
                >
                  <span className="inline-block w-1.5 h-[1px] bg-brand-blue-bright/40" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Headquarter Information */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white light:text-brand-dark">
              Command Center (HQ)
            </h4>
            <div className="space-y-4 text-sm font-sans">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue-bright light:text-brand-blue shrink-0 mt-0.5" />
                <span className="leading-relaxed text-neutral-300 light:text-neutral-700">
                  <strong>Nexacore AI Technologies Pvt Ltd</strong>
                  <br />
                  #52, 3rd Cross, Aswath Nagar, Marathahalli, 
                  <br />
                  Bengaluru, Karnataka-560037, India.
                </span>
              </div>

              {/* Emails */}
              <div className="flex flex-col space-y-2 pt-2 border-t border-neutral-800/40 light:border-neutral-200/40">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-blue-bright light:text-brand-blue" />
                  <span className="font-mono text-xs text-neutral-500">Corporate & Careers:</span>
                </div>
                <div className="pl-6 space-y-1">
                  <a
                    id="f-email-hr"
                    href="mailto:hr@nexacoreai.com"
                    className="flex items-center gap-1 text-sm font-medium hover:text-brand-blue-bright light:hover:text-brand-blue transition-colors"
                  >
                    hr@nexacoreai.com
                    <ArrowUpRight className="w-3 h-3 text-brand-blue-bright/50" />
                  </a>
                  <a
                    id="f-email-mounika"
                    href="mailto:mounika@nexacoreai.com"
                    className="flex items-center gap-1 text-sm font-medium hover:text-brand-blue-bright light:hover:text-brand-blue transition-colors"
                  >
                    mounika@nexacoreai.com
                    <ArrowUpRight className="w-3 h-3 text-brand-blue-bright/50" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 mt-8 border-t border-neutral-800/60 light:border-neutral-200/60 text-xs font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <Copyright className="w-3.5 h-3.5 text-brand-blue-bright light:text-brand-blue" />
            <span>2026 Nexacore AI Technologies Pvt Ltd. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-neutral-500">
            <span>Corporate Identity No: PVT-88402X</span>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1 text-neutral-500">
              <span>Engineered with care in</span> <span className="text-brand-blue-bright light:text-brand-blue font-bold">Bengaluru</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
