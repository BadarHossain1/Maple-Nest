# PropertyGPT - AI Real Estate Assistant

PropertyGPT is an intelligent AI-powered real estate assistant specifically designed for the Canadian market, integrated into the MapleNest platform.

## Features

### 🤖 **AI-Powered Assistance**
- **Gemini AI Integration**: Uses Google's Gemini Pro model for intelligent responses
- **Context-Aware**: Maintains conversation history for better responses
- **Canadian Real Estate Focus**: Specialized knowledge of Canadian markets, laws, and processes

### 🏠 **Core Capabilities**
- **Property Search**: Find properties based on specific criteria
- **Mortgage Calculations**: Accurate payment calculations with Canadian rates
- **Market Analysis**: Current trends and insights across Canadian cities
- **Neighborhood Insights**: Detailed area information and comparisons
- **Investment Guidance**: ROI analysis and investment opportunities
- **First-Time Buyer Support**: Step-by-step guidance and requirements

### 💬 **Interactive Features**
- **Real-time Chat**: Fast, responsive AI conversations
- **Quick Actions**: Pre-defined prompts for common queries
- **Smart Suggestions**: Context-aware follow-up questions
- **Message Actions**: Copy responses, thumbs up/down feedback
- **Markdown Support**: Rich text formatting in responses
- **Mobile Responsive**: Optimized for all device sizes

## Technical Implementation

### **API Integration**
```typescript
// API Endpoint: /api/ai-assistant/route.ts
- Gemini Pro model integration
- Context-aware prompt engineering
- Error handling and fallbacks
- Smart suggestion generation
```

### **Key Files**
- `app/ai-assistant/page.tsx` - Main chat interface
- `app/api/ai-assistant/route.ts` - Gemini AI API integration
- `types/ai-assistant.ts` - TypeScript definitions
- `.env.local` - API key configuration

### **Dependencies**
- `@google/generative-ai` - Gemini AI SDK
- `react-markdown` - Rich text rendering
- `framer-motion` - Smooth animations
- `lucide-react` - Icon library

## Configuration

### **Environment Variables**
```bash
GOOGLE_AI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_APP_NAME=MapleNest
```

### **API Key Setup**
1. Get your Gemini API key from Google AI Studio
2. Add it to `.env.local`
3. Restart the development server

## Usage Examples

### **Property Search**
```
"I'm looking for a 3-bedroom house in Toronto under $900K. What neighborhoods should I consider?"
```

### **Mortgage Calculation**
```
"Calculate mortgage payments for a $650K home with 15% down payment in Ontario"
```

### **Market Analysis**
```
"What's happening in the Vancouver real estate market right now?"
```

### **Investment Guidance**
```
"Which Canadian cities offer the best rental yield opportunities?"
```

## System Prompt Context

PropertyGPT uses a comprehensive system prompt that includes:

- **Market Data**: Current Canadian real estate prices and trends
- **Regional Knowledge**: City-specific information across Canada
- **Financial Context**: Mortgage rates, taxes, and costs
- **Legal Framework**: Canadian real estate processes and regulations
- **Response Guidelines**: Formatting, tone, and structure requirements

## Performance Features

### **Fast Response Times**
- Optimized API calls to Gemini
- Efficient conversation context management
- Smart caching for common queries

### **Error Handling**
- Graceful fallbacks for API failures
- User-friendly error messages
- Retry mechanisms for failed requests

### **Mobile Optimization**
- Touch-friendly interface
- Responsive design patterns
- Optimized for small screens

## Future Enhancements

### **Planned Features**
- [ ] Voice input/output support
- [ ] Document upload and analysis
- [ ] Property image analysis
- [ ] Market prediction models
- [ ] Integration with MLS data
- [ ] Multilingual support (French)

### **Advanced AI Features**
- [ ] Streaming responses for faster perception
- [ ] Custom knowledge base integration
- [ ] Personalized user profiles
- [ ] Learning from user interactions

## Usage Analytics

The system tracks:
- Message volume and response times
- User satisfaction (thumbs up/down)
- Common query patterns
- Feature usage statistics

## Support

For technical issues or questions:
1. Check the browser console for errors
2. Verify API key configuration
3. Ensure stable internet connection
4. Contact development team for persistent issues

---

**PropertyGPT** - Making Canadian real estate accessible through AI 🏠🤖