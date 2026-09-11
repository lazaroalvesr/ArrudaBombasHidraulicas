import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { HashlessScroll } from './components/HashlessScroll';
import { Footer } from './components/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Arruda Bombas Hidráulicas | Bombas de concreto',
  description: 'Bombas de concreto hidráulicas para obras de todos os portes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/FavIcon.jpg" type="image/jpeg" />
      </head>
      <body
        className={`${dmSans.variable} ${manrope.variable} m-0 bg-[#edf4fb]
          text-[#061f43]`}
      >
        <Header />
        <HashlessScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
