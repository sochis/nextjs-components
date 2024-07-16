import "server-only";

import { LangParams } from "@/types/language/language";
import LeftMenu from "@/components/language/main/button/left-menu";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LangParams;
}>) {
  const dict = await getDictionary(params.language);

  return (
    <main className="flex flex-row pl-24 py-4">
      <div className="w-1/6">
        <LeftMenu dict={dict} />
      </div>
      <div className="w-5/6">{children}</div>
    </main>
  );
}
