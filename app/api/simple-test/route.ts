import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_AI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key missing' }, { status: 500 });
    }

    console.log('API Key present:', apiKey.substring(0, 10) + '...');
    
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Try the most basic current model name
    console.log('Attempting to initialize gemini-2.5-flash...');
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
    console.log('Model initialized, attempting to generate content...');
    const result = await model.generateContent("Say hello");
    
    console.log('Content generated successfully');
    const response = result.response;
    const text = response.text();
    
    return NextResponse.json({
      success: true,
      model: 'gemini-2.5-flash',
      response: text,
      timestamp: new Date().toISOString()
    });
    
  } catch (error: any) {
    console.error('Simple test error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      status: error.status,
      details: error.toString(),
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}