import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight, Play } from 'lucide-react';
import { notFound } from 'next/navigation';
import {
  getYoutubeThumbnailUrl,
  getYoutubeWatchUrl,
  operationVideos,
} from '../../data/videos';
import { getSiteUrl } from '../../site-url';
import { getWhatsAppHref } from '../../whatsapp';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return operationVideos.map((video) => ({ slug: video.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = operationVideos.find((item) => item.slug === slug);

  if (!video) return { title: 'Vídeo não encontrado' };

  const path = `/videos/${video.slug}`;

  return {
    title: video.title,
    description: video.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'video.other',
      url: path,
      title: video.title,
      description: video.description,
      images: [{ url: getYoutubeThumbnailUrl(video.id), alt: video.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: video.title,
      description: video.description,
      images: [getYoutubeThumbnailUrl(video.id)],
    },
  };
}

export default async function VideoPage({ params }: PageProps) {
  const { slug } = await params;
  const video = operationVideos.find((item) => item.slug === slug);

  if (!video) notFound();

  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/videos/${video.slug}`;
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: [getYoutubeThumbnailUrl(video.id)],
    uploadDate: video.publishedAt,
    duration: video.duration,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    contentUrl: getYoutubeWatchUrl(video.id),
    mainEntityOfPage: pageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Arruda Bombas Hidráulicas',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/Logo-ArrudaBombas.png`,
      },
    },
  };
  const otherVideos = operationVideos.filter((item) => item.slug !== video.slug);

  return (
    <main className="bg-[#edf4fb] pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <section className="bg-[#061f43] pb-14 pt-36 text-white max-[640px]:pb-10 max-[640px]:pt-29">
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Navegação estrutural" className="flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">Início</Link>
            <ChevronRight aria-hidden="true" size={15} />
            <Link href="/#videos" className="transition-colors hover:text-white">Vídeos</Link>
            <ChevronRight aria-hidden="true" size={15} />
            <span className="truncate text-white/85">{video.shortLabel}</span>
          </nav>
          <p className="mt-9 text-[11px] font-extrabold tracking-[1.55px] text-[#f5c142]">EQUIPAMENTO EM OPERAÇÃO</p>
          <h1 className="mt-4 max-w-4xl font-[Manrope] text-[clamp(2.5rem,5vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-.045em]">
            {video.title}
          </h1>
          <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-[#c8d9ea]">{video.description}</p>
        </div>
      </section>

      <section className="px-6 pt-10 max-[640px]:px-4 max-[640px]:pt-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-[#061629] shadow-[0_22px_48px_rgba(6,31,67,.22)]">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-[1fr_auto] gap-8 px-6 py-14 max-[700px]:grid-cols-1 max-[640px]:px-4 max-[640px]:py-10">
        <div>
          <h2 className="font-[Manrope] text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold tracking-[-.04em] text-[#061f43]">Veja o equipamento trabalhando.</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#46698c]">
            Acompanhe a operação e fale com a Arruda Bombas para avaliar a configuração mais adequada para o seu canteiro de obras.
          </p>
        </div>
        <a
          href={getWhatsAppHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-fit cursor-pointer items-center justify-center gap-3 rounded-[7px] bg-[#f5c142] px-5 py-3.5 text-sm font-extrabold text-[#061f43] transition-transform duration-300 hover:-translate-y-1"
        >
          Solicitar orçamento <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-6 max-[640px]:px-4">
        <div className="border-t border-[#cdddec] pt-10">
          <p className="text-[11px] font-extrabold tracking-[1.45px] text-[#085bd9]">ASSISTA TAMBÉM</p>
          <h2 className="mt-2 font-[Manrope] text-3xl font-extrabold tracking-[-.04em] text-[#061f43]">Outros vídeos em operação</h2>
          <div className="mt-7 grid grid-cols-3 gap-5 max-[700px]:grid-cols-1">
            {otherVideos.map((item) => (
              <Link
                key={item.slug}
                href={`/videos/${item.slug}`}
                className="group overflow-hidden rounded-xl bg-white shadow-[0_12px_26px_rgba(13,47,85,.08)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden bg-[#061629]">
                  <img src={getYoutubeThumbnailUrl(item.id)} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute inset-0 grid place-items-center bg-[#061f43]/20 text-white"><Play aria-hidden="true" size={36} fill="currentColor" /></span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-extrabold tracking-[1.25px] text-[#085bd9]">{item.shortLabel}</p>
                  <h3 className="mt-2 font-[Manrope] text-[17px] font-bold leading-snug text-[#061f43]">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
