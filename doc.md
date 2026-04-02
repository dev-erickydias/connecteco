# 📄 ConnectEco — Documentação Técnica Detalhada

> **Versão:** 2.0.0 | **Última atualização:** Abril 2026

---

## 🌿 Nome do Projeto

**ConnectEco** — Plataforma de Sustentabilidade e Reciclagem no Brasil

---

## 📝 Descrição

O **ConnectEco** é uma plataforma web ecológica e inovadora que conecta cidadãos brasileiros a **pontos de coleta de materiais recicláveis (ecopontos)** em todo o Brasil. Com mais de **2.786 ecopontos** cadastrados, a plataforma permite que usuários encontrem locais de coleta seletiva próximos, filtrem por tipo de material e localização, leiam artigos sobre sustentabilidade e se engajem com a comunidade sustentável.

🌐 **URL de produção:** [connecteco.com.br](https://connecteco.com.br)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| ⚛️ **Next.js 14** | 14.2.3 | Framework React com App Router (SSR/SSG) |
| ⚛️ **React 18** | ^18 | Biblioteca de interface com Hooks |
| 🎨 **Tailwind CSS** | ^3.4.1 | Framework CSS utilitário com design tokens customizados |
| 🎬 **Framer Motion** | ^11.3.0 | Animações e transições fluidas |
| 🗄️ **Supabase** | ^2.45.0 | Backend-as-a-Service (PostgreSQL) |
| 🎠 **Swiper** | ^11.1.3 | Carousel/slider do banner principal |
| 🎯 **Lucide React** | ^0.379.0 | Biblioteca de ícones SVG |
| 🔗 **clsx** | ^2.1.1 | Utilitário para classes CSS condicionais |
| 📢 **Google AdSense** | — | Monetização com anúncios |
| 🗺️ **OpenStreetMap Nominatim** | — | API de geocodificação reversa |
| 🚀 **Vercel** | — | Deploy e hospedagem |
| 📦 **PostCSS** | ^8 | Processador CSS |
| 📦 **Autoprefixer** | ^10.4.19 | Prefixos CSS automáticos |
| 🔍 **ESLint** | ^8 | Linter para qualidade de código |

---

## 📁 Estrutura do Projeto

```
connecteco/
│
├── 📄 package.json                    # Dependências e scripts NPM
├── 📄 package-lock.json               # Lock das dependências
├── 📄 next.config.mjs                 # Configuração do Next.js
├── 📄 tailwind.config.js              # Design system (cores, fontes, animações)
├── 📄 postcss.config.js               # Configuração PostCSS + Tailwind
├── 📄 jsconfig.json                   # Alias de importação (@/ → ./src/)
├── 📄 .eslintrc.json                  # Regras de linting (next/core-web-vitals)
├── 📄 .env.local.example              # Template de variáveis de ambiente
├── 📄 .gitignore                      # Arquivos ignorados pelo Git
├── 📄 supabase-schema.sql             # Schema completo do banco de dados
├── 📄 README.md                       # Documentação principal
├── 📄 DOCS.md                         # Documentação técnica adicional
├── 📄 doc.md                          # 📌 Este arquivo
│
├── 📂 public/                         # Assets estáticos
│   ├── 🖼️ BannerOne.png              # Imagem de banner
│   ├── 🖼️ IconLogo.png               # Ícone do logo
│   ├── 🖼️ Property 1=light.png       # Logo variante light
│   ├── 🖼️ logo.svg                   # Logo SVG principal
│   ├── 🖼️ favicon-16x16.png          # Favicon 16px
│   ├── 🖼️ favicon-32x32.png          # Favicon 32px
│   ├── 🖼️ notfound.png               # Imagem da página 404
│   ├── 🖼️ id 2.jpg, id 3.jpg, id 4.jpg  # Imagens dos banners
│   └── 🖼️ image0_0.jpg, image_W18...jpg  # Imagens auxiliares
│
├── 📂 scripts/                        # Scripts de seed/migração
│   ├── 📄 seed-ecopontos.js           # Gera SQL a partir dos dados JS
│   ├── 📄 seed-via-supabase.js        # Seed diretamente via cliente Supabase
│   └── 📂 sql/                        # 27 arquivos batch de INSERT SQL
│       ├── batch_000.sql ... batch_026.sql
│
└── 📂 src/                            # Código-fonte principal
    │
    ├── 📂 app/                        # 📄 Páginas (Next.js App Router)
    │   ├── 📄 layout.js               # Layout raiz (metadata, fonts, SEO)
    │   ├── 📄 globals.css             # Estilos globais + Tailwind + componentes
    │   ├── 📄 favicon.ico             # Favicon
    │   ├── 📂 (home)/
    │   │   └── 📄 page.jsx            # 🏠 Página inicial (ecopontos + filtros)
    │   ├── 📂 about/
    │   │   └── 📄 page.jsx            # 👥 Sobre nós (missão, equipe)
    │   ├── 📂 blog/
    │   │   └── 📄 page.jsx            # 📰 Blog (artigos sobre reciclagem)
    │   ├── 📂 faca-parte/
    │   │   └── 📄 page.jsx            # 📋 Formulário de cadastro
    │   ├── 📂 privacy-policy/
    │   │   └── 📄 page.jsx            # 🔒 Política de privacidade
    │   └── 📄 not-found.jsx           # ❌ Página 404 personalizada
    │
    ├── 📂 components/                 # 🧩 Componentes reutilizáveis
    │   ├── 📂 header/
    │   │   ├── 📄 Header.jsx          # Header sticky com blur no scroll
    │   │   ├── 📄 NavBar.jsx          # Navegação responsiva (desktop/mobile)
    │   │   ├── 📄 NavBarItem.jsx      # Item de menu com indicador ativo
    │   │   ├── 📄 Location.jsx        # Geolocalização + geocoding reverso
    │   │   └── 📄 Logo.jsx            # Componente de logo
    │   ├── 📂 banner/
    │   │   ├── 📄 Banner.jsx          # Carousel Swiper com autoplay
    │   │   ├── 📄 BannerTexts.jsx     # Textos animados e CTA do banner
    │   │   └── 📄 BannerImage.jsx     # Imagem otimizada do banner
    │   ├── 📂 footer/
    │   │   └── 📄 footer.jsx          # Footer com gradiente e links
    │   ├── 📂 ui/
    │   │   └── 📄 AnimatedBlock.jsx   # Componentes de animação reutilizáveis
    │   ├── 📂 ads/
    │   │   └── 📄 GoogleAd.jsx        # Integração Google AdSense
    │   └── 📄 UseWindowWidth.jsx      # Hook customizado de largura da janela
    │
    ├── 📂 constants/                  # 📊 Dados estáticos
    │   ├── 📄 bannerInfo.js           # Configuração dos 5 slides do banner
    │   ├── 📄 materials.js            # 12 tipos de materiais recicláveis
    │   ├── 📄 postBlogContain.js      # 6 artigos do blog (links Medium)
    │   ├── 📄 postIntegrantes.js      # 12 membros da equipe
    │   └── 📄 ecopontos.js            # Backup local de ecopontos
    │
    ├── 📂 context/
    │   └── 📄 UserLocationContext.jsx  # Context API para geolocalização
    │
    ├── 📂 lib/
    │   └── 📄 supabase.js             # Cliente Supabase + funções de acesso
    │
    ├── 📂 utils/
    │   ├── 📄 generateId.js           # Gerador de IDs únicos
    │   ├── 📄 dataset_final.json      # Dataset processado
    │   └── 📄 ecoPontos.json          # Dados de ecopontos em JSON
    │
    ├── 📂 images/                     # Ícones internos
    │   ├── 🖼️ icon-arrow.png, icon-park.png, icon-schedule.png
    │   ├── 🖼️ icon_notcards.png, icon_park_white.png
    │   ├── 🖼️ image_recile.png
    │   └── 🖼️ menu-black.png, menu-white.png
    │
    └── 📂 vendor/
        └── 📄 normalize.css           # Reset CSS (Normalize.css)
```

---

## 📖 Explicação Detalhada de Cada Arquivo/Componente

### 🏗️ Arquivos de Configuração

#### `package.json`
Define o projeto ConnectEco v2.0.0 como privado. Contém 4 scripts NPM (`dev`, `build`, `start`, `lint`) e 8 dependências principais (Next.js, React, Supabase, Framer Motion, Swiper, Lucide, clsx). DevDependencies incluem Tailwind CSS, PostCSS, Autoprefixer e ESLint.

#### `tailwind.config.js`
**Design System completo** com paleta de cores personalizada dividida em 5 escalas:
- **eco** (verde florestal) — cor primária com 10 tons (#F0F7F2 a #0A2418)
- **earth** (marrom terroso) — cor secundária
- **moss** (verde musgo) — cor complementar
- **sky** (azul céu) — cor de acento
- **sand** (areia) — backgrounds

Define 3 famílias tipográficas (DM Sans, Fraunces, JetBrains Mono), 8 animações customizadas (fade-in, slide-up, float, sway, grow...), gradientes temáticos, border-radius orgânicos e box-shadows personalizadas.

#### `next.config.mjs`
Configuração mínima do Next.js — exporta um objeto vazio, utilizando os padrões do framework.

#### `jsconfig.json`
Define o alias `@/*` apontando para `./src/*`, permitindo imports como `@/components/...`.

#### `postcss.config.js`
Configura o PostCSS com plugins Tailwind CSS e Autoprefixer.

#### `.eslintrc.json`
Extends `next/core-web-vitals` para regras de qualidade otimizadas para Next.js.

#### `.env.local.example`
Template com 5 variáveis de ambiente necessárias:
- `NEXT_PUBLIC_SUPABASE_URL` — URL do projeto Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Chave anônima do Supabase
- `NEXT_PUBLIC_ADSENSE_ID` — ID do Google AdSense
- `EMAIL_USER` / `EMAIL_PASS` — Credenciais de email (Nodemailer)
- `NEXT_PUBLIC_GA_ID` — Google Analytics (opcional)

#### `supabase-schema.sql`
Schema completo do banco PostgreSQL com **7 tabelas**:
1. `connecteco_ecopontos` — Pontos de coleta (tabela principal)
2. `connecteco_materials` — Materiais recicláveis
3. `connecteco_team_members` — Membros da equipe
4. `connecteco_blogs` — Posts do blog
5. `connecteco_registrations` — Cadastros do "Faça Parte"
6. `connecteco_analytics` — Eventos de analytics
7. `connecteco_ads_config` — Configuração de anúncios

Inclui índices para performance, **Row Level Security (RLS)** em todas as tabelas, políticas de acesso público para leitura e trigger de atualização automática de timestamps.

---

### 📄 Páginas (App Router)

#### `src/app/layout.js` — Layout Raiz
- Configura a fonte **DM Sans** via `next/font/google` com 6 pesos (300-800)
- Define **metadata SEO** completa: Open Graph, Twitter Cards, robots, JSON-LD Schema.org
- Estrutura o layout com `<Header>`, `<main>` e `<Footer>`
- Envolve tudo com `<UserLocationProvider>` para geolocalização global
- Carrega o script do **Google AdSense** condicionalmente

#### `src/app/(home)/page.jsx` — Página Inicial 🏠
A página principal e mais complexa do projeto. Componente client-side com **estado complexo**:
- **Carregamento de dados:** Busca todos os ecopontos do Supabase via `fetchAllEcopontos()`
- **Sistema de filtros:** Material, estado, cidade e bairro com dependência em cascata
- **Paginação lazy:** Exibe 12 cards por vez com botão "Carregar mais"
- **Seções:** Banner Hero → Estatísticas animadas → Seleção de material → Anúncio → Filtros avançados → Lista de ecopontos
- Usa `useMemo` para filtros derivados e `useCallback` para handlers
- Ícones contextuais via Lucide (MapPin, Clock, Recycle, Leaf, etc.)

#### `src/app/about/page.jsx` — Sobre Nós 👥
- Banner hero compartilhado
- Seção de Missão, Visão e Valores com 3 cards animados
- Grid de membros da equipe (12 pessoas) com efeitos hover elaborados:
  - SVGs de raízes crescendo de baixo
  - Folhas decorativas aparecendo nos cantos
  - Barra de acento gradiente no topo
  - Links para GitHub e LinkedIn
- Seção "Nossa Origem" com texto narrativo

#### `src/app/blog/page.jsx` — Blog 📰
- Filtro por categorias (Todos, Reciclagem, Sustentabilidade, Meio Ambiente)
- Seção de destaques com layout assimétrico (1 grande + 2 pequenos)
- Grid de artigos regulares com cards de imagem + texto
- Links externos para artigos no Medium
- Integração com anúncios (AdInArticle)

#### `src/app/faca-parte/page.jsx` — Faça Parte 📋
Formulário completo para cadastro de novos ecopontos:
- **Informações pessoais:** Nome, email, telefone
- **Informações do ecoponto:** Nome, endereço, cidade, estado
- **Materiais coletados:** 9 checkboxes (Plástico, Papel, Vidro, Metal, etc.)
- **Mensagem adicional:** Campo textarea
- Feedback visual de sucesso após envio
- Cards informativos: Sustentável, Comunidade, Impacto

#### `src/app/privacy-policy/page.jsx` — Política de Privacidade 🔒
- 10 seções com ícones: Introdução, Dados Coletados, Uso de Dados, Segurança, Serviços de Terceiros, Privacidade de Menores, Seus Direitos, Cookies, Alterações, Contato
- Cards com borda lateral verde e animações staggered
- Data de última atualização: Março 2026

#### `src/app/not-found.jsx` — Página 404 ❌
- Layout split com ilustração 404 e conteúdo
- Links sugeridos para navegação (Home, Sobre, Blog, Faça Parte)
- Botão CTA para voltar à página inicial
- Email de contato para reportar erros

#### `src/app/globals.css` — Estilos Globais
- Imports Tailwind (base, components, utilities)
- Google Fonts: DM Sans + Fraunces
- **12 classes utilitárias customizadas:** glass-card, gradient-eco, btn-primary, btn-secondary, eco-card, tag, divider-eco, section-earth, section-eco, organic-blob, grain-overlay, leaf-decoration
- Personalização da scrollbar (verde eco)
- Estilos do Swiper pagination
- Estilos de containers de anúncios

---

### 🧩 Componentes

#### `src/components/header/Header.jsx`
Header **sticky** com efeito de transparência:
- Detecta scroll (>20px) para aplicar blur e sombra
- Logo com ícone Leaf + texto "ConnectEco"
- Navegação desktop inline / mobile com AnimatePresence
- Botão hamburger animado (SVG path morph)
- Componente Location condicional por largura da tela

#### `src/components/header/NavBar.jsx`
Menu de navegação com 3 links (Home, Sobre Nós, Blog) + botão CTA "Faça Parte":
- Animações staggered com Framer Motion
- Layout responsivo (flexbox horizontal desktop / coluna mobile)

#### `src/components/header/NavBarItem.jsx`
Item individual de menu com **indicador ativo animado**:
- Usa `usePathname()` para detectar rota ativa
- Barra inferior com `layoutId` para transição fluida entre páginas

#### `src/components/header/Location.jsx`
Componente de **geolocalização** sofisticado:
- Solicita permissão de localização via Geolocation API
- Geocodificação reversa com OpenStreetMap Nominatim
- Cache em `localStorage` para evitar requisições repetidas
- Mapeamento de nomes de estados para siglas (27 estados)
- AbortController com timeout de 8 segundos
- Estados: loading (spinner), erro (tentar novamente), sucesso (Cidade, UF)

#### `src/components/header/Logo.jsx`
Componente simples que renderiza o logo SVG via `next/image`.

#### `src/components/banner/Banner.jsx`
**Carousel** principal usando Swiper:
- Autoplay a cada 5 segundos com velocidade de transição de 1.5s
- Paginação dinâmica clicável
- Loop infinito
- Cada slide: imagem de fundo + overlays gradientes + textos + curva SVG decorativa

#### `src/components/banner/BannerTexts.jsx`
Textos animados do banner com Framer Motion:
- Badge "ConnectEco" com ícone Leaf
- Título h1, descrição e botão CTA (opcional)
- Animações staggered de entrada pela esquerda

#### `src/components/banner/BannerImage.jsx`
Componente de imagem do banner com `loading="eager"` para otimização LCP.

#### `src/components/footer/footer.jsx`
Footer com **gradiente escuro** (eco-900 → eco-500):
- 4 colunas: Brand, Sobre, Links, Legal
- Links com ícone ArrowUpRight no hover
- Blobs decorativos com blur
- Copyright dinâmico com ícone Heart
- Links sociais (GitHub, Email) com animação de escala

#### `src/components/ui/AnimatedBlock.jsx`
**Biblioteca de animação** reutilizável — o componente mais versátil do projeto:
- **AnimatedBlock:** 7 variantes (fadeIn, slideUp, slideDown, slideLeft, slideRight, scaleIn, rotateIn). Props: delay, once, amount, as (tag HTML)
- **StaggerContainer:** Anima filhos em sequência com delay configurável
- **StaggerItem:** Item com slide-up escalonado
- **HoverCard:** Elevação -8px e sombra ampliada no hover
- **CountUp:** Exibição numérica animada para estatísticas

#### `src/components/ads/GoogleAd.jsx`
Sistema de **monetização com Google AdSense**:
- Componente base `GoogleAd` com suporte a slots e formatos
- 3 variantes pré-configuradas: `AdBanner`, `AdInFeed`, `AdInArticle`
- Placeholder visual em ambiente de desenvolvimento
- Null-safe: não renderiza se `NEXT_PUBLIC_ADSENSE_ID` não estiver definido

#### `src/components/UseWindowWidth.jsx`
Hook customizado que retorna a **largura atual da janela** do navegador. Usado para lógica responsiva em Header e NavBar.

---

### 📊 Dados e Constantes

#### `src/constants/bannerInfo.js`
Array com **5 slides** do banner, cada um com: título, descrição, imagem (Unsplash ou local), dimensões e flag de botão CTA.

#### `src/constants/materials.js`
Array com **12 tipos de materiais** recicláveis: Todos, Plástico, Papel, Cápsulas de café, Borracha, Vidro, Eletrônicos, Medicamentos, Têxtil, Construção civil, Óleo de cozinha, Embalagens de cosméticos.

#### `src/constants/postBlogContain.js`
Array com **6 artigos** do blog, cada um com título, descrição, imagem (Medium/Miro), link externo para o Medium e flag de destaque.

#### `src/constants/postIntegrantes.js`
Array com **12 membros** da equipe, cada um com: nome, cargo, descrição detalhada, links GitHub e LinkedIn.

---

### 🔌 Contexto e Serviços

#### `src/context/UserLocationContext.jsx`
**Context API** para geolocalização global:
- Provê: `userLocation`, `locationError`, `locationLoading`, `requestLocation`
- `requestLocation()` usa `navigator.geolocation.getCurrentPosition()`
- Tratamento de erros: permissão negada, indisponível, timeout
- Configuração: alta precisão desabilitada, timeout 10s, cache de 5 minutos

#### `src/lib/supabase.js`
**Cliente Supabase** com 3 funções:
- `fetchAllEcopontos()` — Busca paginada de todos os ecopontos ativos (1000 por batch)
- `fetchEcopontos(filters)` — Busca com filtros (estado, cidade, bairro, material)
- `submitRegistration(formData)` — Insere cadastro na tabela de registros
- **Null-safe:** se URL/Key não estiverem definidos, retorna arrays vazios ou null

#### `src/utils/generateId.js`
Função utilitária que gera IDs únicos no formato `id-XXXXXXXXX` usando `Math.random().toString(36)`.

---

### 📂 Scripts de Seed

#### `scripts/seed-ecopontos.js`
Gera arquivos SQL em batches de 100 registros a partir de `ecopontos.js`. Cria 27 arquivos na pasta `scripts/sql/`.

#### `scripts/seed-via-supabase.js`
Seed direto via cliente Supabase JS. Lê `ecopontos.js`, transforma os dados e insere em batches de 500 registros.

---

## 🗄️ Banco de Dados (Supabase)

### Tabela Principal: `connecteco_ecopontos`

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | UUID | Chave primária (auto-gerada) |
| `name` / `local` | TEXT | Nome do ecoponto |
| `state` / `estado` | CHAR(2) | Sigla do estado |
| `city` / `cidade` | TEXT | Cidade |
| `neighborhood` / `bairro` | TEXT | Bairro |
| `full_address` / `endereco` | TEXT | Endereço completo |
| `materials` / `tipo_de_material` | TEXT[] | Materiais aceitos |
| `weekday_hours` / `horario_seg_sex` | TEXT | Horário seg-sex |
| `saturday_hours` / `horario_sab_dom` | TEXT | Horário sab-dom |
| `company_type` / `tipo` | TEXT | Tipo (Ecoponto) |
| `latitude` / `longitude` | DOUBLE PRECISION | Coordenadas |
| `telefone` | TEXT | Telefone |
| `website` | TEXT | Website |
| `is_active` | BOOLEAN | Status ativo |
| `created_at` / `updated_at` | TIMESTAMPTZ | Timestamps |

### Segurança (RLS)
- ✅ Row Level Security habilitado em **todas** as 7 tabelas
- 📖 Leitura pública para dados ativos/publicados
- ✏️ Inserção pública para registros e analytics
- 🔒 Sem acesso público a update/delete

---

## 📦 Como Instalar Dependências

### Pré-requisitos
- **Node.js** 18+ instalado
- **npm** ou **yarn** como gerenciador de pacotes
- Conta no **Supabase** (para o banco de dados)

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/dev-erickydias/connecteco.git

# 2. Entre na pasta do projeto
cd connecteco

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com suas credenciais do Supabase e AdSense

# 5. (Opcional) Configure o banco de dados
# Execute o supabase-schema.sql no painel SQL do Supabase
# Execute os scripts de seed para popular os ecopontos
```

---

## 🚀 Como Rodar o Projeto Localmente

### Modo Desenvolvimento
```bash
npm run dev
```
🌐 Acesse: **http://localhost:3000**

O servidor inicia com hot-reload — qualquer alteração no código será refletida automaticamente no navegador.

### Build de Produção
```bash
# Gerar build otimizado
npm run build

# Servir o build localmente
npm start
```

### Lint (Verificação de Código)
```bash
npm run lint
```

---

## 🔑 Variáveis de Ambiente

| Variável | Obrigatória | Descrição |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ Sim | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ Sim | Chave anônima pública do Supabase |
| `NEXT_PUBLIC_ADSENSE_ID` | ❌ Não | Publisher ID do Google AdSense |
| `EMAIL_USER` | ❌ Não | Email para envio via Nodemailer |
| `EMAIL_PASS` | ❌ Não | Senha de app do Gmail |
| `NEXT_PUBLIC_GA_ID` | ❌ Não | ID do Google Analytics |

> ⚠️ **Nota:** Sem as credenciais do Supabase, a aplicação ainda funciona, mas a lista de ecopontos será vazia.

---

## 📋 Como Clonar o Repositório

```bash
git clone https://github.com/dev-erickydias/connecteco.git
```

---

## ⚡ Performance e Boas Práticas

- 📄 **Lazy-loading de ecopontos:** 12 por página com "Carregar mais"
- 🧠 **useMemo** em filtros e listas derivadas para evitar recálculos
- 🧠 **useCallback** em handlers de seleção
- 🖼️ **loading="eager"** na imagem LCP do banner
- 🖼️ **loading="lazy"** em imagens secundárias do blog
- 🔐 **encodeURIComponent** nos parâmetros de geocodificação
- ⏱️ **AbortController** com timeout de 8s na API do Nominatim
- 🛡️ Cliente Supabase **null-safe** (não quebra sem credenciais)
- 🔒 **RLS** (Row Level Security) ativo em todas as tabelas

---

## 👥 Equipe ConnectEco

| Nome | Cargo | GitHub |
|---|---|---|
| Herison | Desenvolvedor Web | [@herisonp](https://github.com/herisonp) |
| Ericky Dias | Desenvolvedor Web | [@dev-erickydias](https://github.com/dev-erickydias) |
| Maikon Corrêa | Desenvolvedor Web | [@MaikonCorrea](https://github.com/MaikonCorrea) |
| Natalia Vessoni | QA | [@navessoni-qa](https://github.com/navessoni-qa) |
| Gabriel Amoroso | Análise de Dados | [@GabrielAmoroso](https://github.com/GabrielAmoroso) |
| Luiz Guilherme | Análise de Dados | [@Luizg39](https://github.com/Luizg39) |
| Angela Ribeiro | QA | [@angelaribeiro84](https://github.com/angelaribeiro84) |
| Felipe Fracasso | QA | [@FelipeM-F](https://github.com/FelipeM-F) |
| Carlos Roberto | QA | [@CarlosRobertoAJ](https://github.com/CarlosRobertoAJ) |
| Ludmilla Lima | QA | [@lwestania](https://github.com/lwestania) |
| Patrícia | Analista de Dados | [@patriciamgcosta](https://github.com/patriciamgcosta) |
| Livia Borges | QA | [@LiviaBorges](https://github.com/LiviaBorges) |

---

> 📌 **Documentação gerada em Abril de 2026** | ConnectEco v2.0.0
