import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Percent, Calendar, ArrowRight, Clock } from 'lucide-react';

export default function EnrollmentCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: March 31st, 2026 at 23:59:59
    const targetDate = new Date('2026-03-31T23:59:59').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest mb-6"
            >
              <Calendar size={14} />
              Oferta de Março
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6"
            >
              MATRICULE-SE JÁ COM <br />
              <span className="text-zinc-900">50% DE DESCONTO</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-red-100 font-medium mb-8"
            >
              Comece sua jornada no Jiu Jitsu hoje. Promoção exclusiva para novos alunos, válida apenas até o dia 31 de março.
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
              className="group relative inline-flex items-center gap-4 bg-zinc-900 text-white px-10 py-6 rounded-2xl font-black text-xl tracking-tight hover:bg-white hover:text-red-600 transition-all duration-300 shadow-2xl mb-10"
            >
              GARANTIR MEU DESCONTO
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              
              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-red-600 animate-bounce">
                <Percent size={20} className="font-black" />
              </div>
            </a>

            <div className="text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-end gap-2 text-white/80 text-xs font-black uppercase tracking-widest mb-4">
                <Clock size={14} />
                Tempo restante para o fim da promoção:
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-3">
                {[
                  { label: 'Dias', value: timeLeft.days },
                  { label: 'Horas', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Seg', value: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center">
                    <div className="bg-zinc-900/40 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 mb-1">
                      <span className="text-white font-black text-2xl leading-none">
                        {String(item.value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-white/60 text-[10px] uppercase font-black tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
