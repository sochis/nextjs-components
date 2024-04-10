"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Theme } from "@radix-ui/themes";

export default function UIProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme>
      <NextUIProvider>{children}</NextUIProvider>
    </Theme>
  );
}
