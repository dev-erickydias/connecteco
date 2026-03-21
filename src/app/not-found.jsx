'use client'

import Link from 'next/link'
import AnimatedBlock, { HoverCard } from '../components/ui/AnimatedBlock'
import { Home, Users, BookOpen, Leaf, ArrowRight, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-eco-50 via-white to-earth-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Illustration Side */}
          <AnimatedBlock variant="slideRight" className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative">
              {/* Decorative blobs */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-eco-200/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-moss-200/30 rounded-full blur-2xl" />

              <div className="text-center space-y-4 relative">
                <div className="font-display text-9xl font-bold text-gradient-eco leading-none">
                  404
                </div>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-eco-50 rounded-full">
                  <Search size={36} className="text-eco-300" />
                </div>
              </div>
            </div>
          </AnimatedBlock>

          {/* Content Side */}
          <AnimatedBlock variant="slideLeft" delay={0.2} className="order-1 md:order-2">
            <div className="space-y-6">
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-eco-900 mb-3">
                  Pagina nao encontrada
                </h1>
                <p className="text-lg text-eco-700/70 leading-relaxed">
                  Desculpe! Parece que voce chegou a um lugar que nao existe em nosso mapa de sustentabilidade.
                </p>
              </div>

              {/* Suggested Links */}
              <div className="pt-4 space-y-2">
                <p className="text-sm font-semibold text-eco-600/50 uppercase tracking-wider">Explore nosso site:</p>
                {[
                  { href: '/', label: 'Ir para a pagina inicial', icon: Home },
                  { href: '/about', label: 'Conhecer sobre nos', icon: Users },
                  { href: '/blog', label: 'Ler nossos artigos', icon: BookOpen },
                  { href: '/faca-parte', label: 'Fazer parte da comunidade', icon: Leaf },
                ].map((link, idx) => (
                  <Link key={idx} href={link.href}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-eco-50 transition-colors">
                    <div className="p-2 bg-eco-50 rounded-lg group-hover:bg-eco-100 transition-colors">
                      <link.icon size={16} className="text-eco-500" />
                    </div>
                    <span className="text-eco-700 font-medium text-sm group-hover:text-eco-600 transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight size={14} className="text-eco-300 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link href="/">
                  <button className="w-full btn-primary flex items-center justify-center gap-2">
                    <Home size={18} />
                    Voltar para Pagina Inicial
                  </button>
                </Link>
              </div>
            </div>
          </AnimatedBlock>
        </div>

        {/* Footer Note */}
        <AnimatedBlock variant="fadeIn" delay={0.4} className="mt-16 pt-8 border-t border-eco-100 text-center">
          <p className="text-eco-600/40 text-sm">
            Se voce acredita que isso e um erro, entre em contato conosco atraves de{' '}
            <a href="mailto:contato@connecteco.com.br" className="text-eco-500 font-semibold hover:underline">
              contato@connecteco.com.br
            </a>
          </p>
        </AnimatedBlock>
      </div>
    </div>
  )
}
