-- ============================================
-- ConnectEco - Supabase Database Schema
-- Project: erimon (connecteco)
-- ============================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. Ecopontos (Collection Points)
-- ============================================
CREATE TABLE IF NOT EXISTS connecteco_ecopontos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  local TEXT NOT NULL,
  endereco TEXT,
  bairro TEXT,
  cidade TEXT NOT NULL,
  estado CHAR(2) NOT NULL,
  estado_nome TEXT,
  tipo_de_material TEXT,
  horario_seg_sex TEXT,
  horario_sab_dom TEXT,
  tipo TEXT DEFAULT 'Ecoponto',
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  telefone TEXT,
  website TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for fast filtering
CREATE INDEX IF NOT EXISTS idx_ecopontos_estado ON connecteco_ecopontos(estado);
CREATE INDEX IF NOT EXISTS idx_ecopontos_cidade ON connecteco_ecopontos(cidade);
CREATE INDEX IF NOT EXISTS idx_ecopontos_bairro ON connecteco_ecopontos(bairro);
CREATE INDEX IF NOT EXISTS idx_ecopontos_active ON connecteco_ecopontos(is_active);
CREATE INDEX IF NOT EXISTS idx_ecopontos_material ON connecteco_ecopontos USING gin(to_tsvector('portuguese', tipo_de_material));

-- ============================================
-- 2. Materials
-- ============================================
CREATE TABLE IF NOT EXISTS connecteco_materials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  color TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 3. Team Members
-- ============================================
CREATE TABLE IF NOT EXISTS connecteco_team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  cargo TEXT,
  descricao TEXT,
  imagem TEXT,
  link_github TEXT,
  link_linkedin TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 4. Blog Posts
-- ============================================
CREATE TABLE IF NOT EXISTS connecteco_blogs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  titulo TEXT NOT NULL,
  descricao TEXT,
  conteudo TEXT,
  imagem TEXT,
  link TEXT,
  categoria TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  author TEXT,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blogs_category ON connecteco_blogs(categoria);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON connecteco_blogs(is_published);
CREATE INDEX IF NOT EXISTS idx_blogs_featured ON connecteco_blogs(is_featured);

-- ============================================
-- 5. Registrations (Faca Parte)
-- ============================================
CREATE TABLE IF NOT EXISTS connecteco_registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  ecoponto_name TEXT,
  address TEXT,
  city TEXT,
  state CHAR(2),
  materials TEXT[],
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_registrations_status ON connecteco_registrations(status);

-- ============================================
-- 6. Analytics
-- ============================================
CREATE TABLE IF NOT EXISTS connecteco_analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type TEXT NOT NULL,
  page TEXT,
  metadata JSONB DEFAULT '{}',
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_analytics_event ON connecteco_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_date ON connecteco_analytics(created_at);

-- ============================================
-- 7. Ads Configuration
-- ============================================
CREATE TABLE IF NOT EXISTS connecteco_ads_config (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page TEXT NOT NULL DEFAULT 'all',
  position TEXT NOT NULL,
  ad_slot TEXT,
  ad_format TEXT DEFAULT 'auto',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Row Level Security (RLS) Policies
-- ============================================

-- Enable RLS on all tables
ALTER TABLE connecteco_ecopontos ENABLE ROW LEVEL SECURITY;
ALTER TABLE connecteco_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE connecteco_team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE connecteco_blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE connecteco_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE connecteco_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE connecteco_ads_config ENABLE ROW LEVEL SECURITY;

-- Public read access for public-facing data
CREATE POLICY "Public read ecopontos" ON connecteco_ecopontos
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public read materials" ON connecteco_materials
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public read team" ON connecteco_team_members
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public read blogs" ON connecteco_blogs
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public read ads config" ON connecteco_ads_config
  FOR SELECT USING (is_active = true);

-- Public insert for registrations and analytics (anonymous users can submit)
CREATE POLICY "Public insert registrations" ON connecteco_registrations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public insert analytics" ON connecteco_analytics
  FOR INSERT WITH CHECK (true);

-- ============================================
-- Seed Materials
-- ============================================
INSERT INTO connecteco_materials (name, sort_order) VALUES
  ('Plastico', 1),
  ('Papel', 2),
  ('Capsulas de cafe', 3),
  ('Borracha', 4),
  ('Vidro', 5),
  ('Eletronicos', 6),
  ('Medicamentos', 7),
  ('Textil', 8),
  ('Construcao civil', 9),
  ('Oleo de cozinha', 10),
  ('Embalagens de cosmeticos', 11)
ON CONFLICT (name) DO NOTHING;

-- ============================================
-- Updated At Trigger
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER ecopontos_updated_at
  BEFORE UPDATE ON connecteco_ecopontos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER blogs_updated_at
  BEFORE UPDATE ON connecteco_blogs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
