"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { ReactElement } from "react";
import { NextUIAccordionParams } from "@/types/common/accordion/accordion";

export function NextUIAccordion({
  className,
  accordionItems,
}: NextUIAccordionParams): ReactElement {
  return (
    <Accordion className={className} isCompact showDivider={false}>
      {accordionItems.map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={item["aria-label"]}
          title={item.title}
        >
          {item.children}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
