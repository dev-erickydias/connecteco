'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Banner } from '../../components/banner/Banner'
import AnimatedBlock, { StaggerContainer, StaggerItem, HoverCard } from '../../components/ui/AnimatedBlock'
import { AdInArticle } from '../../components/ads/GoogleAd'
import bannerInfo from '../../constants/bannerInfo'
import postBlogContain from '../../constants/postBlogContain'
import { ArrowRight, Tag, Star, BookOpen } from 'lucide-react'

const BLOG_CATEGORIES = [
  'Todos',
  ...new Set(
    postBlogContain
      .filter((blog) => blog.categoria)
      .map((blog) => blog.categoria)
  ),
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === 'Todos') return postBlogContain
    return postBlogContain.filter((blog) => blog.categoria === selectedCategory)
  }, [selectedCategory])

  const featuredBlogs = filteredBlogs.filter((blog) => blog.large)
  const regularBlogs = filteredBlogs.filter((blog) => !blog.large)

  return (
    <>
      {/* Hero Banner */}
      <Banner bannerInfo={bannerInfo} />

      {/* Blog Header */}
      <section className="py-14 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-eco-100/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
        <div className="relative max-w-6xl mx-auto px-4">
          <AnimatedBlock variant="slideUp">
            <p className="text-eco-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Conhecimento
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-eco-900 mb-3">
              Blog ConnectEco
            </h1>
            <p className="text-lg text-eco-700/60 max-w-2xl">
              Artigos e insights sobre sustentabilidade, reciclagem e praticas ecologicas no Brasil
            </p>
          </AnimatedBlock>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-earth-50 border-y border-earth-100">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedBlock variant="slideUp">
            <div className="flex flex-wrap gap-3">
              {['Todos', 'Reciclagem', 'Sustentabilidade', 'Meio Ambiente'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'gradient-eco text-white shadow-eco'
                      : 'bg-white text-eco-700 border border-eco-100 hover:border-eco-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {/* Featured Blogs */}
      {featuredBlogs.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedBlock variant="slideUp" className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <Star size={18} className="text-sand-500 fill-sand-400" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-eco-900">
                  Destaques
                </h2>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-eco-400 to-moss-500 rounded-full" />
            </AnimatedBlock>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs[0] && (
                <StaggerItem className="md:col-span-2 lg:col-span-2">
                  <HoverCard>
                    <Link href={featuredBlogs[0].link} target="_blank" rel="noopener noreferrer">
                      <div className="relative rounded-2xl overflow-hidden shadow-eco h-full bg-white group">
                        <div className="relative h-80">
                          <img
                            src={featuredBlogs[0].imagem}
                            alt={featuredBlogs[0].titulo}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-eco-900/80 via-eco-900/30 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <span className="tag mb-3 inline-block">Destaque</span>
                          <h3 className="font-display text-2xl font-bold text-white mb-2 line-clamp-2">
                            {featuredBlogs[0].titulo}
                          </h3>
                          <p className="text-white/80 line-clamp-2 text-sm">
                            {featuredBlogs[0].descricao}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              )}

              {featuredBlogs.slice(1, 3).map((blog, idx) => (
                <StaggerItem key={idx}>
                  <HoverCard>
                    <Link href={blog.link} target="_blank" rel="noopener noreferrer">
                      <div className="relative rounded-2xl overflow-hidden shadow-soft h-full bg-white group">
                        <div className="relative h-44">
                          <img
                            src={blog.imagem}
                            alt={blog.titulo}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-eco-900/70 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <span className="tag text-[10px] mb-2 inline-block">Destaque</span>
                          <h3 className="font-display text-lg font-bold text-white line-clamp-2">
                            {blog.titulo}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Ad */}
      <div className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AdInArticle />
        </div>
      </div>

      {/* Regular Blogs */}
      {regularBlogs.length > 0 && (
        <section className="py-16 md:py-24 section-earth">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedBlock variant="slideUp" className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={18} className="text-eco-500" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-eco-900">
                  Todos os Artigos
                </h2>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-eco-400 to-moss-500 rounded-full" />
            </AnimatedBlock>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog, idx) => (
                <StaggerItem key={idx}>
                  <HoverCard>
                    <Link href={blog.link} target="_blank" rel="noopener noreferrer">
                      <div className="eco-card h-full flex flex-col group">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={blog.imagem}
                            alt={blog.titulo}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-eco-900/20 to-transparent" />
                        </div>
                        <div className="flex-1 p-6 flex flex-col">
                          <h3 className="font-display text-lg font-bold text-eco-900 mb-2 line-clamp-2 group-hover:text-eco-600 transition-colors">
                            {blog.titulo}
                          </h3>
                          <p className="text-eco-700/60 text-sm leading-relaxed line-clamp-3 flex-1">
                            {blog.descricao}
                          </p>
                          <div className="mt-4 pt-4 border-t border-eco-50">
                            <span className="inline-flex items-center gap-1.5 text-eco-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                              Leia Mais
                              <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Empty State */}
      {filteredBlogs.length === 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <AnimatedBlock variant="slideUp">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-eco-50 rounded-full mb-6">
                <BookOpen size={32} className="text-eco-300" />
              </div>
              <h2 className="font-display text-3xl font-bold text-eco-800 mb-3">
                Nenhum artigo disponivel
              </h2>
              <p className="text-eco-600/60">
                Selecione outra categoria ou volte em breve para novos conteudos.
              </p>
            </AnimatedBlock>
          </div>
        </section>
      )}
    </>
  )
}
