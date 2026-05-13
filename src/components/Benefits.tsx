import { motion } from 'motion/react';
import { Shield, Target, Zap, Heart, Baby } from 'lucide-react';

const benefits = [
  {
    title: 'Defesa Pessoal',
    description: 'Aprenda técnicas reais para se proteger em situações de risco com eficiência.',
    icon: Shield,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Disciplina',
    description: 'Desenvolva foco, paciência e autocontrole que refletem em todas as áreas da vida.',
    icon: Target,
    color: 'bg-zinc-50 text-zinc-900',
  },
  {
    title: 'Condicionamento',
    description: 'Melhore sua saúde física, queime calorias e ganhe resistência muscular.',
    icon: Zap,
    color: 'bg-zinc-50 text-zinc-900',
  },
  {
    title: 'Autoconfiança',
    description: 'Supere seus limites e desenvolva uma mentalidade forte e resiliente.',
    icon: Heart,
    color: 'bg-zinc-50 text-zinc-900',
  },
  {
    title: 'Desenvolvimento Infantil',
    description: 'Aulas lúdicas que ensinam respeito, coordenação e disciplina para crianças.',
    icon: Baby,
    color: 'bg-red-50 text-red-600',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Por que treinar conosco?</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter">
            BENEFÍCIOS QUE VÃO <br />
            <span className="text-zinc-400 italic">ALÉM DO TATAME.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${benefit.color}`}>
                <benefit.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-4 tracking-tight">{benefit.title}</h4>
              <p className="text-zinc-600 leading-relaxed text-justify">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
