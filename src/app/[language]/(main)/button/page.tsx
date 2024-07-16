import "server-only";

import { LangParams } from "@/types/language/language";
import { Divider, ScrollShadow } from "@nextui-org/react";
import { getDictionary } from "@/i18n/dictionaries";
import SimpleButton from "@/components/language/main/button/contents/simple-button";

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
        <SimpleButton dict={dict} />
      </div>
    </ScrollShadow>
  );
}
