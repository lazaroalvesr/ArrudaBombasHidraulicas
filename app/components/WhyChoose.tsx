import { RevealSection } from './RevealSection';
const reasons = [
  {
    title: 'Foco em bombas de concreto',
    text: 'Não somos generalistas — atuamos só com bombeamento de concreto, do equipamento ao suporte.',
  },
  {
    title: 'Modelos para diferentes cenários',
    text: 'Do compacto ao de grande porte, indicamos o equipamento certo pra sua obra.',
  },
  {
    title: 'Cotação clara para decidir',
    text: 'Valores, prazos e condições explicados sem letras miúdas.',
  },
  {
    title: 'Atendimento próximo',
    text: 'Suporte técnico direto com quem entende de bombeamento, sem intermediários.',
  },
];

export function WhyChoose() {
  return (
    <RevealSection className="my-6 max-[900px]:my-4 max-[640px]:my-3">
      <div
        className="mx-auto grid w-[min(calc(100%-48px),1200px)]
          grid-cols-[.85fr_1.15fr] gap-[10vw] py-23.75
          max-[900px]:w-[min(calc(100%-32px),1200px)] max-[900px]:py-14
          max-[640px]:grid-cols-1 max-[640px]:gap-8.5 max-[640px]:py-15"
      >
        <div>
          <p
            className="mb-4.5 text-[11px] font-bold tracking-[1.55px]
              text-[#085bd9]"
          >
            POR QUE ESCOLHER A ARRUDA BOMBAS?
          </p>

          <h2
            className="m-0 font-[Manrope] text-[clamp(2.35rem,4.7vw,4.25rem)]
              font-extrabold leading-[1.04] tracking-[-.06em]"
          >
            Uma parceria que começa antes do concreto chegar.
          </h2>
        </div>

        <div className="border-t border-[#c9d9e9]">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="grid grid-cols-[48px_1fr] gap-x-3 border-b
                border-[#c9d9e9] py-4.5"
            >
              <span
                className="text-[11px] font-bold tracking-[1px] text-[#085bd9]"
              >
                0{index + 1}
              </span>

              <h3 className="m-0 font-[Manrope] text-[17px] font-bold">
                {reason.title}
              </h3>

              <p className="col-start-2 m-0 mt-1.25 text-[13px] text-[#587494]">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
