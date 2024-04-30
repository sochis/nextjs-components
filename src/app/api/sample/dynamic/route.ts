export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("numbers");
  const operator = formData.get("operator");

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
