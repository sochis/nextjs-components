import "server-only";

import "@/styles/globals.css";
import AppHeader from "@/components/common/header/app-header";
import { CommonParams } from "@/types/common/type";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: CommonParams;
}>) {
  return (
    <>
      <AppHeader params={params} />
      {children}
    </>
  );
}
