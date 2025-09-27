// Types for PropertyGPT AI Assistant

export interface AIMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

export interface AIResponse {
  response: string;
  suggestions: string[];
}

export interface AIRequest {
  message: string;
  conversationHistory: AIMessage[];
}

export interface QuickAction {
  icon: React.ComponentType;
  label: string;
  prompt: string;
  color: string;
}

// Canadian Real Estate Context Types
export interface PropertySearchCriteria {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: 'house' | 'condo' | 'townhouse' | 'apartment';
  listingType?: 'sale' | 'rent';
}

export interface MortgageCalculation {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  amortizationPeriod: number;
  paymentFrequency: 'monthly' | 'biweekly' | 'weekly';
}

export interface NeighborhoodInfo {
  name: string;
  city: string;
  province: string;
  averagePrice: number;
  priceChange: number;
  walkScore?: number;
  transitScore?: number;
  schoolRating?: number;
  crimeRate?: 'low' | 'medium' | 'high';
  demographics?: {
    averageAge: number;
    medianIncome: number;
    familyFriendly: boolean;
  };
}

export interface MarketTrend {
  region: string;
  averagePrice: number;
  priceChange: number;
  salesVolume: number;
  daysOnMarket: number;
  inventory: number;
  forecast: 'bullish' | 'bearish' | 'stable';
}