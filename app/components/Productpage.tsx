'use client';

import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  tag: string;
  badge?: string;
  price: string;
  image: string;
  description: string;
  specs: ProductSpec[];
  applications: string[];
};

type ProductPageProps = {
  product: Product;
  relatedProducts: Product[];
};

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function ProductPage({
  product,
  relatedProducts,
}: ProductPageProps) {
  const specsReveal = useReveal();
  const appsReveal = useReveal();
  const relatedReveal = useReveal();


  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-16 max-[640px]:pt-32 max-[640px]:pb-10">
        <div
          className="mx-auto w-[min(calc(100%-48px),1200px)]
            max-[900px]:w-[min(calc(100%-32px),1200px)]"
        >
          <nav
            className="mb-7 flex items-center gap-1.5 text-[13px]
              text-[#597695]"
          >
            <Link href="/#equipamentos" className="hover:text-[#085bd9]">
              Equipamentos
            </Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-[#061f43]">{product.name}</span>
          </nav>

          <div
            className="grid grid-cols-2 items-center gap-[6vw]
              max-[900px]:grid-cols-1 max-[900px]:gap-9"
          >
            <div
              className="relative min-h-100 overflow-hidden rounded-2xl
                bg-[#e5eaed] shadow-[0_20px_50px_rgba(6,31,67,.15)]
                max-[640px]:min-h-70"
            >
              {product.badge ? (
                <span
                  className="absolute left-4 top-4 z-10 rounded-[4px]
                    bg-[#f5c142] px-3 py-2 text-[10px] font-extrabold
                    tracking-[1.2px] text-[#061f43]
                    shadow-[0_4px_10px_rgba(0,0,0,.18)]"
                >
                  {product.badge}
                </span>
              ) : null}

              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div>
              <small
                className="mb-3 block text-[11px] font-bold tracking-[1.55px]
                  text-[#085bd9]"
              >
                {product.tag.toUpperCase()}
              </small>

              <h1
                className="m-0 mb-4 font-[Manrope]
                  text-[clamp(2.1rem,4.2vw,3.6rem)] font-extrabold
                  leading-[1.04] tracking-[-.05em] text-[#061f43]"
              >
                {product.name}
              </h1>

              <p className="mb-7 leading-[1.65] text-[#597695]">
                {product.description}
              </p>

              <div
                className="mb-7 grid grid-cols-2 gap-5 rounded-[14px]
                  bg-[#f5f8fc] p-5"
              >
                {product.specs.slice(0, 2).map((spec) => (
                  <span
                    key={spec.label}
                    className="flex flex-col text-[10px] uppercase
                      tracking-[.6px] text-[#6c88a5]"
                  >
                    <b
                      className="font-[Manrope] text-[18px] font-bold
                        normal-case text-[#173d66]"
                    >
                      {spec.value}
                    </b>
                    {spec.label}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <div>
                  <small
                    className="block text-[9px] font-bold uppercase
                      tracking-[1px] text-[#6b87a4]"
                  >
                    A partir de
                  </small>
                  <strong
                    className="block font-[Manrope] text-[26px] font-extrabold
                      tracking-[-.8px] text-[#085bd9]"
                  >
                    {product.price}
                  </strong>
                </div>

                <a
                  href="/#contato"
                  className="group inline-flex items-center justify-center gap-3 cursor-pointer transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1
                    rounded-[7px] bg-[#f5c142] px-6 py-3.5 text-[14px] font-bold
                    text-[#061f43] transition-transform duration-200
                    hover:-translate-y-px"
                >
                  Solicitar orçamento <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FICHA TÉCNICA */}
      <section
        ref={specsReveal.ref as React.RefObject<HTMLElement>}
        className="border-t border-[#e3edf7] py-16 max-[640px]:py-11"
      >
        <div
          className={`mx-auto w-[min(calc(100%-48px),1200px)] transition-all
            duration-700 ease-out max-[900px]:w-[min(calc(100%-32px),1200px)]
            ${specsReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <h2
            className="m-0 mb-8 font-[Manrope] text-[clamp(1.6rem,2.6vw,2.1rem)]
              font-extrabold tracking-[-.04em] text-[#061f43]"
          >
            Ficha técnica
          </h2>

          <div
            className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2
              max-[640px]:grid-cols-1"
          >
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-[12px] border border-[#e3edf7] p-5"
              >
                <small
                  className="block text-[10px] font-bold uppercase
                    tracking-[1px] text-[#6b87a4]"
                >
                  {spec.label}
                </small>
                <strong
                  className="mt-1.5 block font-[Manrope] text-[19px] font-bold
                    text-[#173d66]"
                >
                  {spec.value}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APLICAÇÕES */}
      <section
        ref={appsReveal.ref as React.RefObject<HTMLElement>}
        className="bg-[#061f43] py-16 text-white max-[640px]:py-11"
      >
        <div
          className={`mx-auto w-[min(calc(100%-48px),1200px)] transition-all
            duration-700 ease-out max-[900px]:w-[min(calc(100%-32px),1200px)]
            ${appsReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <p
            className="mb-4.5 text-[11px] font-bold tracking-[1.55px]
              text-[#f5c142]"
          >
            ONDE ESSE MODELO SE ENCAIXA
          </p>

          <h2
            className="m-0 mb-8 max-w-137.5 font-[Manrope]
              text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.1]
              tracking-[-.05em]"
          >
            Aplicações ideais para o {product.name}.
          </h2>

          <ul
            className="grid grid-cols-2 gap-x-8 gap-y-3.5
              max-[640px]:grid-cols-1"
          >
            {product.applications.map((item) => (
              <li
                key={item}
                className="border-b border-[#bed8f2]/23 py-3 font-[Manrope]
                  text-[15px] font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section
          ref={relatedReveal.ref as React.RefObject<HTMLElement>}
          className="py-16 max-[640px]:py-11"
        >
          <div
            className={`mx-auto w-[min(calc(100%-48px),1200px)] transition-all
              duration-700 ease-out max-[900px]:w-[min(calc(100%-32px),1200px)]
              ${relatedReveal.visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            <h2
              className="m-0 mb-8 font-[Manrope]
                text-[clamp(1.6rem,2.6vw,2.1rem)] font-extrabold
                tracking-[-.04em] text-[#061f43]"
            >
              Outros modelos
            </h2>

            <div
              className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2
                max-[640px]:grid-cols-1"
            >
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/bomba-de-concreto/${item.slug}`}
                  className="group block overflow-hidden rounded-[12px] border
                    border-[#e3edf7] transition-shadow duration-200
                    hover:shadow-[0_12px_26px_rgba(13,47,85,.1)]"
                >
                  <div
                    className="h-36 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="p-4">
                    <small
                      className="font-bold uppercase tracking-[1px]
                        text-[#085bd9]"
                    >
                      {item.tag}
                    </small>
                    <strong
                      className="mt-1 block font-[Manrope] text-[15px] font-bold
                        text-[#061f43] transition-colors duration-200
                        group-hover:text-[#085bd9]"
                    >
                      {item.name}
                    </strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
