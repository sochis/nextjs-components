import "server-only";

import { LangParams } from "@/types/language/language";

export default async function Home({
  params,
}: Readonly<{
  params: LangParams;
}>) {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-white via-white to-blue-300 dark:from-neutral-950 dark:via-neutral-950 dark:to-blue-900 z-0" />
      <div className="relative h-[calc(100vh-48px)] overflow-auto z-10">
        <main className="flex flex-row flex-wrap p-24">
          <div className="p-4 h-40 max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl backdrop-blur-2xl rounded-lg">
            Need Components page
          </div>
        </main>
      </div>
    </>
  );
}
