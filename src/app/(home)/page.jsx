'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import AnimatedBlock, { StaggerContainer, StaggerItem, CountUp } from '../../components/ui/AnimatedBlock'
import { AdInFeed } from '../../components/ads/GoogleAd'
import { HoverCard } from '../../components/ui/AnimatedBlock'
import EcopontoCard from '../../components/ui/EcopontoCard'
import materials from '../../constants/materials'
import { fetchAllEcopontos } from '../../lib/supabase'
import { MapPin, Clock, Recycle, Package, Filter, Search, TreePine, Users, BookOpen, Leaf, Loader2 } from 'lucide-react'

// PlantHero is heavy (Three.js) — load only on the client to keep
// SSR HTML small and skip the WebGL bundle on first paint.
const PlantHero = dynamic(() => import('../../components/hero/PlantHero'), {
  ssr: false,
  loading: () => (
    <div
      className="w-full"
      role="status"
      aria-busy="true"
      aria-label="Carregando hero"
      style={{
        minHeight: '100svh',
        background:
          'radial-gradient(ellipse at top, #1C3429 0%, #0B1F17 70%)',
      }}
    />
  ),
})

const ITEMS_PER_PAGE = 12

export default function Home() {
  const [ecopontos, setEcopontos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedMaterial, setSelectedMaterial] = useState('Todos')
  const [selectedEstado, setSelectedEstado] = useState('')
  const [selectedCidade, setSelectedCidade] = useState('')
  const [selectedBairro, setSelectedBairro] = useState('')
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  useEffect(() => {
    async function loadEcopontos() {
      try {
        const data = await fetchAllEcopontos()
        setEcopontos(data)
      } catch (err) {
        console.error('Erro ao carregar ecopontos:', err)
      } finally {
        setLoading(false)
      }
    }
    loadEcopontos()
  }, [])

  const filteredEcoPontos = useMemo(() => {
    return ecopontos.filter((ep) => {
      const materialMatch =
        selectedMaterial === 'Todos' ||
        (ep.materials && ep.materials.some(m => m.toLowerCase().includes(selectedMaterial.toLowerCase())))
      const estadoMatch = !selectedEstado || ep.state === selectedEstado
      const cidadeMatch = !selectedCidade || ep.city === selectedCidade
      const bairroMatch = !selectedBairro || ep.neighborhood === selectedBairro
      return materialMatch && estadoMatch && cidadeMatch && bairroMatch
    })
  }, [ecopontos, selectedMaterial, selectedEstado, selectedCidade, selectedBairro])

  const visibleEcoPontos = useMemo(
    () => filteredEcoPontos.slice(0, visibleCount),
    [filteredEcoPontos, visibleCount]
  )

  const estados = useMemo(
    () => [...new Set(ecopontos.map((e) => e.state))].filter(Boolean).sort(),
    [ecopontos]
  )
  const cidades = useMemo(
    () =>
      selectedEstado
        ? [...new Set(ecopontos.filter((e) => e.state === selectedEstado).map((e) => e.city))].filter(Boolean).sort()
        : [],
    [ecopontos, selectedEstado]
  )
  const bairros = useMemo(
    () =>
      selectedCidade
        ? [...new Set(ecopontos.filter((e) => e.state === selectedEstado && e.city === selectedCidade).map((e) => e.neighborhood))].filter(Boolean).sort()
        : [],
    [ecopontos, selectedEstado, selectedCidade]
  )

  const handleMaterialSelect = useCallback((material) => {
    setSelectedMaterial(material)
    setSelectedEstado('')
    setSelectedCidade('')
    setSelectedBairro('')
    setVisibleCount(ITEMS_PER_PAGE)
  }, [])

  return (
    <>
      {/* v3 Hero — cinematic dark forest with 3D plant scene */}
      <PlantHero />

      {/* Anchor for "Buscar ecopontos" CTA */}
      <span id="ecopontos" aria-hidden="true" />

      {/* Stats Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eco-50 via-white to-earth-50" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-eco-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-moss-200/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-6xl mx-auto px-4">
          <AnimatedBlock variant="slideUp" className="text-center mb-14">
            <p className="text-eco-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Nosso Impacto
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-eco-900 mb-4">
              Numeros que Inspiram
            </h2>
            <div className="divider-eco" />
          </AnimatedBlock>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: ecopontos.length || 2786, suffix: '+', label: 'Ecopontos', icon: TreePine, color: 'eco' },
              { value: 14, label: 'Materiais', icon: Recycle, color: 'moss' },
              { value: 11, label: 'Integrantes', icon: Users, color: 'earth' },
              { value: 6, suffix: '+', label: 'Artigos', icon: BookOpen, color: 'sky' },
            ].map((stat, idx) => (
              <StaggerItem key={idx}>
                <div className="eco-card p-8 text-center group">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-transform group-hover:scale-110 ${
                    stat.color === 'eco' ? 'bg-eco-100 text-eco-600' :
                    stat.color === 'moss' ? 'bg-moss-100 text-moss-600' :
                    stat.color === 'earth' ? 'bg-earth-100 text-earth-600' :
                    'bg-sky-100 text-sky-600'
                  }`}>
                    <stat.icon size={24} />
                  </div>
                  <div className="font-display text-4xl md:text-5xl font-bold text-eco-800 mb-1">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-eco-600/70 font-medium text-sm">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Materials Selection */}
      <section className="py-20 md:py-28 section-earth relative">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedBlock variant="slideUp" className="text-center mb-12">
            <p className="text-eco-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Filtre por Tipo
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-eco-900 mb-4">
              Selecione o Material
            </h2>
            <div className="divider-eco" />
          </AnimatedBlock>

          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {materials.map((material, idx) => (
              <StaggerItem key={idx}>
                <button
                  onClick={() => handleMaterialSelect(material)}
                  className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    selectedMaterial === material
                      ? 'gradient-eco text-white shadow-eco-lg scale-105'
                      : 'bg-white text-eco-700 border border-eco-100 hover:border-eco-300 hover:shadow-soft'
                  }`}
                >
                  {material}
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Ad */}
      <div className="py-6 bg-white">
        <AdInFeed className="max-w-6xl mx-auto px-4" />
      </div>

      {/* Filters Section */}
      <section className="py-16 md:py-24 section-eco relative">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedBlock variant="slideUp" className="mb-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-eco-100 rounded-xl">
                <Filter size={22} className="text-eco-600" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-eco-900">
                Filtrar Ecopontos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Estado Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-eco-700">
                  Estado
                </label>
                <select
                  value={selectedEstado}
                  onChange={(e) => {
                    setSelectedEstado(e.target.value)
                    setSelectedCidade('')
                    setSelectedBairro('')
                    setVisibleCount(ITEMS_PER_PAGE)
                  }}
                  className="w-full px-4 py-3 bg-white border border-eco-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800"
                >
                  <option value="">Todos os Estados</option>
                  {estados.map((estado) => (
                    <option key={estado} value={estado}>{estado}</option>
                  ))}
                </select>
              </div>

              {/* Cidade Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-eco-700">
                  Cidade
                </label>
                <select
                  value={selectedCidade}
                  onChange={(e) => {
                    setSelectedCidade(e.target.value)
                    setSelectedBairro('')
                    setVisibleCount(ITEMS_PER_PAGE)
                  }}
                  disabled={!selectedEstado}
                  className="w-full px-4 py-3 bg-white border border-eco-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <option value="">Todas as Cidades</option>
                  {cidades.map((cidade) => (
                    <option key={cidade} value={cidade}>{cidade}</option>
                  ))}
                </select>
              </div>

              {/* Bairro Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-eco-700">
                  Bairro
                </label>
                <select
                  value={selectedBairro}
                  onChange={(e) => {
                    setSelectedBairro(e.target.value)
                    setVisibleCount(ITEMS_PER_PAGE)
                  }}
                  disabled={!selectedCidade}
                  className="w-full px-4 py-3 bg-white border border-eco-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-eco-400 focus:border-transparent transition-all text-eco-800 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <option value="">Todos os Bairros</option>
                  {bairros.map((bairro) => (
                    <option key={bairro} value={bairro}>{bairro}</option>
                  ))}
                </select>
              </div>

              {/* Results Counter */}
              <div className="flex items-end">
                <div className="w-full bg-white rounded-xl p-4 text-center shadow-soft border border-eco-100">
                  <p className="font-display text-3xl font-bold text-eco-600">
                    {loading ? '...' : filteredEcoPontos.length}
                  </p>
                  <p className="text-xs text-eco-600/60 font-medium">Ecopontos encontrados</p>
                </div>
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {/* EcoPontos List */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          {loading ? (
            <div className="text-center py-16">
              <Loader2 size={40} className="animate-spin text-eco-400 mx-auto mb-4" />
              <p className="text-eco-600/60 font-medium">Carregando ecopontos...</p>
            </div>
          ) : visibleEcoPontos.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleEcoPontos.map((ep, idx) => (
                  <HoverCard key={ep.id}>
                    <EcopontoCard ep={ep} idx={idx} />
                  </HoverCard>
                ))}
              </div>

              {/* Load More */}
              {visibleCount < filteredEcoPontos.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <Search size={16} />
                    Carregar mais ({filteredEcoPontos.length - visibleCount} restantes)
                  </button>
                </div>
              )}
            </>
          ) : (
            <AnimatedBlock variant="slideUp" className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-eco-50 rounded-full mb-6">
                <Search size={32} className="text-eco-300" />
              </div>
              <p className="font-display text-2xl text-eco-700 font-semibold mb-2">
                Nenhum ecoponto encontrado
              </p>
              <p className="text-eco-600/60">
                Tente ajustar os filtros para encontrar resultados.
              </p>
            </AnimatedBlock>
          )}
        </div>
      </section>
    </>
  )
}
