import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <img 
              src="https://lh3.googleusercontent.com/d/1IP4bgpSjZz46JvQtQ1QsOeaO8t7Bp0Qx" 
              alt="Kando Jiu Jitsu Logo" 
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-zinc-500 text-sm leading-relaxed">
              Transformando vidas através da arte suave. Disciplina, respeito e evolução constante dentro e fora do tatame.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/kandojiujitsu?igsh=MXNhbDlyajhic3JlZw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">Links Rápidos</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#plans" className="hover:text-white transition-colors">Planos</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">Contato</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-600 flex-shrink-0" />
                <span>Avenida Guarapari, 868, Santa Amélia, Belo Horizonte/MG</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-600 flex-shrink-0" />
                <a href="https://wa.me/5531997594909" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  (31) 99759-4909
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-600 flex-shrink-0" />
                <span>kandojiujitsu@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Segunda - Sexta</span>
                <span className="text-white font-medium">06:00 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Sábado</span>
                <span className="text-white font-medium">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-red-500 font-medium">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs uppercase tracking-widest font-bold">
          <p>© 2024 Equipe Kando Jiu Jitsu. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
