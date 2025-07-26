export async function UserInputFormBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    const contentType = req.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Unsupported Media Type' }), { status: 415 });
    }

    const body = await req.json();
    const validationError = validateUserInput(body);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400 });
    }

    // Simulate processing the user's input with AI
    const resumeData = generateResumeTemplate(body);
    
    return new Response(JSON.stringify({ resume: resumeData }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

function validateUserInput(input: any): string | null {
  if (!input || typeof input !== 'object') {
    return 'Invalid input format';
  }

  const { name, jobHistory, skills } = input;
  if (typeof name !== 'string' || !name.trim()) {
    return 'Name is required';
  }
  if (!Array.isArray(jobHistory) || jobHistory.length === 0) {
    return 'Job history is required';
  }
  if (!Array.isArray(skills) || skills.length === 0) {
    return 'Skills are required';
  }

  return null;
}

function generateResumeTemplate(input: any): any {
  // Placeholder function to mimic AI resume generation
  return {
    template: 'default',
    content: `Resume for ${input.name}`,
    details: input
  };
}
