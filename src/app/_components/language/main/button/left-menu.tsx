import "server-only";

import { I18nParams } from "@/types/language/language";
import { NextUIAccordion } from "@/components/common/accordion/accordion";
import { NextUIListBox } from "@/components/common/list-box/list-box";
import { ScrollShadow } from "@nextui-org/react";

export default function LeftMenu({
  dict,
}: Readonly<{
  dict: I18nParams;
}>) {
  const items = [
    {
      title: <>{dict.main.button.title}</>,
      boxItems: [
        {
          areaLabel: "simple-button",
          href: "#simple-button-section",
          children: <>{dict.main.button.simple.title}</>,
        },
      ],
    },
    {
      title: <>title2</>,
      boxItems: [
        {
          areaLabel: "title2",
          href: "",
          children: <></>,
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
            <NextUIListBox
              listBoxItems={item.boxItems.map((bi) => ({
                key: bi.href,
                "aria-label": bi.areaLabel,
                href: bi.href,
                children: bi.children,
              }))}
            />
          ),
        }))}
      />
    </ScrollShadow>
  );
}
