'use client';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Recycle, Leaf } from 'lucide-react';
import GrowingLeaf from './GrowingLeaf';

// ────────────────────────────────────────────────────────────────
// EcopontoCard — extracted from (home)/page.jsx so we can hang
// the in-view IntersectionObserver + the decorative GrowingLeaf
// off it cleanly. The visual structure matches the original card
// 1-to-1 — only the corner leaf is new.
// ────────────────────────────────────────────────────────────────

export default function EcopontoCard({ ep, idx = 0 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Alternate leaf tone so the grid feels alive, not stamped
  const tone = idx % 3 === 1 ? 'gold' : 'teal';
  const corner = idx % 2 === 0 ? 'top-right' : 'top-left';

  return (
    <article
      ref={ref}
      className={`eco-card relative p-6 h-full flex flex-col ${
        inView ? 'in-view' : ''
      }`}
    >
      {/* Decorative growing leaf — appears as the card enters view
          and unfurls a bud on hover */}
      <GrowingLeaf corner={corner} tone={tone} />

      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-eco-50 rounded-lg flex-shrink-0">
          <Leaf size={18} className="text-eco-500" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-eco-900 leading-tight">
            {ep.name}
          </h3>
          <p className="text-xs text-eco-500 font-medium mt-0.5">
            {ep.city}, {ep.state}
          </p>
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2 flex-1">
        <div className="flex items-start gap-2 text-sm text-eco-700/70">
          <MapPin
            size={14}
            className="flex-shrink-0 mt-0.5 text-eco-400"
            aria-hidden="true"
          />
          <span className="line-clamp-2">
            {ep.neighborhood} - {ep.full_address}
          </span>
        </div>
      </div>

      {/* Materials */}
      <div className="border-t border-eco-50 pt-3 mt-4">
        <div className="flex items-center gap-1.5 mb-2">
          <Recycle size={12} className="text-eco-500" aria-hidden="true" />
          <p className="text-xs font-semibold text-eco-600">Materiais</p>
        </div>
        <p className="text-xs text-eco-700/60 line-clamp-2">
          {Array.isArray(ep.materials) ? ep.materials.join(', ') : ep.materials}
        </p>
      </div>

      {/* Hours */}
      <div className="border-t border-eco-50 pt-3 mt-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Clock size={12} className="text-eco-500" aria-hidden="true" />
          <p className="text-xs font-semibold text-eco-600">Horario</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-eco-50/50 rounded-lg px-2 py-1.5">
            <p className="text-[10px] text-eco-600/50 font-medium">Seg-Sex</p>
            <p className="text-xs text-eco-800 font-medium">
              {ep.weekday_hours && ep.weekday_hours !== 'Não disponível'
                ? ep.weekday_hours
                : 'N/A'}
            </p>
          </div>
          <div className="bg-eco-50/50 rounded-lg px-2 py-1.5">
            <p className="text-[10px] text-eco-600/50 font-medium">Sab-Dom</p>
            <p className="text-xs text-eco-800 font-medium">
              {ep.saturday_hours && ep.saturday_hours !== 'Fechado'
                ? ep.saturday_hours
                : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
