import "server-only";

import { getDictionary } from "@/i18n/dictionaries";
import DndSample from "@/components/home/dnd-sample";
import RequestSample from "@/components/home/request-sample";

interface HomeParams {
  lang: string;
}

export default async function Home({
  params,
}: Readonly<{ params: HomeParams }>) {
  const dict = await getDictionary(params.lang);
  return (
    <main className="flex flex-col items-center justify-between">
      <RequestSample />
      <DndSample />
    </main>
  );
}
