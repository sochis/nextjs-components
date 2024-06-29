import { MouseEventHandler } from "react";
import { PressEvent } from "@react-types/shared/src/events";

export interface NextUIListBoxParams {
  className?: string | undefined;
  listBoxItems: {
    key: string | number;
    "aria-label"?: string | undefined;
    title?: React.ReactNode;
    href?: string | undefined;
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLLIElement> | undefined;
    onPress?: ((e: PressEvent) => void) | undefined;
  }[];
}
