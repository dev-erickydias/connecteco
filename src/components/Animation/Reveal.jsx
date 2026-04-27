'use client';
import { useEffect, useRef, useState } from 'react';

// ────────────────────────────────────────────────────────────────
// Reveal — declarative scroll-into-view wrapper.
// Honors prefers-reduced-motion (WCAG 2.3.3): skips transform,
// fades only.
// ────────────────────────────────────────────────────────────────

const KINDS = {
  rise: { from: 'translate3d(0, 32px, 0)', to: 'translate3d(0, 0, 0)' },
  scale: { from: 'scale(0.94)', to: 'scale(1)' },
  left: { from: 'translate3d(-32px, 0, 0)', to: 'translate3d(0, 0, 0)' },
  right: { from: 'translate3d(32px, 0, 0)', to: 'translate3d(0, 0, 0)' },
  fade: { from: 'translate3d(0, 0, 0)', to: 'translate3d(0, 0, 0)' },
};

export default function Reveal({
  children,
  kind = 'rise',
  delay = 0,
  className = '',
  as: Tag = 'div',
  threshold = 0.18,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const variant = KINDS[kind] || KINDS.rise;
  const style = reduceMotion
    ? {
        opacity: visible ? 1 : 0,
        transform: 'none',
        transition: 'opacity 0.3s ease',
        transitionDelay: `${Math.min(delay, 100)}ms`,
      }
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? variant.to : variant.from,
        transition:
          'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      };

  return (
    <Tag ref={ref} style={style} className={className} {...rest}>
      {children}
    </Tag>
  );
}
