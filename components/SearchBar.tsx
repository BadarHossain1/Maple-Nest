'use client';

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  featured?: boolean;
  onSearch?: (query: string) => void;
}

export function SearchBar({ featured = false, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const popularSearches = [
    'Toronto condos',
    'Vancouver waterfront',
    'Montreal lofts',
    'Calgary family homes',
    'Ottawa rentals',
  ];

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query);
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
    if (value.length > 2) {
      const filtered = popularSearches.filter(search =>
        search.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative">
      <div className={cn(
        'flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-3 sm:p-2 rounded-2xl sm:rounded-full shadow-lg transition-all duration-300',
        featured 
          ? 'bg-white/95 backdrop-blur-sm max-w-3xl mx-auto' 
          : 'bg-white border border-gray-200 max-w-md'
      )}>
        <div className="relative flex-1 flex items-center">
          <MapPin className="absolute left-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by city, neighborhood, or property type..."
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className={cn(
              'pl-9 sm:pl-10 pr-4 border-none shadow-none focus-visible:ring-0 text-sm sm:text-base',
              featured ? 'sm:text-lg h-10 sm:h-12' : 'h-9 sm:h-10'
            )}
          />
        </div>
        
        <Button 
          onClick={handleSearch}
          size={featured ? 'lg' : 'default'}
          className="rounded-full px-4 sm:px-6 h-10 sm:h-auto text-sm sm:text-base btn-mobile"
        >
          <Search className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline ml-2 sm:ml-0">Search</span>
        </Button>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg text-sm sm:text-base"
              onClick={() => {
                setQuery(suggestion);
                setShowSuggestions(false);
                onSearch?.(suggestion);
              }}
            >
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span>{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}