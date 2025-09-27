'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/ddatffr7f/video/upload/v1759001835/Untitled_video_-_Made_with_Clipchamp_1_sktylb.mp4" 
            type="video/mp4" 
          />
          {/* Fallback image if video doesn't load */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 w-full py-8 sm:py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Real homes live here
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Real Prices. Real Photos. Real Properties.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-5xl mx-auto"
        >
          {!isSearchOpen ? (
            /* Search Toggle Button */
            <div className="flex justify-center">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3 text-lg shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Find Your Perfect Home
              </button>
            </div>
          ) : (
            /* Full Search Form */
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Property Type Tabs */}
              <div className="bg-white rounded-t-lg p-1 mb-0 shadow-lg">
                <div className="flex overflow-x-auto scrollbar-hide">
                  <div className="flex min-w-max gap-1 px-1">
                    <button className="px-4 sm:px-6 py-2.5 sm:py-3 text-green-600 font-medium bg-white rounded-md shadow-sm text-xs sm:text-sm lg:text-base whitespace-nowrap">
                      Properties
                    </button>
                    <button className="px-4 sm:px-6 py-2.5 sm:py-3 text-gray-600 font-medium hover:text-green-600 transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap">
                      New Projects
                    </button>
                    <button className="px-4 sm:px-6 py-2.5 sm:py-3 text-gray-600 font-medium hover:text-green-600 transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap">
                      Transactions
                    </button>
                    <button className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-600 font-medium hover:text-green-600 transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap">
                      Valuation™
                    </button>
                    <button className="px-4 sm:px-6 py-2.5 sm:py-3 text-gray-600 font-medium hover:text-green-600 transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap">
                      Agents
                    </button>
                  </div>
                </div>
              </div>

              {/* Search Form */}
              <div className="bg-white rounded-lg rounded-tl-none shadow-lg p-3 sm:p-4 lg:p-6">
                {/* Buy/Rent Toggle */}
                <div className="flex mb-4 rounded-md overflow-hidden">
                  <button className="flex-1 px-4 py-2.5 sm:py-3 bg-green-50 text-green-600 font-medium border border-green-200 text-xs sm:text-sm lg:text-base">
                    Buy
                  </button>
                  <button className="flex-1 px-4 py-2.5 sm:py-3 bg-white text-gray-600 font-medium border border-gray-200 border-l-0 hover:bg-gray-50 text-xs sm:text-sm lg:text-base">
                    Rent
                  </button>
                </div>

                {/* Search Controls */}
                <div className="space-y-3 sm:space-y-4 mb-4">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-xs sm:text-sm lg:text-base"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <select className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600 text-xs sm:text-sm lg:text-base">
                      <option>All</option>
                      <option>Ready</option>
                      <option>Off-Plan</option>
                    </select>
                    <select className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600 text-xs sm:text-sm lg:text-base">
                      <option>Residential</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="space-y-3 sm:space-y-0 sm:flex sm:gap-4 items-stretch">
                  <div className="grid grid-cols-2 sm:flex sm:flex-1 gap-2 sm:gap-3">
                    <select className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600 text-xs sm:text-sm lg:text-base">
                      <option>Beds & Baths</option>
                      <option>1 Bed</option>
                      <option>2 Beds</option>
                      <option>3+ Beds</option>
                    </select>
                    <select className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600 text-xs sm:text-sm lg:text-base">
                      <option>Price (CAD)</option>
                      <option>Under $500K</option>
                      <option>$500K - $1M</option>
                      <option>$1M+</option>
                    </select>
                  </div>
                  <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base whitespace-nowrap">
                    Search
                  </button>
                </div>

                {/* AI Suggestion */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 sm:mt-6 pt-4 border-t border-gray-200 gap-3">
                  <div className="flex items-start sm:items-center gap-2 text-gray-600">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-xs sm:text-sm leading-tight">Get instant answers about Canadian real estate with PropertyGPT</span>
                  </div>
                  <Link href="/ai-assistant" className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-1 text-xs sm:text-sm lg:text-base whitespace-nowrap self-start sm:self-center">
                    Try PropertyGPT
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Experience the Journey Button */}
        <motion.div
          className="mt-8 sm:mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-black/50 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-black/60 transition-all duration-300 text-sm sm:text-base">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="font-medium">Experience the Journey</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function FeatureCards() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Property Valuation Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6 sm:p-8">
              <div className="h-24 sm:h-32 mb-4 sm:mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-50 rounded-lg flex items-center justify-center">
                  <div className="relative">
                    {/* House with price tag illustration */}
                    <div className="w-12 h-9 sm:w-16 sm:h-12 bg-green-200 rounded-sm relative">
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-4 sm:w-8 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">$</span>
                      </div>
                      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                      <div className="absolute bottom-0.5 sm:bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-3 sm:w-3 sm:h-4 bg-green-300 rounded-sm"></div>
                    </div>
                    {/* Trees */}
                    <div className="absolute -left-3 top-3 w-2 h-4 sm:w-3 sm:h-6 bg-green-400 rounded-full"></div>
                    <div className="absolute -right-4 sm:-right-6 top-1 sm:top-2 w-3 h-6 sm:w-4 sm:h-8 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                AI Property Valuation™
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Get accurate market valuations for your Canadian property instantly
              </p>
              <Link href="/property-valuation" className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-1 group text-sm sm:text-base">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Smart Search Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6 sm:p-8">
              <div className="h-24 sm:h-32 mb-4 sm:mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-lg flex items-center justify-center">
                  <div className="relative">
                    {/* Car with location pins illustration */}
                    <div className="w-12 h-6 sm:w-16 sm:h-8 bg-gray-700 rounded-lg relative">
                      <div className="absolute top-0.5 sm:top-1 left-1.5 sm:left-2 w-2 h-1.5 sm:w-3 sm:h-2 bg-cyan-300 rounded-sm"></div>
                      <div className="absolute top-0.5 sm:top-1 right-1.5 sm:right-2 w-2 h-1.5 sm:w-3 sm:h-2 bg-cyan-300 rounded-sm"></div>
                      <div className="absolute -bottom-0.5 sm:-bottom-1 left-2 sm:left-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-800 rounded-full"></div>
                      <div className="absolute -bottom-0.5 sm:-bottom-1 right-2 sm:right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-800 rounded-full"></div>
                    </div>
                    {/* Location pins */}
                    <div className="absolute -top-3 -left-1.5 w-2 h-3 sm:w-3 sm:h-4 bg-red-500 rounded-t-full rounded-b-sm"></div>
                    <div className="absolute -top-4 sm:-top-6 right-1.5 sm:right-2 w-3 h-4 sm:w-4 sm:h-5 bg-blue-500 rounded-t-full rounded-b-sm"></div>
                    <div className="absolute -top-2 sm:-top-3 right-6 sm:right-8 w-2 h-3 sm:w-3 sm:h-4 bg-green-500 rounded-t-full rounded-b-sm"></div>
                    {/* Buildings */}
                    <div className="absolute -right-6 -top-1.5 sm:-top-2 w-4 h-8 sm:w-6 sm:h-12 bg-blue-200 rounded-sm"></div>
                    <div className="absolute -right-8 sm:-right-12 top-0 w-3 h-6 sm:w-4 sm:h-8 bg-blue-300 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Smart Commute Finder
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Find homes based on your daily commute time across Canadian cities
              </p>
              <Link href="/commute-finder" className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-1 group text-sm sm:text-base">
                Try it now
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Interactive Map Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
            <div className="p-6 sm:p-8">
              <div className="h-24 sm:h-32 mb-4 sm:mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-50 rounded-lg flex items-center justify-center">
                  <div className="relative">
                    {/* Map with buildings and pins */}
                    <div className="w-16 h-12 sm:w-20 sm:h-16 bg-green-100 rounded-lg relative overflow-hidden">
                      {/* Buildings */}
                      <div className="absolute right-1.5 sm:right-2 bottom-0 w-4 h-7 sm:w-6 sm:h-10 bg-emerald-300 rounded-sm"></div>
                      <div className="absolute right-7 sm:right-10 bottom-0 w-3 h-6 sm:w-4 sm:h-8 bg-emerald-400 rounded-sm"></div>
                      <div className="absolute left-1.5 sm:left-2 bottom-0 w-3 h-8 sm:w-5 sm:h-12 bg-emerald-200 rounded-sm"></div>
                      {/* Location pins */}
                      <div className="absolute top-1.5 sm:top-2 left-3 sm:left-4 w-2 h-3 sm:w-3 sm:h-4 bg-yellow-400 rounded-t-full rounded-b-sm"></div>
                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-3 sm:w-3 sm:h-4 bg-blue-500 rounded-t-full rounded-b-sm"></div>
                      <div className="absolute bottom-4 sm:bottom-6 right-8 sm:right-12 w-2 h-3 sm:w-3 sm:h-4 bg-red-500 rounded-t-full rounded-b-sm"></div>
                      {/* Trees */}
                      <div className="absolute top-3 sm:top-4 left-6 sm:left-8 w-1.5 h-2 sm:w-2 sm:h-3 bg-green-500 rounded-full"></div>
                      <div className="absolute bottom-3 sm:bottom-4 left-8 sm:left-12 w-1.5 h-2 sm:w-2 sm:h-3 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Neighborhood Explorer
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Discover properties in your preferred neighborhoods using our interactive map
              </p>
              <Link href="/neighborhood-explorer" className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-1 group text-sm sm:text-base">
                Explore map
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}