'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  ['Sobre', 'quem-somos'],
  ['Equipamentos', 'equipamentos'],
  ['Soluções', 'servicos'],
  ['Contato', 'contato'],
] as const;

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);
  const contactHref = pathname === '/' ? '#contato' : '/#contato';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    if (open) {
      setRendered(true);
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
      timeoutId = setTimeout(() => setRendered(false), 300);
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [open]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setOpen(false);
  };

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-4.5 z-50
        max-[640px]:top-2.5"
    >
      <div
        className="pointer-events-auto relative z-10 mx-auto flex h-17
          w-[min(calc(100%-48px),1200px)] items-center gap-7 rounded-[10px]
          border border-white/20 bg-[rgba(4,20,43,0.83)] px-5.5 text-white
          shadow-[0_12px_30px_rgba(1,17,38,0.22)] backdrop-blur-[14px]
          max-[900px]:w-[min(calc(100%-32px),1200px)] max-[640px]:h-15
          max-[640px]:px-3.75"
      >
        <button
          type="button"
          onClick={() => {
            if (pathname !== '/') {
              router.push('/');
              setOpen(false);
              return;
            }

            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
          aria-label="Arruda Bombas Hidráulicas, início"
          className="flex shrink-0 items-center cursor-pointer gap-2.25 border-0
            bg-transparent p-0 text-[24px] font-extrabold leading-none
            tracking-[-1.5px] max-[640px]:text-[20px]"
        >
          <Image
            src="/images/Logo-ArrudaBombas.png"
            alt="Logo Arruda Bombas Hidráulicas"
            width={180}
            height={180}
          />
        </button>

        <nav
          className="flex items-center gap-7 text-[14px] font-semibold
            text-[#e7f1fc] max-[640px]:hidden"
        >
          {links.map(([label, id]) => (
            <Link
              key={id}
              href={pathname === '/' ? `#${id}` : `/#${id}`}
              onClick={(event) => {
                if (pathname === '/') {
                  event.preventDefault();
                  handleScroll(id);
                }
              }}
              className="transition-colors duration-200 hover:text-[#f5c142]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href={contactHref}
          className="group ml-auto inline-flex shrink-0 items-center justify-center
            gap-4 rounded-[7px] bg-[#f5c142] px-4 py-3.25 text-[13px] font-bold
            text-[#061f43] transition-all duration-500
            ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1
            max-[640px]:hidden"
        >
          Solicitar orçamento
          <span
            className="transition-transform duration-500
              ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <ArrowUpRight />
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="ml-auto hidden h-9 w-9 shrink-0 cursor-pointer place-items-center
            border-0 bg-transparent p-0 max-[640px]:grid"
        >
          <span className="relative grid h-6 w-6 place-items-center">
            <Menu
              aria-hidden="true"
              size={22}
              strokeWidth={2.25}
              className={`absolute transition-[opacity,transform] duration-300
                ease-[cubic-bezier(.22,1,.36,1)] ${
                  open ? 'scale-75 -rotate-45 opacity-0' : 'scale-100 rotate-0 opacity-100'
                }`}
            />
            <X
              aria-hidden="true"
              size={20}
              strokeWidth={2.25}
              className={`absolute transition-[opacity,transform] duration-300
                ease-[cubic-bezier(.22,1,.36,1)] ${
                  open ? 'scale-100 rotate-0 opacity-100' : 'scale-75 rotate-45 opacity-0'
                }`}
            />
          </span>
        </button>
      </div>

      {rendered ? (
        <div
          className={`pointer-events-auto fixed inset-0 z-0 bg-[#061f43]/60 backdrop-blur-sm
            transition-opacity duration-300 ease-out ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setOpen(false)}
        />
      ) : null}

      {rendered ? (
        <nav
          className={`pointer-events-auto absolute inset-x-4
            top-[calc(100%+0.5rem)] z-10 flex flex-col overflow-hidden
            rounded-[10px] border border-white/20 bg-[rgba(4,20,43,0.83)] backdrop-blur-[14px] text-[15px]
            font-semibold text-white shadow-[0_20px_40px_rgba(1,17,38,0.35)]
            transition-[transform,opacity] duration-300 ease-out ${
              visible ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
            }`}
        >
          {links.map(([label, id]) => (
            <Link
              key={id}
              href={pathname === '/' ? `#${id}` : `/#${id}`}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 px-5.5 py-4 transition-colors
                duration-200 last:border-b-0 hover:bg-white/5
                hover:text-[#f5c142]"
            >
              {label}
            </Link>
          ))}
          <Link
            href={contactHref}
            onClick={() => setOpen(false)}
            className="group m-3.75 inline-flex items-center justify-center gap-4
              rounded-[7px] bg-[#f5c142] px-4 py-3.25 text-[13px] font-bold
              text-[#061f43]"
          >
            Solicitar orçamento
            <span>
              <ArrowUpRight />
            </span>
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
