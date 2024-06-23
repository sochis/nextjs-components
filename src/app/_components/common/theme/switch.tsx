"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { Tooltip } from "@nextui-org/react";
import { I18nParams } from "@/types/language/language";

export default function ThemeSwitch({ dict }: Readonly<{ dict: I18nParams }>) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    return setTheme(localStorage.getItem("theme")!);
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "light" ? (
        <Tooltip size="sm" content={dict.main.header.theme.light}>
          <button onClick={() => setTheme("dark")}>
            <MdLightMode />
          </button>
        </Tooltip>
      ) : theme === "dark" ? (
        <Tooltip size="sm" content={dict.main.header.theme.dark}>
          <button onClick={() => setTheme("system")}>
            <MdModeNight />
          </button>
        </Tooltip>
      ) : (
        <Tooltip size="sm" content={dict.main.header.theme.device}>
          <button onClick={() => setTheme("light")}>
            <GrSystem />
          </button>
        </Tooltip>
      )}
    </div>
  );
}
