import { RevealSection } from './RevealSection';
import { ArrowUpRight } from 'lucide-react';

const services = [
  [
    'Venda de bombas de concreto',
    'Modelos para diferentes frentes, portes de obra e necessidades de mobilidade.',
  ],
  [
    'Orientação para escolha',
    'Nossa equipe avalia o tipo de aplicação da sua obra antes de indicar o equipamento.',
  ],
  [
    'Suporte na cotação',
    'Tire dúvidas técnicas e comerciais antes de fechar negócio.',
  ],
];

export function Services() {
  return (
    <RevealSection id="servicos" className="my-6 max-[900px]:my-4 max-[640px]:my-3">
      <div
        className="mx-auto w-[min(calc(100%-48px),1200px)] py-23.75
          max-[900px]:w-[min(calc(100%-32px),1200px)] max-[900px]:py-14
          max-[640px]:py-15"
      >
        <div
          className="mb-11.25 flex items-end justify-between gap-15
            max-[640px]:block"
        >
          <div>
            <p
              className="mb-4.5 text-[11px] font-bold tracking-[1.55px]
                text-[#085bd9]"
            >
              SOLUÇÕES E SERVIÇOS
            </p>

            <h2
              className="m-0 max-w-180 font-[Manrope]
                text-[clamp(2.35rem,4.7vw,4.25rem)] font-extrabold
                leading-[1.04] tracking-[-.06em]"
            >
              Mais do que equipamento: uma escolha bem orientada para a obra.
            </h2>
          </div>

          <p
            className="m-0 max-w-75 text-[14px] leading-[1.6] text-[#597695]
              max-[640px]:mt-4.5"
          >
            Do primeiro contato ao orçamento, ajudamos você a chegar ao
            equipamento adequado.
          </p>
        </div>

        <div className="border-t border-[#c9d9e9]">
          {services.map(([title, text], index) => (
            <article
              key={title}
              className="grid grid-cols-[70px_1fr_.9fr_auto] items-center
                gap-6.25 border-b border-[#c9d9e9] py-6.75
                max-[900px]:grid-cols-[45px_1fr_.9fr]
                max-[640px]:grid-cols-[34px_1fr]"
            >
              <span
                className="text-[11px] font-bold tracking-[1px] text-[#085bd9]"
              >
                0{index + 1}
              </span>

              <h3
                className="m-0 font-[Manrope] text-[21px] font-bold
                  max-[640px]:text-[18px]"
              >
                {title}
              </h3>

              <p
                className="m-0 text-[14px] leading-[1.55] text-[#597695]
                  max-[640px]:col-start-2"
              >
                {text}
              </p>

              <a
                href="#contato"
                className="group inline-flex items-center gap-1 text-[13px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 font-bold max-[900px]:hidden"
              >
                Saiba mais <ArrowUpRight aria-hidden="true" size={15} className="shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
