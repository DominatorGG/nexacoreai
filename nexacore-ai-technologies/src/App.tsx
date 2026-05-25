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
    <div className={`relative min-h-screen transition-colors duration-300 overflow-x-hidden ${
      isDark 
        ? 'dark text-neutral-200 bg-[#02040a]' 
        : 'light bg-neutral-50 text-neutral-800'
    }`}>
      {/* Volumetric Scroll-Driven Parallax Glows */}
      {isDark && (
        <>
          {/* Deep Blue volumetric base - rises faster */}
          <div 
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[550px] rounded-full pointer-events-none transition-transform duration-300 ease-out z-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(29, 78, 216, 0.48) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 100%)',
              opacity: scrollRatio,
              transform: `translate(-50%, ${160 - scrollRatio * 160}px)`,
              filter: 'blur(100px)',
            }}
          />
          {/* Electric Cyan volumetric core - rises slower for 3D parallax depth */}
          <div 
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] rounded-full pointer-events-none transition-transform duration-500 ease-out z-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(6, 182, 212, 0.26) 0%, rgba(34, 211, 238, 0.06) 60%, transparent 100%)',
              opacity: scrollRatio,
              transform: `translate(-50%, ${90 - scrollRatio * 90}px)`,
              filter: 'blur(85px)',
            }}
          />
        </>
      )}

      {/* Prime Header Navigation bar */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Core View Area with slide animation support */}
      <main className="relative min-h-screen z-10">
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
