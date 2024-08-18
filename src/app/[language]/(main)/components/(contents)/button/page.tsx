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
      <p className="font-semibold text-3xl">{dict.main.button.title}</p>
      <p>{dict.main.button.description}</p>
      <Divider />
      <SimpleButton dict={dict} />
    </div>
  );
}
