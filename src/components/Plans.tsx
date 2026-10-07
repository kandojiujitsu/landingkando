import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Baby',
    description: 'Para crianças de 3 e 4 anos. Introdução lúdica à arte suave.',
    features: ['Coordenação motora', 'Socialização', 'Brincadeiras educativas', 'Aulas de 30 min'],
    highlight: false,
  },
  {
    name: 'Mirim',
    description: 'Para crianças de 5 a 8 anos. Desenvolvimento motor e disciplina.',
    features: ['Respeito e hierarquia', 'Jogos educativos', 'Fundamentos básicos', 'Aulas dinâmicas'],
    highlight: false,
  },
  {
    name: 'Infantil',
    description: 'Para crianças de 8 a 12 anos. Foco em disciplina e técnica.',
    features: ['Desenvolvimento motor', 'Respeito e hierarquia', 'Defesa pessoal básica', '2 a 3x por semana'],
    highlight: false,
  },
  {
    name: 'Adulto Iniciante',
    description: 'O melhor começo para quem nunca treinou. Passo a passo.',
    features: ['Fundamentos básicos', 'Defesa pessoal', 'Turmas exclusivas', 'Acesso livre ao dojô'],
    highlight: true,
  },
  {
    name: 'Adulto Avançado',
    description: 'Para alunos graduados. Refinamento técnico e estratégia.',
    features: ['Técnicas complexas', 'Estratégia de luta', 'Sparring técnico', 'Aulas de alto nível'],
    highlight: false,
  },
  {
    name: 'Competição',
    description: 'Para quem busca o alto rendimento e medalhas.',
    features: ['Treinos intensos', 'Preparação física', 'Suporte em torneios', 'Drills específicos'],
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Nossas Modalidades</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter">
            O PLANO CERTO PARA <br />
            <span className="text-zinc-400 italic">O SEU MOMENTO.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.highlight 
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-2xl scale-105 z-10' 
                  : 'bg-white text-zinc-900 border-zinc-100 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Mais Procurado
                </span>
              )}
              <h4 className="text-2xl font-black mb-2 tracking-tight">{plan.name}</h4>
              <p className={`text-sm mb-8 text-justify ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-red-600' : 'bg-zinc-100'}`}>
                      <Check size={12} className={plan.highlight ? 'text-white' : 'text-zinc-900'} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                  plan.highlight 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                Quero fazer parte
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
