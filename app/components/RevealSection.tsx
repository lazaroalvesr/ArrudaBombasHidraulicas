'use client';

import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from 'react';

type RevealSectionProps = ComponentPropsWithoutRef<'section'>;

export function RevealSection({ children, className = '', ...props }: RevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const bounds = section.getBoundingClientRect();
    if (bounds.bottom <= 0 || bounds.top < window.innerHeight * 0.92) return;

    setVisible(false);

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.12 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <section ref={sectionRef} className={`${className} transform-gpu transition-[opacity,transform] duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} {...props}>{children}</section>;
}