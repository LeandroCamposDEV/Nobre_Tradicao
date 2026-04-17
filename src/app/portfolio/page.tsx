import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Portfólio | Marcenaria Nobre Tradição",
  description: "Explore nossa galeria de obras de arte em forma de móveis.",
};

const portfolioItems = [
  { img: "/images/port_cozinha_prime_1776386591961.png", title: "Cozinha Linha Prime" },
  { img: "/images/port_closet_ilum_1776386607657.png", title: "Closet Iluminado" },
  { img: "/images/port_sala_reuniao_1776386620119.png", title: "Sala de Reuniões Executiva" },
  { img: "/images/port_closet_casal_1776386635657.png", title: "Closet Casal" },
  { img: "/images/port_recepcao_1776386647920.png", title: "Recepção Corporativa" },
  { img: "/images/port_cozinha_gourmet_1776386661615.png", title: "Cozinha Gourmet" },
];

export default function Portfolio() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] border-b border-wood-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">Nosso <span className="text-wood-gold">Portfólio</span></h1>
          <p className="text-primary-gray max-w-2xl mx-auto text-lg leading-relaxed">
            Uma seleção restrita dos nossos melhores projetos.
            Repare na qualidade dos acabamentos e na precisão visual.
          </p>
        </div>
      </section>

      <Section>
        {/* Simple CSS Grid for images to ensure fast rendering and responsiveness without extra libs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <div key={i} className={`group relative h-80 overflow-hidden bg-wood-dark cursor-pointer ${i % 2 === 0 ? 'rounded-tl-[3rem] rounded-br-[3rem]' : 'rounded-tr-[3rem] rounded-bl-[3rem]'}`}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-primary-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl text-wood-gold font-serif">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-[#050505] p-12 border border-wood-dark rounded-sm">
          <h3 className="text-2xl text-white mb-4">Gostou do que viu?</h3>
          <p className="text-primary-gray mb-8">Nossa equipe está pronta para desenhar o seu sonho.</p>
          <Link href="/contato">
            <Button size="lg">Iniciar Meu Projeto</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
