'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getWhatsAppHref } from '../whatsapp';

export function FloatingWhatsApp() {
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowPrompt(false), 12_000);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end max-[640px]:bottom-4 max-[640px]:right-4"
      onMouseEnter={() => setShowPrompt(true)}
      onMouseLeave={() => setShowPrompt(false)}
      onFocus={() => setShowPrompt(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setShowPrompt(false);
      }}
    >
      {showPrompt ? (
        <div className="relative max-w-62.5 rounded-xl bg-[#061f43] px-4 py-3 pr-9 text-[13px] font-semibold leading-snug text-white shadow-[0_12px_28px_rgba(6,31,67,.28)] motion-safe:animate-[whatsapp-prompt-in_.45s_ease-out_both]">
          <p>Precisa de ajuda? Fale com a Arruda no WhatsApp.</p>
          <button
            type="button"
            onClick={() => setShowPrompt(false)}
            aria-label="Fechar convite do WhatsApp"
            className="absolute right-2 top-2 inline-flex size-6 cursor-pointer items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/12 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c142]"
          >
            <X aria-hidden="true" size={15} />
          </button>
          <span className="absolute -bottom-1.5 right-5 size-3 rotate-45 bg-[#061f43]" aria-hidden="true" />
        </div>
      ) : null}

      <a
        href={getWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a Arruda Bombas pelo WhatsApp"
        title="Fale conosco pelo WhatsApp"
        className="group relative inline-flex size-15 cursor-pointer items-center justify-center rounded-full bg-[#061f43] text-white shadow-[0_12px_28px_rgba(6,31,67,.32)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-[#0b315f] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#f5c142] max-[640px]:size-14"
      >
        <span className="absolute inset-1 rounded-full border border-white/20" aria-hidden="true" />
        <Image src="/images/Whataspp-icon.png" alt="" width={36} height={36} className="relative size-9 object-contain" />
        <span className="sr-only">Abrir conversa no WhatsApp</span>
      </a>
    </div>
  );
}