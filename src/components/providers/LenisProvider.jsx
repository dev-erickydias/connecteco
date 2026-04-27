'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

// Smooth-scroll provider. Apple-style cinematic feel.
// Respects prefers-reduced-motion automatically (skips entirely).
export default function LenisProvider({ children }) {
  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      autoResize: true, // recompute scrollHeight after fonts/images
    });

    // Pause loop in background tabs to spare battery. Browsers throttle
    // rAF anyway, but skipping the lenis.raf call adds another layer.
    let visible = !document.hidden;
    const onVisibility = () => {
      visible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibility);

    let frameId;
    function raf(time) {
      if (visible) lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener('visibilitychange', onVisibility);
      lenis.destroy();
    };
  }, []);

  return children;
}
