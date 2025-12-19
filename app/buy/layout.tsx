import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homes for Sale in UK | MapleNest',
  description: 'Browse homes for sale across UK. Find your perfect property in London, Manchester, Edinburgh, Bristol, Birmingham and more.',
};

export default function BuyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
