import "server-only";

import { getDictionary } from "@/i18n/dictionaries";
import { LangParams } from "@/types/language/language";
import { Button } from "@nextui-org/button";
import TextLink from "@/components/common/link/link";

export default async function Introduction({
  params,
}: Readonly<{
  params: LangParams;
}>) {
  const dict = await getDictionary(params.language);

  return (
    <div className="w-1/2 px-16 flex flex-col gap-y-9">
      <p className="font-bold">{dict.main.home.heading}</p>
      <h1 className="font-serif text-5xl font-extrabold tracking-wide">
        {dict.main.home.topic}
      </h1>
      <div className="flex flex-col gap-y-1">
        <p className="text-sm">{dict.main.home.description1}</p>
        <p className="text-sm">{dict.main.home.description2}</p>
        <p className="text-sm">{dict.main.home.description3}</p>
        <p className="text-sm">{dict.main.home.description4}</p>
      </div>
      <div>
        <Button radius="full">
          <TextLink
            className="text-sm"
            path={"automation"}
            text={dict.main.home.start_button}
          />
        </Button>
      </div>
    </div>
  );
}
