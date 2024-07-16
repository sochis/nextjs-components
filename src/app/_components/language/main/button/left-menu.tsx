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
  return (
    <ScrollShadow className="h-[calc(100svh-92px)]">
      <NextUIAccordion
        showDivider={false}
        selectionMode="multiple"
        defaultExpandedKeys={["accordion-item-1", "accordion-item-2"]}
        accordionItems={[
          {
            title: <>{dict.main.button.title}</>,
            children: (
              <NextUIListBox
                listBoxItems={[
                  {
                    key: "11",
                    "aria-label": "nextui",
                    href: "#simple-button-section",
                    children: <>{dict.main.button.simple.title}</>,
                  },
                ]}
              />
            ),
          },
          {
            key: "2",
            title: "title2",
            children: <NextUIListBox listBoxItems={[]} />,
          },
        ]}
      />
    </ScrollShadow>
  );
}
