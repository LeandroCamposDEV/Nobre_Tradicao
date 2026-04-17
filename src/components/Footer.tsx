import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-wood-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-6 space-x-2 md:space-x-4">
              <div className="relative w-12 h-12 md:w-20 md:h-20 flex-shrink-0">
                <Image src="/images/logo_marcenaria_1776386441913.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="font-serif text-xl sm:text-2xl md:text-4xl font-bold tracking-widest text-wood-gold block mt-1">
                NOBRE TRADIÇÃO
              </span>
            </Link>
            <p className="text-primary-gray/80 text-sm leading-relaxed mb-6">
              Há 15 anos transformando madeira em obras de arte. Exclusividade, durabilidade e design 
              impecável para os lares mais exigentes do Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-gray hover:text-wood-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-primary-gray hover:text-wood-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-primary-gray/80 hover:text-wood-gold transition-colors text-sm">Início</Link></li>
              <li><Link href="/sobre" className="text-primary-gray/80 hover:text-wood-gold transition-colors text-sm">Sobre Nós</Link></li>
              <li><Link href="/servicos" className="text-primary-gray/80 hover:text-wood-gold transition-colors text-sm">Serviços</Link></li>
              <li><Link href="/portfolio" className="text-primary-gray/80 hover:text-wood-gold transition-colors text-sm">Portfólio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li><Link href="/servicos#cozinhas" className="text-primary-gray/80 hover:text-wood-gold transition-colors text-sm">Cozinhas Planejadas</Link></li>
              <li><Link href="/servicos#closets" className="text-primary-gray/80 hover:text-wood-gold transition-colors text-sm">Closets Sob Medida</Link></li>
              <li><Link href="/servicos#corporativo" className="text-primary-gray/80 hover:text-wood-gold transition-colors text-sm">Ambientes Corporativos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-wood-gold mt-1 mr-3 flex-shrink-0" />
                <span className="text-primary-gray/80 text-sm leading-relaxed">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-wood-gold mr-3 flex-shrink-0" />
                <span className="text-primary-gray/80 text-sm">+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-wood-gold mr-3 flex-shrink-0" />
                <span className="text-primary-gray/80 text-sm">contato@nobretradicao.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-wood-dark/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-gray/60 text-xs">
            &copy; {new Date().getFullYear()} Marcenaria Nobre Tradição. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-primary-gray/60 text-xs text-center block">Feito com foco em excelência e performance.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
