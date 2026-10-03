import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { HashlessScroll } from './components/HashlessScroll';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { getSiteUrl } from './site-url';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const siteUrl = getSiteUrl();
const siteName = 'Arruda Bombas Hidráulicas';
const siteDescription = 'Bombas de concreto hidráulicas, estacionárias e rebocáveis para lajes, fundações, obras residenciais e comerciais. Atendimento técnico em todo o Brasil.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bomba de Concreto Hidráulica | Arruda Bombas',
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    'bomba de concreto',
    'bomba de concreto hidráulica',
    'bombeamento de concreto',
    'bomba estacionária de concreto',
    'carretinha rebocável para concreto',
    'bomba de concreto para laje',
    'bomba de concreto para fundação',
    'equipamentos para concreto',
    'Arruda Bombas Hidráulicas',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/images/FavIcon.jpg', type: 'image/jpeg' }],
    shortcut: ['/images/FavIcon.jpg'],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName,
    title: `${siteName} | Bombas de concreto`,
    description: siteDescription,
    images: [
      {
        url: '/images/bomab-concreto-vermlho.webp',
        alt: 'Equipamento Arruda Bombas Hidráulicas em operação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Bombas de concreto`,
    description: siteDescription,
    images: ['/images/bomab-concreto-vermlho.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/images/Logo-ArrudaBombas.png`,
      image: `${siteUrl}/images/bomab-concreto-vermlho.webp`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Chácaras Fazenda Coelho',
        addressLocality: 'Hortolândia',
        addressRegion: 'SP',
        postalCode: '13185-503',
        addressCountry: 'BR',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Brasil',
      },
      sameAs: [
        'https://www.instagram.com/arrudabombashidraulicas7/',
        'https://www.youtube.com/@arrudabombashidraulicas-z7d',
      ],
    },
    {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      inLanguage: 'pt-BR',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${manrope.variable} m-0 bg-[#edf4fb]
          text-[#061f43]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <HashlessScroll />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
