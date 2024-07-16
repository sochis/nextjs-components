import { SelectionMode } from "@react-types/shared/src/selection";
import { Key } from "@react-types/shared/src/key";

export interface NextUIAccordionParams {
  className?: string | undefined;
  defaultExpandedKeys?: Iterable<Key> | undefined;
  variant?: "light" | "shadow" | "bordered" | "splitted" | undefined;
  showDivider?: boolean | undefined;
  isCompact?: boolean | undefined;
  selectionMode?: SelectionMode | undefined;
  accordionItems: {
    key?: string | number | undefined;
    className?: string | undefined;
    "aria-label"?: string | undefined;
    title?: React.ReactNode;
    textValue?: string | undefined;
    children?: React.ReactNode;
  }[];
}
