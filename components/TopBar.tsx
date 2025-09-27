'use client';

import Link from 'next/link';
import { Globe, Settings, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function TopBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="bg-gray-50 border-b border-gray-100 text-sm">
        <div className="container mx-auto px-3 sm:px-4 flex items-center justify-between h-10 sm:h-8">
          <div className="flex items-center gap-2 sm:gap-4 text-gray-600">
            <div className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-medium text-xs sm:text-sm">EN</span>
            </div>
            <Link href="/settings" className="hidden md:inline-flex items-center gap-1 hover:text-emerald-600">
              <Settings className="h-4 w-4" />
              <span>Site settings</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-gray-600">
            <Link href="/saved" className="flex items-center gap-1 sm:gap-2 hover:text-emerald-600">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm hidden sm:inline">Favourites</span>
            </Link>

            <Link href="/saved" className="flex items-center gap-1 sm:gap-2 hover:text-emerald-600">
              <Star className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm hidden sm:inline">Saved</span>
            </Link>

            <Link href="/login">
              <Button variant="ghost" className="py-1 px-2 sm:px-3 text-xs sm:text-sm h-7 sm:h-8">
                Log in
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
