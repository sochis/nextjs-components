import "server-only";

import { LangParams } from "@/types/language/language";
import AppHeader from "@/components/language/main/header/header";

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LangParams;
}>) {
  return (
    <div className="min-h-screen h-full overflow-y-auto">
      <AppHeader params={params} />
      {children}
    </div>
  );
}
