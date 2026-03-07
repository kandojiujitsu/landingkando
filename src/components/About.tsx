import { motion } from 'motion/react';
import { Target, Users, Shield, TrendingUp } from 'lucide-react';

const virtues = [
  {
    title: 'Disciplina',
    description: 'Foco e constância para alcançar seus objetivos dentro e fora do tatame.',
    icon: Target,
  },
  {
    title: 'Respeito',
    description: 'Honra aos mestres, parceiros de treino e à arte suave.',
    icon: Shield,
  },
  {
    title: 'Família',
    description: 'Um ambiente acolhedor onde todos se ajudam a evoluir.',
    icon: Users,
  },
  {
    title: 'Evolução',
    description: 'Busca contínua pelo aperfeiçoamento técnico e mental.',
    icon: TrendingUp,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Nossa História</h2>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-8 tracking-tighter leading-tight">
              MAIS QUE UMA EQUIPE, <br />
              UMA <span className="text-zinc-400 italic">FAMÍLIA</span> NO TATAME.
            </h3>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed text-justify">
              <p>
                A Equipe Kando Jiu Jitsu nasceu do desejo de criar um ambiente onde a excelência técnica 
                caminha lado a lado com a formação do caráter. Nosso nome, "Kando", reflete nossa filosofia 
                de superação e movimento constante.
              </p>
              <p>
                Acreditamos que o Jiu Jitsu é uma ferramenta poderosa de transformação social e pessoal. 
                No nosso dojô, cada aluno é valorizado, desde o iniciante que pisa no tatame pela primeira vez 
                até o competidor de alto nível.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                {virtues.map((virtue, index) => (
                  <motion.div
                    key={virtue.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 hover:border-red-100 hover:bg-red-50/30 transition-all group"
                  >
                    <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <virtue.icon size={20} />
                    </div>
                    <h4 className="font-bold text-zinc-900 text-lg mb-2">{virtue.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed text-justify">{virtue.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* FOTO DA SEÇÃO SOBRE */}
              <img
                src="https://lh3.googleusercontent.com/d/1cpAa0L99kTWe9sS_vc0DsuEJtGPymLgK"
                alt="Treino de Jiu Jitsu"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-zinc-200 rounded-2xl -z-10"></div>
            
            <div className="absolute bottom-8 left-8 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-xs border border-white/20">
              <p className="text-zinc-900 font-bold text-lg mb-1 text-justify">"O Jiu Jitsu é a arte de usar a força do oponente contra ele mesmo."</p>
              <p className="text-zinc-500 text-sm font-medium">— Grande Mestre Hélio Gracie</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
