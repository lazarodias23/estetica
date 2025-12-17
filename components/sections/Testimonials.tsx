import React from 'react';
import { SectionId, Testimonial } from '../../types';
import { FadeIn } from '../ui/FadeIn';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carolina M.',
    age: 34,
    text: "O resultado ficou incrivelmente natural. Eu tinha medo de ficar artificial, mas a Dra. Elisa entendeu exatamente o que eu queria.",
    procedure: 'Bioestimuladores'
  },
  {
    id: '2',
    name: 'Patricia S.',
    age: 42,
    text: "Ambiente sofisticado e atendimento impecável. Senti confiança desde a primeira consulta. O Botox foi aplicado de forma sutil.",
    procedure: 'Toxina Botulínica'
  },
  {
    id: '3',
    name: 'Fernanda L.',
    age: 29,
    text: "Fiz preenchimento labial e ficou perfeito. O cuidado da equipe no pós-procedimento faz toda a diferença.",
    procedure: 'Preenchimento Labial'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id={SectionId.TESTIMONIALS} className="py-32 bg-noir-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
            <div className="text-center mb-24">
            <span className="block text-luxe-500 uppercase tracking-[0.25em] text-[0.65rem] font-bold mb-6">
              Depoimentos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
                Histórias <span className="italic text-gold-gradient">Reais</span>
            </h2>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <FadeIn key={item.id} delay={index * 150}>
              <div className="bg-noir-800/50 backdrop-blur-sm p-12 rounded-[2.5rem] hover:shadow-2xl hover:shadow-luxe-500/5 transition-all duration-500 group border border-white/5 flex flex-col justify-between h-full hover:border-luxe-500/30">
                
                <div className="mb-8">
                   <div className="text-4xl text-luxe-500 font-serif mb-6 opacity-50">"</div>
                   <p className="font-serif text-noir-200 text-xl leading-relaxed">
                    {item.text}
                   </p>
                </div>
                
                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                   <div className="w-10 h-10 rounded-full bg-noir-700 flex items-center justify-center font-serif text-luxe-400 text-sm border border-white/10">
                      {item.name.charAt(0)}
                   </div>
                   <div>
                        <h4 className="font-sans font-bold text-white uppercase tracking-widest text-[0.65rem]">
                            {item.name}
                        </h4>
                        <p className="text-[0.65rem] text-luxe-500 font-medium uppercase tracking-wider mt-1">{item.procedure}</p>
                   </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};