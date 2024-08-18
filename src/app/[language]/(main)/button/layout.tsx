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
    <div className="flex h-[calc(100vh-48px)] justify-center">
      <div className="w-[1200px] py-4">
        <aside className="fixed w-72">
          <LeftMenu dict={dict} />
        </aside>
        <main className="ml-72 flex-grow">{children}</main>
      </div>
    </div>
  );
}
