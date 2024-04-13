"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Theme } from "@radix-ui/themes";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ChakraProvider } from "@chakra-ui/react";

export default function UIProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme>
      <ChakraProvider>
        <AppRouterCacheProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </AppRouterCacheProvider>
      </ChakraProvider>
    </Theme>
  );
}
