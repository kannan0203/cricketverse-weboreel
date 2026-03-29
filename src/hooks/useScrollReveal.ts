import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('scroll-visible');
          el.classList.remove('scroll-hidden');
        }
      },
      { threshold: 0.15 }
    );
    el.classList.add('scroll-hidden');
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
