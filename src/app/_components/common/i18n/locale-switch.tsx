"use client";

import { locales } from "@/middleware";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CommonDropdown } from "@/components/common/dropdown/dropdown";
import { LangParams } from "@/types/language/language";

export function LocaleSwitch({ params }: Readonly<{ params: LangParams }>) {
  const pathname = usePathname();
  const router = useRouter();

  const lang_dict = {
    en: "English",
    ja: "日本語",
  };

  function switchLocale(locale: string) {
    const localePattern = locales.join("|");
    const regex = /(\/(?:en|ja))+(\/.*$)/;
    const pattern = new RegExp(regex.source.replace(/language/, localePattern));

    const match = pathname.match(pattern);
    if (match) {
      const path = match[match.length - 1] || "";
      router.push(`/${locale}${path}`);
    } else {
      console.debug("Language is not changed.");
    }
  }

  return (
    <CommonDropdown
      defaultKey={params.language}
      valueSet={lang_dict}
      button={{
        variant: "flat",
        size: "sm",
      }}
      dropdownMenu={{
        variant: "flat",
        disallowEmptySelection: true,
        selectionMode: "single",
      }}
      dropdownItems={[
        { key: "en", onClick: () => switchLocale("en"), text: lang_dict.en },
        { key: "ja", onClick: () => switchLocale("ja"), text: lang_dict.ja },
      ]}
    />
  );
}
