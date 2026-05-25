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

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`transition-colors duration-300 ${
      isDark 
        ? 'dark bg-brand-dark text-neutral-200' 
        : 'light bg-neutral-50 text-neutral-800'
    }`} style={{ background: isDark ? '#030712' : undefined }}>
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
