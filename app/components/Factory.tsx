import { RevealSection } from './RevealSection';
export function Factory() {
  return (
    <RevealSection className="my-6 max-[900px]:my-4 max-[640px]:my-3">
      <div
        className="mx-auto grid w-[min(calc(100%-48px),1200px)] grid-cols-2
          items-center gap-[8vw] py-23.75
          max-[900px]:w-[min(calc(100%-32px),1200px)] max-[640px]:grid-cols-1
          max-[640px]:gap-8.75"
      >
        <div
          className="min-h-142.5 rounded-2xl
            bg-[url('/images/equipamentos/P700/P700_1.png')] bg-cover bg-center
            max-[640px]:min-h-87.5"
        />

        <div>
          <p
            className="mb-4.5 text-[11px] font-bold tracking-[1.55px]
              text-[#085bd9]"
          >
            QUEM FABRICA, ENTENDE A OBRA
          </p>

          <h2
            className="m-0 font-[Manrope] text-[clamp(2.35rem,4.7vw,4.25rem)]
              font-extrabold leading-[1.04] tracking-[-.06em]"
          >
            Estrutura para construir equipamentos que acompanham o seu ritmo.
          </h2>

          <p className="leading-[1.65] text-[#597695]">
            Da produção à entrega, a Arruda trabalha para levar soluções
            robustas de bombeamento de concreto até a sua obra.
          </p>

          <div
            className="mt-8.75 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1"
          >
            <div className="border-t border-[#c9d9e9] pt-4">
              <b className="block font-[Manrope] text-[15px] font-bold">
                Projetos para diferentes aplicações
              </b>

              <span className="mt-1.75 block text-[13px] text-[#587494]">
                Escolha guiada pela necessidade da obra.
              </span>
            </div>

            <div className="border-t border-[#c9d9e9] pt-4">
              <b className="block font-[Manrope] text-[15px] font-bold">
                Atendimento próximo
              </b>

              <span className="mt-1.75 block text-[13px] text-[#587494]">
                Uma conversa técnica, direta e objetiva.
              </span>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
