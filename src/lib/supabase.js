import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

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

    if (error) break
    if (!data || data.length === 0) break
    allData.push(...data)
    if (data.length < PAGE_SIZE) break
    from += PAGE_SIZE
  }

  return allData
}

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
  if (error) return []
  return data
}

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

  if (error) return null
  return data?.[0]
}
