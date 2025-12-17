import React from 'react';
import { SectionId, Procedure } from '../../types';
import { FadeIn } from '../ui/FadeIn';
import { Button } from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';

const proceduresList: Procedure[] = [
  {
    id: 'botox',
    title: 'Toxina Botulínica',
    description: 'Suavize rugas de expressão e previna sinais de envelhecimento com naturalidade.',
    benefits: ['Prevenção de rugas', 'Olhar descansado', 'Redução de pés de galinha'],
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lips',
    title: 'Preenchimento Labial',
    description: 'Volume, contorno e hidratação para lábios desenhados e harmônicos.',
    benefits: ['Definição do arco do cupido', 'Hidratação profunda', 'Correção de assimetrias'],
    imageUrl: 'https://images.unsplash.com/photo-1588510904409-47e2f767540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'harmonization',
    title: 'Harmonização Facial',
    description: 'Conjunto de procedimentos para equilibrar proporções e realçar sua beleza.',
    benefits: ['Melhora do contorno mandibular', 'Projeção do mento', 'Equilíbrio estético'],
    imageUrl: 'https://images.unsplash.com/photo-1606907635678-75b871c4c8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bioestimulador',
    title: 'Bioestimuladores',
    description: 'Estimule a produção natural de colágeno para uma pele firme e radiante.',
    benefits: ['Tratamento da flacidez', 'Efeito lifting gradual', 'Melhora da textura da pele'],
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skinbooster',
    title: 'Skinbooster',
    description: 'Hidratação injetável profunda para devolver o viço e o brilho da pele.',
    benefits: ['Pele iluminada', 'Hidratação de dentro para fora', 'Suavização de linhas finas'],
    imageUrl: 'https://images.unsplash.com/photo-1576426863848-c2185fc6e3c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fios',
    title: 'Fios de Sustentação',
    description: 'Tecnologia para reposicionamento de tecidos e efeito lifting imediato.',
    benefits: ['Lifting não cirúrgico', 'Estímulo de colágeno', 'Recuperação rápida'],
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-68e1430dd3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const Procedures: React.FC = () => {
  return (
    <section id={SectionId.PROCEDURES} className="py-32 bg-noir-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <FadeIn className="max-w-2xl">
            <span className="block text-luxe-500 uppercase tracking-[0.25em] text-[0.65rem] font-bold mb-6">
              Nossos Tratamentos
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
              Procedimentos de <br/><span className="italic text-gold-gradient">Alta Performance</span>
            </h2>
          </FadeIn>
          <FadeIn delay={100} className="hidden md:block">
             <p className="font-sans text-noir-400 font-light max-w-xs text-right leading-relaxed">
              Protocolos personalizados para realçar sua beleza natural com segurança e tecnologia.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proceduresList.map((proc, index) => (
            <FadeIn key={proc.id} delay={index * 100}>
              <div className="group relative bg-noir-900/50 backdrop-blur-sm rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-luxe-500/10 transition-all duration-700 border border-white/5 h-full flex flex-col hover:-translate-y-2 hover:border-luxe-500/30">
                <div className="relative h-72 overflow-hidden rounded-[2rem] m-2">
                  <img 
                    src={proc.imageUrl} 
                    alt={proc.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 to-transparent group-hover:from-noir-950/40 transition-colors duration-500"></div>
                  
                  {/* Floating Action Button style icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0 border border-white/10">
                    <ArrowUpRight className="w-4 h-4 text-luxe-400" />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-luxe-400 transition-colors">{proc.title}</h3>
                  <p className="text-noir-400 font-light text-sm mb-6 leading-relaxed flex-grow">
                    {proc.description}
                  </p>
                  
                  <div className="space-y-3 border-t border-white/5 pt-6">
                    {proc.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-center text-xs text-noir-500 uppercase tracking-wider font-medium">
                        <span className="w-1.5 h-1.5 bg-luxe-500 rounded-full mr-3"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-20">
            <a href={`#${SectionId.CONTACT}`}>
                <Button variant="outline">Ver Menu Completo</Button>
            </a>
        </div>
      </div>
    </section>
  );
};