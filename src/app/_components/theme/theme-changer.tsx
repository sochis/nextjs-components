"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdModeNight } from "react-icons/md";

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
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <MdModeNight />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <MdLightMode />
        </button>
      )}
    </div>
  );
}
