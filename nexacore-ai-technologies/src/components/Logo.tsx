import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = '', iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img 
        src={`${import.meta.env.BASE_URL}images/logo-transparent.png`} 
        alt="Nexacore Logo" 
        className={`${iconOnly ? 'w-10 h-10 object-cover object-left' : 'w-44 md:w-56 lg:w-[250px] h-auto object-contain'}`}
      />
    </div>
  );
}
