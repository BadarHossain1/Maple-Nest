'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Share2, MapPin, Calendar, Bed, Bath, Square, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PhotoGallery } from '@/components/PhotoGallery';
import { SaveButton } from '@/components/SaveButton';
import { ContactForm } from '@/components/ContactForm';
import { formatPrice, formatSquareFeet } from '@/lib/utils';
import listingsData from '@/data/listings.json';
import agentsData from '@/data/agents.json';
import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('@/components/MapView').then(mod => mod.MapView), {
  ssr: false,
  loading: () => <div className="h-80 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
    <p className="text-gray-500">Loading map...</p>
  </div>
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface ListingDetailsClientProps {
  slug: string;
}

export default function ListingDetailsClient({ slug }: ListingDetailsClientProps) {
  const [listing, setListing] = useState<any>(null);
  const [agent, setAgent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundListing = listingsData.find(l => l.slug === slug);
    if (foundListing) {
      setListing(foundListing);
      const foundAgent = agentsData.find(a => a.email === foundListing.broker.email);
      setAgent(foundAgent);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-8">The property you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/buy">
            <Button>Browse Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        className="bg-white shadow-sm border-b sticky top-16 sm:top-20 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link
              href={listing.status === 'for-sale' ? '/buy' : '/rent'}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Back to listings</span>
              <span className="sm:hidden">Back</span>
            </Link>

            <div className="flex items-center gap-1 sm:gap-2">
              <SaveButton listingId={listing.id} />
              <Button variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                <Share2 className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div {...fadeInUp}>
        <PhotoGallery images={listing.images} />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
        {...fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Property Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {formatPrice(listing.priceCAD, listing.status === 'for-rent')}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-2 text-sm sm:text-base">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{listing.address}</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{listing.city}, {listing.province}</p>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 text-center bg-gray-50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
                  {listing.beds > 0 && (
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                      <Bed className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                      <span className="font-medium text-sm sm:text-base">{listing.beds}</span>
                      <span className="text-xs text-gray-500 sm:hidden">beds</span>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                    <Bath className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                    <span className="font-medium text-sm sm:text-base">{listing.baths}</span>
                    <span className="text-xs text-gray-500 sm:hidden">baths</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                    <Square className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                    <span className="font-medium text-xs sm:text-base">{formatSquareFeet(listing.areaSqft)}</span>
                    <span className="text-xs text-gray-500 sm:hidden">sqft</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Home className="h-4 w-4 flex-shrink-0" />
                  <span className="capitalize">{listing.propertyType.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  <span>Built {listing.yearBuilt}</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>{listing.daysOnMarket} days on market</span>
                {listing.verified && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-emerald-600 font-medium">Verified</span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{listing.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {listing.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Location</h2>
              <div className="h-64 sm:h-80 rounded-lg overflow-hidden">
                <MapView listings={[listing]} showSearch={false} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:sticky lg:top-32">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Contact Agent
                </h3>
                {agent && (
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={agent.headshot}
                        alt={agent.name}
                        width={48}
                        height={48}
                        unoptimized
                        className="object-cover w-10 h-10 sm:w-12 sm:h-12"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">{agent.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{agent.brokerage}</p>
                    </div>
                  </div>
                )}
              </div>
              <ContactForm listing={listing} agent={agent} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}