"use client";

import { Button } from "@nextui-org/react";
import { ReactElement } from "react";
import { NavigationButtonParams } from "@/types/common/button/button";

export function TitleButton({
  icon: Icon,
  text,
  onClick,
}: NavigationButtonParams): ReactElement {
  return (
    <Button
      className="bg-transparent h-20 hover:bg-gray-200 hover:dark:bg-opacity-20"
      size="sm"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-y-2">
        {Icon && <Icon className="text-2xl" />}
        <p className="w-14 text-center break-words text-xsm whitespace-pre-wrap">
          {text}
        </p>
      </div>
    </Button>
  );
}
