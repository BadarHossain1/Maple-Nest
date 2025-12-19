import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Properties in UK | MapleNest',
  description: 'Find rental properties across UK. Apartments, condos, and houses for rent in major UK cities.',
};

export default function RentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
