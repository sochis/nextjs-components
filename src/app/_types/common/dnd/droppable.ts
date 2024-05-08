import { UseDroppableArguments } from "@dnd-kit/core";

export interface DroppableProps extends UseDroppableArguments {
  element?: string | React.ElementType;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
