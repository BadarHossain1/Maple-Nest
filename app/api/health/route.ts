import { NextResponse } from 'next/server';

// Health check endpoint for PropertyGPT
export async function GET() {
  try {
    const isConfigured = !!process.env.GOOGLE_AI_API_KEY;
    
    return NextResponse.json({
      status: 'healthy',
      service: 'PropertyGPT AI Assistant',
      configured: isConfigured,
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        service: 'PropertyGPT AI Assistant',
        error: 'Health check failed',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}