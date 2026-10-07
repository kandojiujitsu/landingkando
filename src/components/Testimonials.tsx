import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Felipe Augusto',
    role: 'Aluno Adulto',
    content: 'Lugar de excelência, ambiente familiar, professores altamente qualificados. Recomendo demais!',
    avatar: 'https://i.pravatar.cc/150?u=felipe',
  },
  {
    name: 'Juliana Martins',
    role: 'Mãe de Aluno Kids',
    content: 'Melhor academia de Jiu Jitsu da região. Metodologia de ensino fantástica e ambiente muito acolhedor.',
    avatar: 'https://i.pravatar.cc/150?u=juliana',
  },
  {
    name: 'Bruno Costa',
    role: 'Aluno Adulto',
    content: 'Treino lá há 2 anos e a evolução é constante. Professores atenciosos e tatame sempre limpo. Nota 10!',
    avatar: 'https://i.pravatar.cc/150?u=bruno',
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
              <p className="text-zinc-600 mb-8 italic relative z-10 text-justify">
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

        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps/place/Kando+Jiu+Jitsu/@-19.8324444,-43.9863889,17z/data=!4m8!3m7!1s0x0:0x0!8m2!3d-19.8324444!4d-43.9863889!9m1!1b1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-red-600 text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center gap-2"
          >
            Ver todas as avaliações no Google Maps
            <Star size={12} className="fill-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
