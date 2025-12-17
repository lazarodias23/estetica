import React from 'react';
import { SectionId } from '../../types';
import { FadeIn } from '../ui/FadeIn';

export const Doctor: React.FC = () => {
  return (
    <section id={SectionId.DOCTOR} className="py-24 bg-noir-800 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <div className="w-full md:w-1/2 order-2 md:order-1">
             <FadeIn>
                <div className="space-y-6">
                  <h3 className="uppercase tracking-[0.2em] text-xs text-luxe-500 font-semibold">
                    Especialista
                  </h3>
                  <h2 className="font-serif text-5xl text-white">
                    Dra. Elisa Vivara
                  </h2>
                  <p className="text-luxe-200 italic font-serif text-xl opacity-80">
                    CRM/SP 123.456 | Dermatologia Estética
                  </p>
                  
                  <div className="h-px w-24 bg-luxe-600/50 my-6"></div>

                  <div className="font-sans text-noir-300 font-light leading-relaxed space-y-4">
                    <p>
                      Com mais de 10 anos de experiência em medicina estética, Dra. Elisa é referência 
                      em rejuvenescimento facial natural. Graduada pela USP e com especialização em 
                      Harmonização Facial em Paris, ela traz para o Brasil as técnicas mais refinadas do mundo.
                    </p>
                    <p>
                      "Minha filosofia é que o melhor procedimento é aquele que ninguém nota que foi feito, 
                      mas todo mundo percebe que você está mais bonita e descansada."
                    </p>
                  </div>

                  <div className="pt-6">
                    <h4 className="font-serif text-xl text-luxe-300 mb-4">Trajetória e Formação</h4>
                    <ul className="space-y-2 text-sm text-noir-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxe-500"></span>
                        Graduação em Medicina pela Universidade de São Paulo (USP)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxe-500"></span>
                        Residência em Dermatologia
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxe-500"></span>
                        Fellow em Cosmiatria Avançada
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxe-500"></span>
                        Membro da Sociedade Brasileira de Dermatologia (SBD)
                      </li>
                    </ul>
                  </div>
                </div>
             </FadeIn>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full border border-white/10 z-0"></div>
                <div className="relative z-10 aspect-[4/5] overflow-hidden bg-noir-900 border border-white/5">
                   <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                    alt="Dra. Elisa Vivara" 
                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};