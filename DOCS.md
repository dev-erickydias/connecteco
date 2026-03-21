# ConnectEco - Documentacao do Projeto

## Apresentacao

O **ConnectEco** e uma plataforma web ecologica que conecta pessoas a pontos de reciclagem (ecopontos) em todo o Brasil. Com mais de **2.786 ecopontos** cadastrados, o site permite que usuarios encontrem locais de coleta seletiva proximos, filtrem por tipo de material e estado/cidade, e se engajem com a comunidade sustentavel.

**URL de producao:** [connecteco.com.br](https://connecteco.com.br)

---

## Funcionalidades Principais

### Busca de Ecopontos
- Listagem de 2.786+ pontos de reciclagem com paginacao lazy-loading (12 por pagina)
- Filtros por **estado**, **cidade**, **bairro** e **tipo de material**
- Cards com informacoes de endereco, materiais aceitos e horarios de funcionamento

### Geolocalizacao
- Botao "Obter Localizacao" que detecta a posicao do usuario via API de geolocalizacao do navegador
- Geocodificacao reversa usando OpenStreetMap/Nominatim para exibir cidade e estado
- Cache local via localStorage para evitar requisicoes repetidas

### Blog
- Artigos sobre reciclagem e sustentabilidade com links para o Medium
- Filtro por categorias e secao de destaques

### Faca Parte
- Formulario de cadastro para novos pontos de coleta
- Selecao de materiais coletados (plastico, papel, vidro, metal, etc.)
- Integracao com banco de dados Supabase

### Sobre Nos
- Apresentacao da missao, visao e valores do projeto
- Cards da equipe com efeitos animados de raizes e folhas no hover
- Links para GitHub e LinkedIn dos integrantes

---

## Arquitetura e Tecnologias

| Tecnologia | Uso | Versao |
|---|---|---|
| **Next.js 14** | Framework React com App Router | 14.2.3 |
| **React 18** | Biblioteca de UI com hooks | 18.x |
| **Tailwind CSS** | Sistema de design utilitario com tokens customizados | 3.4.1 |
| **Framer Motion** | Animacoes e transicoes fluidas | 11.3.0 |
| **Supabase** | Banco de dados PostgreSQL (backend-as-a-service) | 2.45.0 |
| **Swiper** | Carousel do banner principal | 11.1.3 |
| **Lucide React** | Biblioteca de icones SVG | 0.379.0 |
| **Google AdSense** | Monetizacao com anuncios | - |
| **Vercel** | Deploy e hospedagem | - |

---

## Estrutura de Pastas

```
connecteco/
├── src/
│   ├── app/                          # Paginas (Next.js App Router)
│   │   ├── (home)/page.jsx          # Pagina inicial com ecopontos
│   │   ├── about/page.jsx           # Sobre nos
│   │   ├── blog/page.jsx            # Blog
│   │   ├── faca-parte/page.jsx      # Formulario de cadastro
│   │   ├── privacy-policy/page.jsx  # Politica de privacidade
│   │   ├── not-found.jsx            # Pagina 404
│   │   ├── layout.js                # Layout raiz (metadata, fonts)
│   │   └── globals.css              # Estilos globais + Tailwind
│   │
│   ├── components/                   # Componentes reutilizaveis
│   │   ├── header/
│   │   │   ├── Header.jsx           # Header sticky com blur no scroll
│   │   │   ├── NavBar.jsx           # Menu de navegacao responsivo
│   │   │   ├── NavBarItem.jsx       # Item individual do menu
│   │   │   ├── Location.jsx         # Geolocalizacao + geocoding reverso
│   │   │   └── Logo.jsx             # Logo ConnectEco
│   │   ├── banner/
│   │   │   ├── Banner.jsx           # Carousel Swiper com wave SVG
│   │   │   ├── BannerTexts.jsx      # Textos e CTA do banner
│   │   │   └── BannerImage.jsx      # Imagens do banner (LCP otimizado)
│   │   ├── footer/
│   │   │   └── footer.jsx           # Footer com gradiente e blobs decorativos
│   │   ├── ui/
│   │   │   └── AnimatedBlock.jsx    # Componentes de animacao reutilizaveis
│   │   ├── ads/
│   │   │   └── GoogleAd.jsx         # Integracao Google AdSense
│   │   └── UseWindowWidth.jsx       # Hook para largura da janela
│   │
│   ├── constants/                    # Dados estaticos
│   │   ├── materials.js             # 14 tipos de materiais
│   │   ├── bannerInfo.js            # Dados dos slides do banner
│   │   ├── postBlogContain.js       # Dados dos posts do blog
│   │   ├── postIntegrantes.js       # Dados da equipe (11 membros)
│   │   └── ecopontos.js             # Dados de ecopontos (backup local)
│   │
│   ├── context/
│   │   └── UserLocationContext.jsx  # Context API para geolocalizacao
│   │
│   ├── lib/
│   │   └── supabase.js              # Cliente Supabase + funcoes de acesso
│   │
│   └── utils/
│       └── generateId.js            # Gerador de IDs unicos reutilizavel
│
├── public/                           # Assets estaticos (imagens do banner)
├── scripts/                          # Scripts de seed do banco de dados
├── tailwind.config.js               # Configuracao de design tokens
├── next.config.js                   # Configuracao do Next.js
└── package.json                     # Dependencias e scripts
```

---

## Design System

### Filosofia de Design

O design segue uma estetica **organica e ecologica**, inspirada na natureza, com formas suaves, cores terrosas e verdes florestais. O objetivo e transmitir sustentabilidade e conexao com o meio ambiente, evitando a estetica generica de templates.

### Tipografia

| Fonte | Uso | Tipo |
|---|---|---|
| **DM Sans** | Corpo do texto, paragrafos, botoes, labels | Sans-serif moderna (Google Fonts) |
| **Fraunces** | Titulos (h1-h6), numeros em destaque, nomes de secao | Serif display elegante (Google Fonts) |

A combinacao DM Sans + Fraunces cria um contraste entre modernidade e sofisticacao que reforca a identidade visual ecologica do projeto.

### Paleta de Cores

#### Eco (Verde Florestal) - Cor Principal
| Token | Hex | Uso |
|---|---|---|
| `eco-50` | `#F0F7F2` | Backgrounds claros, hover states |
| `eco-100` | `#D6EDDA` | Bordas, badges |
| `eco-200` | `#B0DDB8` | Bordas ativas |
| `eco-300` | `#7DC88A` | Acentos secundarios |
| `eco-400` | `#4BAF5C` | Icones decorativos |
| `eco-500` | `#1E7A4B` | **Cor primaria** - botoes, links, destaques |
| `eco-600` | `#18643D` | Hover de botoes |
| `eco-700` | `#134A2E` | Textos sobre fundos claros |
| `eco-800` | `#0F3A24` | Titulos |
| `eco-900` | `#0A2418` | Textos escuros, gradientes profundos |

#### Earth (Marrom Terroso) - Cor Secundaria
| Token | Hex | Uso |
|---|---|---|
| `earth-50` | `#FAF6F0` | Background de secoes alternadas |
| `earth-100` | `#F5EDDE` | Cards secundarios, scrollbar track |
| `earth-200` | `#E8D8C0` | Bordas |
| `earth-500` | `#9B7B4A` | Textos de destaque |

#### Moss (Musgo) - Cor Complementar
| Token | Hex | Uso |
|---|---|---|
| `moss-100` | `#E2F0E4` | Backgrounds de icones |
| `moss-500` | `#5A9E64` | Gradientes com eco, divisores |

#### Sky (Ceu) - Cor de Acento
| Token | Hex | Uso |
|---|---|---|
| `sky-100` | `#E0F2FE` | Backgrounds de icones informativos |
| `sky-600` | `#0284C7` | Icones de informacao |

#### Sand (Areia) - Background
| Token | Hex | Uso |
|---|---|---|
| `sand-50` | `#FDFCF8` | **Background principal do body** |

### Decisoes de Cor Chave
- **Background do corpo:** `#FDFCF8` (areia claro, quente - nao e branco puro)
- **Cor de texto principal:** `#2C441A` (verde muito escuro, suave)
- **Selecao de texto:** fundo `#1E7A4B`, texto `#F0F7F2`
- **Scrollbar:** trilho `#F5EDDE`, thumb `#1E7A4B`

### Componentes CSS Customizados

| Classe | Descricao |
|---|---|
| `.glass-card` | Card com efeito vidro (backdrop-blur, borda translucida) |
| `.gradient-eco` | Gradiente verde principal (eco-500 → eco-700) |
| `.gradient-footer` | Gradiente escuro para footer |
| `.text-gradient-eco` | Texto com gradiente verde → musgo |
| `.btn-primary` | Botao com gradiente, sombra e elevacao no hover |
| `.btn-secondary` | Botao com borda que inverte cores no hover |
| `.eco-card` | Card padrao com sombra suave e elevacao animada |
| `.divider-eco` | Barra horizontal com gradiente (separador de secoes) |
| `.section-earth` | Secao com fundo terroso e pattern SVG de circulos |
| `.section-eco` | Secao com fundo verde e pattern SVG de folhas |
| `.organic-blob` | Forma organica irregular (border-radius assimetrico) |
| `.grain-overlay` | Textura de ruido sutil sobre secoes |
| `.leaf-decoration` | Decoracao com gradiente radial em forma de folha |

### Sistema de Animacoes

Os componentes de animacao vivem em `src/components/ui/AnimatedBlock.jsx`:

| Componente | Descricao |
|---|---|
| **AnimatedBlock** | Wrapper generico com 7 variantes de entrada (fadeIn, slideUp, slideDown, slideLeft, slideRight, scaleIn, rotateIn) |
| **StaggerContainer** | Container que anima filhos em sequencia com delay configuravel |
| **StaggerItem** | Item filho que aparece com slide-up escalonado |
| **HoverCard** | Card com elevacao (-8px) e sombra ampliada no hover |
| **CountUp** | Contador animado para exibicao de estatisticas |

---

## Banco de Dados (Supabase)

### Projeto: `erimon` (ID: `fwttbxyhxxbntynwjsdp`)

### Tabela Principal: `connecteco_ecopontos` (2.786 registros)

| Coluna | Tipo | Descricao |
|---|---|---|
| `id` | uuid | Chave primaria |
| `name` | text | Nome do ecoponto |
| `state` | text | Sigla do estado (SP, RJ...) |
| `city` | text | Nome da cidade |
| `neighborhood` | text | Bairro |
| `full_address` | text | Endereco completo |
| `materials` | text[] | Array de materiais aceitos |
| `weekday_hours` | text | Horario segunda a sexta |
| `saturday_hours` | text | Horario sabado |
| `company_type` | text | Tipo de empresa |
| `is_active` | boolean | Status ativo |
| `created_at` | timestamptz | Data de criacao |

### Outras Tabelas
- `connecteco_registrations` - Cadastros do formulario "Faca Parte"
- `connecteco_materials` - Materiais de reciclagem (seed data)
- `connecteco_team_members` - Membros da equipe
- `connecteco_blogs` - Posts do blog
- `connecteco_analytics` - Eventos de analytics
- `connecteco_ads_config` - Configuracao de anuncios

### Seguranca
- **Row Level Security (RLS)** habilitado em todas as tabelas
- Politicas de leitura publica para tabelas de consulta
- Politicas restritas para insercao/atualizacao
- Cliente Supabase null-safe (retorna arrays vazios se credenciais ausentes)

---

## Funcoes do Supabase Client (`src/lib/supabase.js`)

| Funcao | Descricao | Usada em |
|---|---|---|
| `fetchAllEcopontos()` | Busca todos os ecopontos com paginacao server-side (1000/batch) | Home page |
| `fetchEcopontos(filters)` | Busca ecopontos com filtros (estado, cidade, bairro, material) | Disponivel para uso futuro |
| `submitRegistration(formData)` | Envia cadastro de novo ecoponto | Faca Parte page |

---

## Variaveis de Ambiente

```env
NEXT_PUBLIC_SUPABASE_URL=https://fwttbxyhxxbntynwjsdp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXX (opcional)
```

---

## Como Usar

### Desenvolvimento Local

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor em http://localhost:3000
```

### Build de Producao

```bash
npm run build      # Gerar build otimizado
npm start          # Servir build local
```

### Deploy (Vercel)

O projeto esta configurado para deploy automatico no Vercel. Cada push para `main` dispara um novo deploy. As variaveis de ambiente devem estar configuradas no painel do Vercel.

---

## Performance e Seguranca

### Performance
- Lazy-loading de ecopontos (12 por pagina)
- `useMemo` em filtros e listas derivadas
- `useCallback` em handlers de selecao
- `loading="eager"` na imagem LCP do banner
- `loading="lazy"` em imagens secundarias

### Seguranca
- `encodeURIComponent` nos parametros de geocodificacao
- `AbortController` com timeout de 8s na API do Nominatim
- Cliente Supabase null-safe (nao quebra sem credenciais)
- Sem chaves de API hardcoded no codigo
- RLS ativo em todas as tabelas do banco

---

## Equipe

| Nome | Cargo |
|---|---|
| Herison | Desenvolvedor Web |
| Ericky Dias | Desenvolvedor Web |
| Maikon Correa | Desenvolvedor Web |
| Natalia Vessoni | QA |
| Gabriel Amoroso | Analise de Dados |
| Luiz Guilherme | Analise de Dados |
| Angela Ribeiro | QA |
| Felipe Fracasso | QA |
| Carlos Roberto | QA |
| Ludmilla Lima | QA |
| Patricia | Analista de Dados |
| Livia Borges | QA |

---

**Ultima atualizacao:** Marco 2026
**Versao:** 2.0.0
