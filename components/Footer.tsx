'use client';

import Link from 'next/link';
import { Home, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">MapleNest</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Find your perfect home across Canada. Discover exceptional properties 
              in Toronto, Vancouver, Montreal, Calgary, and Ottawa.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
              <MapPin className="h-4 w-4" />
              <span>Serving Canada Coast to Coast</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/buy" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Buy</Link></li>
              <li><Link href="/rent" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Rent</Link></li>
              <li><Link href="/commercial" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Commercial</Link></li>
              <li><Link href="/mortgage" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Mortgage Calculator</Link></li>
              <li><Link href="/areas" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Neighborhood Guides</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/agents" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Find an Agent</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Market Insights</Link></li>
              <li><Link href="/saved" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Saved Properties</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Get in Touch</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>1-800-MAPLE-NEST</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">hello@maplenest.ca</span>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6">
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                Subscribe to our newsletter for market updates and new listings.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base"
                />
                <button className="px-3 sm:px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors text-sm sm:text-base btn-mobile">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} MapleNest. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}