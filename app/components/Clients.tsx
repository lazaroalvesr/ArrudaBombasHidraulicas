import { RevealSection } from './RevealSection';
const clients = [
  { name: 'Ambipar Group', logo: '/images/clientes/ambipar-group-logo.svg' },
  { name: 'BV Bombeamento', logo: '/images/clientes/bv-bombeamento.jpeg' },
  { name: 'Central Mix', logo: '/images/clientes/central-mix.jpeg' },
  { name: 'Pacheco Concretos', logo: '/images/clientes/pacheco-concretos.jpeg' },
  { name: 'RV Concreto', logo: '/images/clientes/rv-concreto.jpeg' },
];

export function Clients() {
  return (
    <RevealSection className="my-6 max-[900px]:my-4 bg-[#061f43] text-center text-white max-[640px]:my-3">
      <div className="mx-auto w-[min(calc(100%-48px),1200px)] py-23.75 max-[900px]:w-[min(calc(100%-32px),1200px)] max-[900px]:py-14 max-[640px]:py-15">
        <p className="mb-4.5 text-[11px] font-bold tracking-[1.55px] text-[#f5c142]">CLIENTES E PARCEIROS</p>
        <h2 className="mx-auto max-w-212.5 font-[Manrope] text-[clamp(2.35rem,4.7vw,4.25rem)] font-extrabold leading-[1.04] tracking-[-.06em]">Empresas que contam com a Arruda.</h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#b8cce3]">Parcerias construídas em obras que exigem ritmo, confiabilidade e resultado.</p>

        <div className="mt-12 grid grid-cols-5 gap-4 max-[900px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-3">
          {clients.map((client) => (
            <div key={client.name} className="group flex aspect-[1.45/1] items-center justify-center rounded-2xl bg-white p-6 shadow-[0_12px_26px_rgba(0,0,0,.12)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 max-[640px]:p-5">
              <img src={client.logo} alt={`Logo ${client.name}`} className="max-h-full max-w-full object-contain transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]" />
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}