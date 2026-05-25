import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Contact from './components/Contact';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [scrollRatio, setScrollRatio] = useState<number>(0);

  // Sync isDark parameter with document root if needed
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Track page scroll percentage for cinematic bottom brightness glow
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollRatio(scrollTop / docHeight);
      } else {
        setScrollRatio(0);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activePage]); // recalculate when page shifts to handle different heights

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`transition-colors duration-300 ${
      isDark 
        ? 'dark text-neutral-200' 
        : 'light bg-neutral-50 text-neutral-800'
    }`} style={{ 
      backgroundColor: isDark ? '#030712' : undefined,
      backgroundImage: isDark 
        ? `radial-gradient(ellipse at 50% 100%, rgba(37, 99, 235, ${0.12 * scrollRatio}) 0%, rgba(6, 182, 212, ${0.03 * scrollRatio}) 50%, #030712 100%)` 
        : undefined,
      backgroundAttachment: 'fixed',
      backgroundSize: '100% 100%'
    }}>
      {/* Prime Header Navigation bar */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Core View Area with slide animation support */}
      <main className="min-h-screen">
        {activePage === 'home' && <Home setActivePage={setActivePage} />}
        {activePage === 'about' && <About />}
        {activePage === 'services' && <Services />}
        {activePage === 'industries' && <Industries />}
        {activePage === 'contact' && <Contact />}
      </main>

      {/* Corporate Info Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
