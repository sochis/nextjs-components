import "server-only";

import { I18nParams, LangParams } from "@/types/language/language";
import { NextUIAccordion } from "@/components/common/accordion/accordion";
import { ScrollShadow } from "@nextui-org/react";
import Link from "next/link";

export default function LeftMenu({
  dict,
  params,
}: Readonly<{
  params: LangParams;
  dict: I18nParams;
}>) {
  const items = [
    {
      title: <>{dict.main.button.title}</>,
      subItems: [
        {
          href: `/${params.language}/components/button/#simple-button-section`,
          text: <>{dict.main.button.simple.title}</>,
        },
      ],
    },
    {
      title: <>{dict.main.button.radio.title}</>,
      subItems: [
        {
          href: `/${params.language}/components/button/radio/#simple-radio-section`,
          text: <>{dict.main.button.radio.simple.title}</>,
        },
      ],
    },
  ];

  return (
    <ScrollShadow className="h-[calc(100svh-92px)] py-4">
      <NextUIAccordion
        isCompact
        showDivider={false}
        selectionMode="multiple"
        defaultExpandedKeys={items.map((_, index) => index.toString())}
        accordionItems={items.map((item) => ({
          title: item.title,
          isCompact: true,
          children: (
            <div className="pl-2">
              {item.subItems.map((si, index) => (
                <div
                  key={index}
                  className="border-l-1 border-gray-300 dark:border-gray-700 pl-4 py-1"
                >
                  <Link
                    className="text-sm dark:text-neutral-400 hover:text-gray-500 hover:dark:text-white"
                    href={si.href}
                  >
                    {si.text}
                  </Link>
                </div>
              ))}
            </div>
          ),
        }))}
      />
    </ScrollShadow>
  );
}
