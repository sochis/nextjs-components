import { SlotsToClasses } from "@nextui-org/react";
import { ReactNode } from "react";
import { Key } from "@react-types/shared/src/key";
import { ValidationResult } from "@react-types/shared/src/inputs";

export interface Item {
  key: string | number;
  children: ReactNode;
}

export interface NextUIAutoCompleteParams {
  className?: string | undefined;
  classNames?:
    | SlotsToClasses<
        | "base"
        | "listbox"
        | "listboxWrapper"
        | "popoverContent"
        | "endContentWrapper"
        | "clearButton"
        | "selectorButton"
      >
    | undefined;
  allowsCustomValue?: boolean | undefined;
  defaultItems?: Iterable<Item> | undefined;
  label?: ReactNode;
  placeholder?: string | undefined;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode | ((v: ValidationResult) => React.ReactNode);
  isInvalid?: boolean | undefined;
  value?: string | (readonly string[] & string) | undefined;
  regexp?: string | RegExp;
  size?: "sm" | "md" | "lg" | undefined;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
  isRequired?: boolean | undefined;
  maxLength?: number | undefined;
  defaultSelectedKey?: Key | undefined;
  onValueChange?: ((value: string) => void) | undefined;
  onInput?: React.FormEventHandler<HTMLInputElement> | undefined;
  onSelectionChange?: ((key: Key | null) => void) | undefined;
}
