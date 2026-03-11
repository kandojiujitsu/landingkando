import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X, GraduationCap, Trophy, BookOpen, ChevronRight } from 'lucide-react';

export default function Instructors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="quem-somos" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Quem Somos</h2>
            <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter leading-none">
              LIDERANÇA E <span className="text-zinc-400 italic">TRADIÇÃO.</span>
            </h3>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] md:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img
              src="https://lh3.googleusercontent.com/d/1_NKOyuYmtN-JIoQKPY3IQEWgscj9sQWR"
              alt="Aline Coelho e Pedro Cairo"
              className="w-full h-full object-cover object-[center_20%]"
              referrerPolicy="no-referrer"
            />
            {/* Dark Gradient Overlay - Bottom to Top */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent"></div>
          </motion.div>

          {/* Cards Container - Overlapping the image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[-80px] md:mt-[-120px] px-4 md:px-12 relative z-10">
            {/* Aline Card */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="bg-white p-8 rounded-3xl shadow-2xl border border-zinc-100 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 p-3 rounded-2xl text-white shadow-lg shadow-red-200">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-zinc-900 tracking-tight">Aline Coelho</h4>
                  <p className="text-red-600 font-black uppercase tracking-widest text-[10px] mt-0.5">Faixa Preta 6º grau</p>
                </div>
              </div>
              <p className="text-zinc-600 leading-relaxed text-justify text-sm flex-grow">
                Com uma trajetória marcada por dedicação, disciplina e profundo conhecimento da arte suave, Aline é uma das grandes referências técnicas da equipe. Faixa preta há 26 anos, construiu uma carreira sólida dentro do Jiu Jitsu, acumulando experiência tanto na formação de atletas quanto no desenvolvimento técnico de praticantes de diferentes níveis.

Ao longo de sua trajetória, também levou seu conhecimento para o cenário internacional, atuando como professora de Jiu Jitsu nos Emirados Árabes, onde contribuiu para a expansão e fortalecimento da modalidade.

Dentro da equipe, Aline exerce um papel fundamental na formação de novos faixas pretas, transmitindo não apenas técnica, mas também os valores essenciais do Jiu Jitsu, como disciplina, respeito e perseverança. Sua liderança e experiência são pilares importantes da metodologia Kando, influenciando diretamente o crescimento técnico e humano de toda a equipe.
              </p>
            </motion.div>

            {/* Pedro Card */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.4 }}
               className="bg-zinc-900 p-8 rounded-3xl shadow-2xl text-white flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 p-3 rounded-2xl text-white shadow-lg shadow-red-900/20">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-black tracking-tight">Pedro Cairo</h4>
                  <p className="text-red-500 font-black uppercase tracking-widest text-[10px] mt-0.5">Faixa Preta 2º grau</p>
                </div>
              </div>
              <div className="text-zinc-400 leading-relaxed text-justify text-sm flex-grow space-y-4">
                <p>
                  Pedro Cairo é um atleta e professor que une alto rendimento competitivo com uma sólida formação técnica e educacional. Campeão Pan-Americano de Jiu Jitsu, Hexa Campeão Mineiro e medalhista de 3º lugar no Mundial de Jiu Jitsu, Pedro também contribuiu para conquistas coletivas importantes, como o 1º Lugar Geral por Equipes no BOP Games 25. Sua trajetória no esporte reflete dedicação, disciplina e excelência competitiva.
                </p>
                <p>
                  Além dos resultados expressivos nos tatames, Pedro investe continuamente em formação profissional e pedagógica. Possui diversos cursos e certificações nas áreas de arbitragem, gestão esportiva, defesa pessoal, primeiros socorros, ensino do esporte e desenvolvimento infantil no Jiu Jitsu.
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 text-red-500 font-bold hover:text-red-400 transition-colors group"
                >
                  Ver currículo completo
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal Curriculum Pedro */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-zinc-100 flex justify-between items-center bg-zinc-50">
                <div>
                  <h4 className="text-2xl font-black text-zinc-900 tracking-tight">Sensei Pedro Cairo</h4>
                  <p className="text-red-600 font-bold uppercase tracking-widest text-xs">Currículo e Formação</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-zinc-200 rounded-full transition-colors text-zinc-500"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-10">
                {/* Formação Acadêmica */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                      <GraduationCap size={20} />
                    </div>
                    <h5 className="text-lg font-black text-zinc-900 uppercase tracking-tight">Formação Curso Superior</h5>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="font-black text-red-600">2026</span>
                      <p className="text-zinc-600 font-medium">Pós Graduação: Treinamento de Artes Marciais</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-black text-red-600">2025</span>
                      <p className="text-zinc-600 font-medium">Educação Física Bacharelado</p>
                    </li>
                  </ul>
                </section>

                {/* Campeonatos */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                      <Trophy size={20} />
                    </div>
                    <h5 className="text-lg font-black text-zinc-900 uppercase tracking-tight">Principais Campeonatos</h5>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      '1º Lugar Geral por Equipes - Bop Games 25',
                      'Hexa Campeão Mineiro de Jiu Jitsu',
                      'Campeão Pan-americano de Jiu Jitsu',
                      '3º lugar Mundial de Jiu Jitsu',
                      'Vice Campeão Brasileiro de Jiu Jitsu'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        <span className="text-sm text-zinc-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Cursos e Formação */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                      <BookOpen size={20} />
                    </div>
                    <h5 className="text-lg font-black text-zinc-900 uppercase tracking-tight">Cursos e Especializações</h5>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      'Curso de Primeiros Socorros no 3º Batalhão dos Bombeiros de Minas Gerais',
                      'Curso de Regras e Arbitragem - FMJJ',
                      'BJJ Master Class KIDS',
                      'Curso de Defesa Pessoal: Atemi Waza - Goshin Jutsu',
                      'MCM - Orientações para prevenção e retomada das artes marciais COVID-19',
                      'Esportes de Combate na Escola - UNOPAR',
                      'Educação Física na Escola - UNOPAR',
                      '10º Encontro: Judô e deficiência física',
                      'Seminário - Combate com Lâminas: The Silent Blade',
                      'Direito Trabalho Esportivo - FMJJE',
                      'Staff Esportivo - FMJJE',
                      'Covid Safe Martial Arts Instructor Certification',
                      'Gestão 4.0 Escola de Jiu Jitsu',
                      'Curso de Regras e Arbitragem - LBJJ',
                      'Curso de Primeiros Socorros - Ênfase no Jiu Jitsu',
                      'Seminário Internacional Racismo e Infância: Impactos, Desafios e Perspectivas',
                      'Oficina Antidopagem: Valores do Esporte e Antidopagem'
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 p-3 hover:bg-zinc-50 rounded-xl transition-colors">
                        <ChevronRight size={14} className="text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-zinc-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-zinc-900 text-center">
                <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Kando Jiu Jitsu - Excelência no Ensino</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
