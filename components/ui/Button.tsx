import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-10 py-4 transition-all duration-500 font-sans tracking-[0.25em] text-[0.65rem] uppercase font-bold rounded-full disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 flex items-center justify-center";
  
  const variants = {
    // Primary: Gradiente Dourado, Texto Escuro
    primary: "bg-gradient-to-r from-luxe-400 to-luxe-600 text-noir-950 hover:brightness-110 hover:shadow-xl hover:shadow-luxe-500/20 border border-transparent",
    // Outline: Borda Branca fina, Hover Dourado
    outline: "bg-transparent text-white border border-white/30 hover:border-luxe-400 hover:text-luxe-400 hover:shadow-xl hover:shadow-luxe-500/5",
    // Text: Link simples dourado
    text: "bg-transparent text-luxe-400 hover:text-white underline-offset-8 hover:underline padding-0"
  };

  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};