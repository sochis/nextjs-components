import Link from "next/link";
import { Link as NUILink } from "@nextui-org/react";
import { NextUILinkParams, TextLinkParams } from "@/types/common/link/link";

export function TextLink({
  className,
  href,
  children,
}: Readonly<TextLinkParams>) {
  return (
    <Link
      className={`text-black dark:text-white ${className || ""}`}
      href={href}
    >
      {children}
    </Link>
  );
}

export async function NextUILink({
  className,
  isExternal,
  href,
  children,
}: Readonly<NextUILinkParams>) {
  return (
    <NUILink
      isExternal={isExternal}
      className={`text-black dark:text-white ${className || ""}`}
      href={href}
    >
      {children}
    </NUILink>
  );
}
