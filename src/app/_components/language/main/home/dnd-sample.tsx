"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useDndStore } from "@/store/home";
import Draggable from "@/components/common/dnd/draggable";
import Droppable from "@/components/common/dnd/droppable";

export default function DndSample({}) {
  const { isDropped, setIsDropped } = useDndStore();
  const draggableMarkup = (
    <Draggable id={"draggable"} element={"button"}>
      Drag me
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable id={"droppable"}>
        {isDropped ? draggableMarkup : "Drop here"}
      </Droppable>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
}
