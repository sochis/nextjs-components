import { Card, Skeleton } from "@nextui-org/react";

export function MenuSkeleton() {
  return (
    <div className="w-full px-5 flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg" />
      <Skeleton className="h-3 w-4/5 rounded-lg" />
      <Skeleton className="h-3 rounded-lg" />
    </div>
  );
}

export function TableSkeleton() {
  return (
    <Card className="w-full px-5 flex flex-col gap-2 p-4" radius="lg">
      <Skeleton className="h-3 rounded-lg" />
      <Skeleton className="h-3 rounded-lg" />
      <Skeleton className="h-3 rounded-lg" />
      <Skeleton className="h-3 rounded-lg" />
    </Card>
  );
}
