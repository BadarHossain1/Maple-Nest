import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'MapleNest - Find Your Perfect Home in UK',
  description: 'Discover exceptional properties across UK with MapleNest. Search homes for sale and rent in London, Manchester, Edinburgh, Bristol, and Birmingham.',
  keywords: ['real estate', 'UK', 'homes for sale', 'rentals', 'London', 'Manchester', 'Edinburgh', 'Bristol', 'Birmingham'],
  authors: [{ name: 'MapleNest Team' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: 'MapleNest - Find Your Perfect Home in UK',
    description: 'Discover exceptional properties across UK with MapleNest.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MapleNest - Find Your Perfect Home in UK',
    description: 'Discover exceptional properties across UK with MapleNest.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen bg-background overflow-x-hidden')}>
        <div className="relative flex min-h-screen flex-col">
          <TopBar />
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
