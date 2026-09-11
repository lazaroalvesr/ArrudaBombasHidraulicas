import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check, ChevronRight, CreditCard } from 'lucide-react';
import { ProductGallery } from '../../components/ProductGallery';
import { ProductQuestions } from '../../components/ProductQuestions';
import { products } from '../../data/equipamentos';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const WHATSAPP_NUMBER = '5519988701809';

function getWhatsAppHref(productName: string) {
  const message = encodeURIComponent(
    `Olá! Vim pelo site da Arruda Bombas e gostaria de solicitar um orçamento para ${productName}.`,
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function formatList(items: string[]) {
  if (items.length < 2) return items[0] ?? '';
  if (items.length === 2) return `${items[0]} e ${items[1]}`;

  return `${items.slice(0, -1).join(', ')} e ${items.at(-1)}`;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: 'Equipamento não encontrado | Arruda Bombas Hidráulicas',
    };
  }

  return {
    title: `${product.name} | Arruda Bombas Hidráulicas`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug);

  const whatsappHref = getWhatsAppHref(product.name);

  return (
    <>
      {/* HERO */}
      <section
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(3,18,39,.95), rgba(3,18,39,.74)), url('${product.images[0]}')`,
        }}
        className="h-80 bg-[#061f43] bg-cover bg-center pb-16 pt-40 max-[640px]:h-auto
          max-[640px]:bg-[position:62%_center] max-[640px]:pb-10 max-[640px]:pt-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-2 text-sm text-white/50">
            <Link
              href="/#equipamentos"
              className="transition-colors hover:text-white"
            >
              Equipamentos
            </Link>

            <ChevronRight size={15} />

            <span className="text-white/80">{product.name}</span>
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#f5c142]" />
              <h3
                className="text-sm font-bold uppercase tracking-[0.15em]
                  text-[#f5c142]"
              >
                Equipamento
              </h3>
            </div>

            <h1
              className="mt-3 text-5xl font-bold tracking-tight text-white
                max-[640px]:text-4xl"
            >
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      {/* FOTO PRINCIPAL */}
      <section className="py-16 max-[640px]:py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-[1.6fr_1fr] gap-5
            max-[900px]:grid-cols-1">
            <ProductGallery
              images={product.images}
              name={product.name}
              badge={
                'badge' in product && typeof product.badge === 'string'
                  ? product.badge
                  : undefined
              }
            />

            {/* INFORMAÇÕES */}
            <div
              className="flex flex-col justify-center rounded-2xl bg-[#f5f8fc]
                p-8 max-[640px]:p-6"
            >
              <span
                className="text-[11px] font-bold uppercase tracking-[1.5px]
                  text-[#085bd9]"
              >
                {product.tag}
              </span>

              <h2
                className="mt-3 font-[Manrope] text-3xl font-extrabold
                  tracking-tight text-[#061f43]"
              >
                {product.name}
              </h2>

              {'subtitle' in product && typeof product.subtitle === 'string' ? (
                <p className="mt-2 font-[Manrope] text-[17px] font-bold text-[#173d66]">
                  {product.subtitle}
                </p>
              ) : null}

              <p className="mt-5 leading-7 text-[#597695]">
                {product.description}
              </p>

              {/* 2 PRINCIPAIS SPECS */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                {product.specs.slice(0, 2).map((spec) => (
                  <div key={spec.label} className="rounded-xl bg-white p-4">
                    <span
                      className="block text-[10px] font-bold uppercase
                        tracking-[.8px] text-[#6c88a5]"
                    >
                      {spec.label}
                    </span>

                    <strong
                      className="mt-1 block font-[Manrope] text-xl font-bold
                        text-[#173d66]"
                    >
                      {spec.value}
                    </strong>
                  </div>
                ))}
              </div>

              {/* PREÇO */}
              <div className="mt-7">
                <span
                  className="block text-[9px] font-bold uppercase tracking-[1px]
                    text-[#6b87a4]"
                >
                  A partir de
                </span>

                <strong
                  className="mt-1 block font-[Manrope] text-3xl font-extrabold
                    text-[#085bd9]"
                >
                  {product.price}
                </strong>
              </div>

              {'motorOptions' in product && Array.isArray(product.motorOptions) ? (
                <div className="mt-6 border-y border-[#d5e2ef] py-4">
                  <span className="block text-[10px] font-bold uppercase tracking-[1px] text-[#6382a0]">
                    Opções de motor
                  </span>
                  <div className="mt-2.5 divide-y divide-[#dce8f2]">
                    {product.motorOptions.map((option) => (
                      <div key={option.name} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                        <span className="font-semibold text-[#173d66]">{option.name}</span>
                        <strong className="shrink-0 font-[Manrope] text-[15px] font-extrabold text-[#085bd9]">
                          {option.price}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-4 flex items-center gap-2 border-l-2 border-[#f5c142] pl-3 text-[13px] font-semibold leading-snug text-[#345b85]">
                <CreditCard aria-hidden="true" size={18} className="shrink-0 text-[#085bd9]" />
                Pagamento facilitado no cartão de crédito, sem juros.
              </div>
              {/* BOTÃO */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1
                  rounded-[7px] bg-[#f5c142] px-6 py-4 text-sm font-bold
                  text-[#061f43] transition-transform duration-200
                  hover:-translate-y-px"
              >
                Solicitar orçamento <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* DESCRIÇÃO */}
      <section className="bg-[#eef5fc] py-20 max-[640px]:py-14">
        <div
          className="mx-auto grid max-w-6xl grid-cols-[.72fr_1.28fr] gap-14 px-6
            max-[900px]:gap-10 max-[640px]:grid-cols-1 max-[640px]:gap-9"
        >
          <div className="border-t border-[#afc8df] pt-6">
            <h2
              className="max-w-78 font-[Manrope] text-[clamp(2.25rem,4vw,3.4rem)]
                font-extrabold leading-[1.02] tracking-[-.04em] text-[#061f43]"
            >
              Descrição do equipamento
            </h2>
            <p className="mt-5 max-w-70 leading-7 text-[#597695]">
              Conheça melhor a solução e veja em quais frentes de obra ela faz sentido.
            </p>
          </div>

          <div className="border-t border-[#afc8df] pt-6">
            <h3
              className="font-[Manrope] text-[clamp(2rem,3.6vw,3.15rem)] font-extrabold
                leading-[1.04] tracking-[-.04em] text-[#061f43]"
            >
              {product.name}
            </h3>
            <p className="mt-5 max-w-3xl text-[clamp(1.1rem,1.7vw,1.32rem)] leading-8 text-[#234f7d]">
              {product.description}
            </p>
            <p className="mt-5 max-w-3xl leading-7 text-[#597695]">
              Indicada para {formatList(product.applications).toLowerCase()},
              ela combina desempenho, mobilidade e praticidade para manter o ritmo da obra.
            </p>

            <div className="mt-10 border-y border-[#c7d9e9] py-5">
              <h4 className="font-[Manrope] text-[15px] font-extrabold text-[#061f43]">
                Aplicações indicadas
              </h4>
              <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 max-[640px]:grid-cols-1">
                {product.applications.map((application) => (
                  <li key={application} className="flex items-center gap-2.5 text-[15px] text-[#365d86]">
                    <Check aria-hidden="true" size={16} className="shrink-0 text-[#085bd9]" />
                    {application}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm font-semibold text-[#173d66]">
              Fale com nossa equipe para confirmar a configuração mais adequada para sua necessidade.
            </p>
          </div>
        </div>
      </section>
      {/* FICHA TÉCNICA */}
      <section className="border-y border-[#d9e6f3] py-16 max-[640px]:py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#085bd9]">Especificações</span>
            <h2 className="mt-2 font-[Manrope] text-[clamp(2.25rem,4vw,3.25rem)] font-extrabold leading-none tracking-[-.04em] text-[#061f43]">Ficha técnica</h2>
          </div>
          <div className="grid grid-cols-2 border-t border-[#bfd2e5] max-[640px]:grid-cols-1">
            {product.specs.map((spec) => (
              <div key={spec.label} className="border-r border-b border-[#bfd2e5] px-6 py-6 last:border-r-0 even:border-r-0 max-[640px]:border-r-0">
                <span className="block text-[11px] font-bold uppercase tracking-[1.1px] text-[#6382a0]">{spec.label}</span>
                <strong className="mt-2 block font-[Manrope] text-[clamp(1.65rem,3vw,2.25rem)] font-extrabold leading-none tracking-[-.035em] text-[#061f43]">{spec.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* DIFERENCIAIS */}
      {product.highlights?.length > 0 && (
        <section className="bg-[#f5f8fc] py-16 max-[640px]:py-10">
          <div className="mx-auto max-w-6xl px-6">
            <span
              className="text-[11px] font-bold uppercase tracking-[1.5px]
                text-[#085bd9]"
            >
              Diferenciais
            </span>

            <h2
              className="mt-2 mb-8 font-[Manrope] text-3xl font-extrabold
                tracking-tight text-[#061f43]"
            >
              Por que escolher este equipamento?
            </h2>

            <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
              {product.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-4 rounded-xl bg-white p-5"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-full bg-[#eaf2ff]"
                  >
                    <Check size={17} className="text-[#085bd9]" />
                  </span>

                  <span className="text-sm font-semibold text-[#173d66]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProductQuestions
        name={product.name}
        applications={product.applications}
        specs={product.specs}
      />
      <section className="px-6 pb-20 pt-6 max-[640px]:px-4 max-[640px]:pb-14">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#0b1d35] px-8 py-16 text-center text-white shadow-[0_20px_46px_rgba(6,31,67,.16)] max-[640px]:px-6 max-[640px]:py-12">
          <h2 className="mx-auto max-w-3xl font-[Manrope] text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.04] tracking-[-.045em]">Vamos encontrar o equipamento certo para a sua obra?</h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-[#b7cae0]">Fale com a Arruda Bombas e receba uma orientação para o seu tipo de obra.</p>
          <a href={getWhatsAppHref(product.name)} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#f5c142] px-7 py-4 text-[15px] font-extrabold text-[#061f43] cursor-pointer transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1">Solicitar orçamento</a>
        </div>
      </section>

      {/* OUTROS EQUIPAMENTOS */}
      {relatedProducts.length > 0 && (
        <section className="pb-20 pt-10 max-[640px]:pb-14 max-[640px]:pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#085bd9]">
                Conheça também
              </span>
              <h2 className="mt-2 font-[Manrope] text-3xl font-extrabold tracking-tight text-[#061f43]">
                Outros equipamentos
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/bomba-de-concreto/${item.slug}`}
                  className="group block cursor-pointer overflow-hidden bg-white shadow-[0_12px_26px_rgba(13,47,85,.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(13,47,85,.16)]"
                >
                  <div className="relative h-52 overflow-hidden bg-[#e9edf1] max-[640px]:h-64">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {'badge' in item && typeof item.badge === 'string' ? (
                      <span className="absolute top-3.5 left-3.5 rounded-[4px] bg-[#f5c142] px-3 py-2 text-[10px] font-extrabold tracking-[1.2px] text-[#061f43] shadow-[0_4px_10px_rgba(0,0,0,.18)]">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#085bd9]">
                      {item.tag}
                    </span>
                    <h3 className="mt-2 font-[Manrope] text-[21px] font-bold tracking-[-.8px] text-[#061f43]">
                      {item.name}
                    </h3>
                    <p className="mt-2 min-h-11 text-[14px] leading-[1.55] text-[#567494]">
                      {item.description}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 border-y border-[#dce8f2] py-4">
                      {item.specs.slice(0, 2).map((spec) => (
                        <div key={spec.label}>
                          <strong className="block font-[Manrope] text-[16px] font-extrabold text-[#173d66]">
                            {spec.value}
                          </strong>
                          <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[.7px] text-[#6c88a5]">
                            {spec.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex items-end justify-between gap-3">
                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-[1px] text-[#6b87a4]">
                          A partir de
                        </span>
                        <strong className="mt-1 block font-[Manrope] text-[22px] font-extrabold text-[#085bd9]">
                          {item.price}
                        </strong>
                      </div>
                      <span className="inline-flex items-center gap-1.5 border-b border-[#085bd9] pb-1 text-[13px] font-bold text-[#061f43]">
                        Ver detalhes
                        <ArrowUpRight aria-hidden="true" size={15} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}