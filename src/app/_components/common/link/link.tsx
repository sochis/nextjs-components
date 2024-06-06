import "server-only";

import { Link } from "@nextui-org/react";

export default async function TextLink({
  path,
  text,
}: Readonly<{ path: string; text: string }>) {
  return (
    <Link className="text-black dark:text-white" href={path}>
      {text}
    </Link>
  );
}
