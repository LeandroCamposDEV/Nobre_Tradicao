# Marcenaria Nobre Tradição

Este é o repositório front-end do site institucional da **Marcenaria Nobre Tradição**, uma aplicação web desenvolvida para refletir a mesma sofisticação, alta precisão e exclusividade oferecidas nos móveis da empresa.

## 🚀 Tecnologias Integradas

- **[Next.js 14](https://nextjs.org/)** (App Router) - Framework React otimizado para performance, com Server-Side Rendering (SSR) e geração estática.
- **[React](https://react.dev/)** - Biblioteca principal de interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização baseada em utilitários para construir designs altamente personalizados e responsivos (Zero uso de CSS tradicional avulso).
- **[Framer Motion](https://www.framer.com/motion/)** - Motor avançado e leve de animações para scroll vertical elegante.
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones vetorizados e minificados.

## 🎨 Arquitetura de Design

- **Layout e Identidade Visual**: Uma abordagem de *Dark Mode* contínua (`bg-[#050505]` a `#0a0a0a`), iluminada por tons de bronze e dourado-madeira para evocar luxo e robustez.
- **Assimetria Arquitetônica**: Containers de imagens e botões de chamada utilizam um padrão assimétrico em suas bordas (cantos suavemente curvados cruzados com cantos agudos, ex: `rounded-tl-[4rem] rounded-br-[4rem]`) para simbolizar exclusividade e lapidação moderna.
- **Imagens Automáticas**: Utiliza otimização agressiva de imagens nativa do próprio Next.js (`next/image`), melhorando o *Core Web Vitals* e a nota de SEO do Google.
- **Animações Naturais**: Todas as partes interativas reagem ao movimento pela tela utilizando opacidade e deslocamentos suaves (`FadeIn`).

## 📁 Estrutura de Pastas (Principais)

```text
├── public/                 # Recursos estáticos (Logos, fotografias otimizadas).
├── src/                    
│   ├── app/                # Estrutura modular Next.js App Router (Páginas principais).
│   │   ├── api/contact/    # Endpoint local da API do formulário de contato.
│   │   ├── contato/        # Página: Orçamentos / Fale Conosco.
│   │   ├── portfolio/      # Página: Galeria de projetos e portfólio rico.
│   │   ├── servicos/       # Página: Serviços disponíveis (Closets, Cozinhas, Corporativo).
│   │   ├── sobre/          # Página: História e conceito de fabricação da empresa.
│   │   ├── layout.tsx      # Configuração global de SEO, Fontes e encapsulamento.
│   │   └── page.tsx        # Página Principal (Home) / Landing Page vendedora.
│   └── components/         
│       ├── ui/             # Componentes base e unitários (Button, Section, FadeIn).
│       ├── Footer.tsx      # Rodapé padronizado em todas as rotas.
│       └── Navbar.tsx      # Cabeçalho de navegação (Glassmorphism e Responsividade).
└── tailwind.config.ts      # Arquivo raiz de tokens visuais e tema da empresa.
```

## ⚙️ Como Executar

Clone e prepare o projeto na sua máquina:

```bash
# 1. Instale as dependências
npm install

# 2. Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado instantâneo com hot-reloading ativo.

## 📦 Deploy / Produção

O projeto está otimizado e configurado para compilar 100% dos assets para performance máxima. Para simular e validar o processo de build do Next.js:

```bash
# Executa a checagem de tipos, lint e compacta a aplicação inteira
npm run build

# Inicia a versão compilada imitando ambiente final
npm start
```
