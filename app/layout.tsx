import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';



const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Huzaifa Full Stack Developer Crafting High-End Digital Products that Scale Businesses.',
  icons: {
    icon: '/favicon.ico',
  },
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
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
