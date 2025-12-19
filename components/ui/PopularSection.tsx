'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

// Type definitions
interface CityData {
  apartments: string[];
  villas: string[];
  other: string[];
}

type CityName = 'London' | 'Manchester' | 'Edinburgh';

interface PopularSearchesData {
  sale: Record<CityName, CityData>;
  offPlan: Record<CityName, CityData>;
}

const popularSearchesData: PopularSearchesData = {
  sale: {
    London: {
      apartments: [
        'Flats for sale in London',
        'Flats for sale in Central London',
        'Flats for sale in Mayfair',
        'Flats for sale in Canary Wharf',
        'Flats for sale in Chelsea'
      ],
      villas: [
        'Houses for sale in London',
        'Houses for sale in Kensington',
        'Houses for sale in Hampstead',
        'Houses for sale in Richmond',
        'Houses for sale in Greenwich'
      ],
      other: [
        'Properties for sale in London',
        'Townhouses for sale in London',
        'Penthouses for sale in London',
        'Serviced Apartments for sale in London',
        'Development Plots for sale in London'
      ]
    },
    Manchester: {
      apartments: [
        'Flats for sale in Manchester',
        'Flats for sale in Manchester City Centre',
        'Flats for sale in Northern Quarter',
        'Flats for sale in Deansgate',
        'Flats for sale in Salford Quays'
      ],
      villas: [
        'Houses for sale in Manchester',
        'Houses for sale in Didsbury',
        'Houses for sale in Chorlton',
        'Houses for sale in Alderley Edge',
        'Houses for sale in Prestbury'
      ],
      other: [
        'Properties for sale in Manchester',
        'Townhouses for sale in Manchester',
        'Penthouses for sale in Manchester',
        'Serviced Apartments for sale in Manchester',
        'Development Plots for sale in Manchester'
      ]
    },
    Edinburgh: {
      apartments: [
        'Flats for sale in Edinburgh',
        'Flats for sale in New Town',
        'Flats for sale in Old Town',
        'Flats for sale in Leith',
        'Flats for sale in Stockbridge'
      ],
      villas: [
        'Houses for sale in Edinburgh',
        'Houses for sale in Morningside',
        'Houses for sale in Corstorphine',
        'Houses for sale in Bruntsfield',
        'Houses for sale in Cramond'
      ],
      other: [
        'Properties for sale in Edinburgh',
        'Townhouses for sale in Edinburgh',
        'Penthouses for sale in Edinburgh',
        'Serviced Apartments for sale in Edinburgh',
        'Development Plots for sale in Edinburgh'
      ]
    }
  },
  offPlan: {
    London: {
      apartments: [
        'Off Plan Flats in London',
        'Off Plan Flats in Mayfair',
        'Off Plan Flats in Chelsea',
        'Off Plan Flats in Shoreditch',
        'Off Plan Flats in Nine Elms'
      ],
      villas: [
        'Off Plan Houses in London',
        'Off Plan Houses in Kensington',
        'Off Plan Houses in Hampstead',
        'Off Plan Houses in Richmond',
        'Off Plan Houses in Dulwich'
      ],
      other: [
        'Off Plan Properties in London',
        'Off Plan Townhouses in London',
        'Off Plan Penthouses in London',
        'Off Plan Commercial Properties in London',
        'Off Plan Developments in Battersea'
      ]
    },
    Manchester: {
      apartments: [
        'Off Plan Flats in Manchester',
        'Off Plan Flats in Northern Quarter',
        'Off Plan Flats in Salford Quays',
        'Off Plan Flats in Ancoats',
        'Off Plan Flats in Spinningfields'
      ],
      villas: [
        'Off Plan Houses in Manchester',
        'Off Plan Houses in Didsbury',
        'Off Plan Houses in Chorlton',
        'Off Plan Houses in Altrincham',
        'Off Plan Houses in Wilmslow'
      ],
      other: [
        'Off Plan Properties in Manchester',
        'Off Plan Townhouses in Manchester',
        'Off Plan Penthouses in Manchester',
        'Off Plan Commercial Properties in Manchester',
        'Off Plan Developments in MediaCityUK'
      ]
    },
    Edinburgh: {
      apartments: [
        'Off Plan Flats in Edinburgh',
        'Off Plan Flats in New Town',
        'Off Plan Flats in Leith',
        'Off Plan Flats in Granton',
        'Off Plan Flats in Quartermile'
      ],
      villas: [
        'Off Plan Houses in Edinburgh',
        'Off Plan Houses in Morningside',
        'Off Plan Houses in Barnton',
        'Off Plan Houses in Corstorphine',
        'Off Plan Houses in Cramond'
      ],
      other: [
        'Off Plan Properties in Edinburgh',
        'Off Plan Townhouses in Edinburgh',
        'Off Plan Penthouses in Edinburgh',
        'Off Plan Commercial Properties in Edinburgh',
        'Off Plan Developments in Waterfront'
      ]
    }
  }
};

export function PopularSection() {
  const [activeTab, setActiveTab] = useState<'sale' | 'rent'>('sale');
  const [activeCity, setActiveCity] = useState<CityName>('London');
  const [showMoreSale, setShowMoreSale] = useState(false);
  const [showMoreOffPlan, setShowMoreOffPlan] = useState(false);

  const cities: CityName[] = ['London', 'Manchester', 'Edinburgh'];

  // For rent, we'll use the same structure but change the wording
  const getRentData = (cityData: CityData): CityData => {
    return {
      apartments: cityData.apartments.map((item: string) => item.replace('for sale', 'for rent')),
      villas: cityData.villas.map((item: string) => item.replace('for sale', 'for rent')),
      other: cityData.other.map((item: string) => item.replace('for sale', 'for rent'))
    };
  };

  const currentSaleData = popularSearchesData.sale[activeCity];
  const currentRentData = getRentData(currentSaleData);
  const currentOffPlanData = popularSearchesData.offPlan[activeCity];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Popular Real Estate Searches
          </h2>

          {/* Sale/Rent Tabs */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('sale')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'sale'
                    ? 'bg-green-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sale
              </button>
              <button
                onClick={() => setActiveTab('rent')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'rent'
                    ? 'bg-green-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Rent
              </button>
            </div>
          </div>

          {/* City Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCity === city
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-8"
        >
          {/* All Sale/Rent Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              All {activeTab === 'sale' ? 'Sale' : 'Rent'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                  APARTMENTS
                </h4>
                <div className="space-y-2">
                  {(activeTab === 'sale' ? currentSaleData.apartments : currentRentData.apartments)
                    .slice(0, showMoreSale ? undefined : 5)
                    .map((item: string, index: number) => (
                    <Link
                      key={index}
                      href={`/${activeTab}`}
                      className="block text-blue-600 hover:text-blue-800 text-sm py-1 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                  VILLAS
                </h4>
                <div className="space-y-2">
                  {(activeTab === 'sale' ? currentSaleData.villas : currentRentData.villas)
                    .slice(0, showMoreSale ? undefined : 5)
                    .map((item: string, index: number) => (
                    <Link
                      key={index}
                      href={`/${activeTab}`}
                      className="block text-blue-600 hover:text-blue-800 text-sm py-1 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                  OTHER PROPERTIES
                </h4>
                <div className="space-y-2">
                  {(activeTab === 'sale' ? currentSaleData.other : currentRentData.other)
                    .slice(0, showMoreSale ? undefined : 5)
                    .map((item: string, index: number) => (
                    <Link
                      key={index}
                      href={`/${activeTab}`}
                      className="block text-blue-600 hover:text-blue-800 text-sm py-1 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setShowMoreSale(!showMoreSale)}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mx-auto transition-colors"
              >
                View More
                <ChevronDown className={`h-4 w-4 transition-transform ${showMoreSale ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Off Plan Section (only show for sale) */}
          {activeTab === 'sale' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Off Plan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    APARTMENTS
                  </h4>
                  <div className="space-y-2">
                    {currentOffPlanData.apartments
                      .slice(0, showMoreOffPlan ? undefined : 5)
                      .map((item: string, index: number) => (
                      <Link
                        key={index}
                        href="/new-projects"
                        className="block text-blue-600 hover:text-blue-800 text-sm py-1 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    VILLAS
                  </h4>
                  <div className="space-y-2">
                    {currentOffPlanData.villas
                      .slice(0, showMoreOffPlan ? undefined : 5)
                      .map((item: string, index: number) => (
                      <Link
                        key={index}
                        href="/new-projects"
                        className="block text-blue-600 hover:text-blue-800 text-sm py-1 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    OTHER PROPERTIES
                  </h4>
                  <div className="space-y-2">
                    {currentOffPlanData.other
                      .slice(0, showMoreOffPlan ? undefined : 5)
                      .map((item: string, index: number) => (
                      <Link
                        key={index}
                        href="/new-projects"
                        className="block text-blue-600 hover:text-blue-800 text-sm py-1 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={() => setShowMoreOffPlan(!showMoreOffPlan)}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 mx-auto transition-colors"
                >
                  View More
                  <ChevronDown className={`h-4 w-4 transition-transform ${showMoreOffPlan ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}