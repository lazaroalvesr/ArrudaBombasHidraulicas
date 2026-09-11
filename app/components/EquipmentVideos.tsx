import { ArrowUpRight } from 'lucide-react';
import { RevealSection } from './RevealSection';

const youtubeVideo = {
  id: '8ZCVIdFII9I',
  label: 'EQUIPAMENTO EM OPERAÇÃO',
  title: 'Veja a Arruda trabalhando em campo.',
  description:
    'Acompanhe uma demonstração real e veja o equipamento em funcionamento.',
};

export function EquipmentVideos() {
  const youtubeHref = `https://www.youtube.com/watch?v=${youtubeVideo.id}`;

  return (
    <RevealSection id="videos" className="my-6 max-[900px]:my-4 max-[640px]:my-3">
      <div
        className="mx-auto w-[min(calc(100%-48px),1200px)] py-18 max-[900px]:py-14
          max-[900px]:w-[min(calc(100%-32px),1200px)] max-[640px]:py-9"
      >
        <div
          className="mb-11 flex items-end justify-between gap-12 max-[640px]:mb-8
            max-[640px]:block"
        >
          <div>
            <p
              className="mb-4 text-[11px] font-bold tracking-[1.55px]
                text-[#085bd9]"
            >
              EQUIPAMENTOS EM OPERAÇÃO
            </p>
            <h2
              className="max-w-180 font-[Manrope]
                text-[clamp(2.35rem,4.7vw,4.25rem)] font-extrabold
                leading-[1.04] tracking-[-.04em] text-[#061f43]"
            >
              Veja as bombas de concreto trabalhando de verdade.
            </h2>
          </div>
          <p
            className="max-w-75 text-[14px] leading-[1.6] text-[#597695]
              max-[640px]:mt-4"
          >
            Uma demonstração real para você conhecer o funcionamento do
            equipamento antes de solicitar seu orçamento.
          </p>
        </div>

        <article
          className="grid overflow-hidden rounded-2xl bg-[#061f43]
            shadow-[0_20px_46px_rgba(6,31,67,.16)]
            grid-cols-[1.3fr_.7fr] max-[900px]:grid-cols-1"
        >
          <div className="aspect-video bg-[#061629]">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${youtubeVideo.id}?rel=0`}
              title="Equipamento Arruda Bombas em operação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div
            className="flex flex-col justify-center p-9 text-white
              max-[900px]:p-8 max-[640px]:p-6"
          >
            <span
              className="text-[11px] font-bold tracking-[1.4px] text-[#f5c142]"
            >
              {youtubeVideo.label}
            </span>
            <h3
              className="mt-3 font-[Manrope] text-[clamp(1.8rem,3vw,2.6rem)]
                font-extrabold leading-[1.06] tracking-[-.04em]"
            >
              {youtubeVideo.title}
            </h3>
            <p className="mt-5 max-w-95 leading-7 text-[#bbcee2]">
              {youtubeVideo.description}
            </p>
            <a
              href={youtubeHref}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex w-fit cursor-pointer items-center gap-2
                border-b border-[#f5c142] pb-1 text-sm font-bold text-white
                transition-colors duration-200 hover:text-[#f5c142]"
            >
              Assistir no YouTube
              <ArrowUpRight
                aria-hidden="true"
                size={17}
                className="transition-transform duration-200 ease-out
                  group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </article>
      </div>
    </RevealSection>
  );
}