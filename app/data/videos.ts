export const operationVideos = [
  {
    id: 'etolmvTV4dw',
    slug: 'betoneira-25m3-200-bar-em-operacao',
    shortLabel: 'BETONEIRA 25 M³/H',
    title: 'Betoneira para Obras | 25 m³/h e até 200 Bar | Arruda Bombas Hidráulicas',
    description:
      'Veja uma betoneira para obras da Arruda Bombas Hidráulicas em operação, com capacidade de até 25 m³/h e pressão de até 200 bar.',
    publishedAt: '2026-09-19T05:47:27-07:00',
    duration: 'PT44S',
  },
  {
    id: 'GkjuqbdhcsQ',
    slug: 'bomba-de-concreto-rebocavel-200-bar-em-operacao',
    shortLabel: 'REBOCÁVEL 200 BAR',
    title: 'Bomba de Concreto Rebocável 200 Bar em Funcionamento | Arruda Bombas',
    description:
      'Demonstração de uma bomba de concreto rebocável de 200 bar em funcionamento, indicada para obras que exigem mobilidade e praticidade.',
    publishedAt: '2026-09-17T14:54:23-07:00',
    duration: 'PT47S',
  },
  {
    id: 'Oo08y2rHZj0',
    slug: 'bomba-de-concreto-p700-em-operacao',
    shortLabel: 'P700 EM AÇÃO',
    title: 'Bomba de Concreto P700 em Ação | 35 m³/h e até 200 Bar | Arruda Bombas Hidráulicas',
    description:
      'Assista à bomba de concreto P700 em ação, com produção de 35 m³/h e pressão de até 200 bar para frentes de obra exigentes.',
    publishedAt: '2026-09-13T04:57:37-07:00',
    duration: 'PT46S',
  },
  {
    id: '8ZCVIdFII9I',
    slug: 'bomba-de-concreto-da-fabrica-a-obra',
    shortLabel: 'DA FÁBRICA À OBRA',
    title: 'Bomba de Concreto Arruda Bombas Hidráulicas | Da Fábrica à Obra',
    description:
      'Conheça a bomba de concreto da Arruda Bombas Hidráulicas e veja como o equipamento acompanha a operação da fábrica à obra.',
    publishedAt: '2026-09-10T14:03:28-07:00',
    duration: 'PT30S',
  },
] as const;

export function getYoutubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function getYoutubeThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
