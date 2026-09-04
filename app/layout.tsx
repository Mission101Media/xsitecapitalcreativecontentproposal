import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'XSITE Capital — Content Strategy',
  description: 'An interactive presentation on turning founder trust and operating proof into qualified investor demand.',
  openGraph: {
    title: 'XSITE Capital — Content Strategy',
    description: 'Turning trust into qualified investor demand.',
    images: [{ url: '/og.png', width: 1732, height: 908 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XSITE Capital — Content Strategy',
    description: 'Turning trust into qualified investor demand.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
