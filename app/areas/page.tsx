'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, TrendingUp } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import areasData from '@/data/areas.json';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div 
        className="bg-white shadow-sm border-b"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div className="text-center max-w-3xl mx-auto" {...fadeInUp}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Neighborhood Guides
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Discover the best neighborhoods across UK. Get insights into local lifestyle, 
              amenities, schools, and real estate trends to find your perfect community.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {areasData.map((area) => (
            <motion.div
              key={area.id}
              variants={fadeInUp}
              className="group"
            >
              <Link href={`/areas/${area.slug}`}>
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-40 sm:h-48">
                    <img 
                      src={area.heroImage} 
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-900">
                        {area.city}, {area.province}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {area.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2">
                      {area.description}
                    </p>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-500">Average Condo Price</span>
                        <span className="font-medium text-gray-900">
                          {formatPrice(area.averagePrices.condo)}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-500">Average Home Price</span>
                        <span className="font-medium text-gray-900">
                          {formatPrice(area.averagePrices.detached)}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-500">Average Rent</span>
                        <span className="font-medium text-gray-900">
                          {formatPrice(area.averagePrices.rental, true)}/month
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        <span>{area.demographics?.population.toLocaleString()} residents</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 flex-shrink-0" />
                        <span>${area.demographics?.averageIncome.toLocaleString()} avg income</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
