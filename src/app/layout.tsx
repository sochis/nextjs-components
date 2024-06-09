import "server-only";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import ThemeProvider from "@/components/common/theme/provider";
import UIProviders from "@/components/common/ui-library/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Component Samples",
  description: "Component sample for my memoorandom.",
};

interface StaticParams {
  language: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  return [{ language: "en" }, { language: "ja" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: StaticParams;
}>) {
  return (
    <html lang={params.language} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
          <UIProviders>{children}</UIProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
