"use client";

import { TitleButton } from "@/components/common/button/button";
import NavigationRail from "@/components/common/navigation-rail/navigation-rail";
import { I18nParams } from "@/types/language/language";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineCode } from "react-icons/ai";

export default function AppNavigationRail({
  dict,
}: Readonly<{ dict: I18nParams }>) {
  const router = useRouter();
  const pathname = usePathname();

  async function navigatePage(path: string) {
    const language = pathname.split("/")[1];
    const newPath = `/${language}/${path}`;

    router.push(newPath);
  }

  return (
    <NavigationRail>
      <TitleButton
        icon={AiOutlineCode}
        text={dict.common.navigation_rail.automation_title}
        onClick={() => navigatePage("button")}
      />
    </NavigationRail>
  );
}
