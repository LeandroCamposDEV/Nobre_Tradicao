import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Serviços | Marcenaria Nobre Tradição",
  description: "Especialistas em cozinhas planejadas, closets sob medida e ambientes corporativos de luxo.",
};

const services = [
  {
    id: "cozinhas",
    title: "Cozinhas Incomparáveis",
    desc: "A verdadeira estrela da casa moderna. Projetamos cozinhas que unem a praticidade de um chef profissional à estética de um restaurante estrelado.",
    features: ["Ferragens Blum importadas", "Sistemas de amortecimento silenciosos", "Integração perfeita de eletrodomésticos", "Iluminação LED embutida estratégica"],
    img: "/images/servico_cozinha_1776386548953.png",
    reverse: false
  },
  {
    id: "closets",
    title: "Closets Deslumbrantes",
    desc: "Mais do que guardar roupas, um altar para o seu estilo pessoal. Closets amplos, extremamente organizados e com soluções inteligentes de usabilidade.",
    features: ["Divisórias em acrílico ou vidro fumê", "Gavetas forradas em suede", "Módulos rotativos para sapatos", "Espelhos sob medida com iluminação frontal"],
    img: "/images/servico_closet_1776386563985.png",
    reverse: true
  },
  {
    id: "corporativo",
    title: "Corporativos Notáveis",
    desc: "O cartão de visitas da sua empresa no mais alto nível. Salas de reunião suntuosas, painéis acústicos e mesas executivas que inspiram segurança e poder.",
    features: ["Mesas de reunião espessas em lâmina natural", "Caixas de conectividade embutidas invisíveis", "Painéis ripados com tratamento acústico", "Recepções monumentais em pedra e madeira"],
    img: "/images/servico_corporativo_1776386576919.png",
    reverse: false
  }
];

export default function Servicos() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] border-b border-wood-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">Nossos <span className="text-wood-gold">Serviços</span></h1>
          <p className="text-primary-gray max-w-2xl mx-auto text-lg leading-relaxed">
            Especialistas em criar o extraordinário. Conheça as áreas de atuação onde somos 
            referência absoluta de qualidade no mercado.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-24 md:space-y-32">
          {services.map((svc) => (
            <div key={svc.id} id={svc.id} className={`flex flex-col gap-12 items-center scroll-mt-24 ${svc.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className="object-cover rounded-tl-[4rem] rounded-br-[4rem] shadow-xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-wood-dark/40 rounded-tl-[4rem] rounded-br-[4rem]"></div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl text-wood-gold">{svc.title}</h2>
                <p className="text-primary-gray/90 text-lg leading-relaxed text-balance">
                  {svc.desc}
                </p>
                <div className="py-2">
                  <ul className="space-y-3">
                    {svc.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-primary-gray">
                        <Check className="text-wood-gold mr-3 flex-shrink-0" size={20} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <Link href={`/contato?servico=${svc.id}`}>
                    <Button variant="outline">Orçar {svc.title.split(' ')[0]}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
