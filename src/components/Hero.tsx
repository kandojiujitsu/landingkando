import { motion } from 'motion/react';
import { ChevronRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* FOTO DE FUNDO PRINCIPAL (TOPO) */}
        <img
          src="https://lh3.googleusercontent.com/d/1gvlSGuObXrWQuB8B84_-o94iTiV45rZZ"
          alt="Tatame Jiu Jitsu"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-zinc-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left md:text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-red-600 rounded-full">
            Equipe Kando Jiu Jitsu
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            DISCIPLINA, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">RESPEITO E EVOLUÇÃO</span>
          </h1>
          <p className="max-w-2xl md:mx-auto text-lg md:text-xl text-zinc-300 mb-10 font-medium text-justify">
            Venha treinar em um novo dojô preparado para transformar vidas. 
            Onde a técnica encontra o caráter.
          </p>

          <div className="flex flex-col sm:flex-row items-start md:items-center justify-start md:justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-bold rounded-full flex items-center justify-center gap-2 hover:bg-zinc-100 transition-all shadow-xl shadow-white/10"
            >
              Agende uma Aula Experimental
              <ChevronRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5531997594909?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20da%20Equipe%20Kando%20Jiu%20Jitsu.%20Pode%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-800 text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all border border-zinc-700"
            >
              <MessageCircle size={20} className="text-green-500" />
              Falar no WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
