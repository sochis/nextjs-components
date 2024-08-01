import { Divider } from "@nextui-org/react";
import "server-only";

export function AppBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header className="flex flex-col h-12 sticky top-0 z-50 backdrop-blur-2xl">
      <div className="flex flex-row justify-between px-5 py-1">{children}</div>
      <Divider className="mb-1" />
    </header>
  );
}

export function SubHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header className="flex h-10 flex-row justify-between pr-5">
      {children}
    </header>
  );
}
