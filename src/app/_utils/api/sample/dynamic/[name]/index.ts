const apiHost =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_API_DOMAIN;

export async function getUser(name: string): Promise<string> {
  const data = await fetch(`${apiHost}/api/sample/dynamic/${name}`, {
    cache: "no-store",
  }).then((res) => res.text());

  return data;
}

export async function postUser(name: string, body: any): Promise<Object> {
  const data = await fetch(`${apiHost}/api/sample/dynamic/${name}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  }).then((res) => res.json());

  return data;
}
