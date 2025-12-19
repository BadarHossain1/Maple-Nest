'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const cities = [
    { id: 'london', name: 'London', active: true },
    { id: 'manchester', name: 'Manchester', active: false },
    { id: 'edinburgh', name: 'Edinburgh', active: false },
    { id: 'bristol', name: 'Bristol', active: false },
    { id: 'birmingham', name: 'Birmingham', active: false },
];

const marketTrends = [
    {
        id: 1,
        title: 'Best areas to rent affordable flats in Greater London',
        image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
        badge: 'MARKET TRENDS',
        badgeColor: 'bg-purple-600'
    },
    {
        id: 2,
        title: 'Popular areas to buy properties in Central London',
        image: 'https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg',
        badge: 'MARKET TRENDS',
        badgeColor: 'bg-purple-600'
    },
    {
        id: 3,
        title: 'Premium residences in London: The pinnacle of luxury living',
        image: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.jpeg',
        badge: 'MARKET TRENDS',
        badgeColor: 'bg-purple-600'
    },
    {
        id: 4,
        title: 'The most sought-after properties in Mayfair and Chelsea',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
        badge: 'MARKET TRENDS',
        badgeColor: 'bg-purple-600'
    }
];

const neighborhoods = [
    {
        id: 1,
        name: 'Mayfair',
        image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
        status: 'Ready'
    },
    {
        id: 2,
        name: 'Canary Wharf',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
        status: 'Ready'
    },
    {
        id: 3,
        name: 'Shoreditch',
        image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
        status: 'Ready'
    },
    {
        id: 4,
        name: 'Chelsea',
        image: 'https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg',
        status: 'Ready'
    }
];

const topBuildings = [
    {
        id: 1,
        name: 'The Shard, London Bridge',
        image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
        status: 'Ready',
        details: 'Luxury Living',
        price: 'Starting £950K'
    },
    {
        id: 2,
        name: 'Thames Tower, Canary Wharf',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
        status: 'Ready',
        details: 'Riverside Views',
        price: 'Starting £720K'
    },
    {
        id: 3,
        name: 'Beetham Tower, Manchester',
        image: 'https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg',
        status: 'Ready',
        details: 'Modern Living',
        price: 'Starting £320K'
    },
    {
        id: 4,
        name: 'Deansgate Square, Manchester',
        image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
        status: 'Ready',
        details: 'City Centre',
        price: 'Starting £285K'
    }
];

const UKMarketInsights = () => {
    const [activeCity, setActiveCity] = useState('london');

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Learn more about the UK property market
                    </h2>

                    {/* City Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {cities.map((city) => (
                            <Button
                                key={city.id}
                                variant={activeCity === city.id ? "default" : "outline"}
                                className={`px-6 py-2 rounded-full ${activeCity === city.id
                                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                    }`}
                                onClick={() => setActiveCity(city.id)}
                            >
                                {city.name}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Market Trends Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-600">Real Estate Updates From</span>
                            <span className="text-teal-600 font-bold text-lg">PropertyUK</span>
                        </div>
                        <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
                            View All <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {marketTrends.map((trend) => (
                            <Card key={trend.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                <div className="relative">
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <Image
                                            src={trend.image}
                                            alt={trend.title}
                                            fill
                                            unoptimized
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <Badge className={`absolute top-3 left-3 ${trend.badgeColor} text-white text-xs font-medium`}>
                                        {trend.badge}
                                    </Badge>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-medium text-sm text-gray-900 line-clamp-3 group-hover:text-teal-600 transition-colors">
                                        {trend.title}
                                    </h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Popular Neighborhoods Section */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-gray-900">Discover Popular Neighbourhoods in London</h3>
                            <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                                Off-Plan Only
                            </Badge>
                        </div>
                        <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
                            View All <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {neighborhoods.map((neighborhood) => (
                            <Card key={neighborhood.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                <div className="relative">
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <Image
                                            src={neighborhood.image}
                                            alt={neighborhood.name}
                                            fill
                                            unoptimized
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <Badge className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-medium">
                                        {neighborhood.status}
                                    </Badge>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-medium text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
                                        {neighborhood.name}
                                    </h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Top Buildings Section */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-gray-900">Explore Top Buildings in London</h3>
                            <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                                Off-Plan Only
                            </Badge>
                        </div>
                        <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
                            View All <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topBuildings.map((building) => (
                            <Card key={building.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                <div className="relative">
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <Image
                                            src={building.image}
                                            alt={building.name}
                                            fill
                                            unoptimized
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <Badge className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-medium">
                                        {building.status}
                                    </Badge>
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-800">
                                        {building.details}
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-medium text-sm text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                                        {building.name}
                                    </h3>
                                    <p className="text-teal-600 font-semibold text-sm">
                                        {building.price}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UKMarketInsights;