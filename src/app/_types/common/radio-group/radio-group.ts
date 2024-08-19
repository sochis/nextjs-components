import { ReactNode } from "react";
import { Orientation } from "@react-types/shared";

export interface NextUIRadioGroupParams {
  isDisabled?: boolean | undefined;
  isInvalid?: boolean | undefined;
  value?: string | undefined;
  defaultValue?: string | undefined;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  label?: ReactNode;
  orientation?: Orientation | undefined;
  onValueChange?: ((value: string) => void) | undefined;
  radios: NextUIRadioParams[];
}

export interface NextUIRadioParams {
  value: string | (readonly string[] & string);
  description?: ReactNode;
  children?: ReactNode;
}
