import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

interface ClassSchedule {
  name: string;
  days: string;
  time: string;
  ageGroup: string;
  notes?: string;
}

export default function Schedules() {
  const [activeTab, setActiveTab] = useState<'adulto' | 'infantil'>('adulto');

  const schedules: Record<'adulto' | 'infantil', ClassSchedule[]> = {
    adulto: [
      {
        name: 'Adulto Manhã',
        days: 'Segunda, Quarta e Sexta',
        time: '08:00h',
        ageGroup: '16 anos ou mais',
      },
      {
        name: 'Adulto Iniciantes',
        days: 'Segunda, Quarta e Sexta',
        time: '19:00h',
        ageGroup: '12 anos ou mais',
      },
      {
        name: 'Adulto Avançados',
        days: 'Segunda, Quarta e Sexta',
        time: '20:00h',
        ageGroup: '16 anos ou mais',
        notes: 'Graduados',
      },
      {
        name: 'Adulto Misto',
        days: 'Terças e Quintas',
        time: '18:00h',
        ageGroup: '16 anos ou mais',
      },
    ],
    infantil: [
      {
        name: 'Infantil A',
        days: 'Segunda, Quarta e Sexta',
        time: '18:00h',
        ageGroup: '8 a 12 anos',
      },
      {
        name: 'Infantil B',
        days: 'Terças e Quintas',
        time: '20:00h',
        ageGroup: '8 a 12 anos',
      },
      {
        name: 'Mirim',
        days: 'Terças e Quintas',
        time: '19:00h',
        ageGroup: '5 a 8 anos',
      },
      {
        name: 'Baby',
        days: 'Terças e Quintas',
        time: '17:30h',
        ageGroup: '3 e 4 anos',
      },
    ],
  };

  return (
    <section id="schedules" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <Calendar size={12} />
              Grade de Horários
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter leading-none mb-6">
              PROGRAME SEUS <span className="text-red-600">TREINOS.</span>
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Temos turmas planejadas para cada faixa etária e nível de evolução técnico. Venha fazer uma aula experimental!
            </p>
          </motion.div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-200/60 p-1.5 rounded-2xl flex items-center gap-1">
            <button
              onClick={() => setActiveTab('adulto')}
              className={`px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'adulto'
                  ? 'bg-zinc-900 text-white shadow-lg'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              🥋 Adulto
            </button>
            <button
              onClick={() => setActiveTab('infantil')}
              className={`px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'infantil'
                  ? 'bg-zinc-900 text-white shadow-lg'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              👧 Infantil
            </button>
          </div>
        </div>

        {/* Schedule Cards Grid */}
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {schedules[activeTab].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-red-600/30 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/5 rounded-bl-[4rem] group-hover:bg-red-600/10 transition-colors" />

                  <div>
                    {/* Time & Days info */}
                    <div className="flex items-center gap-2 text-red-600 font-black text-xl mb-4">
                      <Clock size={18} />
                      <span>{item.time}</span>
                    </div>

                    <h3 className="text-2xl font-black text-zinc-950 tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>

                    {item.notes && (
                      <span className="inline-block bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded mb-4">
                        {item.notes}
                      </span>
                    )}

                    <div className="space-y-3 mt-4">
                      <div className="flex items-center gap-2.5 text-zinc-600 text-sm">
                        <Calendar size={16} className="text-zinc-400" />
                        <span className="font-semibold">{item.days}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-zinc-600 text-sm">
                        <Users size={16} className="text-zinc-400" />
                        <span>Idade: <strong>{item.ageGroup}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="text-xs font-black uppercase tracking-wider text-zinc-900 group-hover:text-red-600 transition-colors flex items-center gap-1.5"
                    >
                      Experimentar aula
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
