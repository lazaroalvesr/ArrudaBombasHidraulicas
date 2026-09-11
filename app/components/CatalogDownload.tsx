import { Download, FileText } from 'lucide-react';

export function CatalogDownload() {
  return (
    <section aria-labelledby="catalogo-titulo" className="my-6 max-[900px]:my-4 max-[640px]:my-3">
      <div className="mx-auto w-[min(calc(100%-48px),1200px)] max-[900px]:w-[min(calc(100%-32px),1200px)] max-[640px]:w-[calc(100%-32px)]">
        <div className="relative overflow-hidden rounded-[22px] bg-[#061f43] px-10 py-9 text-white shadow-[0_18px_42px_rgba(6,31,67,.18)] max-[900px]:px-8 max-[900px]:py-8 max-[640px]:px-6 max-[640px]:py-7">
          <div className="pointer-events-none absolute -right-12 -top-22 h-62.5 w-62.5 rounded-full border-[28px] border-[#0c5cd8]/35 max-[640px]:-right-27.5 max-[640px]:-top-35" />
          <div className="relative flex items-center justify-between gap-8 max-[640px]:items-start max-[640px]:flex-col max-[640px]:gap-6">
            <div className="flex items-start gap-5 max-[640px]:gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#f5c142] text-[#061f43] max-[640px]:h-12 max-[640px]:w-12">
                <FileText aria-hidden="true" size={25} strokeWidth={2.25} />
              </span>
              <div>
                <p className="mb-2 text-[10px] font-extrabold tracking-[1.5px] text-[#f5c142]">CATÁLOGO ARRUDA</p>
                <h2 id="catalogo-titulo" className="m-0 font-[Manrope] text-[clamp(1.65rem,3vw,2.35rem)] font-extrabold leading-[1.06] tracking-[-.045em]">
                  Conheça todos os equipamentos.
                </h2>
                <p className="mb-0 mt-3 max-w-130 text-[15px] leading-[1.6] text-[#c9dbee] max-[640px]:text-[14px]">
                  Baixe o catálogo completo com modelos, especificações e opções para sua obra.
                </p>
              </div>
            </div>

            <a href="/catalogo-arruda.pdf" download className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 rounded-[7px] bg-[#f5c142] px-5 py-3.5 text-[14px] font-extrabold text-[#061f43] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(0,0,0,.2)] max-[640px]:w-full">
              Baixar catálogo
              <Download aria-hidden="true" size={18} className="transition-transform duration-300 group-hover:translate-y-0.75" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}