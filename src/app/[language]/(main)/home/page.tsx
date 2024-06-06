import "server-only";

import { getDictionary } from "@/i18n/dictionaries";
import DndSample from "@/components/language/home/dnd-sample";
import RequestSample from "@/components/language/home/request-sample";

interface HomeParams {
  language: string;
}

export default async function Home({
  params,
}: Readonly<{ params: HomeParams }>) {
  const dict = await getDictionary(params.language);
  return (
    <main className="flex flex-col items-center justify-between">
      <RequestSample />
      <DndSample />
    </main>
  );
}
