'use client';

import { AlertCircle, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { RevealSection } from './RevealSection';

const equipmentOptions = [
  'Carretinha Pequena',
  'Carretinha Rebocável',
  'P700 estacionária',
  'MultiMix',
  'BetonBomba',
  'Ainda não sei / preciso de orientação',
];

type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'not-configured';

type FormErrors = Partial<Record<'nome' | 'email' | 'whatsapp' | 'equipamento', string>>;

function EquipmentSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    if (open) {
      setRendered(true);
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
      timeoutId = setTimeout(() => setRendered(false), 200);
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [open]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <input type="hidden" name="equipamento" value={value} />

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="mt-1.75 flex w-full cursor-pointer items-center justify-between border-0
          border-b border-[#8fb3d6] aria-invalid:border-[#c53737] bg-transparent py-3.5 text-left
          font-[DM_Sans] text-[16px] text-[#061f43] outline-none"
      >
        <span className={value ? '' : 'text-[#597695]'}>
          {value || 'Selecione um modelo'}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#085bd9] transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {rendered ? (
        <ul
          role="listbox"
          className={`absolute inset-x-0 top-[calc(100%+6px)] z-20 overflow-hidden
            rounded-[10px] border border-[#e0eaf4] bg-white py-1.5
            shadow-[0_16px_36px_rgba(6,31,67,.14)] transition-[opacity,transform]
            duration-200 ease-out ${
              visible ? 'translate-y-0 opacity-100' : '-translate-y-1.5 opacity-0'
            }`}
        >
          {equipmentOptions.map((option) => (
            <li key={option} role="option" aria-selected={value === option}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`block w-full cursor-pointer px-4 py-2.75 text-left
                  font-[DM_Sans] text-[14px] transition-colors duration-150 ${
                    value === option
                      ? 'bg-[#085bd9]/10 font-semibold text-[#085bd9]'
                      : 'text-[#061f43] hover:bg-[#f2f6fb]'
                  }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <span className="mt-2 flex items-center gap-1.5 text-[12px] font-semibold text-[#c53737]">
      <AlertCircle aria-hidden="true" size={14} className="shrink-0" />
      {message}
    </span>
  );
}
export function Contact() {
  const [equipment, setEquipment] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  function clearError(field: keyof FormErrors) {
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nome = String(formData.get('nome') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const whatsapp = String(formData.get('whatsapp') ?? '').trim();
    const nextErrors: FormErrors = {};

    if (!nome) nextErrors.nome = 'Informe seu nome.';
    if (!email) {
      nextErrors.email = 'Informe seu e-mail.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = 'Digite um e-mail válido.';
    }
    if (!whatsapp) nextErrors.whatsapp = 'Informe seu WhatsApp.';
    if (!equipment) nextErrors.equipamento = 'Selecione o equipamento de interesse.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('idle');
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_USER_ID;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('not-configured');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            nome,
            email,
            whatsapp,
            equipamento: equipment,
            mensagem: formData.get('mensagem') || 'Não informada',
            reply_to: email,
          },
        }),
      });

      if (!response.ok) throw new Error('Não foi possível enviar o formulário.');

      form.reset();
      setEquipment('');
      setErrors({});
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }
  const statusMessage = status === 'idle' ? null : {
    sending: 'Enviando sua solicitação…',
    success: 'Recebemos sua solicitação. Em breve nossa equipe entra em contato.',
    error: 'Não foi possível enviar agora. Tente novamente em alguns instantes.',
    'not-configured': 'O formulário ainda precisa ser configurado com o EmailJS.',
  }[status];

  return (
    <RevealSection id="contato" className="my-6 max-[900px]:my-4 max-[640px]:my-3">
      <div
        className="mx-auto grid w-[min(calc(100%-48px),1200px)] grid-cols-2
          gap-[9vw] py-23.75 max-[900px]:w-[min(calc(100%-32px),1200px)]
          max-[900px]:py-14 max-[640px]:grid-cols-1 max-[640px]:gap-8.75
          max-[640px]:py-15"
      >
        <div>
          <p className="mb-4.5 text-[11px] font-bold tracking-[1.55px] text-[#085bd9]">
            CONVERSE COM A ARRUDA
          </p>
          <h2
            className="m-0 font-[Manrope] text-[clamp(2.35rem,4.7vw,4.25rem)]
              font-extrabold leading-[1.04] tracking-[-.04em] text-[#061f43]"
          >
            Vamos encontrar a bomba certa para sua obra.
          </h2>
          <p className="mt-7 leading-[1.65] text-[#597695] max-[640px]:mt-5">
            Conte um pouco sobre sua necessidade e nossa equipe retorna para
            orientar o próximo passo.
          </p>
        </div>

        <form className="grid gap-4.5" onSubmit={handleSubmit} noValidate onInput={() => { if (status !== 'sending') setStatus('idle'); }}>
          <label className="text-[12px] font-bold text-[#204a75]">
            Nome
            <input
              name="nome"
              aria-invalid={Boolean(errors.nome)}
              onChange={() => clearError('nome')}
              autoComplete="name"
              placeholder="Como podemos chamar você?"
              className="mt-1.75 block w-full border-0 border-b border-[#8fb3d6] aria-invalid:border-[#c53737]
                bg-transparent py-3.5 font-[DM_Sans] text-[16px] text-[#061f43]
                outline-none placeholder:text-[#597695]"
            />
            <FieldError message={errors.nome} />
          </label>

          <label className="text-[12px] font-bold text-[#204a75]">
            E-mail
            <input
              name="email"
              type="email"
              aria-invalid={Boolean(errors.email)}
              onChange={() => clearError('email')}
              autoComplete="email"
              placeholder="seu@email.com"
              className="mt-1.75 block w-full border-0 border-b border-[#8fb3d6] aria-invalid:border-[#c53737]
                bg-transparent py-3.5 font-[DM_Sans] text-[16px] text-[#061f43]
                outline-none placeholder:text-[#597695]"
            />
            <FieldError message={errors.email} />
          </label>

          <label className="text-[12px] font-bold text-[#204a75]">
            WhatsApp
            <input
              name="whatsapp"
              type="tel"
              aria-invalid={Boolean(errors.whatsapp)}
              onChange={() => clearError('whatsapp')}
              autoComplete="tel"
              inputMode="tel"
              placeholder="(19) 99999-9999"
              className="mt-1.75 block w-full border-0 border-b border-[#8fb3d6] aria-invalid:border-[#c53737]
                bg-transparent py-3.5 font-[DM_Sans] text-[16px] text-[#061f43]
                outline-none placeholder:text-[#597695]"
            />
            <FieldError message={errors.whatsapp} />
          </label>

          <label className="text-[12px] font-bold text-[#204a75]">
            Equipamento de interesse
            <EquipmentSelect value={equipment} onChange={(value) => { setEquipment(value); clearError('equipamento'); setStatus('idle'); }} />
            <FieldError message={errors.equipamento} />
          </label>

          <label className="text-[12px] font-bold text-[#204a75]">
            Mensagem <span className="font-normal text-[#597695]">(opcional)</span>
            <textarea
              name="mensagem"
              rows={3}
              placeholder="Conte rapidamente sobre a sua obra."
              className="mt-1.75 block w-full resize-y border-0 border-b border-[#8fb3d6] aria-invalid:border-[#c53737]
                bg-transparent py-3.5 font-[DM_Sans] text-[16px] text-[#061f43]
                outline-none placeholder:text-[#597695]"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="group mt-2 inline-flex cursor-pointer items-center justify-between
              rounded-[7px] border-0 bg-[#085bd9] px-4 py-3.25 text-[13px]
              font-bold text-white transition-all duration-500
              ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1
              disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {status === 'sending' ? 'Enviando...' : 'Solicitar orçamento'}
            <ArrowUpRight
              aria-hidden="true"
              size={17}
              className="shrink-0 transition-transform duration-200 ease-out
                group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

          {statusMessage ? (
            <p
              role="status"
              aria-live="polite"
              className={`text-[13px] leading-5 ${
                status === 'success'
                  ? 'text-[#177443]'
                  : status === 'sending'
                    ? 'text-[#597695]'
                    : 'text-[#c53737]'
              }`}
            >
              {statusMessage}
            </p>
          ) : null}
        </form>
      </div>
    </RevealSection>
  );
}