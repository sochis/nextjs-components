import "server-only";

import { Link } from "@nextui-org/react";

export default async function TextLink({
  path,
  text,
  className,
}: Readonly<{ path: string; text: string; className?: string }>) {
  return (
    <Link
      className={`text-black dark:text-white ${className || ""}`}
      href={path}
    >
      {text}
    </Link>
  );
}
