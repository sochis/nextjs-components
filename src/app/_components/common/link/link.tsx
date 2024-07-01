import "server-only";

import { Link } from "@nextui-org/react";
import { TextLinkParams } from "@/types/common/link/link";

export default async function TextLink({
  className,
  isExternal,
  href,
  children,
}: Readonly<TextLinkParams>) {
  return (
    <Link
      isExternal={isExternal}
      className={`text-black dark:text-white ${className || ""}`}
      href={href}
    >
      {children}
    </Link>
  );
}
