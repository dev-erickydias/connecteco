import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Using fallback mode.')
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// ===== Team Members =====
export async function fetchTeamMembers() {
  if (!supabase) return []

  const { data, error } = await supabase
    .from('connecteco_team_members')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('Erro ao buscar integrantes:', error)
    return []
  }
  return data
}

// ===== Blog Posts =====
export async function fetchBlogs(category = null, limit = 20) {
  if (!supabase) return []

  let query = supabase
    .from('connecteco_blogs')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query

  if (error) {
    console.error('Erro ao buscar blogs:', error)
    return []
  }
  return data
}

export async function fetchFeaturedBlogs() {
  if (!supabase) return []

  const { data, error } = await supabase
    .from('connecteco_blogs')
    .select('*')
    .eq('is_featured', true)
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Erro ao buscar blogs destacados:', error)
    return []
  }
  return data
}

// ===== Materials =====
export async function fetchMaterials() {
  if (!supabase) return []

  const { data, error } = await supabase
    .from('connecteco_materials')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('Erro ao buscar materiais:', error)
    return []
  }
  return data
}

// ===== Ecopontos =====
export async function fetchEcopontos(filters = {}) {
  if (!supabase) return []

  let query = supabase
    .from('connecteco_ecopontos')
    .select('*')
    .eq('is_active', true)

  if (filters.state) query = query.eq('state', filters.state)
  if (filters.city) query = query.eq('city', filters.city)
  if (filters.neighborhood) query = query.eq('neighborhood', filters.neighborhood)
  if (filters.material) query = query.contains('materials', [filters.material])

  query = query.order('state', { ascending: true })
    .order('city', { ascending: true })

  const { data, error } = await query

  if (error) {
    console.error('Erro ao buscar ecopontos:', error)
    return []
  }
  return data
}

export async function fetchAllEcopontos() {
  if (!supabase) return []

  const allData = []
  const PAGE_SIZE = 1000
  let from = 0

  while (true) {
    const { data, error } = await supabase
      .from('connecteco_ecopontos')
      .select('*')
      .eq('is_active', true)
      .order('state', { ascending: true })
      .order('city', { ascending: true })
      .range(from, from + PAGE_SIZE - 1)

    if (error) {
      console.error('Erro ao buscar ecopontos:', error)
      break
    }

    if (!data || data.length === 0) break
    allData.push(...data)

    if (data.length < PAGE_SIZE) break
    from += PAGE_SIZE
  }

  return allData
}

export async function insertEcoponto(ecoponto) {
  if (!supabase) return null

  const { data, error } = await supabase
    .from('connecteco_ecopontos')
    .insert({
      local: ecoponto.local,
      endereco: ecoponto.endereco,
      bairro: ecoponto.bairro,
      cidade: ecoponto.cidade,
      estado: ecoponto.estado,
      estado_nome: ecoponto.estado_nome,
      tipo_de_material: ecoponto.tipo_de_material,
      horario_seg_sex: ecoponto.horario_seg_sex,
      horario_sab_dom: ecoponto.horario_sab_dom,
      tipo: ecoponto.tipo,
      is_active: true,
    })
    .select()

  if (error) {
    console.error('Erro ao inserir ecoponto:', error)
    return null
  }
  return data?.[0]
}

// ===== Analytics =====
export async function trackAnalytics(eventType, page, metadata = {}) {
  if (!supabase) return

  await supabase
    .from('connecteco_analytics')
    .insert({ event_type: eventType, page, metadata })
}

// ===== Ads Config =====
export async function fetchAdsConfig(page = 'all') {
  if (!supabase) return []

  const { data, error } = await supabase
    .from('connecteco_ads_config')
    .select('*')
    .eq('is_active', true)
    .or(`page.eq.${page},page.eq.all`)

  if (error) {
    console.error('Erro ao buscar config ads:', error)
    return []
  }
  return data
}

// ===== Registration (Faca Parte) =====
export async function submitRegistration(formData) {
  if (!supabase) return null

  const { data, error } = await supabase
    .from('connecteco_registrations')
    .insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      ecoponto_name: formData.ecoponto_name,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      materials: formData.materials,
      message: formData.message,
      status: 'pending',
    })
    .select()

  if (error) {
    console.error('Erro ao enviar registro:', error)
    return null
  }
  return data?.[0]
}
