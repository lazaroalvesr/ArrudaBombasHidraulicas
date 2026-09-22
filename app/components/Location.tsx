import { RevealSection } from './RevealSection';
// components/Location.tsx
export function Location() {
  const endereco = 'Chácaras Fazenda Coelho, Hortolândia - SP, 13185-503';
  const mapsQuery = encodeURIComponent(
    `Arruda Bombas Hidráulicas, ${endereco}`,
  );

  return (
    <RevealSection className="my-6 max-[900px]:my-4 max-[640px]:my-3">
      <div
        className="mx-auto grid w-[min(calc(100%-48px),1200px)] grid-cols-2
          items-center gap-[8vw] py-23.75
          max-[900px]:w-[min(calc(100%-32px),1200px)] max-[640px]:grid-cols-1
          max-[640px]:gap-8.75"
      >
        <div
          className="relative min-h-110 overflow-hidden rounded-2xl
            bg-[#e5eaed]"
        >
          <iframe
            title="Localização Arruda Bombas Hidráulicas"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div>
          <p
            className="mb-4.5 text-[11px] font-bold tracking-[1.55px]
              text-[#085bd9]"
          >
            ONDE ESTAMOS
          </p>
          <h2
            className="m-0 font-[Manrope] text-[clamp(2.35rem,4.7vw,4.25rem)]
              font-extrabold leading-[1.04] tracking-[-.06em]"
          >
            Venha conhecer nossa estrutura.
          </h2>
          <p className="leading-[1.65] text-[#597695]">
            Visite a Arruda Bombas Hidráulicas e converse com nossa equipe sobre
            a solução certa para sua obra.
          </p>

          <div
            className="mt-7 rounded-[14px] bg-white p-6
              shadow-[0_10px_30px_rgba(13,47,85,.08)]"
          >
            <b>Arruda Bombas Hidráulicas</b>
            <div
              className="mt-4.75 grid grid-cols-2 gap-5 border-t
                border-[#e4edf6] pt-4.75"
            >
              {[
                ['ENDEREÇO', 'Chácaras Fazenda Coelho, CEP 13185-503'],
                ['CIDADE', 'Hortolândia'],
                ['ESTADO', 'SP'],
                ['ATENDIMENTO', 'Todo o Brasil'],
              ].map(([label, value]) => (
                <span
                  key={label}
                  className="text-[9px] font-bold tracking-[1px] text-[#6a87a4]"
                >
                  {label}
                  <strong
                    className="mt-1.25 block font-[DM_Sans] text-[14px]
                      font-medium tracking-normal text-[#061f43]"
                  >
                    {value}
                  </strong>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
