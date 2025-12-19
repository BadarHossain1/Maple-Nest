'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Search,
    MapPin,
    ArrowLeft,
    Building,
    Home,
    TrendingUp,
    Users,
    Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloorPlansPage() {
    const [searchLocation, setSearchLocation] = useState('');

    const ukCities = [
        {
            id: 1,
            name: 'London',
            province: 'Greater London',
            image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?w=600&h=400&fit=crop',
            description: 'UK\'s capital with diverse floor plan options',
            properties: '125,000+ properties'
        },
        {
            id: 2,
            name: 'Manchester',
            province: 'Greater Manchester',
            image: 'https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg?w=600&h=400&fit=crop',
            description: 'Northern powerhouse with modern architectural designs',
            properties: '45,500+ properties'
        },
        {
            id: 3,
            name: 'Edinburgh',
            province: 'Scotland',
            image: 'https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?w=600&h=400&fit=crop',
            description: 'Historic charm meets contemporary living spaces',
            properties: '28,200+ properties'
        },
        {
            id: 4,
            name: 'Bristol',
            province: 'South West England',
            image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?w=600&h=400&fit=crop',
            description: 'Creative city with spacious floor plan layouts',
            properties: '22,700+ properties'
        },
        {
            id: 5,
            name: 'Birmingham',
            province: 'West Midlands',
            image: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?w=600&h=400&fit=crop',
            description: 'UK\'s second city with diverse residential zones',
            properties: '38,400+ properties'
        },
        {
            id: 6,
            name: 'Leeds',
            province: 'West Yorkshire',
            image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop',
            description: 'Yorkshire hub with affordable housing options',
            properties: '25,800+ properties'
        },
        {
            id: 7,
            name: 'Liverpool',
            province: 'Merseyside',
            image: 'https://images.unsplash.com/photo-1552832230-8b3734516ed0?w=600&h=400&fit=crop',
            description: 'Maritime city with waterfront floor plans',
            properties: '19,900+ properties'
        }
    ];

    const topSearchedLocations = {
        'London': [
            'Mayfair', 'Chelsea', 'Kensington',
            'Shoreditch', 'Canary Wharf', 'Notting Hill'
        ],
        'Manchester': [
            'Northern Quarter', 'Deansgate', 'Ancoats',
            'Spinningfields', 'Castlefield', 'Didsbury'
        ],
        'Edinburgh': [
            'Old Town', 'New Town', 'Leith',
            'Stockbridge', 'Morningside', 'Bruntsfield'
        ],
        'Bristol': [
            'Clifton', 'Harbourside', 'Redland',
            'Stokes Croft', 'Southville', 'Bishopston'
        ],
        'Birmingham': [
            'Jewellery Quarter', 'Digbeth', 'Moseley',
            'Harborne', 'Edgbaston', 'Kings Heath'
        ],
        'Leeds': [
            'City Centre', 'Headingley', 'Chapel Allerton',
            'Roundhay', 'Horsforth', 'Meanwood'
        ]
    };

    const allUKLocations = [
        // London & South East
        'Greater London', 'Westminster', 'Kensington', 'Chelsea', 'Mayfair', 'Shoreditch',
        'Camden', 'Islington', 'Hackney', 'Greenwich', 'Richmond', 'Kingston', 'Croydon',
        'Bromley', 'Sutton', 'Merton', 'Wandsworth', 'Lambeth', 'Southwark', 'Tower Hamlets',
        'Reading', 'Slough', 'Oxford', 'Cambridge', 'Brighton', 'Guildford', 'Crawley',

        // Greater Manchester
        'Manchester City Centre', 'Northern Quarter', 'Deansgate', 'Ancoats', 'Spinningfields',
        'Castlefield', 'Didsbury', 'Chorlton', 'Salford Quays', 'Altrincham', 'Stockport',
        'Bolton', 'Bury', 'Rochdale', 'Oldham', 'Wigan', 'Trafford', 'Sale', 'Cheadle',

        // West Midlands
        'Birmingham City Centre', 'Jewellery Quarter', 'Digbeth', 'Edgbaston', 'Harborne',
        'Moseley', 'Kings Heath', 'Sutton Coldfield', 'Solihull', 'Coventry', 'Wolverhampton',
        'Walsall', 'West Bromwich', 'Dudley', 'Stourbridge', 'Halesowen', 'Redditch',

        // Scotland
        'Edinburgh City Centre', 'Old Town', 'New Town', 'Leith', 'Stockbridge', 'Morningside',
        'Bruntsfield', 'Portobello', 'Corstorphine', 'Glasgow City Centre', 'West End Glasgow',
        'Merchant City', 'Finnieston', 'Shawlands', 'Aberdeen', 'Dundee', 'Inverness',

        // Yorkshire
        'Leeds City Centre', 'Headingley', 'Chapel Allerton', 'Roundhay', 'Horsforth',
        'Sheffield City Centre', 'Ecclesall', 'Kelham Island', 'York', 'Bradford', 'Hull',
        'Harrogate', 'Wakefield', 'Huddersfield', 'Doncaster', 'Rotherham', 'Barnsley',

        // North West
        'Liverpool City Centre', 'Baltic Triangle', 'Georgian Quarter', 'Woolton', 'Allerton',
        'Preston', 'Blackpool', 'Lancaster', 'Carlisle', 'Chester', 'Warrington', 'Blackburn',

        // South West
        'Bristol City Centre', 'Clifton', 'Harbourside', 'Redland', 'Stokes Croft', 'Southville',
        'Bath', 'Exeter', 'Plymouth', 'Gloucester', 'Cheltenham', 'Swindon', 'Bournemouth',
        'Poole', 'Taunton', 'Truro', 'Torquay', 'Salisbury', 'Wells', 'Yeovil',

        // Wales
        'Cardiff City Centre', 'Cardiff Bay', 'Pontcanna', 'Roath', 'Swansea', 'Newport',
        'Wrexham', 'Bangor', 'Aberystwyth', 'Llandudno', 'Carmarthen', 'Brecon', 'Conwy',

        // East Midlands
        'Nottingham City Centre', 'Derby', 'Leicester', 'Northampton', 'Peterborough',
        'Lincoln', 'Chesterfield', 'Mansfield', 'Corby', 'Kettering', 'Loughborough',

        // East of England
        'Norwich', 'Ipswich', 'Colchester', 'Southend-on-Sea', 'Chelmsford', 'Luton',
        'Stevenage', 'Watford', 'Basildon', 'St Albans', 'Harlow', 'Kings Lynn'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 sm:opacity-10">
                    <svg viewBox="0 0 1200 800" className="w-full h-full">
                        {/* Floor plan outlines */}
                        <g stroke="#059669" strokeWidth="2" fill="none">
                            <rect x="100" y="150" width="200" height="150" />
                            <rect x="150" y="180" width="50" height="40" />
                            <rect x="220" y="180" width="60" height="40" />
                            <rect x="120" y="240" width="40" height="40" />
                            <circle cx="180" cy="260" r="20" />

                            <rect x="400" y="200" width="180" height="120" />
                            <rect x="420" y="220" width="40" height="30" />
                            <rect x="480" y="220" width="40" height="30" />
                            <rect x="540" y="220" width="30" height="30" />

                            <rect x="700" y="180" width="150" height="100" />
                            <rect x="720" y="200" width="30" height="25" />
                            <rect x="760" y="200" width="30" height="25" />
                            <rect x="800" y="200" width="30" height="25" />

                            <rect x="900" y="350" width="200" height="130" />
                            <rect x="920" y="370" width="50" height="35" />
                            <rect x="980" y="370" width="50" height="35" />
                            <rect x="1040" y="370" width="40" height="35" />
                        </g>
                    </svg>
                </div>

                <div className="relative z-10 container mx-auto px-4 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">
                            <Link href="/" className="text-emerald-600 hover:underline">MapleNest</Link>
                            <span>›</span>
                            <span>Floor plans</span>
                        </div>

                        <h1 className="text-responsive-h1 font-bold text-gray-800 mb-4 sm:mb-6">
                            Floor plans
                        </h1>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
                            Explore detailed floor plans and layouts from the UK's premier real estate developments.
                            Find your perfect home design across major UK cities.
                        </p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-1.5 sm:p-2 max-w-xl sm:max-w-2xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0"
                        >
                            <div className="flex-1 relative">
                                <MapPin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                                <input
                                    type="text"
                                    value={searchLocation}
                                    onChange={(e) => setSearchLocation(e.target.value)}
                                    placeholder="Enter location"
                                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-base sm:text-lg"
                                />
                            </div>
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-lg">
                                Find
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* UK Cities Showcase */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <p className="text-emerald-600 font-medium mb-2 sm:mb-4 text-xs sm:text-sm">UK FLOOR PLANS</p>
                        <h2 className="text-responsive-h2 font-bold text-gray-900 mb-8 sm:mb-12">
                            UK Floor plans
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                            {ukCities.map((city, index) => (
                                <motion.div
                                    key={city.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                                >
                                    <div className="relative h-40 sm:h-48 overflow-hidden">
                                        <img
                                            src={city.image}
                                            alt={`${city.name} real estate`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                                            <h3 className="text-base sm:text-lg font-semibold">{city.name}</h3>
                                            <p className="text-xs sm:text-sm opacity-90">{city.province}</p>
                                        </div>
                                    </div>
                                    <div className="p-3 sm:p-4">
                                        <p className="text-gray-600 text-xs sm:text-sm mb-2">{city.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-emerald-600 font-medium">{city.properties}</span>
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                                                <span className="text-xs text-gray-600">Premium</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Top Searched Locations */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {Object.entries(topSearchedLocations).map(([city, locations]) => (
                            <div key={city} className="mb-8 sm:mb-12">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                                    Top Searched Locations - {city}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                                    {locations.map((location, index) => (
                                        <motion.button
                                            key={location}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="bg-gray-100 hover:bg-emerald-50 hover:border-emerald-200 border border-gray-200 rounded-lg p-3 sm:p-4 text-left transition-colors duration-300 group"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-700 group-hover:text-emerald-700 font-medium text-sm sm:text-base truncate pr-2">
                                                    {location}
                                                </span>
                                                <Building className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-emerald-500 flex-shrink-0" />
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* UK Location List */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                            UK Location List
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
                            Discover floor plans and real estate opportunities across all major UK cities,
                            towns, and metropolitan areas. From coast to coast, explore diverse architectural
                            styles and layouts.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                            {allUKLocations.map((location, index) => (
                                <motion.button
                                    key={location}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: (index % 20) * 0.05 }}
                                    className="bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-lg p-2 sm:p-3 text-left transition-all duration-300 group text-xs sm:text-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700 group-hover:text-emerald-700 font-medium truncate pr-1 sm:pr-2">
                                            {location}
                                        </span>
                                        <Home className="h-3 w-3 text-gray-400 group-hover:text-emerald-500 flex-shrink-0" />
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        <div className="text-center mt-8 sm:mt-10 md:mt-12">
                            <Button variant="outline" className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                                Load More Locations
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats & CTA */}
            <section className="py-12 sm:py-16 md:py-20 bg-emerald-600">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                            Explore the UK's Real Estate Floor Plans
                        </h3>
                        <p className="text-sm sm:text-lg md:text-xl text-emerald-100 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
                            Access detailed floor plans from thousands of UK properties.
                            Make informed decisions with comprehensive layout information.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">180,000+</div>
                                <div className="text-xs sm:text-sm md:text-base text-emerald-200">Floor Plans Available</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">12</div>
                                <div className="text-xs sm:text-sm md:text-base text-emerald-200">UK Regions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">500+</div>
                                <div className="text-xs sm:text-sm md:text-base text-emerald-200">UK Cities</div>
                            </div>
                        </div>

                        <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-sm sm:text-base">
                            Start Exploring Floor Plans
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}