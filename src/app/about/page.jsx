'use client'

import { Banner } from '../../components/banner/Banner'
import AnimatedBlock, { StaggerContainer, StaggerItem, HoverCard } from '../../components/ui/AnimatedBlock'
import bannerInfo from '../../constants/bannerInfo'
import postIntegrants from '../../constants/postIntegrantes'
import { Target, Globe, Heart, Github, Linkedin, Leaf, Sprout, TreePine } from 'lucide-react'

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
            {postIntegrants.map((member) => (
              <StaggerItem key={member.id}>
                <HoverCard>
                  <div className="eco-card h-full">
                    {/* Avatar */}
                    <div className="h-52 bg-gradient-to-br from-eco-400 to-moss-500 flex items-center justify-center overflow-hidden relative">
                      <img
                        src={member.imagem || 'https://via.placeholder.com/200'}
                        alt={member.nome}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-eco-900/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-eco-900 mb-1">
                        {member.nome}
                      </h3>
                      <p className="text-sm text-eco-500 font-semibold mb-3">
                        {member.cargo}
                      </p>
                      <p className="text-sm text-eco-700/60 leading-relaxed line-clamp-3 mb-4">
                        {member.descricao}
                      </p>

                      {/* Social Links */}
                      <div className="flex gap-2 pt-4 border-t border-eco-50">
                        {member.linkGithub && (
                          <a
                            href={member.linkGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-eco-50 text-eco-600 hover:bg-eco-100 transition-colors"
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
                            className="p-2 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors"
                            title="LinkedIn"
                          >
                            <Linkedin size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </HoverCard>
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
