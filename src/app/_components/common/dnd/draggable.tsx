import React, { ReactElement } from "react";
import { useDraggable } from "@dnd-kit/core";
import { DraggableProps } from "@/types/common/dnd/draggable";

export function Draggable(props: DraggableProps): ReactElement {
  const Element = props.element || "div";
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: props.data,
    disabled: props.disabled,
    attributes: props.attributes,
  });

  const dynamicStyle: React.CSSProperties = {
    ...(props.style || {}),
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <Element
      ref={setNodeRef}
      className={props.className}
      style={dynamicStyle}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </Element>
  );
}
