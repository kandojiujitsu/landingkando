import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ricardo Silva',
    role: 'Aluno Adulto',
    content: 'A Kando mudou minha vida. Perdi peso, ganhei confiança e fiz amigos que levarei para sempre. O ambiente é nota 10!',
    avatar: 'https://i.pravatar.cc/150?u=ricardo',
  },
  {
    name: 'Ana Oliveira',
    role: 'Mãe de Aluno Kids',
    content: 'Meu filho era muito tímido. Depois de 6 meses no Jiu Jitsu, ele está muito mais comunicativo e disciplinado na escola.',
    avatar: 'https://i.pravatar.cc/150?u=ana',
  },
  {
    name: 'Marcos Souza',
    role: 'Competidor',
    content: 'Treino de alto nível técnico. Os professores são extremamente atenciosos e a estrutura é a melhor da região.',
    avatar: 'https://i.pravatar.cc/150?u=marcos',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Depoimentos</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter">
            O QUE DIZEM NOSSOS <br />
            <span className="text-zinc-400 italic">GUERREIROS.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-zinc-100" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-600 mb-8 italic relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
