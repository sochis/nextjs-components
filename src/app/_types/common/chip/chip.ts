import { MouseEventHandler } from "react";

export interface ClickableChipParams {
  size?: "sm" | "md" | "lg" | undefined;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  children?: React.ReactNode;
}
