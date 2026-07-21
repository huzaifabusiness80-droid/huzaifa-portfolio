import type { Metadata } from 'next';
import { Host_Grotesk } from 'next/font/google';
import './globals.css';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-host-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Huzaifa | Full Stack Developer Crafting High-End Digital Products',
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Huzaifa is a full stack developer building modern, fast, and reliable web applications using React, Next.js, Node.js, and PostgreSQL.',
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
    <html lang="en" data-theme="light" className={`${hostGrotesk.variable} ${hostGrotesk.className}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
