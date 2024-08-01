"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { ReactElement } from "react";
import { NextUIAccordionParams } from "@/types/common/accordion/accordion";

export function NextUIAccordion({
  className,
  itemClasses,
  defaultExpandedKeys,
  variant,
  showDivider,
  isCompact,
  selectionMode,
  accordionItems,
}: NextUIAccordionParams): ReactElement {
  return (
    <Accordion
      defaultExpandedKeys={defaultExpandedKeys}
      className={className}
      itemClasses={itemClasses}
      variant={variant}
      showDivider={showDivider}
      isCompact={isCompact}
      selectionMode={selectionMode}
    >
      {accordionItems.map((item, index) => (
        <AccordionItem
          isCompact={item.isCompact}
          className={item.className}
          key={"accordion-item-" + (index + 1).toString()}
          aria-label={item["aria-label"]}
          title={item.title}
          textValue={item.textValue}
        >
          {item.children}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
