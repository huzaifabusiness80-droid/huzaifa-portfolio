import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Host_Grotesk, Instrument_Serif } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-host-grotesk',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: 'Huzaifa | Full Stack Developer & Digital Product Engineer',
  description:
    'Huzaifa is a full stack developer and digital product engineer crafting modern, fast, and scalable web applications.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js',
    'Huzaifa Portfolio',
    'TypeScript',
  ],
  authors: [{ name: 'Huzaifa' }],
  creator: 'Huzaifa',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${hostGrotesk.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-host-grotesk antialiased bg-white text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
