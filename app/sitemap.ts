import type { MetadataRoute } from 'next';
import { products } from './data/equipamentos';
import { getSiteUrl } from './site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...products.map((product) => ({
      url: `${siteUrl}/bomba-de-concreto/${product.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}