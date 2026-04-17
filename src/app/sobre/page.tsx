import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Hammer, Aperture, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Sobre Nós | Marcenaria Nobre Tradição",
  description: "Conheça a história de 15 anos de excelência e tradição em móveis de alto padrão.",
};

export default function Sobre() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-[#050505] border-b border-wood-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">Sobre a <span className="text-wood-gold">Tradição</span></h1>
          <p className="text-primary-gray max-w-2xl mx-auto font-serif italic text-lg">
            &quot;A perfeição não é um ato, mas um hábito.&quot;
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-white">15 Anos Construindo <br className="hidden md:block"/> <span className="text-wood-gold">Desejos</span></h2>
            <p className="text-primary-gray/90 leading-relaxed text-lg text-balance">
              Fundada em 2011, a Marcenaria Nobre Tradição nasceu com um único propósito:
              elevar o padrão mobiliário brasileiro ao nível das mais conceituadas boutiques europeias.
            </p>
            <p className="text-primary-gray/90 leading-relaxed">
              O que começou como um pequeno atelier de madeiras nobres, rapidamente se tornou 
              a escolha de arquitetos renomados e clientes extremamente exigentes, graças à nossa 
              obsessão por milímetros e nosso respeito à matéria prima.
            </p>
            <p className="text-primary-gray/90 leading-relaxed">
              Hoje, unimos a alma da marcenaria artesanal com o que há de mais moderno em maquinário
              suíço de corte e pintura, garantindo que cada fenda, encaixe ou corrediça funcione
              como um relógio perfeito.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 md:h-80 w-full mt-8 md:mt-12 rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden">
                <Image 
                  src="/images/sobre_artesanal_1776386487474.png"
                  alt="Trabalho artesanal em madeira"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-64 md:h-80 w-full rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden">
                <Image 
                  src="/images/sobre_maquina_1776386501306.png"
                  alt="Maquinário moderno"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#050505] border-y border-wood-dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-wood-dark rounded-full flex items-center justify-center mb-6">
              <Hammer className="text-wood-gold" size={32} />
            </div>
            <h3 className="text-2xl text-white mb-3">Alma Artesã</h3>
            <p className="text-primary-gray/80 text-sm leading-relaxed">
              Cada peça passa por rigorosa inspeção manual. Entendemos a madeira e respeitamos
              seus veios e características únicas.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-wood-dark rounded-full flex items-center justify-center mb-6">
              <Aperture className="text-wood-gold" size={32} />
            </div>
            <h3 className="text-2xl text-white mb-3">Precisão Suíça</h3>
            <p className="text-primary-gray/80 text-sm leading-relaxed">
              Software de ponta conectado a maquinário europeu garante cortes esquadrejados
              sem a mínima margem de erro.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-wood-dark rounded-full flex items-center justify-center mb-6">
              <BadgeCheck className="text-wood-gold" size={32} />
            </div>
            <h3 className="text-2xl text-white mb-3">Compromisso Real</h3>
            <p className="text-primary-gray/80 text-sm leading-relaxed">
              Prazos que são cumpridos, pós-venda eficiente e garantia estendida estrutural
              para a sua total tranquilidade.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
