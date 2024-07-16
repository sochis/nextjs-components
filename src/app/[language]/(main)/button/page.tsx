import "server-only";

import { LangParams } from "@/types/language/language";
import { Divider, ScrollShadow } from "@nextui-org/react";
import LadixTabs from "@/components/common/tabs/tabs";
import NextUIButtonContent from "@/components/language/main/button/contents/simple-button";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Button({
  params,
}: Readonly<{ params: LangParams }>) {
  const dict = await getDictionary(params.language);
  return (
    <ScrollShadow className="h-[calc(100svh-92px)] px-8">
      <div className="py-6 flex flex-col gap-y-8">
        <p className="font-semibold text-3xl">{dict.main.button.title}</p>
        <p>{dict.main.button.description}</p>
        <Divider />
        <div className="flex flex-col gap-y-3">
          <p className="font-medium text-2xl">
            {dict.main.button.simple.title}
          </p>
          <div className="border-1 rounded-lg dark:border-neutral-700">
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
      </div>
    </ScrollShadow>
  );
}
