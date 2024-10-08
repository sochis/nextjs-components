"use client";

import { I18nParams } from "@/types/language/language";
import { LadixTabs } from "@/components/common/tabs/tabs";
import NextUIButtonContent from "./basic/nextui-button";

export default function SimpleButton({
  dict,
}: Readonly<{
  dict: I18nParams;
}>) {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="font-medium text-2xl">
        {dict.main.components.button.simple.title}
      </p>
      <div
        id="simple-button-section"
        className="border-1 rounded-lg dark:border-neutral-700 scroll-mt-28"
      >
        <LadixTabs
          className="p-3"
          defaultValue={"nextui"}
          tabs={[
            {
              value: "nextui",
              title: <>Next UI</>,
              content: <NextUIButtonContent />,
            },
            { value: "mui", title: <>Material UI</>, content: <>test2</> },
            { value: "radixui", title: <>Radix UI</>, content: <>test3</> },
          ]}
        />
      </div>
    </div>
  );
}
