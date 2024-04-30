/**
 * Handles GET requests to retrieve location information based on a given ZIP code.
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} A promise resolving to a Response object with location information.
 */
export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);

  if (searchParams.get("zipcode")) {
    const res = await fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?${searchParams.toString()}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      },
    );
    return Response.json(await res.json());
  } else {
    return new Response("query parameter: 'zipcode' is required.", {
      status: 400,
    });
  }
}
