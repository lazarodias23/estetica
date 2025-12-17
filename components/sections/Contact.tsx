import React, { useState } from 'react';
import { SectionId } from '../../types';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/FadeIn';
import { MapPin, Phone, Instagram, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    procedure: 'Avaliação Geral'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio
    setTimeout(() => {
      alert(`Obrigado, ${formState.name}! Entraremos em contato pelo número ${formState.phone} em breve.`);
      setFormState({ name: '', phone: '', procedure: 'Avaliação Geral' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="py-32 bg-noir-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxe-600/5 rounded-full blur-[120px] -z-10 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Row 1: Form and Info Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Form Side */}
          <FadeIn>
            <div className="bg-noir-900/80 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-black/50 border border-white/5 relative overflow-hidden">
              <span className="text-luxe-500 uppercase tracking-[0.25em] text-[0.65rem] font-bold relative z-10">
                Agendamento
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mt-6 mb-8 leading-tight relative z-10">
                Inicie sua jornada <br/> de beleza
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-10 mt-12 relative z-10">
                <div className="group">
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-luxe-500 transition-colors font-serif text-xl text-white placeholder:text-noir-600 placeholder:font-sans placeholder:text-base"
                    placeholder="Seu nome completo"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>

                <div className="group">
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-luxe-500 transition-colors font-serif text-xl text-white placeholder:text-noir-600 placeholder:font-sans placeholder:text-base"
                    placeholder="Seu WhatsApp"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>

                <div className="group">
                  <div className="relative">
                    <select
                      id="procedure"
                      className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-luxe-500 transition-colors font-serif text-xl text-white appearance-none cursor-pointer [&>option]:bg-noir-900 [&>option]:text-white"
                      value={formState.procedure}
                      onChange={(e) => setFormState({...formState, procedure: e.target.value})}
                    >
                      <option>Avaliação Geral</option>
                      <option>Botox</option>
                      <option>Preenchimento Labial</option>
                      <option>Harmonização Facial</option>
                      <option>Bioestimuladores</option>
                      <option>Skinbooster</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-luxe-500">
                        <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Button fullWidth type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Solicitar Agendamento'}
                  </Button>
                </div>
              </form>
            </div>
          </FadeIn>

          {/* Contact Info Side */}
          <FadeIn delay={200}>
            <div className="h-full flex flex-col justify-center space-y-12 pl-0 lg:pl-12">
                <div>
                    <h3 className="font-serif text-4xl text-white mb-8">Nossa Localização</h3>
                    <p className="font-sans text-noir-400 font-light leading-relaxed mb-12 text-lg">
                        Localizada no coração dos Jardins, nossa clínica oferece um refúgio urbano de privacidade e sofisticação.
                    </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-noir-800 flex items-center justify-center group-hover:bg-luxe-500 group-hover:text-noir-950 transition-all duration-500 shadow-sm border border-white/10">
                        <MapPin className="w-5 h-5 text-luxe-500 group-hover:text-noir-950 transition-colors" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs uppercase tracking-widest">Endereço</p>
                      <p className="text-noir-300 font-serif text-lg mt-1 group-hover:text-luxe-400 transition-colors">Av. Paulista, 1000 - Jardins</p>
                      <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-xs text-luxe-500 uppercase tracking-widest mt-1 hover:underline block">Traçar Rota</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-noir-800 flex items-center justify-center group-hover:bg-luxe-500 group-hover:text-noir-950 transition-all duration-500 shadow-sm border border-white/10">
                        <Phone className="w-5 h-5 text-luxe-500 group-hover:text-noir-950 transition-colors" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs uppercase tracking-widest">Contato</p>
                      <p className="text-noir-300 font-serif text-lg mt-1 group-hover:text-luxe-400 transition-colors">(11) 99999-8888</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-noir-800 flex items-center justify-center group-hover:bg-luxe-500 group-hover:text-noir-950 transition-all duration-500 shadow-sm border border-white/10">
                        <Instagram className="w-5 h-5 text-luxe-500 group-hover:text-noir-950 transition-colors" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs uppercase tracking-widest">Siga-nos</p>
                      <p className="text-noir-300 font-serif text-lg mt-1 group-hover:text-luxe-400 transition-colors">@lumina.aesthetics</p>
                    </div>
                  </div>
                </div>
            </div>
          </FadeIn>
        </div>

        {/* Row 2: Full Width Map */}
        <FadeIn delay={300}>
             <div className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197587029519!2d-46.65868662375836!3d-23.561343761592676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709920000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-700 ease-in-out opacity-70 group-hover:opacity-100"
                  title="Mapa da Clínica Lumina"
                ></iframe>
                {/* Map Overlay Label */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-noir-900/90 backdrop-blur px-6 py-3 rounded-full shadow-lg pointer-events-none border border-white/10">
                     <span className="text-white font-serif font-bold text-sm tracking-wide">📍 Jardins, São Paulo</span>
                </div>
             </div>
        </FadeIn>

      </div>
    </section>
  );
};