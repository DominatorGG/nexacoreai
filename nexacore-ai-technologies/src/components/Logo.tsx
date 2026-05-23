import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Hand-crafted exact replica of the uploaded Network Globe Logo */}
      <div className="relative w-11 h-11 flex items-center justify-center">
        {/* Subtle background glow representing active intelligence */}
        <div className="absolute w-10 h-6 rounded-full bg-brand-blue-bright/10 blur-md pointer-events-none" />

        <svg className="absolute w-11 h-11 overflow-visible text-brand-blue dark:text-brand-blue-bright" viewBox="0 0 100 100" fill="none">
          {/* Base Curved Ellipse Boundary */}
          <ellipse 
            cx="50" 
            cy="50" 
            rx="42" 
            ry="32" 
            stroke="currentColor" 
            strokeWidth="2.5" 
          />

          {/* Latitudinal grid lines (curving downwards) */}
          <path d="M 14,38 Q 50,44 86,38" stroke="currentColor" strokeWidth="1.8" opacity="0.95" />
          <path d="M 8,50 Q 50,58 92,50" stroke="currentColor" strokeWidth="1.8" opacity="0.95" />
          <path d="M 14,62 Q 50,72 86,62" stroke="currentColor" strokeWidth="1.8" opacity="0.95" />

          {/* Longitudinal grid lines (curving rightwards) */}
          <path d="M 32,19 Q 42,50 32,81" stroke="currentColor" strokeWidth="1.8" opacity="0.95" />
          <path d="M 50,18 Q 62,50 50,82" stroke="currentColor" strokeWidth="1.8" opacity="0.95" />
          <path d="M 68,19 Q 82,50 68,81" stroke="currentColor" strokeWidth="1.8" opacity="0.95" />

          {/* Intersection Nodes (Primary hubs with perfect placement) */}
          <circle cx="36" cy="41" r="3" fill="currentColor" />
          <circle cx="54" cy="43" r="3" fill="currentColor" />
          <circle cx="74" cy="42" r="5.2" fill="currentColor" className="animate-pulse" /> {/* Large upper-right focal hub */}
          
          <circle cx="38" cy="53" r="3" fill="currentColor" />
          <circle cx="58" cy="55" r="3" fill="currentColor" />
          <circle cx="78" cy="53" r="3" fill="currentColor" />
          
          <circle cx="35" cy="66" r="3" fill="currentColor" />
          <circle cx="54" cy="68" r="3" fill="currentColor" />
          <circle cx="74" cy="66" r="3" fill="currentColor" />

          {/* Outer Boundary Intersections */}
          <circle cx="8" cy="50" r="2.8" fill="currentColor" />
          <circle cx="92" cy="50" r="2.8" fill="currentColor" />
          <circle cx="50" cy="18" r="2.8" fill="currentColor" />
          <circle cx="50" cy="82" r="2.8" fill="currentColor" />
          
          <circle cx="32" cy="19" r="2.8" fill="currentColor" />
          <circle cx="68" cy="19" r="2.8" fill="currentColor" />
          <circle cx="32" cy="81" r="2.8" fill="currentColor" />
          <circle cx="68" cy="81" r="2.8" fill="currentColor" />

          {/* Subtle auxiliary data packet nodes scattered inside grid */}
          <circle cx="48" cy="30" r="1.8" fill="currentColor" opacity="0.8" />
          <circle cx="25" cy="48" r="1.5" fill="currentColor" opacity="0.8" />
          <circle cx="65" cy="60" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="45" cy="78" r="1.5" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-wider text-brand-dark dark:text-white flex items-center gap-1">
            NEXA<span className="text-brand-blue dark:text-brand-blue-bright">CORE</span>
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-500 dark:text-neutral-400 uppercase">
            AI Technologies
          </span>
        </div>
      )}
    </div>
  );
}
