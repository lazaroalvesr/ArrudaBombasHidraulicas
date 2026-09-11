'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

type ProductGalleryProps = { images: string[]; name: string; badge?: string };

export function ProductGallery({ images, name, badge }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const thumbnailLimit = images.length <= 5 ? 5 : 4;
  const previewImages = images.slice(0, thumbnailLimit);
  const remainingImages = Math.max(images.length - previewImages.length, 0);
  const activeImage = images[activeIndex] ?? images[0];
  const backgroundImage = activeImage ?? images[0];

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
    };
  }, [isOpen]);

  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const showNext = () =>
    setActiveIndex((current) => (current + 1) % images.length);

  return (
    <>
      <div className="grid grid-cols-[104px_1fr] gap-4 max-[640px]:grid-cols-1">
        <div
          className="flex h-130 flex-col gap-3 max-[640px]:order-2
            max-[640px]:h-auto max-[640px]:flex-row max-[640px]:overflow-x-auto
            max-[640px]:pb-1"
        >
          {previewImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver imagem ${index + 1} de ${name}`}
              aria-pressed={index === activeIndex}
              className={`h-21 w-22 min-h-0 shrink-0 cursor-pointer flex-1 overflow-hidden
              rounded-xl bg-[#e9edf1] transition-all duration-200
              max-[640px]:flex-none ${
                index === activeIndex
                  ? 'ring-2 ring-[#085bd9] ring-offset-2'
                  : 'opacity-65 hover:opacity-100'
              }`}
            >
              <img src={image} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
          {remainingImages > 0 ? (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex h-21 w-22 min-h-0 shrink-0 cursor-pointer flex-1 flex-col
                items-center justify-center rounded-xl border border-[#b9c9da]
                bg-[#f7fbff] text-[#0b5dd7] transition duration-200
                hover:-translate-y-px hover:bg-[#e9f2fb] max-[640px]:flex-none"
              aria-label={`Ver mais ${remainingImages} fotos de ${name}`}
            >
              <span
                className="font-[Manrope] text-[26px] font-bold tracking-[-1px]"
              >
                +{remainingImages}
              </span>
              <small
                className="mt-0.5 font-[DM_Sans] text-[9px] font-bold
                  tracking-[.8px] text-[#6a87a4] uppercase"
              >
                ver todas
              </small>
            </button>
          ) : null}
        </div>
        <div
          className="group relative h-130 overflow-hidden rounded-2xl bg-[#071629]
            shadow-[0_20px_50px_rgba(6,31,67,.15)] max-[640px]:h-87.5"
        >
          {badge ? (
            <span
              className="absolute top-5 left-5 z-20 rounded bg-[#f5c142] px-3
                py-2 text-[10px] font-extrabold tracking-[1px] text-[#061f43]
                shadow-lg"
            >
              {badge}
            </span>
          ) : null}
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover
              opacity-65 blur-2xl"
          />
          <span
            className="absolute inset-0 bg-[#061629]/20"
            aria-hidden="true"
          />
          <img
            src={activeImage}
            alt={`${name} — imagem ${activeIndex + 1}`}
            className="relative z-10 h-full w-full object-contain"
          />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 z-15 cursor-pointer"
            aria-label={`Ampliar galeria de ${name}`}
          />
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute top-1/2 left-3 z-30 hidden h-9 w-9 cursor-pointer
                  -translate-y-1/2 place-items-center rounded-full bg-white/92 text-[#061f43]
                  shadow-[0_5px_16px_rgba(3,18,39,.24)] max-[640px]:grid"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={21} />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute top-1/2 right-3 z-30 hidden h-9 w-9 cursor-pointer
                  -translate-y-1/2 place-items-center rounded-full bg-white/92 text-[#061f43]
                  shadow-[0_5px_16px_rgba(3,18,39,.24)] max-[640px]:grid"
                aria-label="Próxima foto"
              >
                <ChevronRight size={21} />
              </button>
            </>
          ) : null}
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed inset-0 z-100 grid place-items-center
            bg-[rgba(3,18,39,.82)] p-7 backdrop-blur-[8px] max-[640px]:p-3"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de fotos: ${name}`}
          onMouseDown={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[calc(100vh-56px)] w-full max-w-280
              rounded-[18px] bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,.35)]
              max-[640px]:max-h-[calc(100vh-24px)] max-[640px]:p-2.5"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-4 -right-4 z-40 grid h-10.5 w-10.5
                cursor-pointer place-items-center rounded-full bg-white/92 text-[#061f43] shadow-[0_6px_18px_rgba(3,18,39,.18)] transition-transform duration-200 hover:scale-105
                max-[640px]:-top-3.5 max-[640px]:-right-3.5 max-[640px]:h-9.5
                max-[640px]:w-9.5"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar galeria"
            >
              <X size={22} />
            </button>
            <div
              className="grid grid-cols-[78px_1fr] gap-3
                max-[640px]:grid-cols-1"
            >
              <div
                className="gallery-thumbnail-scroll flex h-[min(72vh,660px)] flex-col gap-2
                  overflow-x-hidden overflow-y-auto pr-1 max-[640px]:order-2 max-[640px]:h-auto
                  max-[640px]:max-h-none max-[640px]:flex-row
                  max-[640px]:overflow-x-auto max-[640px]:overflow-y-hidden
                  max-[640px]:pr-0"
              >
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ver imagem ${index + 1} de ${name}`}
                    className={`min-h-16.5 w-full shrink-0 cursor-pointer flex-1 overflow-hidden
                      rounded-lg border-2 bg-[#e9edf1] max-[640px]:w-19.5 max-[640px]:flex-none
                      ${index === activeIndex ? 'border-[#085bd9]' : 'border-transparent'}`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <div
                className="relative flex min-h-0 max-h-[72vh] items-center
                  justify-center overflow-hidden rounded-[11px] bg-[#071b35]
                  max-[640px]:h-[58vh] max-[640px]:max-h-[58vh]"
              >
                <img
                  src={backgroundImage}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110
                    object-cover opacity-65 blur-2xl"
                />
                <span
                  className="absolute inset-0 bg-[#061629]/20"
                  aria-hidden="true"
                />
                <img
                  src={activeImage}
                  alt={`${name} — imagem ${activeIndex + 1}`}
                  className="relative z-10 block h-auto w-auto max-h-[72vh]
                    max-w-full object-contain max-[640px]:h-[58vh] max-[640px]:max-h-[58vh]"
                />
                <button
                  type="button"
                  className="absolute top-1/2 left-5 z-20 grid h-12 w-12 cursor-pointer
                    -translate-y-1/2 place-items-center rounded-full bg-white/91
                    text-[#061f43] max-[640px]:left-2.5 max-[640px]:h-10
                    max-[640px]:w-10"
                  onClick={showPrevious}
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  className="absolute top-1/2 right-5 z-20 grid h-12 w-12 cursor-pointer
                    -translate-y-1/2 place-items-center rounded-full bg-white/91
                    text-[#061f43] max-[640px]:right-2.5 max-[640px]:h-10
                    max-[640px]:w-10"
                  onClick={showNext}
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
