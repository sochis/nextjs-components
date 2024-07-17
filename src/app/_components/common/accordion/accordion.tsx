"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { ReactElement } from "react";
import { NextUIAccordionParams } from "@/types/common/accordion/accordion";

export function NextUIAccordion({
  className,
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
      variant={variant}
      showDivider={showDivider}
      isCompact={isCompact}
      selectionMode={selectionMode}
    >
      {accordionItems.map((item, index) => (
        <AccordionItem
          isCompact
          className={item.className}
          key={index.toString()}
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
