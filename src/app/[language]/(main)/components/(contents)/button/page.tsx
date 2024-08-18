import "server-only";

import { LangParams } from "@/types/language/language";
import { Divider } from "@nextui-org/react";
import { getDictionary } from "@/i18n/dictionaries";
import SimpleButton from "@/components/language/main/components/button/contents/basic";

export default async function Button({
  params,
}: Readonly<{ params: LangParams }>) {
  const dict = await getDictionary(params.language);

  return (
    <div className="px-8 py-6 flex flex-col gap-y-8">
      <p id="title" className="font-semibold text-3xl scroll-mt-28">
        {dict.main.components.button.title}
      </p>
      <p>{dict.main.components.button.description}</p>
      <Divider />
      <SimpleButton dict={dict} />
    </div>
  );
}
