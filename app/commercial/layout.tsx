import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Real Estate in the UK | MapleNest',
  description: 'Find commercial real estate opportunities across the UK. Office spaces, retail locations, and investment properties.',
};

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}