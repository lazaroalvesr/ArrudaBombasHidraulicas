'use client';

import { ArrowUpRight, Download } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const products = [
  { name: 'Carretinha Pequena', tag: 'Compacta', price: 'R$ 185.000', specs: ['15 m³/h', '200 bar'], note: 'Compacta, emplacada e robusta. Ideal para obras residenciais, lajes e piscinas.', badge: 'PRONTA ENTREGA*', slug: 'carretinha-pequena', image: '/images/equipamentos/carretinha-pequena/Pequena_3.webp', imageClass: 'bg-center' },
  { name: 'Carretinha Rebocável', tag: 'Mobilidade', price: 'A partir de R$ 180.000', specs: ['—', '200 bar'], note: 'Mobilidade máxima entre obras. Robusta, prática e fácil de transportar.', badge: 'MOBILIDADE*', slug: 'carretinha-rebocavel', image: '/images/equipamentos/Rebocavel/Rebocavel_1.webp', imageClass: 'bg-[position:70%_center]' },
  { name: 'P700', tag: 'Mais vendido', price: 'R$ 180.000', specs: ['35 m³/h', '200 bar'], note: 'A bomba estacionária mais vendida do Brasil. Ideal para edifícios, galpões e fundações.', badge: 'MAIS VENDIDO*', slug: 'p700', image: '/images/equipamentos/P700/P700_1.webp', imageClass: 'bg-[position:30%_center]' },
  { name: 'MultiMix', tag: 'All-in-one', price: 'R$ 205.000', specs: ['2 betoneiras', '200 bar'], note: 'Mistura e bombeia ao mesmo tempo. Autonomia total em obras distantes.', badge: 'AUTONOMIA*', slug: 'multimix', image: '/images/equipamentos/multimix/multimix_1.webp', imageClass: 'bg-center' },
  { name: 'BetonBomba', tag: 'Combinado', price: 'R$ 175.000', specs: ['25 m³/h', '200 bar'], note: 'Betoneira + bomba integradas. Menor custo logístico e máxima praticidade.', badge: 'COMBINADO*', slug: 'betonbomba', image: '/images/equipamentos/Betonbomba/Beton_1.webp', imageClass: 'bg-[position:70%_center]' },
];

export function Equipment() {
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
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="equipamentos"
      ref={sectionRef}
      className="my-6 max-[900px]:my-4 max-[640px]:my-3"
    >
      <div
        className="mx-auto pt-12 max-[900px]:pt-9 w-[min(calc(100%-48px),1200px)]
          max-[900px]:w-[min(calc(100%-32px),1200px)]"
      >
        <div
          className={`mb-11.25 flex items-end justify-between gap-15
            transition-all duration-700 ease-out max-[640px]:block
            ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <div>
            <p
              className="mb-4.5 text-[11px] font-bold tracking-[1.55px]
                text-[#085bd9]"
            >
              EQUIPAMENTOS
            </p>

            <h2
              className="m-0 max-w-180 font-[Manrope]
                text-[clamp(2.35rem,4.7vw,4.25rem)] font-extrabold
                leading-[1.04] tracking-[-.06em]"
            >
              Modelos pensados para cada frente de obra.
            </h2>
          </div>

          <div className="max-w-75 max-[640px]:mt-4.5">
            <p className="m-0 text-[14px] leading-[1.6] text-[#597695]">
              *Valores e disponibilidade sujeitos a confirmação. Consulte a Arruda
              para validar configuração e condições comerciais.
            </p>
            <a
              href="/Catalogo-Arruda-Bombas.pdf"
              download
              className="group mt-4 inline-flex cursor-pointer items-center gap-2 rounded-[7px] bg-[#f5c142] px-4 py-3 text-[13px] font-extrabold text-[#061f43] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(6,31,67,.16)]"
            >
              Baixar catálogo completo
              <Download aria-hidden="true" size={15} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        <div
          className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2
            max-[640px]:grid-cols-1"
        >
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={`/bomba-de-concreto/${product.slug}`}
              style={{ transitionDelay: visible ? `${index * 90}ms` : '0ms' }}
              className={`group block cursor-pointer overflow-hidden bg-white
              shadow-[0_12px_26px_rgba(13,47,85,.08)] transition-all duration-700
              ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(13,47,85,.16)]
              ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              ${index === 4 ? 'max-[900px]:col-span-2 max-[640px]:col-span-1' : ''}
              `}
            >
              <div
                style={{ backgroundImage: `linear-gradient(0deg, rgba(4,26,55,.25), rgba(4,26,55,.05)), url('${product.image}')` }}
                className={`relative block h-72.5 bg-cover ${product.imageClass}
                ${index === 1 ? 'hue-rotate-16' : ''}
                ${index === 3 ? 'grayscale-[.28]' : ''} max-[640px]:h-67.5`}
              >
                <span
                  className="absolute left-3.5 top-3.5 rounded-[4px]
                    bg-[#f5c142] px-3 py-2 text-[10px] font-extrabold
                    tracking-[1.2px] text-[#061f43]
                    shadow-[0_4px_10px_rgba(0,0,0,.18)]"
                >
                  {product.badge}
                </span>
              </div>

              <div className="p-6.25">
                <small
                  className="font-bold uppercase tracking-[1.4px]
                    text-[#085bd9]"
                >
                  {product.tag}
                </small>

                <h3
                  className="my-3 mb-1.75 font-[Manrope] text-[23px] font-bold
                    tracking-[-1px]"
                >
                  {product.name}

                </h3>

                <p className="m-0 text-[14px] leading-[1.55] text-[#567494]">
                  {product.note}
                </p>

                <div
                  className="my-4.75 flex gap-6 border-y border-[#e3edf7]
                    py-3.75"
                >
                  <span
                    className="flex flex-col text-[10px] uppercase
                      text-[#6c88a5]"
                  >
                    <b
                      className="font-[Manrope] text-[15px] font-bold
                        text-[#173d66] normal-case"
                    >
                      {product.specs[0]}
                    </b>
                    capacidade
                  </span>

                  <span
                    className="flex flex-col text-[10px] uppercase
                      text-[#6c88a5]"
                  >
                    <b
                      className="font-[Manrope] text-[15px] font-bold
                        text-[#173d66] normal-case"
                    >
                      {product.specs[1]}
                    </b>
                    pressão máx.
                  </span>
                </div>

                <div className="flex items-end justify-between gap-2">
                  <div>
                    <small
                      className="block text-[9px] font-bold uppercase
                        tracking-[1px] text-[#6b87a4]"
                    >
                      A partir de
                    </small>

                    <strong
                      className="block font-[Manrope] text-[21px] font-extrabold
                        tracking-[-.8px] text-[#085bd9]"
                    >
                      {product.price}
                    </strong>
                  </div>

                  <span className="inline-flex items-center gap-1 whitespace-nowrap border-b border-[#085bd9] pb-1 text-[12px] font-bold text-[#061f43]">
                    Ver detalhes <ArrowUpRight aria-hidden="true" size={15} className="shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
