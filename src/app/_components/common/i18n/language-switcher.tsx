"use client";

import { locales } from "@/middleware";
import { usePathname, useRouter } from "next/navigation";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(locale: string) {
    const localePattern = locales.join("|");
    const regex = /(\/(?:en|ja))+(\/.*$)/;
    const pattern = new RegExp(regex.source.replace(/lang/, localePattern));

    const match = pathname.match(pattern);
    if (match) {
      const path = match[match.length - 1] || "";
      router.push(`/${locale}${path}`);
    } else {
      console.log("language is not changed.");
    }
  }

  return (
    <>
      <button onClick={() => switchLocale("en")}>English</button>
      <button onClick={() => switchLocale("ja")}>日本語</button>
    </>
  );
}
