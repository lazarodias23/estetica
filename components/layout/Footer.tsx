import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-noir-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl text-white mb-6 tracking-wide">LUMINA</h2>
            <p className="text-sm font-light leading-relaxed max-w-sm text-noir-500">
              Clínica de estética avançada dedicada a realçar sua beleza natural com segurança, 
              tecnologia de ponta e um olhar artístico refinado.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xs uppercase tracking-widest mb-6">Navegação</h3>
            <ul className="space-y-4 text-sm font-light text-noir-500">
              <li><a href="#sobre" className="hover:text-luxe-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#medica" className="hover:text-luxe-400 transition-colors">Dra. Elisa Vivara</a></li>
              <li><a href="#procedimentos" className="hover:text-luxe-400 transition-colors">Procedimentos</a></li>
              <li><a href="#contato" className="hover:text-luxe-400 transition-colors">Agendar</a></li>
            </ul>
          </div>

          <div>
             <h3 className="text-white text-xs uppercase tracking-widest mb-6">Social</h3>
             <div className="flex space-x-4 text-noir-400">
                <a href="#" className="hover:text-luxe-400 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-luxe-400 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-luxe-400 transition-colors"><MessageCircle size={20} /></a>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-light space-y-4 md:space-y-0 text-noir-600">
          <p>&copy; {new Date().getFullYear()} Lumina Aesthetics. Todos os direitos reservados.</p>
          
          <div className="text-justify md:text-right max-w-lg">
            <p>
              AVISO LEGAL: As imagens são meramente ilustrativas. Os resultados podem variar de acordo com a fisiologia 
              e organismo de cada paciente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};