<div align="center">

# 🌿 ConnectEco

### 🌍 Plataforma de Sustentabilidade e Reciclagem no Brasil

<br />

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br />

**ConnectEco** conecta cidadãos brasileiros a pontos de coleta de materiais recicláveis (ecopontos), promovendo educação ambiental e práticas sustentáveis através da tecnologia.

🌐 [connecteco.com.br](https://connecteco.com.br)

<br />

</div>

---

## 📸 Screenshots

<div align="center">

| 🏠 Página Inicial | 🔍 Filtros de Ecopontos |
|---|---|
| ![Home](https://via.placeholder.com/400x250/1E7A4B/FFFFFF?text=Pagina+Inicial) | ![Filtros](https://via.placeholder.com/400x250/134A2E/FFFFFF?text=Filtros+Ecopontos) |

| 👥 Sobre Nós | 📰 Blog |
|---|---|
| ![Sobre](https://via.placeholder.com/400x250/3EA76A/FFFFFF?text=Sobre+Nos) | ![Blog](https://via.placeholder.com/400x250/5C8F38/FFFFFF?text=Blog) |

> 💡 *Substitua os placeholders acima por screenshots reais do projeto!*

</div>

---

## ✨ Funcionalidades

🗺️ **Busca de Ecopontos** — Encontre mais de **2.786 pontos de reciclagem** em todo o Brasil

🔍 **Filtros Inteligentes** — Filtre por material, estado, cidade e bairro com cascata automática

📍 **Geolocalização** — Detecta sua localização automaticamente e exibe cidade/estado

📰 **Blog Sustentável** — Artigos sobre reciclagem, sustentabilidade e meio ambiente

📋 **Faça Parte** — Formulário para cadastrar novos pontos de coleta

👥 **Time ConnectEco** — Conheça os 12 membros da equipe com perfis detalhados

🎬 **Animações Fluidas** — Transições e efeitos suaves com Framer Motion

📱 **100% Responsivo** — Layout adaptável para desktop, tablet e mobile

📢 **Google AdSense** — Monetização integrada para auto-sustentabilidade do projeto

🔒 **Política de Privacidade** — Página completa sobre uso e proteção de dados

---

## 🛠️ Tecnologias

<div align="center">

| Tecnologia | Descrição |
|---|---|
| ⚛️ **Next.js 14** | Framework React com App Router |
| ⚛️ **React 18** | Biblioteca de interface com Hooks |
| 🎨 **Tailwind CSS 3.4** | Framework CSS utilitário com design system customizado |
| 🎬 **Framer Motion 11** | Animações declarativas e fluidas |
| 🗄️ **Supabase** | Backend PostgreSQL (banco de dados) |
| 🎠 **Swiper 11** | Carousel do banner principal |
| 🎯 **Lucide React** | Biblioteca de ícones SVG |
| 🗺️ **OpenStreetMap** | API de geocodificação reversa |
| 📢 **Google AdSense** | Monetização com anúncios |
| 🚀 **Vercel** | Deploy e hospedagem |

</div>

---

## 🚀 Como Usar

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Conta no [Supabase](https://supabase.com/) (para o banco de dados)

### 📥 Clonando o Repositório

```bash
git clone https://github.com/dev-erickydias/connecteco.git
```

### ⚙️ Instalação

```bash
# Entre na pasta do projeto
cd connecteco

# Instale as dependências
npm install
```

### 🔑 Configuração das Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.local.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_aqui
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXX  # Opcional
```

### ▶️ Rodando o Projeto

```bash
# Modo desenvolvimento (com hot-reload)
npm run dev
```

🌐 Acesse: **http://localhost:3000**

### 🏗️ Build de Produção

```bash
# Gerar build otimizado
npm run build

# Servir localmente
npm start
```

---

## 📁 Estrutura do Projeto

```
connecteco/
├── 📂 public/                # Assets estáticos (imagens, favicon)
├── 📂 scripts/               # Scripts de seed do banco de dados
├── 📂 src/
│   ├── 📂 app/               # Páginas (Next.js App Router)
│   │   ├── (home)/           # 🏠 Página inicial
│   │   ├── about/            # 👥 Sobre nós
│   │   ├── blog/             # 📰 Blog
│   │   ├── faca-parte/       # 📋 Formulário de cadastro
│   │   ├── privacy-policy/   # 🔒 Política de privacidade
│   │   ├── layout.js         # Layout raiz (SEO, fonts)
│   │   └── globals.css       # Estilos globais
│   ├── 📂 components/        # Componentes reutilizáveis
│   │   ├── header/           # Header, NavBar, Location
│   │   ├── banner/           # Carousel Swiper
│   │   ├── footer/           # Footer
│   │   ├── ui/               # AnimatedBlock, HoverCard
│   │   └── ads/              # Google AdSense
│   ├── 📂 constants/         # Dados estáticos
│   ├── 📂 context/           # Context API (geolocalização)
│   ├── 📂 lib/               # Cliente Supabase
│   └── 📂 utils/             # Funções utilitárias
├── 📄 tailwind.config.js     # Design system customizado
├── 📄 supabase-schema.sql    # Schema do banco de dados
└── 📄 package.json           # Dependências e scripts
```

---

## 🗄️ Banco de Dados

O projeto utiliza **Supabase** (PostgreSQL) com as seguintes tabelas:

| Tabela | Descrição | Registros |
|---|---|---|
| `connecteco_ecopontos` | Pontos de coleta de reciclagem | 2.786+ |
| `connecteco_materials` | Tipos de materiais recicláveis | 11 |
| `connecteco_team_members` | Membros da equipe | 12 |
| `connecteco_blogs` | Posts do blog | 6+ |
| `connecteco_registrations` | Cadastros do "Faça Parte" | — |
| `connecteco_analytics` | Eventos de analytics | — |
| `connecteco_ads_config` | Configuração de anúncios | — |

> 🔒 Todas as tabelas possuem **Row Level Security (RLS)** habilitado.

---

## 👥 Equipe ConnectEco

<div align="center">

| 👤 Nome | 💼 Cargo |
|---|---|
| Herison | Desenvolvedor Web |
| **Ericky Dias** | **Desenvolvedor Web** |
| Maikon Corrêa | Desenvolvedor Web |
| Natalia Vessoni | QA |
| Gabriel Amoroso | Análise de Dados |
| Luiz Guilherme | Análise de Dados |
| Angela Ribeiro | QA |
| Felipe Fracasso | QA |
| Carlos Roberto | QA |
| Ludmilla Lima | QA |
| Patrícia | Analista de Dados |
| Livia Borges | QA |

</div>

---

## 👨‍💻 Autor

<div align="center">

**Ericky Dias**

[![GitHub](https://img.shields.io/badge/GitHub-dev--erickydias-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev-erickydias)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-erickydias-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/erickydias/)

</div>

---

## 📄 Licença

Projeto acadêmico desenvolvido pela equipe **ConnectEco**.

---

<div align="center">

🌿 *Feito com 💚 para o planeta* 🌍

**ConnectEco** v2.0.0

</div>
