// Simple test to verify PropertyGPT API is working
async function testPropertyGPT() {
  try {
    const response = await fetch('http://localhost:3002/api/ai-assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'What are the average home prices in London?',
        conversationHistory: []
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ PropertyGPT API Test Successful!');
      console.log('Response:', data.response);
      console.log('Suggestions:', data.suggestions);
    } else {
      console.log('❌ API Error:', data.error);
    }
  } catch (error) {
    console.log('❌ Network Error:', error.message);
  }
}

// Run the test (uncomment the line below to test)
// testPropertyGPT();
