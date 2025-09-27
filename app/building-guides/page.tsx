'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Building, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Canadian luxury buildings data
const luxuryBuildings = [
    {
        id: 1,
        name: 'One Bloor East',
        location: 'Toronto, ON',
        status: 'Luxury',
        floors: 75,
        units: 711,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        description: 'Iconic luxury living in the heart of Yorkville'
    },
    {
        id: 2,
        name: 'Trump International Hotel & Tower',
        location: 'Vancouver, BC',
        status: 'Luxury',
        floors: 69,
        units: 290,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        description: 'Premium waterfront living with world-class amenities'
    },
    {
        id: 3,
        name: 'The Bow',
        location: 'Calgary, AB',
        status: 'Luxury',
        floors: 58,
        units: 345,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        description: 'Modern architecture in Calgary\'s business district'
    },
    {
        id: 4,
        name: 'Tour des Canadiens',
        location: 'Montreal, QC',
        status: 'Luxury',
        floors: 50,
        units: 552,
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop',
        description: 'Contemporary living in downtown Montreal'
    }
];

const affordableBuildings = [
    {
        id: 5,
        name: 'The Residences of 488 University',
        location: 'Toronto, ON',
        status: 'Affordable',
        floors: 35,
        units: 420,
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b04f?w=800&h=600&fit=crop',
        description: 'Modern living in Toronto\'s Entertainment District'
    },
    {
        id: 6,
        name: 'Marine Gateway',
        location: 'Vancouver, BC',
        status: 'Affordable',
        floors: 28,
        units: 398,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        description: 'Transit-oriented development in South Vancouver'
    },
    {
        id: 7,
        name: 'The Hat',
        location: 'Calgary, AB',
        status: 'Affordable',
        floors: 24,
        units: 324,
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop',
        description: 'Contemporary living in Beltline district'
    },
    {
        id: 8,
        name: 'YUL Condominiums',
        location: 'Montreal, QC',
        status: 'Affordable',
        floors: 30,
        units: 387,
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b04f?w=800&h=600&fit=crop',
        description: 'Modern condos near Pierre Elliott Trudeau Airport'
    }
];

const comingSoonBuildings = [
    {
        id: 9,
        name: 'The One',
        location: 'Toronto, ON',
        status: 'Coming Soon',
        floors: 85,
        units: 416,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        description: 'Canada\'s tallest residential building'
    },
    {
        id: 10,
        name: 'Oakridge Centre',
        location: 'Vancouver, BC',
        status: 'Coming Soon',
        floors: 42,
        units: 290,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        description: 'Mixed-use development with luxury residences'
    },
    {
        id: 11,
        name: 'The District on 10th',
        location: 'Calgary, AB',
        status: 'Coming Soon',
        floors: 32,
        units: 268,
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop',
        description: 'New urban community in Victoria Park'
    },
    {
        id: 12,
        name: 'District Griffin',
        location: 'Montreal, QC',
        status: 'Coming Soon',
        floors: 38,
        units: 312,
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b04f?w=800&h=600&fit=crop',
        description: 'Modern living in historic Griffintown'
    }
];

export default function BuildingGuidesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative h-80 sm:h-96 md:h-[32rem] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=800&fit=crop)'
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
                    <motion.div
                        className="text-center text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Explore These Skyscrapers!</h1>
                        <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 px-4">Discover Canada&apos;s most impressive residential buildings</p>
                        <div className="flex justify-center px-4">
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full gap-0 sm:gap-0">
                                <input
                                    type="text"
                                    placeholder="Search location"
                                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-gray-900 focus:outline-none text-sm sm:text-base"
                                />
                                <Button className="rounded-none sm:rounded-none px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 hover:bg-emerald-600 text-sm sm:text-base font-medium">
                                    SEARCH
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Luxury Buildings Section */}
            <section className="py-10 sm:py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12">Luxury</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
                            {luxuryBuildings.map((building, index) => (
                                <motion.div
                                    key={building.id}
                                    className="group cursor-pointer"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative overflow-hidden rounded-lg shadow-lg bg-emerald-600">
                                        <div
                                            className="h-48 sm:h-56 md:h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${building.image})` }}
                                        >
                                            <div className="absolute inset-0 bg-black/30" />
                                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                                                <span className="bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                                                    <Star className="h-3 w-3" />
                                                    {building.status}
                                                </span>
                                            </div>
                                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white text-right">
                                                <div className="text-xs sm:text-sm font-semibold">{building.floors} floors</div>
                                                <div className="text-xs opacity-90">{building.units} units</div>
                                            </div>
                                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                                                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 truncate">{building.name}</h3>
                                                <div className="flex items-center gap-1 text-xs sm:text-sm opacity-90 mb-1 sm:mb-2">
                                                    <MapPin className="h-3 w-3 flex-shrink-0" />
                                                    <span className="truncate">{building.location}</span>
                                                </div>
                                                <p className="text-xs opacity-90 line-clamp-2">{building.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Button variant="outline" className="group px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">
                                VIEW ALL LUXURY BUILDINGS IN CANADA
                                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Affordable Buildings Section */}
            <section className="py-10 sm:py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12">Affordable</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
                            {affordableBuildings.map((building, index) => (
                                <motion.div
                                    key={building.id}
                                    className="group cursor-pointer"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative overflow-hidden rounded-lg shadow-lg bg-emerald-600">
                                        <div
                                            className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${building.image})` }}
                                        >
                                            <div className="absolute inset-0 bg-black/30" />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                    {building.status}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 right-4 text-white text-right">
                                                <div className="text-sm font-semibold">{building.floors} floors</div>
                                                <div className="text-xs opacity-90">{building.units} units</div>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                                <h3 className="font-semibold text-lg mb-1">{building.name}</h3>
                                                <div className="flex items-center gap-1 text-sm opacity-90 mb-2">
                                                    <MapPin className="h-3 w-3" />
                                                    {building.location}
                                                </div>
                                                <p className="text-xs opacity-90">{building.description}</p>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                                                    Affordable
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Button variant="outline" className="group px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">
                                VIEW ALL AFFORDABLE BUILDINGS IN CANADA
                                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon Buildings Section */}
            <section className="py-10 sm:py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12">Coming Soon</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
                            {comingSoonBuildings.map((building, index) => (
                                <motion.div
                                    key={building.id}
                                    className="group cursor-pointer"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative overflow-hidden rounded-lg shadow-lg bg-emerald-600">
                                        <div
                                            className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${building.image})` }}
                                        >
                                            <div className="absolute inset-0 bg-black/30" />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                    {building.status}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 right-4 text-white text-right">
                                                <div className="text-sm font-semibold">{building.floors} floors</div>
                                                <div className="text-xs opacity-90">{building.units} units</div>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                                <h3 className="font-semibold text-lg mb-1">{building.name}</h3>
                                                <div className="flex items-center gap-1 text-sm opacity-90 mb-2">
                                                    <MapPin className="h-3 w-3" />
                                                    {building.location}
                                                </div>
                                                <p className="text-xs opacity-90">{building.description}</p>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">
                                                    Coming Soon
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Button variant="outline" className="group px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">
                                VIEW ALL UPCOMING BUILDINGS IN CANADA
                                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}