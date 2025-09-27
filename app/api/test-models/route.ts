import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Test Gemini model availability for debugging
export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({
        error: 'API key not configured',
        details: 'Neither GEMINI_API_KEY nor GOOGLE_AI_API_KEY found',
        envVars: Object.keys(process.env).filter(key => key.includes('GEMINI') || key.includes('GOOGLE') || key.includes('AI'))
      }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Test models in order of preference (based on current API availability)
    const modelsToTest = [
      'gemini-2.5-flash',
      'gemini-2.5-pro',
      'gemini-2.5-flash-lite',
      'gemini-2.0-flash',
      'gemini-2.0-flash-lite',
      'gemini-pro',
      'gemini-1.5-flash'
    ];

    const testResults = [];

    for (const modelName of modelsToTest) {
      try {
        console.log(`Testing model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("Test: Respond with 'PropertyGPT is working!'");
        const response = await result.response;
        const text = response.text();
        
        testResults.push({
          model: modelName,
          status: 'working',
          response: text.trim()
        });
        
        console.log(`✓ Working model found: ${modelName}`);
        // If we find a working model, we can stop here
        break;
      } catch (error: any) {
        console.log(`✗ Model ${modelName} failed:`, error.message);
        testResults.push({
          model: modelName,
          status: 'failed',
          error: error.message || 'Unknown error',
          statusCode: error.status
        });
      }
    }

    const workingModel = testResults.find(result => result.status === 'working');

    return NextResponse.json({
      status: workingModel ? 'success' : 'failed',
      workingModel: workingModel?.model || null,
      testResults,
      recommendation: workingModel 
        ? `Use model: ${workingModel.model}`
        : 'No working models found - check API key',
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'error',
        error: 'Failed to test models',
        details: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}