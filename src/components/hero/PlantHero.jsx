'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Reveal from '../Animation/Reveal';

// Three.js scene loaded only client-side. Keeps the WebGL bundle
// (~150KB gz) out of initial paint.
const PlantOrb = dynamic(() => import('./PlantOrb'), {
  ssr: false,
  loading: () => null,
});

// Animated count-up that respects prefers-reduced-motion.
function StatCount({ end, suffix = '', label }) {
  return (
    <div className="text-center">
      <div className="font-display text-3xl sm:text-4xl text-papel-50 font-semibold tabular-nums">
        {end}
        {suffix}
      </div>
      <div
        className="mt-1 text-[10px] uppercase tracking-[0.32em]"
        style={{ color: 'rgba(244, 241, 232, 0.55)' }}
      >
        {label}
      </div>
    </div>
  );
}

export default function PlantHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: '100svh',
        background:
          'radial-gradient(ellipse at top, #1C3429 0%, #0B1F17 70%)',
      }}
      aria-label="Hero ConnectEco"
    >
      {/* 3D plant scene — absolutely positioned, behind text */}
      <PlantOrb />

      {/* Vignette to keep text readable over the orb */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(11,31,23,0.55) 70%, rgba(11,31,23,0.92) 100%)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col justify-center"
        style={{ zIndex: 3, minHeight: '100svh' }}
      >
        <Reveal>
          <span className="label-tag-verde inline-block mb-6">
            ◇ Reciclagem  ·  Sustentabilidade  ·  Brasil
          </span>
        </Reveal>

        <h1 className="font-display text-papel-50 text-balance mb-6"
            style={{ fontSize: 'clamp(40px, 7vw, 96px)', lineHeight: 0.96, letterSpacing: '-0.02em', fontWeight: 600 }}>
          <Reveal as="span" delay={80}>
            <span className="block">Cada gesto</span>
          </Reveal>
          <Reveal as="span" delay={200}>
            <span className="block text-verdejante">planta um futuro.</span>
          </Reveal>
        </h1>

        <Reveal delay={420}>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mb-10 text-pretty"
            style={{ color: 'rgba(244, 241, 232, 0.78)' }}
          >
            Mais de <strong style={{ color: '#3FD68C' }}>2.786 ecopontos</strong> espalhados pelo Brasil,
            esperando por você. Encontre onde reciclar, aprenda como começar
            e seja parte da maior rede de reciclagem do país.
          </p>
        </Reveal>

        <Reveal delay={560}>
          <div className="flex flex-wrap gap-3 mb-16">
            <Link href="#ecopontos" className="btn-verdejante">
              Buscar ecopontos
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/faca-parte" className="btn-papel">
              Cadastrar meu ponto
            </Link>
          </div>
        </Reveal>

        {/* Stats — bottom-pinned within the hero */}
        <Reveal delay={700}>
          <div
            className="grid grid-cols-3 gap-8 max-w-md pt-10"
            style={{ borderTop: '1px solid rgba(244, 241, 232, 0.08)' }}
          >
            <StatCount end="2.786" suffix="+" label="Ecopontos" />
            <StatCount end="14" label="Materiais" />
            <StatCount end="100%" label="Gratuito" />
          </div>
        </Reveal>
      </div>

      {/* Soft transition to the light section below */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '120px',
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(253, 252, 248, 0.65) 75%, #FDFCF8 100%)',
          zIndex: 4,
        }}
      />
    </section>
  );
}
