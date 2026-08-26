import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TargetKB — Compress Images to Any Size',
  description: 'Compress JPG, PNG, WebP and HEIC images to any KB or MB limit. Private, precise, and ready to upload.',
  metadataBase: new URL('https://targetkb.com'),
  openGraph: {
    title: 'TargetKB — Compress Images to Any Size',
    description: 'Compress images to any KB or MB limit. Private, precise, and ready to upload.',
    url: 'https://targetkb.com/',
    siteName: 'TargetKB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebApplication', name: 'TargetKB', url: 'https://targetkb.com/', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any', browserRequirements: 'Requires a modern web browser', description: 'Compress, resize, crop and convert images in your browser.', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }) }} />
        {children}
      </body>
    </html>
  );
}
