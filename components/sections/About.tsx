import React from 'react';
import { SectionId } from '../../types';
import { FadeIn } from '../ui/FadeIn';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-luxe-400" />,
    title: "Segurança Médica",
    description: "Protocolos rigorosos e produtos de primeira linha para sua total tranquilidade."
  },
  {
    icon: <Sparkles className="w-5 h-5 text-luxe-400" />,
    title: "Resultados Naturais",
    description: "Técnicas avançadas que respeitam sua anatomia e preservam suas características únicas."
  },
  {
    icon: <Heart className="w-5 h-5 text-luxe-400" />,
    title: "Atendimento Humanizado",
    description: "Escuta ativa para entender seus desejos e criar um plano de tratamento exclusivo."
  }
];

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-32 bg-noir-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          <div className="md:col-span-5 relative">
            <FadeIn>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Interior da Clínica" 
                  className="object-cover w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 scale-105"
                />
              </div>
              <div className="absolute top-10 -left-10 w-full h-full border border-white/10 rounded-[3rem] -z-10 hidden md:block"></div>
            </FadeIn>
          </div>

          <div className="md:col-span-7 space-y-10 md:pl-16">
            <FadeIn delay={200}>
               <span className="block text-luxe-500 uppercase tracking-[0.25em] text-[0.65rem] font-bold mb-6">
                Nossa Filosofia
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                A harmonia entre <br/>ciência e <span class="italic font-light text-gold-gradient">arte</span>.
              </h2>
              <div className="space-y-6 text-noir-300 font-light leading-loose text-lg">
                <p>
                  Na Lumina Aesthetics, acreditamos que a verdadeira estética vai além da superfície. 
                  Trata-se de realçar a confiança, respeitando a essência de cada indivíduo.
                </p>
                <p>
                  Nossa clínica foi projetada para ser um refúgio de bem-estar, onde a tecnologia de ponta 
                  encontra o acolhimento humano.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
                {features.map((feature, idx) => (
                  <div key={idx} className="space-y-4 group">
                    <div className="bg-noir-800 w-14 h-14 flex items-center justify-center rounded-2xl mb-2 border border-white/5 group-hover:bg-luxe-500 group-hover:text-noir-900 transition-all duration-500">
                      {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6 text-luxe-400 group-hover:text-noir-900 transition-colors" })}
                    </div>
                    <h3 className="font-serif text-lg text-white group-hover:text-luxe-300 transition-colors">{feature.title}</h3>
                    <p className="text-xs text-noir-500 leading-relaxed font-medium uppercase tracking-wide">
                      {feature.description.slice(0, 50)}...
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};