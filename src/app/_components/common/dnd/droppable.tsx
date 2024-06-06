import React, { ReactElement } from "react";
import { useDroppable } from "@dnd-kit/core";
import { DroppableProps } from "@/types/common/dnd/droppable";

export default function Droppable(props: DroppableProps): ReactElement {
  const Element = props.element || "div";
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
    disabled: props.disabled,
    data: props.data,
    resizeObserverConfig: props.resizeObserverConfig,
  });

  const dynamicStyle: React.CSSProperties = {
    ...(props.style || {}),
    color: isOver ? "grey" : undefined,
    borderColor: isOver ? "grey" : undefined,
  };

  return (
    <Element className={props.className} ref={setNodeRef} style={dynamicStyle}>
      {props.children}
    </Element>
  );
}
