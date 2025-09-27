'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ListingsGrid } from '@/components/ListingsGrid';
import { FilterBar } from '@/components/FilterBar';
import { ViewToggle } from '@/components/ViewToggle';
import { SortOptions } from '@/components/SortOptions';
import { useListings } from '@/hooks/useListings';

const MapView = dynamic(() => import('@/components/MapView').then(mod => mod.MapView), {
  ssr: false,
  loading: () => <div className="h-[70vh] bg-gray-100 rounded-lg animate-pulse" />
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function CommercialPage() {
  const [view, setView] = useState<'grid' | 'map'>('grid');
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('newest');

  const { listings, loading } = useListings('commercial', filters, sortBy);

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        className="bg-white shadow-sm sticky top-16 sm:top-20 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Commercial Properties
              </h1>
              <span className="text-xs sm:text-sm text-gray-500">
                {listings.length} properties
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-between sm:justify-end">
              <div className="flex-1 sm:flex-none">
                <SortOptions value={sortBy} onChange={setSortBy} />
              </div>
              <ViewToggle view={view} onViewChange={setView} />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div {...fadeInUp}>
        <FilterBar
          filters={filters}
          onFiltersChange={setFilters}
          showCommercialFilters
        />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {view === 'grid' ? (
          <ListingsGrid listings={listings} loading={loading} />
        ) : (
          <div className="h-[60vh] sm:h-[70vh] rounded-lg overflow-hidden shadow-lg">
            <MapView listings={listings} />
          </div>
        )}
      </motion.div>
    </div>
  );
}