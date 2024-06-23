import "server-only";

import { LangParams } from "@/types/language/language";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

export default async function Button({
  params,
}: Readonly<{
  params: LangParams;
}>) {
  return (
    <main className="flex flex-row px-24 py-4">
      <div className="w-1/6">
        <ScrollShadow className="h-[calc(100svh-92px)]">
          <p className="h-44">test</p>
          <p className="h-44">test</p>
          <p className="h-44">test</p>
          <p className="h-44">test</p>
          <p className="h-44">test</p>
        </ScrollShadow>
      </div>
      <div className="w-4/6 px-24 flex justify-center">test</div>
    </main>
  );
}
