'use client';
import { useEffect, useRef, useState } from 'react';

// ────────────────────────────────────────────────────────────────
// PlantScene — substituto do antigo PlantOrb (Three.js).
//
// Why SVG instead of WebGL:
//  - The Three.js procedural plant was technically interesting
//    but visually dry: tubes look like wires, not branches; flat
//    plane leaves with random rotation feel like floating squares.
//  - SVG paths drawn with CSS strokeDasharray give a hand-illustrated
//    "ink wash" growth — much more elegant for a sustainability
//    brand. Bundle drops from ~150KB gz (three.js) to ~3KB.
//  - Layered parallax (background blurred forest, midground tree,
//    foreground fireflies) creates real depth. The eye reads it as
//    3D even though it's pure SVG.
//  - Works perfectly on every device, no WebGL fallback drama.
//
// Anatomy (z-order, back to front):
//  1. Aurora gradient backdrop with breathing keyframe
//  2. Blurred distant tree silhouettes (two, parallax-different)
//  3. Foreground tree: trunk + branches (strokeDasharray growth)
//  4. Leaves: 30 SVG leaf shapes that scale 0→1 with stagger
//  5. Fireflies: 18 particles drifting up via CSS keyframes
//  6. Mouse parallax: each layer transforms at different rates
//  7. prefers-reduced-motion: skip drawing, render fully grown
// ────────────────────────────────────────────────────────────────

// Pre-positioned leaves on the foreground tree. Each entry:
// {x, y, scale, delay, hue} — hue picks teal vs gold randomness.
const FOREGROUND_LEAVES = [
  { x: 540, y: 280, s: 1.0, d: 1800, hue: 'teal' },
  { x: 420, y: 360, s: 0.85, d: 2000, hue: 'teal' },
  { x: 680, y: 380, s: 0.95, d: 2050, hue: 'gold' },
  { x: 360, y: 460, s: 0.7, d: 2200, hue: 'teal' },
  { x: 740, y: 470, s: 0.85, d: 2250, hue: 'teal' },
  { x: 460, y: 520, s: 0.65, d: 2350, hue: 'gold' },
  { x: 600, y: 510, s: 0.95, d: 2400, hue: 'teal' },
  { x: 320, y: 560, s: 0.75, d: 2500, hue: 'teal' },
  { x: 800, y: 570, s: 0.7, d: 2550, hue: 'gold' },
  { x: 530, y: 600, s: 0.85, d: 2600, hue: 'teal' },
  { x: 660, y: 640, s: 0.7, d: 2700, hue: 'teal' },
  { x: 410, y: 660, s: 0.6, d: 2750, hue: 'gold' },
  { x: 720, y: 690, s: 0.8, d: 2800, hue: 'teal' },
  { x: 280, y: 700, s: 0.55, d: 2850, hue: 'teal' },
  { x: 480, y: 730, s: 0.7, d: 2900, hue: 'gold' },
  { x: 580, y: 770, s: 0.65, d: 2950, hue: 'teal' },
];

// Fireflies — randomly placed, each with own delay + duration so
// they don't pulse in sync. The CSS keyframe handles the drift.
const FIREFLIES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: 5 + ((i * 17) % 90),       // % across viewport
  bottom: -10 - ((i * 13) % 30),    // start below
  delay: (i * 0.7) % 8,             // stagger
  duration: 9 + ((i * 3) % 6),      // 9–15s drift
  size: 2 + ((i * 5) % 5),          // 2–7px
}));

export default function PlantScene({ className = '' }) {
  const wrapRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      // Render fully-grown immediately — no entrance animation
      setGrown(true);
      return undefined;
    }
    // Trigger growth on next frame so CSS transitions catch it
    const id = requestAnimationFrame(() => setGrown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const isCoarsePointer =
      window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (isCoarsePointer) return undefined; // skip parallax on touch

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setParallax({ x: nx, y: ny });
    }
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const px = parallax.x;
  const py = parallax.y;

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {/* ─── Layer 1: aurora gradient backdrop ─────────────────── */}
      <div
        className="aurora"
        style={{
          position: 'absolute',
          inset: '-10%',
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(63,214,140,0.18) 0%, transparent 55%), radial-gradient(ellipse at 75% 75%, rgba(232,184,106,0.14) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, rgba(123,255,177,0.10) 0%, transparent 60%)',
          transform: `translate3d(${-px * 18}px, ${-py * 18}px, 0)`,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* ─── Layer 2: distant blurred tree silhouettes ───────── */}
      <svg
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMax slice"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.35,
          filter: 'blur(6px)',
          transform: `translate3d(${-px * 8}px, ${-py * 5}px, 0)`,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <defs>
          <linearGradient id="distantTreeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3FD68C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0B1F17" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Two distant trees flanking the main one */}
        <path
          d="M 200 900 L 180 600 Q 170 500 150 480 Q 130 460 110 440 L 95 410 L 130 420 L 145 400 L 160 380 L 175 350 L 195 360 L 210 330 L 230 350 L 245 320 L 260 360 L 275 380 L 290 400 L 280 450 Q 260 500 240 600 L 230 900 Z"
          fill="url(#distantTreeGrad)"
        />
        <path
          d="M 1000 900 L 985 620 Q 975 520 955 500 Q 935 480 915 460 L 900 430 L 935 440 L 950 420 L 965 400 L 980 370 L 1000 380 L 1015 350 L 1035 370 L 1050 340 L 1065 380 L 1080 400 L 1095 420 L 1085 470 Q 1065 520 1045 620 L 1035 900 Z"
          fill="url(#distantTreeGrad)"
        />
      </svg>

      {/* ─── Layer 3: foreground tree (the centerpiece) ──────── */}
      <svg
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMax meet"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          transform: `translate3d(${-px * 14}px, ${-py * 8}px, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <defs>
          <linearGradient id="trunkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2c5d3e" />
            <stop offset="100%" stopColor="#3FD68C" />
          </linearGradient>
          <linearGradient id="leafTeal" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3FD68C" />
            <stop offset="100%" stopColor="#7BFFB1" />
          </linearGradient>
          <linearGradient id="leafGold" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#E8B86A" />
            <stop offset="100%" stopColor="#F2D26B" />
          </linearGradient>
          <filter id="treeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Leaf shape — almond-ish, with a clear vein. Used by all instances. */}
          <symbol id="leaf" viewBox="-20 -32 40 64">
            <path
              d="M 0 -28 C 14 -22 18 -8 14 8 C 10 22 4 28 0 30 C -4 28 -10 22 -14 8 C -18 -8 -14 -22 0 -28 Z"
              fill="currentColor"
              filter="url(#treeGlow)"
            />
            <path
              d="M 0 -28 L 0 28"
              stroke="rgba(11,31,23,0.35)"
              strokeWidth="1.5"
              fill="none"
            />
          </symbol>
        </defs>

        {/* Trunk — drawn left + right edges via stroke for the
            growth animation. The trunk fill stays masked behind. */}
        <g
          style={{
            transition: 'all 1.6s cubic-bezier(0.65, 0, 0.35, 1)',
            // Path lengths are normalized to 1 via pathLength attr below.
          }}
        >
          {/* Trunk silhouette (filled) — fades in on grow */}
          <path
            d="M 580 900 L 588 700 Q 590 600 595 500 L 600 360 Q 605 280 608 220 L 612 200 L 618 220 Q 615 280 610 360 L 605 500 Q 612 600 612 700 L 620 900 Z"
            fill="url(#trunkGrad)"
            opacity={grown ? 1 : 0}
            style={{
              transition: 'opacity 1.4s cubic-bezier(0.65, 0, 0.35, 1) 200ms',
            }}
          />
          {/* Trunk glow stroke — draws in like ink */}
          <path
            d="M 600 900 L 605 700 Q 608 600 610 500 L 612 360 Q 614 280 615 220 L 615 200"
            stroke="#7BFFB1"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            pathLength="1"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(123,255,177,0.6))',
              strokeDasharray: '1',
              strokeDashoffset: grown ? 0 : 1,
              transition: 'stroke-dashoffset 1.8s cubic-bezier(0.65, 0, 0.35, 1)',
            }}
          />
        </g>

        {/* Branches — six main ones, each grows in on its own delay */}
        {[
          { d: 'M 605 480 Q 540 440 460 410 Q 400 400 360 405', delay: 800 },
          { d: 'M 610 420 Q 680 380 770 360 Q 830 360 870 365', delay: 900 },
          { d: 'M 608 360 Q 555 320 480 300 Q 430 295 400 305', delay: 1000 },
          { d: 'M 612 320 Q 670 285 740 270 Q 790 270 815 280', delay: 1050 },
          { d: 'M 612 260 Q 580 220 540 200 Q 510 195 490 200', delay: 1150 },
          { d: 'M 615 230 Q 650 195 700 180 Q 730 180 745 195', delay: 1200 },
        ].map((b, i) => (
          <path
            key={i}
            d={b.d}
            stroke="url(#leafTeal)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            pathLength="1"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(63,214,140,0.5))',
              strokeDasharray: '1',
              strokeDashoffset: grown ? 0 : 1,
              transition: `stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1) ${b.delay}ms`,
            }}
          />
        ))}

        {/* Leaves — 16 placed at branch tips and along trunk */}
        <g>
          {FOREGROUND_LEAVES.map((leaf, i) => (
            <g
              key={i}
              transform={`translate(${leaf.x}, ${leaf.y}) rotate(${
                ((leaf.x - 600) / 300) * 35
              })`}
              style={{
                color: leaf.hue === 'gold' ? '#E8B86A' : '#3FD68C',
                transformOrigin: 'center',
                transform: `translate(${leaf.x}px, ${leaf.y}px) rotate(${
                  ((leaf.x - 600) / 300) * 35
                }deg) scale(${grown ? leaf.s : 0})`,
                transition: `transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${leaf.d}ms`,
              }}
            >
              <use href="#leaf" />
            </g>
          ))}
        </g>
      </svg>

      {/* ─── Layer 4: floating fireflies ────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translate3d(${-px * 22}px, ${-py * 12}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {FIREFLIES.map((f) => (
          <span
            key={f.id}
            className="firefly"
            style={{
              left: `${f.left}%`,
              bottom: `${f.bottom}%`,
              width: `${f.size}px`,
              height: `${f.size}px`,
              animationDelay: `${f.delay}s`,
              animationDuration: `${f.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Inline keyframes so we don't depend on global CSS for this scene */}
      <style jsx>{`
        .aurora {
          animation: auroraDrift 14s ease-in-out infinite alternate;
        }
        @keyframes auroraDrift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to   { transform: translate3d(20px, -16px, 0) scale(1.04); }
        }

        .firefly {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 233, 163, 0.95) 0%,
            rgba(255, 233, 163, 0.5) 35%,
            rgba(255, 233, 163, 0) 70%
          );
          filter: blur(0.5px);
          opacity: 0;
          will-change: transform, opacity;
          animation-name: firefly-rise;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
          box-shadow:
            0 0 8px rgba(255, 233, 163, 0.6),
            0 0 16px rgba(123, 255, 177, 0.35);
        }
        @keyframes firefly-rise {
          0%   { opacity: 0; transform: translate(0, 0) scale(0.6); }
          15%  { opacity: 1; transform: translate(8px, -50vh) scale(1); }
          50%  { opacity: 0.85; transform: translate(-12px, -90vh) scale(0.9); }
          85%  { opacity: 0.6; transform: translate(6px, -130vh) scale(0.7); }
          100% { opacity: 0; transform: translate(-4px, -170vh) scale(0.5); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora { animation: none; }
          .firefly { animation: none; opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
