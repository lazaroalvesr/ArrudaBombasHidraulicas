type ProductSpec = {
  label: string;
  value: string;
};

export function getProductFaq(
  name: string,
  applications: string[],
  specs: ProductSpec[],
) {
  const production = specs.find((spec) =>
    spec.label.toLowerCase().includes('produção'),
  )?.value;
  const pressure = specs.find((spec) =>
    spec.label.toLowerCase().includes('pressão'),
  )?.value;
  const works = applications.join(', ').toLocaleLowerCase('pt-BR');

  return [
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
}
