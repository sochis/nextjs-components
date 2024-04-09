import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ThemeProvider from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Component Samples",
  description: "Component sample for my memoorandom.",
};

interface StaticParams {
  lang: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  return [{ lang: "en" }, { lang: "ja" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: StaticParams;
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
