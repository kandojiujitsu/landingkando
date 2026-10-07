import { motion } from 'motion/react';
import { Book, CheckCircle2, ShoppingCart, ArrowRight } from 'lucide-react';

export default function IllustratedGuide() {
  const benefits = [
    'Técnicas fundamentais detalhadas passo a passo',
    'Conceitos teóricos essenciais para iniciantes e avançados',
    'Ilustrações claras que facilitam a visualização técnica',
    'Metodologia exclusiva desenvolvida pelo Sensei Pedro Cairo',
    'Acesso imediato para estudar de qualquer lugar',
  ];

  return (
    <section id="guia" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-md mx-auto group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full group-hover:bg-red-600/30 transition-colors" />
              
              {/* Real Book Image */}
              <div className="relative transform group-hover:scale-105 transition-transform duration-500 perspective-1000">
                <img 
                  src="https://lh3.googleusercontent.com/d/1KPO-y2z-Xl7B2DekqdBFy5iWpXEYeBmB" 
                  alt="Guia Ilustrado de Jiu Jitsu - Sensei Pedro Cairo" 
                  className="w-full h-auto rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] relative z-10"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-zinc-900 text-white p-6 rounded-full shadow-2xl z-20 border-4 border-white flex flex-col items-center justify-center rotate-12 scale-90 md:scale-100">
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1 opacity-60">Conteúdo</span>
                  <span className="text-xl font-black text-red-600 leading-none uppercase">Vip</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              Produto Exclusivo Kando
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter leading-none mb-8">
              DOMINE A TÉCNICA <br />
              <span className="text-red-600">FORA DO TATAME.</span>
            </h3>

            <p className="text-zinc-600 text-lg leading-relaxed mb-10 text-justify">
              O <strong>Guia Ilustrado de Jiu Jitsu</strong> é o material definitivo para quem busca excelência. Desenvolvido pelo <strong>Sensei Pedro Cairo</strong>, este guia reúne anos de experiência pedagógica e técnica em um formato visual e prático, focado no que realmente importa para a sua evolução.
            </p>

            <ul className="space-y-4 mb-12">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 text-red-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-zinc-700 font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://hotmart.com/pt-br/marketplace/produtos/guia-ilustrado-de-jiu-jitsu/R101604873P"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-5 rounded-2xl font-black text-lg tracking-tight hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-red-200 group"
              >
                <ShoppingCart size={24} />
                ADQUIRIR MEU GUIA
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              
              <div className="flex flex-col justify-center">
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Acesso Digital Vitalício</p>
                <p className="text-zinc-900 font-black">Disponível na Hotmart</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
