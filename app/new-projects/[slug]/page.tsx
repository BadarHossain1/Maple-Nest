import { NewProjectDetailsClient } from '@/components/NewProjectDetailsClient';

interface NewProjectPageProps {
    params: {
        slug: string;
    };
}

// Required for Next.js static export when using dynamic routes
export async function generateStaticParams() {
    const slugs = [
        'skyview-condos-london',
        'liberty-towers-london',
        'harbourfront-residences-london',
        'yorkville-heights-london',
        'pacific-view-manchester',
        'mountain-ridge-manchester',
        'olympic-village-manchester',
        'west-end-towers-manchester',
        'plateau-lofts-edinburgh',
        'old-port-condos-edinburgh',
        'downtown-suites-edinburgh',
        'griffintown-towers-edinburgh',
        'bow-river-residences-bristol',
        'downtown-core-bristol',
        'kensington-heights-bristol',
        'mission-district-bristol',
        'byward-market-condos-birmingham',
        'rideau-centre-birmingham',
        'westboro-village-birmingham',
        'waterfront-district-halifax',
        'downtown-halifax-towers'
    ];

    return slugs.map((slug) => ({ slug }));
}

export default function NewProjectPage({ params }: NewProjectPageProps) {
    return <NewProjectDetailsClient slug={params.slug} />;
}
