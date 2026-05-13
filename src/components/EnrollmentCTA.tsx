import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function EnrollmentCTA() {
  return (
    <section className="py-20 bg-red-600 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-white rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border-[40px] border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left lg:max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6 uppercase"
            >
              Quero me matricular
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-red-100 font-medium mb-8"
            >
              Comece sua jornada no Jiu Jitsu hoje. Acesse o link abaixo:
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex flex-col items-center lg:items-end"
          >
            <a
              href="https://kando-cadastro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-zinc-900 text-white px-10 py-6 rounded-2xl font-black text-xl tracking-tight hover:bg-white hover:text-red-600 transition-all duration-300 shadow-2xl"
            >
              MATRICULAR AGORA
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
