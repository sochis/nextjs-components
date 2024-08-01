import { SelectionMode } from "@react-types/shared/src/selection";
import { Key } from "@react-types/shared/src/key";
import { SlotsToClasses } from "@nextui-org/react";

export interface NextUIAccordionParams {
  className?: string | undefined;
  itemClasses?:
    | SlotsToClasses<
        | "base"
        | "title"
        | "content"
        | "subtitle"
        | "indicator"
        | "startContent"
        | "heading"
        | "trigger"
        | "titleWrapper"
      >
    | undefined;
  defaultExpandedKeys?: Iterable<Key> | undefined;
  variant?: "light" | "shadow" | "bordered" | "splitted" | undefined;
  showDivider?: boolean | undefined;
  isCompact?: boolean | undefined;
  selectionMode?: SelectionMode | undefined;
  accordionItems: {
    key?: string | number | undefined;
    className?: string | undefined;
    "aria-label"?: string | undefined;
    isCompact?: boolean | undefined;
    title?: React.ReactNode;
    textValue?: string | undefined;
    children?: React.ReactNode;
  }[];
}
