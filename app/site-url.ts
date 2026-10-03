export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.arrudabombas.com.br';

  return configuredUrl.replace(/\/$/, '');
}
