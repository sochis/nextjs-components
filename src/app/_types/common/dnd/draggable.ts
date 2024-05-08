import { UseDraggableArguments } from "@dnd-kit/core";

export interface DraggableProps extends UseDraggableArguments {
  element?: string | React.ElementType;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
