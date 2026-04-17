import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, PenTool, Crown, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden rounded-bl-[3rem] md:rounded-bl-[6rem] bg-wood-dark">
        <Image
          src="/images/home_hero_1776386458264.jpg"
          alt="Cozinha de alto padrão"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black/90 via-primary-black/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full mt-24 md:mt-20">
          <div className="max-w-2xl px-2 sm:px-0">
            <FadeIn delay={0.2} direction="up">
              <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
                A Arte de Morar <br />
                <span className="text-wood-gold">Com Sofisticação.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.4} direction="up">
              <p className="text-lg md:text-xl text-primary-gray/90 mb-10 text-balance leading-relaxed">
                Há 15 anos transformando madeira em patrimônio. Projetos exclusivos em cozinhas, 
                closets e ambientes corporativos para quem não abre mão do mais alto padrão.
              </p>
            </FadeIn>
            <FadeIn delay={0.6} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button size="lg" className="w-full sm:w-auto">Solicitar Orçamento</Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Ver Portfólio</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <Section className="bg-[#050505] border-y border-wood-dark" id="diferenciais">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-wood-gold mb-4">Nossa Essência</h2>
          <p className="text-primary-gray max-w-2xl mx-auto">
            Combinamos a tradição da marcenaria artesanal com a precisão da tecnologia suíça
            para entregar móveis que atravessam gerações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Crown className="w-10 h-10 text-wood-gold mb-4" />,
              title: "Alto Padrão",
              desc: "Acabamentos impecáveis e materiais nobres selecionados rigorosamente para garantir exclusividade."
            },
            {
              icon: <PenTool className="w-10 h-10 text-wood-gold mb-4" />,
              title: "Design Autoral",
              desc: "Projetos 100% personalizados que traduzem a sua identidade e estilo de vida em cada detalhe."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-wood-gold mb-4" />,
              title: "Durabilidade",
              desc: "Ferragens importadas e técnicas construtivas avançadas asseguram móveis para uma vida inteira."
            },
            {
              icon: <Clock className="w-10 h-10 text-wood-gold mb-4" />,
              title: "Pontualidade",
              desc: "Respeito irrestrito aos prazos estabelecidos. Sua obra entregue no tempo combinado, sem imprevistos."
            }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-primary-black border border-wood-dark rounded-sm hover:-translate-y-2 transition-transform duration-300">
              {item.icon}
              <h3 className="text-xl mb-3 text-white">{item.title}</h3>
              <p className="text-primary-gray/80 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mini Portfolio / Highlight */}
      <Section id="destaques">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 relative min-h-[500px]">
            <Image
              src="/images/home_destaque_1776386473747.png"
              alt="Closet de luxo"
              fill
              className="object-cover rounded-tl-[4rem] rounded-br-[4rem]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-wood-dark/20 rounded-tl-[4rem] rounded-br-[4rem]"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-wood-dark -z-10 hidden md:block"></div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl mb-6">A materialização da <span className="text-wood-gold">Excelência</span></h2>
            <p className="text-primary-gray mb-6 leading-relaxed">
              Cada ambiente planejado pela Nobre Tradição é o resultado de um estudo profundo de ergonomia,
              estética e funcionalidade. Não fazemos apenas móveis; criamos cenários para as melhores histórias da sua vida.
            </p>
            <p className="text-primary-gray mb-8 leading-relaxed">
              Nossos closets e dormitórios refletem a intimidade luxuosa que você merece, organizando seus itens mais preciosos
              como em uma boutique particular.
            </p>
            <Link href="/sobre">
              <span className="inline-flex items-center text-wood-gold font-semibold hover:text-wood-bronze transition-colors group">
                Conheça nossa história
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section className="bg-[#050505] border-y border-wood-dark" id="depoimentos">
        <h2 className="text-center text-3xl md:text-4xl text-wood-gold mb-16">O que dizem nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "A entrega superou todas as expectativas. O refinamento dos acabamentos na minha cozinha é algo indescritível.",
              author: "Elena Vasconcelos",
              role: "Arquiteta"
            },
            {
              text: "Profissionalismo do início ao fim. O closet blindado ficou exatamente como o meu projeto pedia. Qualidade suíça.",
              author: "Roberto Almeida",
              role: "Empresário"
            },
            {
              text: "Já é o terceiro projeto que faço com a Nobre Tradição para o meu escritório. Nunca decepcionam no prazo e na classe.",
              author: "Mariana Silva",
              role: "Advogada"
            }
          ].map((test, i) => (
            <div key={i} className="p-8 bg-primary-black border border-wood-dark relative">
              <span className="absolute top-4 left-4 text-4xl text-wood-gold/20 font-serif">&quot;</span>
              <p className="text-primary-gray/90 italic mb-6 relative z-10">&quot;{test.text}&quot;</p>
              <div>
                <strong className="block text-white font-serif">{test.author}</strong>
                <span className="text-sm text-wood-gold">{test.role}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
