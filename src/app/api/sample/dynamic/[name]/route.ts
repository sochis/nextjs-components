/**
 * Handles GET requests to greet a user with their name.
 * @param {Request} _ - The incoming request object.
 * @param {Object} params - An object containing the user's name.
 * @param {string} params.name - The name of the user to greet.
 * @returns {Promise<Response>} A promise resolving to a Response object with a greeting message.
 */
export async function GET(
  _: Request,
  { params }: { params: { name: string } },
): Promise<Response> {
  return new Response(`Hello, ${params.name}!`, {
    status: 200,
  });
}

/**
 * Handles POST requests to process user data and return a response with the user's name and age.
 * @param {Request} request - The incoming request object.
 * @param {Object} params - An object containing the user's name.
 * @param {string} params.name - The name of the user.
 * @returns {Promise<Response>} A promise resolving to a Response object with the user's name and age.
 */
export async function POST(
  request: Request,
  { params }: { params: { name: string } },
): Promise<Response> {
  const payload = await request.json();
  const body = { name: params.name, age: payload.age };

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
