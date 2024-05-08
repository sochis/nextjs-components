import { useDroppable } from "@dnd-kit/core";
import { DroppableProps } from "@/types/common/dnd/droppable";

export function Droppable(props: DroppableProps): React.ReactElement {
  const Element = props.element || "div";
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
    data: props.data,
    disabled: props.disabled,
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
