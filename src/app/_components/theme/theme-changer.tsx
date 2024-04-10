"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { GrSystem } from "react-icons/gr";

export default function ThemeChanger() {
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
        <button onClick={() => setTheme("dark")}>
          <MdLightMode />
        </button>
      ) : theme === "dark" ? (
        <button onClick={() => setTheme("system")}>
          <MdModeNight />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <GrSystem />
        </button>
      )}
    </div>
  );
}
