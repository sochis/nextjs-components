import "server-only";

export default async function AppBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header className="flex h-10 flex-row justify-between px-5 sticky top-1 bottom-1 z-50 backdrop-blur-2xl">
      {children}
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
