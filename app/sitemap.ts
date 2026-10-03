import type { MetadataRoute } from 'next';
import { products } from './data/equipamentos';
import { operationVideos } from './data/videos';
import { getSiteUrl } from './site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...products.map((product) => ({
      url: `${siteUrl}/bomba-de-concreto/${product.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...operationVideos.map((video) => ({
      url: `${siteUrl}/videos/${video.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
