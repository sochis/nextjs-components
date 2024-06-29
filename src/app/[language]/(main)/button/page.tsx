import "server-only";

import { LangParams } from "@/types/language/language";

export default async function Button({
  params,
}: Readonly<{
  params: LangParams;
}>) {
  return (
    <ul className="list-disc">
      <li>
        Now this is a story all about how, my life got flipped-turned upside
        down
      </li>
    </ul>
  );
}
