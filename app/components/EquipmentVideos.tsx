import { ArrowUpRight } from 'lucide-react';
import { RevealSection } from './RevealSection';

const youtubeVideos = [
  { id: 'etolmvTV4dw', label: 'VÍDEO 01' },
  { id: 'GkjuqbdhcsQ', label: 'VÍDEO 02' },
  { id: 'Oo08y2rHZj0', label: 'VÍDEO 03' },
  { id: '8ZCVIdFII9I', label: 'VÍDEO 04' },
];

export function EquipmentVideos() {
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
            Demonstrações reais para você conhecer o funcionamento do
            equipamento antes de solicitar seu orçamento.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1 max-[640px]:gap-4">
          {youtubeVideos.map((video) => {
            const youtubeHref = `https://www.youtube.com/watch?v=${video.id}`;

            return (
              <article
                key={video.id}
                className="overflow-hidden rounded-2xl bg-[#061f43]
                  shadow-[0_16px_34px_rgba(6,31,67,.14)]"
              >
                <div className="aspect-video bg-[#061629]">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
                    title={`Arruda Bombas em operação — ${video.label}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4 max-[640px]:px-4">
                  <span className="text-[10px] font-extrabold tracking-[1.35px] text-[#f5c142]">
                    {video.label} · EM OPERAÇÃO
                  </span>
                  <a
                    href={youtubeHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-[12px] font-bold text-white transition-colors duration-200 hover:text-[#f5c142]"
                  >
                    YouTube
                    <ArrowUpRight
                      aria-hidden="true"
                      size={15}
                      className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}