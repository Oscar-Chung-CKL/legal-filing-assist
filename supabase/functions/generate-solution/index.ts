import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();
    // Azure OpenAI Configuration
    const AZURE_OPENAI_API_KEY = "8EIea3d4J69ERabJ3KoZIyQT4hiEriJ1iKAVPwJI6fHdhtV4zL2jJQQJ99BKACHYHv6XJ3w3AAABACOG5fm6";
    const AZURE_ENDPOINT = "https://cpa-ct-for-kev-openai-east-us2.openai.azure.com/openai/deployments/gpt-5.1-chat/chat/completions?api-version=2024-12-01-preview";

    console.log('Generating solution for prompt:', prompt);

    const response = await fetch(AZURE_ENDPOINT, {
      method: 'POST',
      headers: {
        'api-key': AZURE_OPENAI_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { 
            role: 'system', 
            content: 'You are an AI assistant helping with document processing and legal filing tasks. Provide clear, actionable solutions.' 
          },
          { role: 'user', content: prompt }
        ],
        max_tokens: 800 // Setting a reasonable limit for the response
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Azure OpenAI API error:', response.status, errorText);
      throw new Error(`Azure OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.choices[0].message.content;

    console.log('Solution generated successfully');

    return new Response(
      JSON.stringify({ solution: generatedText }), 
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in generate-solution function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }), 
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
