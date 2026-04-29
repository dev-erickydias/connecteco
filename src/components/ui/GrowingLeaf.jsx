'use client';

// ────────────────────────────────────────────────────────────────
// GrowingLeaf — small SVG leaf that scales 0→1 + a vine path that
// draws in via strokeDasharray. Designed to sit absolutely in the
// corner of an ecoponto card. On hover, an extra leaf-bud unfurls
// to reward attention.
//
// Usage:
//   <article className="eco-card relative">
//     <GrowingLeaf corner="top-right" />
//     ...rest of card
//   </article>
//
// Pure CSS animations — no JS framework cost. Honors
// prefers-reduced-motion via the global media query in globals.css.
// ────────────────────────────────────────────────────────────────

const CORNERS = {
  'top-left': {
    container: { top: '-12px', left: '-10px', transform: 'rotate(-15deg)' },
    flip: false,
  },
  'top-right': {
    container: { top: '-12px', right: '-10px', transform: 'rotate(15deg) scaleX(-1)' },
    flip: true,
  },
  'bottom-left': {
    container: { bottom: '-12px', left: '-10px', transform: 'rotate(195deg)' },
    flip: false,
  },
  'bottom-right': {
    container: {
      bottom: '-12px',
      right: '-10px',
      transform: 'rotate(165deg) scaleX(-1)',
    },
    flip: true,
  },
};

export default function GrowingLeaf({ corner = 'top-right', tone = 'teal' }) {
  const placement = CORNERS[corner] || CORNERS['top-right'];
  const stem = tone === 'gold' ? '#E8B86A' : '#3FD68C';
  const leafA = tone === 'gold' ? '#F2D26B' : '#7BFFB1';
  const leafB = tone === 'gold' ? '#E8B86A' : '#3FD68C';

  return (
    <span
      aria-hidden="true"
      className="growing-leaf"
      style={{
        position: 'absolute',
        width: '72px',
        height: '72px',
        pointerEvents: 'none',
        zIndex: 1,
        ...placement.container,
      }}
    >
      <svg viewBox="0 0 72 72" width="72" height="72">
        <defs>
          <linearGradient id={`leafA-${corner}-${tone}`} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={leafB} />
            <stop offset="100%" stopColor={leafA} />
          </linearGradient>
        </defs>

        {/* Stem — draws in on viewport entry */}
        <path
          className="gl-stem"
          d="M 36 70 Q 30 55 28 40 Q 26 25 30 12"
          stroke={stem}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          pathLength="1"
        />

        {/* First leaf — scales in after the stem */}
        <g className="gl-leaf gl-leaf-1">
          <path
            d="M 28 38 Q 14 30 10 18 Q 18 22 26 28 Q 30 32 28 38 Z"
            fill={`url(#leafA-${corner}-${tone})`}
          />
          <path
            d="M 28 38 Q 18 30 10 18"
            stroke="rgba(11,31,23,0.25)"
            strokeWidth="0.6"
            fill="none"
          />
        </g>

        {/* Second leaf — even later, on the opposite side */}
        <g className="gl-leaf gl-leaf-2">
          <path
            d="M 30 22 Q 44 14 50 4 Q 44 18 38 24 Q 32 26 30 22 Z"
            fill={`url(#leafA-${corner}-${tone})`}
          />
          <path
            d="M 30 22 Q 42 16 50 4"
            stroke="rgba(11,31,23,0.25)"
            strokeWidth="0.6"
            fill="none"
          />
        </g>

        {/* Bud — only appears on hover (parent .eco-card:hover triggers it) */}
        <g className="gl-bud">
          <circle cx="30" cy="12" r="2.5" fill={leafA} />
          <circle cx="30" cy="12" r="4.5" fill={leafA} opacity="0.25" />
        </g>
      </svg>

      <style jsx>{`
        .growing-leaf {
          opacity: 0;
          transition: opacity 0.6s ease 0.1s;
        }
        /* Reveal everything when this card scrolls into view (via .in-view class
           we attach below in CardWithLeaf, OR when the parent .eco-card hovers) */
        :global(.eco-card.in-view) .growing-leaf,
        :global(.eco-card:hover) .growing-leaf {
          opacity: 1;
        }

        .gl-stem {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          transition: stroke-dashoffset 0.9s cubic-bezier(0.65, 0, 0.35, 1);
          filter: drop-shadow(0 0 2px rgba(63, 214, 140, 0.4));
        }
        :global(.eco-card.in-view) .gl-stem,
        :global(.eco-card:hover) .gl-stem {
          stroke-dashoffset: 0;
        }

        .gl-leaf {
          transform-origin: center;
          transform: scale(0);
          opacity: 0;
          transition:
            transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity 0.4s ease;
        }
        .gl-leaf-1 {
          transform-origin: 28px 38px;
          transition-delay: 0.55s;
        }
        .gl-leaf-2 {
          transform-origin: 30px 22px;
          transition-delay: 0.85s;
        }
        :global(.eco-card.in-view) .gl-leaf,
        :global(.eco-card:hover) .gl-leaf {
          transform: scale(1);
          opacity: 1;
        }

        .gl-bud {
          transform-origin: 30px 12px;
          transform: scale(0);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s,
                      opacity 0.4s ease 1.1s;
        }
        :global(.eco-card:hover) .gl-bud {
          transform: scale(1);
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .growing-leaf {
            opacity: 1 !important;
            transition: none;
          }
          .gl-stem {
            stroke-dashoffset: 0 !important;
            transition: none;
          }
          .gl-leaf,
          .gl-bud {
            transform: scale(1) !important;
            opacity: 1 !important;
            transition: none;
          }
        }
      `}</style>
    </span>
  );
}
