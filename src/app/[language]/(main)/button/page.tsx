import "server-only";

import Image from "next/image";
import { LangParams } from "@/types/language/language";

export default async function Button({
  params,
}: Readonly<{
  params: LangParams;
}>) {
  return (
    <main className="flex flex-row p-24">
      <div className="w-1/2 px-24 flex justify-center"></div>
      <div className="w-1/2 px-24 flex justify-center"></div>
    </main>
  );
}
