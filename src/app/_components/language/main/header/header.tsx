import "server-only";

import { LocaleSwitch } from "@/components/common/i18n/locale-switch";
import { TextLink } from "@/components/common/link/link";
import { ThemeSwitch } from "@/components/common/theme/switch";
import { getDictionary } from "@/i18n/dictionaries";
import { LangParams } from "@/types/language/language";
import { AppBar } from "@/components/common/header/header";
import AppNavigationRail from "./navigation-rail";

export default async function AppHeader({
  params,
}: Readonly<{ params: LangParams }>) {
  const dict = await getDictionary(params.language);

  return (
    <AppBar>
      <div className="flex items-center gap-x-10">
        <AppNavigationRail dict={dict} />
        <TextLink href={"/"}>{dict.product.title}</TextLink>
      </div>
      <div className="flex items-center gap-x-5">
        <LocaleSwitch params={{ language: params.language }} dict={dict} />
        <ThemeSwitch dict={dict} />
      </div>
    </AppBar>
  );
}
