"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Theme } from "@radix-ui/themes";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export function UIProviders({ children }: { children: React.ReactNode }) {
  return (
    <Theme>
      <AppRouterCacheProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </AppRouterCacheProvider>
    </Theme>
  );
}
