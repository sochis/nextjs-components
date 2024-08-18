"use client";

import { I18nParams } from "@/types/language/language";
import { LadixTabs } from "@/components/common/tabs/tabs";
import NextUIRadioContent from "./basic/nextui-radio";

export default function SimpleRadioButton({
  dict,
}: Readonly<{
  dict: I18nParams;
}>) {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="font-medium text-2xl">
        {dict.main.components.button.radio.simple.title}
      </p>
      <div
        id="radio-group-section"
        className="border-1 rounded-lg dark:border-neutral-700 scroll-mt-28"
      >
        <LadixTabs
          className="p-3"
          defaultValue={"nextui"}
          tabs={[
            {
              value: "nextui",
              title: <>Next UI</>,
              content: <NextUIRadioContent />,
            },
            { value: "mui", title: <>Material UI</>, content: <>test2</> },
            { value: "radixui", title: <>Radix UI</>, content: <>test3</> },
          ]}
        />
      </div>
    </div>
  );
}
