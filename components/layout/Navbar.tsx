import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem, SectionId } from '../../types';

const navItems: NavItem[] = [
  { label: 'Sobre', href: `#${SectionId.ABOUT}` },
  { label: 'Especialista', href: `#${SectionId.DOCTOR}` },
  { label: 'Procedimentos', href: `#${SectionId.PROCEDURES}` },
  { label: 'Depoimentos', href: `#${SectionId.TESTIMONIALS}` },
  { label: 'Contato', href: `#${SectionId.CONTACT}` },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      
      // Lógica de estilo do background
      setScrolled(currentScrollY > 20);

      // Lógica de Esconder/Mostrar (Headroom)
      if (!isOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled || isOpen 
          ? 'bg-noir-950/80 backdrop-blur-xl border-white/10 py-4 shadow-lg shadow-black/20' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center md:items-start group w-full md:w-auto z-10">
          <span className="font-serif text-2xl md:text-3xl tracking-wide text-white font-medium group-hover:opacity-70 transition-opacity">
            LUMINA
          </span>
          <span className="text-[0.55rem] font-sans tracking-[0.35em] text-luxe-400 uppercase mt-0.5 ml-0.5">
            Aesthetics
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-noir-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-luxe-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={`#${SectionId.CONTACT}`}
            className="bg-gradient-to-r from-luxe-400 to-luxe-600 text-noir-950 px-8 py-3 rounded-full text-[0.6rem] uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all hover:shadow-lg shadow-luxe-500/20"
          >
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none p-2 absolute right-6 top-1/2 -translate-y-1/2 z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} md:hidden absolute top-0 left-0 w-full bg-noir-950/95 backdrop-blur-xl border-t border-white/10 py-24 px-6 shadow-2xl h-screen flex flex-col items-center justify-center space-y-8 transition-all duration-500 -z-10`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-serif text-3xl text-white hover:text-luxe-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href={`#${SectionId.CONTACT}`}
              className="mt-8 bg-luxe-500 text-noir-950 px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold"
              onClick={() => setIsOpen(false)}
            >
              Agendar Avaliação
            </a>
      </div>
    </nav>
  );
};