import { RevealSection } from './RevealSection';
const steps = [
  [
    'Entendemos sua obra',
    'O tipo de aplicação e as condições de trabalho orientam a conversa.',
  ],
  [
    'Indicamos o modelo',
    'Você recebe direcionamento claro para avaliar a melhor configuração.',
  ],
  [
    'Apoiamos sua decisão',
    'Nossa equipe ajuda você a fechar a cotação com segurança.',
  ],
];

export function Process() {
  return (
    <RevealSection className="my-6 max-[900px]:my-4 max-[640px]:my-3">
      <div
        className="mx-auto w-[min(calc(100%-48px),1200px)] py-23.75
          max-[900px]:w-[min(calc(100%-32px),1200px)] max-[900px]:py-14
          max-[640px]:py-15"
      >
        <p
          className="mb-4.5 text-[11px] font-bold tracking-[1.55px]
            text-[#085bd9]"
        >
          DO PRIMEIRO CONTATO À ENTREGA
        </p>

        <h2
          className="m-0 font-[Manrope] text-[clamp(2.35rem,4.7vw,4.25rem)]
            font-extrabold leading-[1.04] tracking-[-.06em]"
        >
          Uma escolha técnica, sem complicação.
        </h2>

        <div className="mt-12 grid grid-cols-3 gap-8.75 max-[640px]:grid-cols-1">
          {steps.map(([title, text], index) => (
            <div key={title} className="border-t border-[#c9d9e9] pt-4.5">
              <span
                className="text-[11px] font-bold tracking-[1px] text-[#085bd9]"
              >
                0{index + 1}
              </span>

              <h3
                className="my-3.25 mb-1.75 font-[Manrope] text-[20px] font-bold"
              >
                {title}
              </h3>

              <p className="m-0 text-[14px] leading-[1.55] text-[#587494]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
