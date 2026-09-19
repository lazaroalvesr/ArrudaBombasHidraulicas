'use client';

import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="inicio"
      className="relative grid min-h-190 items-center overflow-hidden text-white 
        bg-[linear-gradient(90deg,rgba(2,15,33,.9),rgba(2,15,33,.57),rgba(2,15,33,.22)),url('/images/bomab-concreto-vermlho.webp')] 
        bg-cover bg-position-[center_46%] max-[900px]:min-h-160 max-[640px]:min-h-172.5 
        max-[640px]:bg-[linear-gradient(180deg,rgba(2,15,33,.88),rgba(2,15,33,.72)),url('/images/bomab-concreto-vermlho.webp')] 
        max-[640px]:bg-position-[57%_center]"
    >
      <div
        className="lg:max-w-300 flex flex-col items-start m-auto w-full pt-40 
          pb-10 max-[900px]:px-8 max-[900px]:pt-30 max-[900px]:pb-12 max-[640px]:px-6 max-[640px]:pt-28 max-[640px]:pb-12"
      >
        <p
          className="mb-4.5 text-[11px] font-bold tracking-[1.55px] 
            text-[#f5c142] max-[640px]:mb-3 max-[640px]:text-[10px]"
        >
          BOMBAS DE CONCRETO HIDRÁULICAS
        </p>

        <h1
          className="max-w-202.5 font-[Manrope] text-[clamp(3rem,6.2vw,5.7rem)] 
            font-extrabold leading-[.99] tracking-[-.065em] max-[640px]:text-[2.45rem] max-[640px]:leading-[1.03] max-[640px]:tracking-[-.045em]"
        >
          Bombas de concreto para obras{' '}
          <em className="not-italic text-white">que não podem parar.</em>
        </h1>

        <p
          className="my-6.5 max-w-137.5 text-[18px] leading-[1.6] text-[#d8e7f4] 
            max-[640px]:my-5 max-[640px]:text-[15px] max-[640px]:leading-6"
        >
          Do modelo compacto ao de grande porte, a Arruda indica o equipamento
          certo para o seu projeto — com suporte técnico especializado do
          orçamento à entrega.
        </p>

        <div className="flex flex-wrap gap-3 max-[640px]:w-full max-[640px]:flex-col">
          <button
            type="button"
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-4 
              rounded-[7px] bg-[#f5c142] px-4 py-3.25 text-[16px] font-bold 
              text-[#061f43] transition-transform duration-300 ease-out 
              backface-hidden will-change-transform transform-gpu 
              hover:scale-105 max-[640px]:w-full max-[640px]:justify-between"
          >
            Solicitar orçamento
            <span
              className="transition-transform duration-300 ease-out 
                group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              <ArrowUpRight />
            </span>
          </button>

          <Link
            href="#equipamentos"
            className="group inline-flex items-center justify-center gap-4 
              rounded-[7px] border border-white/55 bg-transparent px-4 py-3.25 
              text-[15px] font-bold text-white transition-all duration-500 
              ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 
              hover:bg-white/10 max-[640px]:w-full max-[640px]:justify-between"
          >
            Conheça os modelos
            <span
              className="transition-transform duration-500 
                ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-1"
            >
              <ArrowDown />
            </span>
          </Link>
        </div>

        <div
          className="mt-12.5 max-[900px]:mt-9 flex gap-6.25 border-t border-white/20 pt-5.25 
            text-[16px] font-medium text-[#d6e8f8] max-[640px]:mt-9 
            max-[640px]:flex-col max-[640px]:gap-2.25"
        >
          <span>• Atendimento em todo o Brasil</span>
          <span>• Garantia de fábrica</span>
        </div>
      </div>
    </section>
  );
}