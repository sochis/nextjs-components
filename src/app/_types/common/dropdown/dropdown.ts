import { SelectionMode } from "@react-types/shared";

export interface DropdownParams {
  defaultKey: any;
  valueSet: Record<string, any>;
  button: {
    variant?:
      | "shadow"
      | "flat"
      | "solid"
      | "bordered"
      | "light"
      | "faded"
      | "ghost"
      | undefined;
    size?: "sm" | "md" | "lg" | undefined;
    className?: string | undefined;
  };
  dropdownMenu: {
    variant?:
      | "shadow"
      | "flat"
      | "solid"
      | "bordered"
      | "light"
      | "faded"
      | undefined;
    disallowEmptySelection?: boolean | undefined;
    selectionMode?: SelectionMode | undefined;
  };
  dropdownItems: {
    key?: string | number | undefined;
    onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
    text: string;
  }[];
  tooltip?: string;
}
