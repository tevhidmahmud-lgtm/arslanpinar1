import type { Metadata } from 'next';
import { Rokkitt } from 'next/font/google';
import './globals.css';

const rokkitt = Rokkitt({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rokkitt',
});

export const metadata: Metadata = {
  title: 'Arslanpınar Kereste | Konya Kerestecilikte Önder',
  description: 'Konya Kerestecilikte önder kuruluşlardan bir tanesi olan Arslanpınar Kereste. İnşaatlık kereste, doğramalık kereste, lambri, tomruk, OSB, parkeler ve fiyatlarına ulaşabilirsiniz.',
  keywords: 'Arslanpınar Kereste, Konya Kereste Fiyatları, Kereste Fiyatları, Orman Ürünleri, Tomruk Fiyatları, Laminant Parke Fiyatları, Lambri Fiyatları, İnşaatlık Kereste, Doğramalık Kereste',
  authors: [{ name: 'Arslanpınar Kereste' }],
  creator: 'Arslanpınar Kereste',
  publisher: 'Arslanpınar Kereste',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.arslanpinarkereste.com',
    siteName: 'Arslanpınar Kereste',
    title: 'Arslanpınar Kereste | Konya Kerestecilikte Önder',
    description: 'Konya Kerestecilikte önder kuruluşlardan bir tanesi olan Arslanpınar Kereste. İnşaatlık kereste, doğramalık kereste, lambri, tomruk, OSB, parkeler ve fiyatlarına ulaşabilirsiniz.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arslanpınar Kereste',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arslanpınar Kereste | Konya Kerestecilikte Önder',
    description: 'Konya Kerestecilikte önder kuruluşlardan bir tanesi olan Arslanpınar Kereste.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.arslanpinarkereste.com" />
      </head>
      <body className={`${rokkitt.variable} font-sans`}>{children}</body>
    </html>
  );
}
