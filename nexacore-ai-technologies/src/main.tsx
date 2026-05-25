import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// High-tech developer signature console message with CSS glowing typography
console.log(
  `%c███╗   ██╗███████╗██╗  ██╗ █████╗ \n` +
  `%c████╗  ██║██╔════╝╚██╗██╔╝██╔══██╗\n` +
  `%c██╔██╗ ██║█████╗   ╚███╔╝ ███████║\n` +
  `%c██║╚██╗██║██╔══╝   ██╔██╗ ██╔══██║\n` +
  `%c██║ ╚████║███████╗██╔╝ ██╗██║  ██║\n` +
  `%c╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝\n\n` +
  `%c🛰️ NEXACORE AI TECHNOLOGIES %c| %cSOVEREIGN SYSTEM ARCHITECTURE\n` +
  `%c🔧 Redesigned & Engineered with Excellence by Lohith\n` +
  `%c🌐 Status: SYSTEM ONLINE %c| %cEnvironment: PRODUCTION\n`,
  'color: #3B82F6; font-weight: bold; text-shadow: 0 0 10px rgba(59,130,246,0.4);',
  'color: #2563EB; font-weight: bold; text-shadow: 0 0 10px rgba(37,99,235,0.4);',
  'color: #1D4ED8; font-weight: bold; text-shadow: 0 0 10px rgba(29,78,216,0.4);',
  'color: #1E40AF; font-weight: bold; text-shadow: 0 0 10px rgba(30,64,175,0.4);',
  'color: #1E3A8A; font-weight: bold; text-shadow: 0 0 10px rgba(30,58,138,0.4);',
  'color: #172554; font-weight: bold;',
  'color: #60A5FA; font-weight: bold; font-size: 12px; font-family: monospace;',
  'color: #334155;',
  'color: #06B6D4; font-weight: bold; font-size: 12px; font-family: monospace;',
  'color: #94A3B8; font-size: 11px; font-family: monospace; font-weight: 500;',
  'color: #10B981; font-weight: bold; font-size: 10px; font-family: monospace;',
  'color: #334155;',
  'color: #64748B; font-size: 10px; font-family: monospace;'
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
