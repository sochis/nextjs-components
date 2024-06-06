import "server-only";

import { LangParams } from "@/types/language/language";
import { getDictionary } from "@/i18n/dictionaries";
import LandingForm from "@/components/language/form";

export default async function Landing({
  params,
}: Readonly<{
  params: LangParams;
}>) {
  const dict = await getDictionary(params.language);
  console.log(dict);

  return (
    <main className="flex h-screen bg-gradient-to-br from-sky-200 via-sky-200 to-white dark:from-black dark:via-black dark:to-blue-950">
      <div className="w-1/2 md:p-20">
        <h1 className="font-serif text-5xl font-extrabold italic tracking-wide">
          {dict.product.landing_title}
        </h1>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <LandingForm dict={dict} />
      </div>
    </main>
  );
}
