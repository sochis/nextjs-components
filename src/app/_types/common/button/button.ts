import { MouseEventHandler } from "react";
import { IconType } from "react-icons";
import type { PressEvent } from "@react-types/shared";

export interface NavigationButtonParams {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onPress?: ((e: PressEvent) => void) | undefined;
  icon?: IconType;
  text?: string;
}

export interface IconButtonParams {
  className?: string | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onPress?: ((e: PressEvent) => void) | undefined;
  icon?: IconType;
  size?: "sm" | "md" | "lg" | undefined;
  radius?: "sm" | "md" | "lg" | "none" | "full" | undefined;
  iconClassName?: string | undefined;
}
