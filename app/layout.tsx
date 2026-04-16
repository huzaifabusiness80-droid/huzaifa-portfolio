import type { Metadata } from 'next';
import { Barlow_Condensed, DM_Sans, Sora } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Huzaifa | Full Stack Developer — Karachi, Pakistan',
  description:
    'Huzaifa is a full stack developer based in Karachi, Pakistan. Building modern, fast, and reliable web applications using React, Next.js, Node.js, and PostgreSQL.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js',
    'Web Developer Karachi',
    'Huzaifa Portfolio',
    'TypeScript',
    'PostgreSQL',
  ],
  authors: [{ name: 'Huzaifa' }],
  creator: 'Huzaifa',
  metadataBase: new URL('https://huzaifa.dev'),
  openGraph: {
    title: 'Huzaifa | Full Stack Developer',
    description:
      'Building modern, fast, and reliable digital products. React, Next.js, Node.js, PostgreSQL.',
    url: 'https://huzaifa.dev',
    siteName: 'Huzaifa Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huzaifa | Full Stack Developer',
    description: 'Building modern, fast, and reliable digital products.',
    creator: '@huzaifa',
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
