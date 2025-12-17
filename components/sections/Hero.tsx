import React from 'react';
import { Button } from '../ui/Button';
import { SectionId } from '../../types';
import { FadeIn } from '../ui/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-noir-950"
    >
      {/* Background Decor Moderno - Luzes Douradas e Escuras */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-luxe-500/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-noir-800/80 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-10 text-center md:text-left z-10">
          <FadeIn>
            <div className="inline-block mb-6 px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                <span className="block text-luxe-300 uppercase tracking-[0.25em] text-[0.6rem] font-bold">
                Medicina & Estética Integrada
                </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white mb-8 -tracking-[0.02em]">
              Beleza <span className="italic font-light text-gold-gradient">natural</span><br />
              com precisão<br />
              <span className="font-light text-noir-300">e cuidado.</span>
            </h1>
            
            <p className="font-sans text-noir-400 font-light text-lg max-w-md mx-auto md:mx-0 leading-loose">
              Descubra a sua melhor versão através de protocolos personalizados que unem ciência médica, arte e segurança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-8">
              <a href={`#${SectionId.CONTACT}`}>
                <Button>Agendar Avaliação</Button>
              </a>
              <a href={`#${SectionId.PROCEDURES}`}>
                <Button variant="outline">Conheça os Procedimentos</Button>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Visual Content */}
        <div className="order-1 md:order-2 relative h-[50vh] md:h-[80vh] w-full flex items-center justify-center">
           <FadeIn delay={200} className="h-full w-full relative">
            {/* Moldura da imagem */}
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] md:rounded-tl-[12rem] md:rounded-br-[12rem] md:rounded-tr-[2.5rem] md:rounded-bl-[2.5rem] shadow-2xl shadow-black/50 border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Estética Natural" 
                className="object-cover w-full h-full opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-[1.5s] ease-out"
              />
              {/* Overlay gradiente Escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent"></div>
            </div>
            
            {/* Elemento flutuante decorativo */}
            <div className="absolute -bottom-8 -left-8 bg-noir-800/90 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-black/40 hidden md:block max-w-xs border border-white/10">
                <p className="font-serif italic text-luxe-200 text-lg">"A arte de realçar o que já é belo."</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};