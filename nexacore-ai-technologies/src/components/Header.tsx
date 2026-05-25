import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ArrowUpRight, Settings } from 'lucide-react';
import { PageId, NavItem } from '../types';
import Logo from './Logo';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ activePage, setActivePage, isDark, toggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home System' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'contact', label: 'Connect' },
  ];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-brand-dark/90 backdrop-blur-xl border-b border-neutral-800/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button id="header-logo-btn" onClick={() => handleNavClick('home')} className="cursor-pointer focus:outline-none shrink-0">
          <Logo />
        </button>

        {/* Desktop Navigation — Centered */}
        <nav className="hidden md:flex items-center gap-0.5 bg-[#0A1020]/80 backdrop-blur-xl rounded-full border border-[#1E293B] px-1.5 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                id={`item-nav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-5 py-2 rounded-full text-[14px] font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'text-white' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#1D4ED8]/20 rounded-full -z-10 border border-[#2563EB]/40 shadow-[inset_0_0_12px_rgba(37,99,235,0.2)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Settings/Theme Toggle */}
          <button
            id="theme-toggler-btn"
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-[#1E293B] bg-[#0A1020]/80 flex items-center justify-center text-neutral-400 hover:text-[#3B82F6] hover:border-[#3B82F6]/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all cursor-pointer backdrop-blur-xl"
            aria-label="Toggle Theme"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* CTA Button */}
          <button
            id="header-consult-btn"
            onClick={() => handleNavClick('contact')}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-[#1D4ED8] hover:bg-[#2563EB] text-white overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] cursor-pointer"
          >
            <span className="relative z-10 tracking-wide">Consult Expert</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            id="mobile-theme-toggler-btn"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[#1E293B] text-neutral-400 hover:text-white"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-neutral-800 text-white hover:text-brand-blue-bright transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-800/50 bg-brand-dark/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-2 flex flex-col">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    id={`mobile-nav-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-brand-blue-bright/10 text-brand-blue-bright border-l-2 border-brand-blue-bright' 
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-neutral-800">
                <button
                  id="mobile-connect-btn"
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-center text-sm font-medium bg-brand-blue-bright text-white glow-btn"
                >
                  Consult Expert
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
