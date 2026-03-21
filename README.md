# ConnectEco v2.0

**Plataforma de Sustentabilidade & Reciclagem** | Next.js 14 + Tailwind CSS + Framer Motion + Supabase

ConnectEco conecta cidadaos brasileiros a pontos de coleta de materiais reciclaveis (eco-pontos), promovendo educacao ambiental e praticas sustentaveis atraves da tecnologia.

## Stack Tecnica

- **Frontend:** Next.js 14 (App Router), React 18, Tailwind CSS 3.4, Framer Motion 11
- **Backend:** Supabase (PostgreSQL), Nodemailer
- **Monetizacao:** Google AdSense
- **APIs:** OpenStreetMap Nominatim, Google Maps

## Instalacao

```bash
git clone https://github.com/Connect-Eco/connecteco.git
cd connecteco
npm install
cp .env.local.example .env.local  # Preencha as variaveis
npm run dev
```

Acesse: http://localhost:3000

## Variaveis de Ambiente

| Variavel | Descricao |
|----------|-----------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave publica do Supabase |
| `NEXT_PUBLIC_ADSENSE_ID` | Publisher ID do Google AdSense |
| `EMAIL_USER` | Email para Nodemailer |
| `EMAIL_PASS` | Senha de app do Gmail |

## Funcionalidades

- Busca de eco-pontos com filtros por material, estado, cidade e bairro
- Blog com artigos sobre sustentabilidade, agro e reciclagem
- Animacoes profissionais de blocos com Framer Motion
- Google AdSense integrado para auto-sustentabilidade
- Formulario de cadastro de novos eco-pontos
- Geolocalizacao automatica do usuario
- Dados dinamicos via Supabase

## Banco de Dados (Supabase)

Tabelas ConnectEco:
- `connecteco_team_members` - Perfis dos integrantes
- `connecteco_blogs` - Artigos e posts do blog
- `connecteco_materials` - Materiais reciclaveis
- `connecteco_ecopontos` - Pontos de coleta
- `connecteco_ads_config` - Configuracao de anuncios
- `connecteco_analytics` - Metricas de uso

## Equipe

| Nome | Cargo |
|------|-------|
| Herison | Desenvolvedor Web |
| Ericky Dias | Desenvolvedor Web |
| Maikon Correa | Desenvolvedor Web |
| Natalia Vessoni | QA |
| Gabriel Amoroso | Analista de Dados |
| Luiz Guilherme | Analista de Dados |
| Angela Ribeiro | QA |
| Felipe Fracasso | QA |
| Carlos Roberto | QA |
| Ludmilla Lima | QA |
| Patricia | Analista de Dados |
| Livia Borges | QA |

## Licenca

Projeto academico desenvolvido pela equipe ConnectEco.
