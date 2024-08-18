import "server-only";

import { LocaleSwitch } from "@/components/common/i18n/locale-switch";
import { NextUILink, TextLink } from "@/components/common/link/link";
import { ThemeSwitch } from "@/components/common/theme/switch";
import { getDictionary } from "@/i18n/dictionaries";
import { LangParams } from "@/types/language/language";
import { AppBar } from "@/components/common/header/header";
import AppNavigationRail from "./navigation-rail";
import { ImGithub } from "react-icons/im";
import CommonTooltip from "@/components/common/tooltip/tooltip";

export default async function AppHeader({
  params,
}: Readonly<{ params: LangParams }>) {
  const dict = await getDictionary(params.language);

  return (
    <AppBar>
      <div className="flex items-center justify-center gap-x-10">
        <AppNavigationRail dict={dict} />
        <TextLink className="font-bold" href={"/"}>
          {dict.product.title}
        </TextLink>
      </div>
      <div className="flex items-center gap-x-5">
        <LocaleSwitch params={{ language: params.language }} dict={dict} />
        <CommonTooltip content={"Github"}>
          <NextUILink
            isExternal
            className="text-white text-xs font-semibold"
            href={"https://github.com/sochis/nextjs-components"}
          >
            <ImGithub className="text-base text-black dark:text-white" />
          </NextUILink>
        </CommonTooltip>
        <ThemeSwitch dict={dict} />
      </div>
    </AppBar>
  );
}
