import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

// System prompt to contextualize PropertyGPT for Canadian real estate
const SYSTEM_PROMPT = `You are PropertyGPT, an expert Canadian real estate assistant. You provide accurate, helpful, and detailed information about:

CORE EXPERTISE:
- Canadian real estate markets (Toronto, Vancouver, Montreal, Calgary, Ottawa, etc.)
- Property search and recommendations
- Mortgage calculations and financing options
- Market trends and analysis
- Neighborhood insights and comparisons
- Investment opportunities
- Legal processes for buying/selling in Canada
- First-time buyer guidance
- Property valuation and pricing

RESPONSE GUIDELINES:
- Always provide specific, actionable information
- Use current Canadian market data when possible
- Include relevant examples with Canadian cities and prices
- Format responses with clear sections and bullet points
- Add relevant emojis to make responses engaging
- Always end with a helpful follow-up question
- Keep responses concise but comprehensive (200-400 words)
- Use Canadian terminology (e.g., realtor, MLS, CMHC, etc.)

MARKET CONTEXT (2025):
- Average home prices: Toronto $1.3M, Vancouver $1.5M, Montreal $550K, Calgary $500K
- Interest rates around 5-6%
- Strong immigration driving demand
- Supply shortage in major cities
- Emerging markets: Atlantic Canada, Kitchener-Waterloo

Always be helpful, professional, and focus on Canadian real estate specifically.`;

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { 
          error: 'PropertyGPT is not configured. Please check server configuration.',
          details: 'Missing API key'
        },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => null);
    
    if (!body) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { message, conversationHistory = [] } = body;

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Initialize model with fallback strategy
    let model;
    const modelsToTry = [
      "gemini-2.5-flash",
      "gemini-2.5-pro",
      "gemini-2.5-flash-lite",
      "gemini-2.0-flash"
    ];
    
    let modelInitError = null;
    for (const modelName of modelsToTry) {
      try {
        model = genAI.getGenerativeModel({ 
          model: modelName,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          },
        });
        console.log(`Successfully initialized model: ${modelName}`);
        break;
      } catch (error: any) {
        console.log(`Failed to initialize model ${modelName}:`, error.message);
        modelInitError = error;
        continue;
      }
    }
    
    if (!model) {
      return NextResponse.json({
        error: 'AI model initialization failed',
        details: modelInitError?.message || 'Unable to initialize any Gemini model',
        suggestions: [
          "The AI service may be temporarily unavailable",
          "Check the test-models endpoint for working models",
          "Try again in a few minutes"
        ]
      }, { status: 503 });
    }

    // Build conversation context
    let prompt = SYSTEM_PROMPT + "\n\n";
    
    // Add recent conversation history (last 6 messages for context)
    const recentHistory = conversationHistory.slice(-6);
    if (recentHistory.length > 0) {
      prompt += "RECENT CONVERSATION:\n";
      recentHistory.forEach((msg: any) => {
        prompt += `${msg.type === 'user' ? 'User' : 'PropertyGPT'}: ${msg.content}\n`;
      });
      prompt += "\n";
    }
    
    prompt += `USER QUESTION: ${message}\n\nProvide a helpful response as PropertyGPT:`;

    // Generate response with better error handling
    let result;
    try {
      result = await model.generateContent(prompt);
    } catch (modelError: any) {
      console.error('Model error:', modelError);
      
      // Return detailed error information for debugging
      if (modelError.status === 404) {
        return NextResponse.json({
          error: 'AI model temporarily unavailable',
          details: `Model not found: ${modelError.message}`,
          suggestions: [
            "The AI service may need an updated configuration",
            "Please try again in a moment",
            "Contact support if the issue persists"
          ]
        }, { status: 503 });
      }
      
      return NextResponse.json({
        error: 'AI service error',
        details: modelError.message,
        suggestions: [
          "Please try your question again", 
          "The AI service may be temporarily unavailable",
          "Contact support if the issue persists"
        ]
      }, { status: 500 });
    }
    
    const response = await result.response;
    const text = response.text();

    // Generate follow-up suggestions based on the response
    const suggestions = await generateFollowUpSuggestions(message, text);

    return NextResponse.json({
      response: text,
      suggestions: suggestions
    });

  } catch (error) {
    console.error('Gemini AI Error:', error);
    
    // Fallback response
    return NextResponse.json({
      response: "I apologize, but I'm experiencing some technical difficulties right now. However, I'd still love to help you with your Canadian real estate questions! Could you please try asking again, or let me know if you'd like information about property prices, mortgage calculations, or neighborhood recommendations?",
      suggestions: [
        "Find properties in my budget",
        "Calculate mortgage payments", 
        "Compare neighborhoods",
        "Market analysis for 2025"
      ]
    });
  }
}

async function generateFollowUpSuggestions(userMessage: string, aiResponse: string): Promise<string[]> {
  const lowerMessage = userMessage.toLowerCase();
  
  // Context-aware suggestions based on user's question
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
    return [
      "Calculate mortgage for this price range",
      "Compare prices in different cities",
      "Show me properties in this budget",
      "What are the additional costs?"
    ];
  }
  
  if (lowerMessage.includes('mortgage') || lowerMessage.includes('loan') || lowerMessage.includes('payment')) {
    return [
      "Compare different down payment options",
      "Explain mortgage pre-approval process",
      "Find the best mortgage rates",
      "What documents do I need?"
    ];
  }
  
  if (lowerMessage.includes('neighborhood') || lowerMessage.includes('area') || lowerMessage.includes('location')) {
    return [
      "Show properties in this area",
      "Compare school ratings",
      "What's the commute like?",
      "Tell me about nearby amenities"
    ];
  }
  
  if (lowerMessage.includes('market') || lowerMessage.includes('trend') || lowerMessage.includes('investment')) {
    return [
      "Best cities for investment",
      "Future market predictions",
      "When is the best time to buy?",
      "Rental yield analysis"
    ];
  }
  
  if (lowerMessage.includes('first time') || lowerMessage.includes('beginner') || lowerMessage.includes('new buyer')) {
    return [
      "First-time buyer programs",
      "Step-by-step buying process",
      "Common mistakes to avoid",
      "Required documents checklist"
    ];
  }
  
  // Default suggestions
  return [
    "Find properties matching my criteria",
    "Calculate affordability",
    "Compare neighborhoods", 
    "Get market insights"
  ];
}