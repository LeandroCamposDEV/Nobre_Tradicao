"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Portfólio", href: "/portfolio" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-primary-black/90 backdrop-blur-md border-b border-wood-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2 md:space-x-4">
              <div className="relative w-10 h-10 md:w-16 md:h-16 flex-shrink-0">
                <Image src="/images/logo_marcenaria_1776386441913.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="font-serif text-base sm:text-xl md:text-3xl font-bold tracking-widest text-wood-gold whitespace-nowrap">
                NOBRE TRADIÇÃO
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-primary-gray hover:text-wood-gold transition-colors duration-300 text-sm tracking-wide uppercase font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center">
            <Link 
              href="/contato"
              className="bg-wood-gold text-primary-black px-6 py-2 rounded-sm font-semibold hover:bg-wood-bronze transition-colors duration-300"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-white hover:text-wood-gold"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-primary-black border-b border-wood-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-primary-gray hover:text-wood-gold"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-wood-gold"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
