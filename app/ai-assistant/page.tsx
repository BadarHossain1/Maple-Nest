'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Home, 
  MapPin, 
  TrendingUp, 
  Calculator,
  MessageSquare,
  Lightbulb,
  Search,
  Star,
  Clock,
  ArrowLeft,
  Mic,
  MicOff,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface QuickAction {
  icon: React.ElementType;
  label: string;
  prompt: string;
  color: string;
}

const quickActions: QuickAction[] = [
  {
    icon: Home,
    label: "Find Properties",
    prompt: "I'm looking for a family home in London with 3 bedrooms under 700K. Can you help me understand what's available and what neighborhoods to consider?",
    color: "bg-blue-500"
  },
  {
    icon: Calculator,
    label: "Mortgage Calculator",
    prompt: "Can you calculate mortgage payments for a 500K home with 15% down payment? Include all the costs I should expect in UK.",
    color: "bg-green-500"
  },
  {
    icon: MapPin,
    label: "Neighborhood Guide",
    prompt: "What are the best family-friendly neighborhoods in Manchester? I care about schools, safety, and commute to downtown.",
    color: "bg-purple-500"
  },
  {
    icon: TrendingUp,
    label: "Market Analysis",
    prompt: "What's happening in the UK real estate market right now? Should I buy now or wait for better prices?",
    color: "bg-orange-500"
  }
];

const exampleQuestions = [
  "What's the average home price in Edinburgh for condos?",
  "How do I get pre-approved for a mortgage in UK?",
  "What are the best investment opportunities in Bristol?",
  "Compare rental yields between London and Manchester",
  "What documents do I need as a first-time home buyer?",
  "How much should I budget for closing costs in Ontario?",
  "Is it better to rent or buy in the current market?",
  "What areas in UK have the most growth potential?"
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Welcome message
    const welcomeMessage: Message = {
      id: '1',
      type: 'assistant',
      content: "🏠 **Welcome to PropertyGPT!** \n\nI'm your AI-powered UK real estate assistant, backed by advanced AI technology. I can help you with:\n\n✨ **Real-time market analysis** across all UK cities\n💰 **Accurate mortgage calculations** and financing options\n🏘️ **Neighborhood insights** and comparisons\n📊 **Investment opportunities** and ROI analysis\n📋 **Step-by-step guidance** for buying/selling\n🔍 **Property search** based on your criteria\n\nWhat would you like to explore today? You can ask me anything about UK real estate!",
      timestamp: new Date(),
      suggestions: [
        "Find properties in my budget",
        "Calculate mortgage payments",
        "Best neighborhoods for families",
        "Current market trends"
      ]
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSendMessage = async (content: string = inputValue) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call the real Gemini AI API
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          conversationHistory: messages.slice(-10) // Send last 10 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: data.response,
        timestamp: new Date(),
        suggestions: data.suggestions || []
      };
      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error('AI Assistant Error:', error);
      
      // Fallback message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: "🔧 I'm experiencing some technical difficulties right now, but I'm still here to help! \n\nIn the meantime, I can assist you with:\n\n• **Property Search** - Finding homes in your budget and preferred areas\n• **Mortgage Calculations** - Payment estimates and financing options\n• **Market Analysis** - Current trends across UK cities\n• **Neighborhood Insights** - Area comparisons and recommendations\n\nPlease try your question again, or feel free to ask about any UK real estate topic!",
        timestamp: new Date(),
        suggestions: [
          "Find properties in my budget",
          "Calculate mortgage payments",
          "Best neighborhoods for families",
          "Current market trends in UK"
        ]
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Add speech recognition logic here
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const clearConversation = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      type: 'assistant',
      content: "🏠 **Welcome to PropertyGPT!** \n\nI'm your AI-powered UK real estate assistant, backed by advanced AI technology. I can help you with:\n\n✨ **Real-time market analysis** across all UK cities\n💰 **Accurate mortgage calculations** and financing options\n🏘️ **Neighborhood insights** and comparisons\n📊 **Investment opportunities** and ROI analysis\n📋 **Step-by-step guidance** for buying/selling\n🔍 **Property search** based on your criteria\n\nWhat would you like to explore today? You can ask me anything about UK real estate!",
      timestamp: new Date(),
      suggestions: [
        "Find properties in my budget",
        "Calculate mortgage payments", 
        "Best neighborhoods for families",
        "Current market trends"
      ]
    };
    setMessages([welcomeMessage]);
  };

  const regenerateLastResponse = async () => {
    if (messages.length >= 2 && messages[messages.length - 2].type === 'user') {
      const lastUserMessage = messages[messages.length - 2].content;
      // Remove the last assistant response
      setMessages(prev => prev.slice(0, -1));
      // Resend the last user message
      await handleSendMessage(lastUserMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="section-padding py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                  <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="min-w-0">
                  <h1 className="text-base sm:text-xl font-bold text-gray-900 truncate">PropertyGPT</h1>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">AI Real Estate Assistant</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearConversation}
                className="text-xs sm:text-sm hidden sm:flex"
              >
                <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                New Chat
              </Button>
              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                <span className="hidden sm:inline">AI Powered</span>
                <span className="sm:hidden">●</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding py-4 sm:py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSendMessage(action.prompt)}
                      className="w-full p-2.5 sm:p-3 text-left rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <action.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-emerald-700 text-xs sm:text-sm truncate">
                          {action.label}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Example Questions */}
            <Card className="hidden lg:block">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                  Popular Questions
                </h3>
                <div className="space-y-2">
                  {exampleQuestions.slice(0, 4).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="w-full text-left text-xs sm:text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded transition-all duration-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[60vh] sm:h-[70vh] lg:h-[700px] flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-4 sm:space-y-6">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex gap-2 sm:gap-4 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      {/* Avatar */}
                      <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                        message.type === 'user' 
                          ? 'bg-blue-500' 
                          : 'bg-gradient-to-br from-emerald-500 to-teal-600'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        )}
                      </div>

                      {/* Message Content */}
                      <div className={`flex-1 max-w-[85%] sm:max-w-3xl ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block p-3 sm:p-4 rounded-2xl text-sm sm:text-base ${
                          message.type === 'user'
                            ? 'bg-blue-500 text-white rounded-br-md'
                            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm'
                        }`}>
                          {message.type === 'assistant' ? (
                            <div className="prose prose-sm max-w-none prose-emerald">
                              <ReactMarkdown
                                components={{
                                  p: ({ children }) => <p className="text-xs sm:text-sm leading-relaxed mb-2 last:mb-0">{children}</p>,
                                  strong: ({ children }) => <strong className="font-semibold text-emerald-700">{children}</strong>,
                                  em: ({ children }) => <em className="text-emerald-600">{children}</em>,
                                  ul: ({ children }) => <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">{children}</ul>,
                                  li: ({ children }) => <li className="text-xs sm:text-sm">{children}</li>,
                                  h1: ({ children }) => <h1 className="text-base sm:text-lg font-bold mb-2 text-gray-900">{children}</h1>,
                                  h2: ({ children }) => <h2 className="text-sm sm:text-base font-semibold mb-2 text-gray-800">{children}</h2>,
                                  h3: ({ children }) => <h3 className="text-sm font-semibold mb-1 text-gray-800">{children}</h3>,
                                  code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">{children}</code>,
                                  blockquote: ({ children }) => <blockquote className="border-l-4 border-emerald-500 pl-3 py-1 bg-emerald-50 text-xs sm:text-sm italic">{children}</blockquote>
                                }}
                              >
                                {message.content}
                              </ReactMarkdown>
                            </div>
                          ) : (
                            <div className="text-xs sm:text-sm text-white leading-relaxed">
                              {message.content}
                            </div>
                          )}
                          
                          {message.type === 'assistant' && (
                            <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-3 pt-2 border-t border-gray-100">
                              <Button variant="ghost" size="sm" onClick={() => copyMessage(message.content)} className="p-1 sm:p-2">
                                <Copy className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 sm:p-2">
                                <ThumbsUp className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 sm:p-2">
                                <ThumbsDown className="h-3 w-3" />
                              </Button>
                              <span className="text-xs text-gray-500 ml-auto">
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Suggestions */}
                        {message.suggestions && (
                          <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                            {message.suggestions.map((suggestion, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => handleSendMessage(suggestion)}
                                className="text-xs hover:bg-emerald-50 hover:border-emerald-300 px-2 sm:px-3 py-1"
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2 sm:gap-4"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md p-3 sm:p-4 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-500">PropertyGPT is typing...</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-3 sm:p-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2 sm:gap-4 items-end"
                >
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me anything about UK real estate..."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none text-sm sm:text-base"
                      disabled={isLoading}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={toggleListening}
                      className={`absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 ${
                        isListening ? 'text-red-500' : 'text-gray-400'
                      }`}
                    >
                      {isListening ? <MicOff className="h-3 w-3 sm:h-4 sm:w-4" /> : <Mic className="h-3 w-3 sm:h-4 sm:w-4" />}
                    </Button>
                  </div>
                  <Button
                    type="submit"
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl"
                  >
                    {isLoading ? (
                      <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                    ) : (
                      <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                  </Button>
                </form>
                
                <p className="text-xs text-gray-500 mt-2 text-center">
                  PropertyGPT can make mistakes. Please verify important information.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}



