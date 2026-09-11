import { RevealSection } from './RevealSection';
import { ArrowUpRight } from 'lucide-react';

export function Applications() {
  return (
    <RevealSection className="my-6 max-[900px]:my-4 bg-[#061f43] text-white max-[640px]:my-3">
      <div
        className="mx-auto grid w-[min(calc(100%-48px),1200px)] grid-cols-2
          items-center gap-[8vw] py-23.75
          max-[900px]:w-[min(calc(100%-32px),1200px)] max-[640px]:grid-cols-1
          max-[640px]:gap-8.75"
      >
        <div
          className="min-h-135 rounded-2xl
            bg-[linear-gradient(90deg,rgba(3,21,45,.1),rgba(3,21,45,.25)),url('/images/carretinha-compacta.webp')]
            bg-cover bg-center max-[640px]:min-h-87.5"
        />

        <div>
          <p
            className="mb-4.5 text-[11px] font-bold tracking-[1.55px]
              text-[#f5c142]"
          >
            PARA CADA TIPO DE APLICAÇÃO
          </p>

          <h2
            className="m-0 max-w-137.5 font-[Manrope]
              text-[clamp(2.35rem,4.7vw,4.25rem)] font-extrabold leading-[1.04]
              tracking-[-.06em]"
          >
            Uma bomba de concreto pode transformar o ritmo da obra.
          </h2>

          <ul className="my-8.5 list-none p-0">
            {[
              'Edifícios e fundações',
              'Galpões e estruturas',
              'Lajes e pisos',
              'Obras residenciais',
            ].map((item) => (
              <li
                key={item}
                className="border-b border-[#bed8f2]/23 py-3.5 font-[Manrope]
                  text-[16px] font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#equipamentos"
            className="group inline-flex items-center justify-center gap-4 cursor-pointer transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1
              rounded-[7px] bg-[#f5c142] px-4 py-3.25 text-[13px] font-bold
              text-[#061f43]"
          >
            Encontre o modelo ideal <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </RevealSection>
  );
}
