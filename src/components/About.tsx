import { motion } from 'motion/react';

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
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="font-bold text-zinc-900 text-xl mb-2">Disciplina</h4>
                  <p className="text-sm text-justify">Foco e constância para alcançar seus objetivos dentro e fora do tatame.</p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-xl mb-2">Respeito</h4>
                  <p className="text-sm text-justify">Honra aos mestres, parceiros de treino e à arte suave.</p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-xl mb-2">Família</h4>
                  <p className="text-sm text-justify">Um ambiente acolhedor onde todos se ajudam a evoluir.</p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-xl mb-2">Evolução</h4>
                  <p className="text-sm text-justify">Busca contínua pelo aperfeiçoamento técnico e mental.</p>
                </div>
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
                src="https://lh3.googleusercontent.com/d/1zGeTOdGVZTjzrIwlc9VGc8HoBskarQf-"
                alt="Treino de Jiu Jitsu"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-zinc-200 rounded-2xl -z-10"></div>
            
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-zinc-900 font-bold text-lg mb-1 text-justify">"O Jiu Jitsu é a arte de usar a força do oponente contra ele mesmo."</p>
              <p className="text-zinc-500 text-sm font-medium">— Grande Mestre Hélio Gracie</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
