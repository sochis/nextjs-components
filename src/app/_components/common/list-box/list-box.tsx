"use client";

import { Listbox, ListboxItem } from "@nextui-org/react";
import { ReactElement } from "react";
import { NextUIListBoxParams } from "@/types/common/list-box/list-box";

export function NextUIListBox({
  className,
  listBoxItems,
}: NextUIListBoxParams): ReactElement {
  return (
    <Listbox aria-label="list-box" className={className}>
      {listBoxItems.map((item) => (
        <ListboxItem
          key={item.key}
          aria-label={item["aria-label"]}
          title={item.title}
          href={item.href}
          onClick={item.onClick}
          onPress={item.onPress}
        >
          {item.children}
        </ListboxItem>
      ))}
    </Listbox>
  );
}
