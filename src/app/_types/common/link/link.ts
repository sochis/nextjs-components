import { Url } from "next/dist/shared/lib/router/router";

export interface TextLinkParams {
  href: Url;
  children: React.ReactNode;
  className?: string | undefined;
}

export interface NextUILinkParams {
  className?: string | undefined;
  isExternal?: boolean | undefined;
  href: any;
  children: React.ReactNode;
}
