'use client';

import Image from 'next/image';

const links = [
  ['Sobre', 'quem-somos'],
  ['Equipamentos', 'equipamentos'],
  ['Soluções', 'servicos'],
  ['Contato', 'contato'],
] as const;

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const social = [
  ['Instagram', 'https://www.instagram.com/arrudabombashidraulicas7/', InstagramIcon],
  ['YouTube', 'https://www.youtube.com/@arrudabombas', YoutubeIcon],
  ['Facebook', 'https://facebook.com/', FacebookIcon],
] as const;

function scrollToSection(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
}

export function Footer() {
  return (
    <footer className="bg-[#061f43] text-[#b8d1ea]">
      <div
        className="mx-auto grid w-[min(calc(100%-48px),1200px)]
          grid-cols-[1.3fr_.8fr_1fr] gap-12 py-17.5
          max-[900px]:w-[min(calc(100%-32px),1200px)]
          max-[900px]:grid-cols-[1.15fr_.75fr_1fr] max-[900px]:gap-7
          max-[900px]:py-14 max-[640px]:grid-cols-1 max-[640px]:gap-10
          max-[640px]:py-12"
      >
        <div>
          <Image
            src="/images/Logo-ArrudaBombas.png"
            alt="Logo Arruda Bombas Hidráulicas"
            width={150}
            height={150}
            className="mb-5"
          />

          <p className="mb-6 max-w-75 text-[13px] leading-[1.65] text-[#8fb3d6]">
            Bombas de concreto para obras em todo o Brasil — do modelo certo ao
            suporte técnico especializado.
          </p>

          <div className="flex gap-2.5">
            {social.map(([label, href, Icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-[8px]
                  border border-white/10 bg-white/5 text-[#b8d1ea]
                  transition-colors duration-200 hover:border-[#f5c142]/40
                  hover:text-[#f5c142]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p
            className="mb-4.5 text-[11px] font-bold tracking-[1.55px]
              text-[#f5c142]"
          >
            NAVEGAÇÃO
          </p>

          <ul className="m-0 list-none p-0">
            {links.map(([label, id]) => (
              <li key={id} className="mb-3">
                <a
                  href={`#${id}`}
                  onClick={scrollToSection(id)}
                  className="text-[13px] font-medium text-[#b8d1ea]
                    transition-colors duration-200 hover:text-[#f5c142]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p
            className="mb-4.5 text-[11px] font-bold tracking-[1.55px]
              text-[#f5c142]"
          >
            CONTATO
          </p>

          <ul className="m-0 list-none space-y-3 p-0 text-[13px]">
            <li className="text-[#b8d1ea]">
              Chácaras Fazenda Coelho, CEP 13185-503
            </li>
            <li className="text-[#b8d1ea]">Hortolândia, SP</li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5519988701809"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#f5c142] transition-colors
                  duration-200 hover:text-white"
              >
                (19) 98870-1809 — WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div
          className="mx-auto flex w-[min(calc(100%-48px),1200px)] flex-wrap
            items-center justify-between gap-x-6 gap-y-2 py-6
            max-[900px]:w-[min(calc(100%-32px),1200px)]"
        >
          <small className="text-[11px] text-[#8fb3d6]">
            © 2026 Arruda Bombas Hidráulicas Ltda. Todos os direitos reservados.
            CNPJ: 00.000.000/0001-00
          </small>

          <small className="text-[11px] text-[#8fb3d6]">
            Desenvolvido por{' '}
            <a
              href="https://www.lazaroalvesr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#b8d1ea] transition-colors
                duration-200 hover:text-[#f5c142]"
            >
              Lázaro Alves R
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}
