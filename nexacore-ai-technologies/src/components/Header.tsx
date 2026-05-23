import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-dark/80 light:bg-white/90 backdrop-blur-md border-b border-neutral-800/50 light:border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button id="header-logo-btn" onClick={() => handleNavClick('home')} className="cursor-pointer focus:outline-none">
          <Logo />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                id={`item-nav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                  isActive 
                    ? 'text-brand-blue-bright light:text-brand-blue' 
                    : 'text-neutral-400 hover:text-white light:text-neutral-600 light:hover:text-brand-dark'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-neutral-800/50 light:bg-neutral-100 rounded-full -z-10 border border-brand-blue-bright/20 light:border-brand-blue/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                  {item.id === 'contact' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-blue-bright animate-pulse" />}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            id="theme-toggler-btn"
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-neutral-800 light:border-neutral-200 bg-neutral-900/50 light:bg-neutral-50 text-neutral-300 light:text-neutral-600 hover:text-brand-blue-bright hover:border-brand-blue-bright/50 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Connected Action */}
          <button
            id="header-consult-btn"
            onClick={() => handleNavClick('contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider font-semibold uppercase bg-brand-blue-bright light:bg-brand-blue text-white overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(37,99,235,0.3)] cursor-pointer"
          >
            <span className="relative z-10">Consult Expert</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/20 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Theme Toggle for mobile */}
          <button
            id="mobile-theme-toggler-btn"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-neutral-800 light:border-neutral-200 text-neutral-300 light:text-neutral-600"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-neutral-800 light:border-neutral-200 text-white light:text-brand-dark hover:text-brand-blue-bright transition-colors cursor-pointer"
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
            className="md:hidden border-t border-neutral-800 light:border-neutral-200 bg-brand-dark light:bg-white overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    id={`mobile-nav-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-neutral-900 light:bg-neutral-100 text-brand-blue-bright light:text-brand-blue border-l-2 border-brand-blue-bright light:border-brand-blue' 
                        : 'text-neutral-400 light:text-neutral-600 hover:text-white light:hover:text-brand-dark'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-neutral-800 light:border-neutral-200">
                <button
                  id="mobile-connect-btn"
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-center text-xs font-mono font-bold uppercase tracking-wider bg-brand-blue-bright light:bg-brand-blue text-white"
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
