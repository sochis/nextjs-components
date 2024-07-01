import "server-only";

import { Chip } from "@nextui-org/react";
import { ClickableChipParams } from "@/types/common/chip/chip";

export default async function ClickableChip({
  size,
  onClick,
  children,
}: Readonly<ClickableChipParams>) {
  return (
    <Chip
      className="cursor-pointer text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition ease-in-out duration-150"
      onClick={onClick}
      size={size}
    >
      {children}
    </Chip>
  );
}
