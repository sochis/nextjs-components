import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export interface NavigationButtonParams {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: IconType;
  text?: string;
}
