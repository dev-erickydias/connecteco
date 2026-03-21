'use client'

import { Banner } from '../../components/banner/Banner'
import AnimatedBlock, { StaggerContainer, StaggerItem, HoverCard } from '../../components/ui/AnimatedBlock'
import bannerInfo from '../../constants/bannerInfo'
import postIntegrants from '../../constants/postIntegrantes'
import { Target, Globe, Heart, Github, Linkedin, Leaf, Sprout, TreePine, User } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <Banner bannerInfo={bannerInfo} />

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-eco-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatedBlock variant="slideUp" className="text-center mb-12">
            <p className="text-eco-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Quem Somos
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-eco-900 mb-4">
              Sobre ConnectEco
            </h1>
            <div className="divider-eco" />
          </AnimatedBlock>

          <AnimatedBlock variant="slideUp" delay={0.2}>
            <p className="text-lg text-eco-700/80 leading-relaxed text-center max-w-3xl mx-auto">
              ConnectEco e uma plataforma inovadora dedicada a sustentabilidade ambiental e
              reciclagem no Brasil. Nossa missao e conectar pessoas, empresas e pontos de coleta
              para criar um futuro mais verde e sustentavel.
            </p>
          </AnimatedBlock>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28 section-eco relative" id="mission">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedBlock variant="slideUp" className="text-center mb-14">
            <p className="text-eco-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Nossos Pilares
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-eco-900 mb-4">
              O que nos move
            </h2>
            <div className="divider-eco" />
          </AnimatedBlock>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Nossa Missao',
                description: 'Facilitar o acesso a pontos de reciclagem e materiais sustentaveis, promovendo praticas ecologicas atraves da tecnologia e da integracao comunitaria.',
                color: 'eco',
              },
              {
                icon: Globe,
                title: 'Nossa Visao',
                description: 'Ser a plataforma lider de sustentabilidade no Brasil, onde cada pessoa tem acesso facil a recursos para reciclar e contribuir para um planeta mais saudavel.',
                color: 'sky',
              },
              {
                icon: Heart,
                title: 'Nossos Valores',
                description: 'Sustentabilidade, inovacao, responsabilidade social e transparencia. Acreditamos que pequenas acoes coletivas criam grandes mudancas.',
                color: 'moss',
              },
            ].map((pillar, idx) => (
              <StaggerItem key={idx}>
                <HoverCard className="h-full">
                  <div className="eco-card p-8 h-full">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 ${
                      pillar.color === 'eco' ? 'bg-eco-100 text-eco-600' :
                      pillar.color === 'sky' ? 'bg-sky-100 text-sky-600' :
                      'bg-moss-100 text-moss-600'
                    }`}>
                      <pillar.icon size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-eco-900 mb-3">{pillar.title}</h3>
                    <p className="text-eco-700/70 leading-relaxed">{pillar.description}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 md:py-28 bg-white relative" id="team">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedBlock variant="slideUp" className="text-center mb-14">
            <p className="text-eco-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Pessoas Incriveis
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-eco-900 mb-4">
              Nosso Time
            </h2>
            <div className="divider-eco" />
          </AnimatedBlock>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postIntegrants.map((member, idx) => (
              <StaggerItem key={member.id}>
                <div className="team-card group relative h-full rounded-2xl overflow-hidden border border-eco-100 bg-white transition-all duration-500 hover:shadow-[0_8px_40px_rgba(34,120,69,0.15)] hover:border-eco-300 hover:-translate-y-1">
                  {/* Roots growing from bottom on hover */}
                  <svg className="absolute bottom-0 left-0 w-full h-32 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 300 120" fill="none" preserveAspectRatio="none">
                    <path d="M40 120 C40 95, 35 80, 25 60 C20 45, 30 35, 28 20" stroke="#22784520" strokeWidth="3" className="origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" style={{transformBox: 'fill-box'}} />
                    <path d="M40 120 C42 100, 50 85, 55 70 C58 60, 52 50, 50 40" stroke="#22784515" strokeWidth="2" className="origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-900 ease-out" style={{transformBox: 'fill-box', transitionDelay: '100ms'}} />
                    <path d="M260 120 C258 100, 265 85, 270 65 C272 50, 262 40, 265 25" stroke="#22784520" strokeWidth="3" className="origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" style={{transformBox: 'fill-box', transitionDelay: '50ms'}} />
                    <path d="M260 120 C255 105, 245 90, 240 75 C238 65, 248 55, 245 45" stroke="#22784515" strokeWidth="2" className="origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-900 ease-out" style={{transformBox: 'fill-box', transitionDelay: '150ms'}} />
                    <path d="M150 120 C148 105, 145 95, 150 80 C155 65, 148 55, 150 40" stroke="#22784510" strokeWidth="2" className="origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-800 ease-out" style={{transformBox: 'fill-box', transitionDelay: '200ms'}} />
                  </svg>

                  {/* Leaf decorations on hover */}
                  <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 group-hover:top-2 group-hover:right-2 transition-all duration-500 ease-out z-10">
                    <Leaf size={22} className="text-eco-300 rotate-45 drop-shadow-sm" />
                  </div>
                  <div className="absolute -top-3 -left-3 opacity-0 group-hover:opacity-100 group-hover:top-3 group-hover:left-3 transition-all duration-600 ease-out z-10" style={{transitionDelay: '100ms'}}>
                    <Leaf size={16} className="text-moss-300 -rotate-30 drop-shadow-sm" />
                  </div>
                  <div className="absolute -bottom-2 right-6 opacity-0 group-hover:opacity-60 group-hover:bottom-2 transition-all duration-500 ease-out z-10" style={{transitionDelay: '200ms'}}>
                    <Sprout size={14} className="text-eco-400" />
                  </div>

                  {/* Top accent bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-eco-400 via-moss-400 to-eco-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                  {/* Content */}
                  <div className="relative z-[1] p-7">
                    {/* Avatar icon */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-eco-100 to-moss-50 border-2 border-eco-200 flex items-center justify-center mb-5 group-hover:border-eco-400 group-hover:shadow-[0_0_15px_rgba(34,120,69,0.2)] transition-all duration-500">
                      <User size={22} className="text-eco-500 group-hover:text-eco-600 transition-colors" />
                    </div>

                    <h3 className="font-display text-xl font-bold text-eco-900 mb-1 group-hover:text-eco-700 transition-colors">
                      {member.nome}
                    </h3>
                    <p className="text-sm text-eco-500 font-semibold mb-4 flex items-center gap-1.5">
                      <span className="w-4 h-px bg-eco-400 group-hover:w-6 transition-all duration-300" />
                      {member.cargo}
                    </p>
                    <p className="text-sm text-eco-700/60 leading-relaxed line-clamp-3 mb-5">
                      {member.descricao}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-2.5 pt-4 border-t border-eco-100 group-hover:border-eco-200 transition-colors">
                      {member.linkGithub && (
                        <a
                          href={member.linkGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-eco-50 text-eco-600 hover:bg-eco-500 hover:text-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                          title="GitHub"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {member.linkLinkedin && (
                        <a
                          href={member.linkLinkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-sky-50 text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                          title="LinkedIn"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Company Origin */}
      <section className="py-20 md:py-28 section-earth relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-eco-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatedBlock variant="slideUp" className="text-center mb-12">
            <p className="text-eco-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Como Comecou
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-eco-900 mb-4">
              Nossa Origem
            </h2>
            <div className="divider-eco" />
          </AnimatedBlock>

          <AnimatedBlock variant="slideUp" delay={0.2}>
            <div className="eco-card p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Sprout size={28} className="text-eco-500" />
                <div className="h-px flex-1 bg-gradient-to-r from-eco-200 to-transparent" />
              </div>
              <p className="text-lg text-eco-700/80 leading-relaxed mb-6">
                ConnectEco nasceu da visao de conectar pessoas com iniciativas de sustentabilidade
                e reciclagem. Desenvolvida por um time dedicado de profissionais de tecnologia,
                dados e qualidade de software, a plataforma representa o compromisso com um
                futuro mais verde.
              </p>
              <p className="text-lg text-eco-700/80 leading-relaxed mb-6">
                Nosso objetivo e simplificar a jornada sustentavel, oferecendo ferramentas
                acessiveis que ajudem brasileiros a encontrar ecopontos, aprender sobre reciclagem
                e fazer parte de uma comunidade comprometida com o meio ambiente.
              </p>
              <p className="text-lg text-eco-700/80 leading-relaxed">
                Cada contribuicao, grande ou pequena, faz diferenca. Juntos, estamos construindo
                um planeta mais sustentavel para as futuras geracoes.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>
    </>
  )
}
