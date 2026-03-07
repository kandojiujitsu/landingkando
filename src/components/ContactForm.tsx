import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase/config';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    idade: '',
    modalidade: 'Adulto Iniciante',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const whatsappMessage = `Aula Experimental:

Nome: ${formData.nome}
Idade: ${formData.idade}
Modalidade de Interesse: ${formData.modalidade}`;

    const whatsappUrl = `https://wa.me/5531997594909?text=${encodeURIComponent(whatsappMessage)}`;

    if (!isFirebaseConfigured || !db) {
      console.warn('Firebase is not configured. Redirecting to WhatsApp...');
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setStatus('success');
      
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setFormData({ nome: '', telefone: '', idade: '', modalidade: 'Adulto Iniciante' });
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    try {
      // Salvar no Firestore
      await addDoc(collection(db, 'leads'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      
      setStatus('success');
      
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setFormData({ nome: '', telefone: '', idade: '', modalidade: 'Adulto Iniciante' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 text-white">
            <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4">Dê o primeiro passo</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">
              AGENDE SUA AULA <br />
              <span className="text-zinc-500 italic">EXPERIMENTAL GRÁTIS.</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato para agendar o melhor horário para você. 
              Não precisa de kimono para a primeira aula, nós emprestamos!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-red-500">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Sem Compromisso</h4>
                  <p className="text-sm text-zinc-500">A primeira aula é totalmente por nossa conta.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-red-500">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Todos os Níveis</h4>
                  <p className="text-sm text-zinc-500">Temos turmas específicas para quem está começando.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome aqui"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="idade" className="block text-sm font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Idade
                  </label>
                  <input
                    type="number"
                    id="idade"
                    required
                    value={formData.idade}
                    onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
                    className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    placeholder="Sua idade"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modalidade" className="block text-sm font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  Modalidade de Interesse
                </label>
                <select
                  id="modalidade"
                  value={formData.modalidade}
                  onChange={(e) => setFormData({ ...formData, modalidade: e.target.value })}
                  className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all appearance-none"
                >
                  <option>Baby (3 e 4 anos)</option>
                  <option>Mirim (5 a 8 anos)</option>
                  <option>Infantil</option>
                  <option>Juvenil</option>
                  <option>Adulto Iniciante</option>
                  <option>Adulto Avançado</option>
                  <option>Competição</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 bg-red-600 text-white font-black uppercase tracking-widest rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero minha aula grátis
                    <Send size={20} />
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 font-medium"
                  >
                    <CheckCircle size={20} />
                    Recebemos seu contato! Em breve falaremos com você.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 font-medium"
                  >
                    <AlertCircle size={20} />
                    Ops! Algo deu errado. Tente novamente mais tarde.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
