'use client';

import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { useState } from 'react';

type Spec = { label: string; value: string };

type ProductQuestionsProps = {
  name: string;
  applications: string[];
  specs: Spec[];
};

export function ProductQuestions({
  name,
  applications,
  specs,
}: ProductQuestionsProps) {
  const [openQuestion, setOpenQuestion] = useState(0);
  const production = specs.find((spec) =>
    spec.label.toLowerCase().includes('produção'),
  )?.value;
  const pressure = specs.find((spec) =>
    spec.label.toLowerCase().includes('pressão'),
  )?.value;
  const works = applications.join(', ').toLocaleLowerCase('pt-BR');

  const questions = [
    {
      question: `Para quais obras a ${name} é indicada?`,
      answer: `${name} é indicada para ${works}.`,
    },
    {
      question: 'Qual é a capacidade deste equipamento?',
      answer: `Este modelo trabalha com produção de ${production ?? 'acordo com a configuração'}${pressure ? ` e pressão máxima de ${pressure}` : ''}.`,
    },
    {
      question: 'Ela atende uma obra residencial?',
      answer: applications.some((application) =>
        application.toLowerCase().includes('residencial'),
      )
        ? 'Sim. Este equipamento está indicado para obras residenciais, além das demais aplicações listadas acima.'
        : 'A indicação depende do tipo de serviço, volume de concreto e condições de acesso ao canteiro.',
    },
    {
      question: 'Como sei se este é o modelo certo para minha obra?',
      answer:
        'Informe o tipo de obra, a quantidade de concreto e as condições de acesso. Assim é possível avaliar a configuração mais adequada.',
    },
  ];

  return (
    <section className="py-20 max-[640px]:py-14">
      <div
        className="mx-auto grid max-w-6xl grid-cols-[.82fr_1.18fr] gap-16 px-6
          max-[900px]:grid-cols-1 max-[900px]:gap-9"
      >
        <div>
          <span
            className="grid h-12 w-12 place-items-center rounded-xl bg-[#e7f0fb]
              text-[#085bd9]"
          >
            <MessageCircleQuestion aria-hidden="true" size={25} />
          </span>
          <h2
            className="mt-6 font-[Manrope] text-[clamp(2.1rem,4vw,3.25rem)]
              font-extrabold leading-[1.03] tracking-[-.045em] text-[#061f43]"
          >
            Esta bomba serve para a sua obra?
          </h2>
          <p
            className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#597695]"
          >
            Tire as dúvidas principais antes de pedir seu orçamento.
          </p>
        </div>
        <div className="border-t border-[#cdddec]">
          {questions.map((item, index) => {
            const isOpen = index === openQuestion;
            return (
              <div key={item.question} className="border-b border-[#cdddec]">
                <button
                  type="button"
                  onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-6
                    text-left font-[Manrope] text-[17px] font-bold leading-snug
                    text-[#061f43] transition-colors hover:text-[#085bd9]"
                >
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    size={22}
                    className={`shrink-0 transition-transform duration-200
                    ${isOpen ? 'rotate-180 text-[#085bd9]' : ''}`}
                  />
                </button>                <div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-[#597695]">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
