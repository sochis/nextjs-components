// "use client";

import { MdMenu } from "react-icons/md";
import ThemeChanger from "../theme/theme-changer";
import { getDictionary } from "@/i18n/dictionaries";
import { CommonParams } from "@/types/common/type";

export default async function AppHeader({
  params,
}: Readonly<{ params: CommonParams }>) {
  const dict = await getDictionary(params.lang);

  return (
    <header className="flex h-10 flex-row justify-between px-5 py-1">
      <div className="flex items-center gap-x-10">
        <MdMenu />
        <h4>{dict.title}</h4>
      </div>
      <div className="flex items-center gap-x-5">
        <ThemeChanger />
      </div>
    </header>
  );
}
