'use client';

import { useEffect, useRef, useState } from 'react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const bounds = node.getBoundingClientRect();
    if (bounds.bottom <= 0 || bounds.top < window.innerHeight * 0.92) return;

    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quem-somos" ref={sectionRef} className="max-[640px]:my-3">
      <div
        className="mx-auto grid w-[min(calc(100%-48px),1200px)] grid-cols-2
          items-center gap-[6vw] py-26.5
          max-[900px]:w-[min(calc(100%-32px),1200px)] max-[900px]:py-14
          max-[640px]:grid-cols-1 max-[640px]:gap-8.75 max-[640px]:py-15"
      >
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="mb-6 block h-0.5 w-10 bg-[#e4edf6]" />

          <h2
            className="m-0 mb-4 font-[Manrope]
              text-[clamp(2.35rem,4.7vw,4.25rem)] font-extrabold leading-[1.04]
              tracking-[-.06em] text-[#061f43]"
          >
            Quem Somos
          </h2>

          <p className="mb-6 text-[19px] font-medium text-[#587494]">
            Engenharia industrial com foco em resultados
          </p>

          <p className="mb-4.5 leading-[1.65] text-[#597695]">
            A Arruda Bombas Hidráulicas é especializada em soluções para
            bombeamento e concretagem, oferecendo equipamentos e suporte técnico
            para diferentes demandas de obra.
          </p>

          <p className="mb-7 leading-[1.65] text-[#597695]">
            Vindos do setor de construção e infraestrutura pesada, trazemos essa
            experiência para o bombeamento de concreto — com equipe própria de
            operação, manutenção e suporte técnico em Hortolândia, SP.
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('contato')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block rounded-md bg-[#f5c142] px-6 py-3.5
              text-[14px] font-bold text-[#061f43] transition-colors
              hover:bg-[#e0af30]"
          >
            Conheça Mais Sobre a Arruda
          </a>
        </div>

        <div
          className={`relative min-h-100 overflow-hidden rounded-2xl
            shadow-[0_20px_50px_rgba(6,31,67,.15)] transition-all duration-700
            delay-150 ease-out max-[640px]:min-h-70 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
          <img
            src="/images/bomab-concreto-vermlho.jpeg"
            alt="Caminhão-bomba produzido pela Arruda Bombas Hidráulicas"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
