"use client";

import { Button } from "@nextui-org/react";
import { ReactElement } from "react";
import {
  IconButtonParams,
  NavigationButtonParams,
} from "@/types/common/button/button";

export function NavigationButton({
  icon: Icon,
  text,
  onClick,
  onPress,
}: NavigationButtonParams): ReactElement {
  return (
    <Button
      className="bg-transparent h-20 hover:bg-gray-200 hover:dark:bg-opacity-20"
      size="sm"
      onClick={onClick}
      onPress={onPress}
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

export function IconButton({
  className,
  icon: Icon,
  size,
  radius,
  onClick,
  onPress,
  iconClassName,
}: IconButtonParams): ReactElement {
  return (
    <Button
      isIconOnly
      className={`bg-transparent hover:bg-gray-200 hover:dark:bg-opacity-20 ${className}`}
      size={size}
      radius={radius}
      onClick={onClick}
      onPress={onPress}
    >
      {Icon && <Icon className={iconClassName} />}
    </Button>
  );
}
