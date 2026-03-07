import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Tatame 30mm lonado',
  'Ambiente Climatizado e Seguro',
  'Vestiários Modernos e Higienizados',
  'Área de Convivência para Pais',
  'Equipamentos de Proteção Novos',
  'Localização de Fácil Acesso',
];

export default function Structure() {
  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4">Nossa Estrutura</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">
              UM DOJÔ PREPARADO <br />
              PARA A SUA <span className="text-red-500 italic">EVOLUÇÃO.</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed text-justify">
              Investimos no que há de melhor para garantir sua segurança e conforto. 
              Nosso espaço foi projetado para oferecer a melhor experiência de treino, 
              seja você um iniciante ou um atleta profissional.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 size={20} className="text-red-500 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all transform hover:scale-105"
              >
                Conhecer Pessoalmente
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                {/* FOTO 1 - ESTRUTURA */}
                <img
                  src="https://lh3.googleusercontent.com/d/1tbIv7ViFHiq4PWZ7yFcxs6c0NC_9fazM"
                  alt="Dojô em aula"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                {/* FOTO 2 - ESTRUTURA */}
                <img
                  src="https://lh3.googleusercontent.com/d/1MZ2Iyqm2YrmhbrtgOAu-qfXoYosPhmpL"
                  alt="Treino Kids"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                {/* FOTO 3 - ESTRUTURA */}
                <img
                  src="https://lh3.googleusercontent.com/d/1uf9NF4KyDKFXsJV3AYyVTjOP-7OBPRCX"
                  alt="Equipe"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                {/* FOTO 4 - ESTRUTURA */}
                <img
                  src="https://lh3.googleusercontent.com/d/1pRrSmo9n1iYRh_RtbTGDgGSNOf-eMtpg"
                  alt="Tatame Close"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
