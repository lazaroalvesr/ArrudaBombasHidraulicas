import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arruda Bombas Hidráulicas',
    short_name: 'Arruda Bombas',
    description: 'Bombas de concreto hidráulicas para obras de todos os portes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#edf4fb',
    theme_color: '#061f43',
    lang: 'pt-BR',
    icons: [
      {
        src: '/images/FavIcon.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  };
}