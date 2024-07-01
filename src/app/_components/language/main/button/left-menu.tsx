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
        accordionItems={[
          {
            key: "1",
            title: "Button",
            children: (
              <NextUIListBox
                listBoxItems={[
                  {
                    key: "11",
                    "aria-label": "nextui",
                    children: <>Simple Button</>,
                  },
                  {
                    key: "12",
                    children: <>test</>,
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
