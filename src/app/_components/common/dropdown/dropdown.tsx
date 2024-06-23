"use client";

import { DropdownParams } from "@/types/common/dropdown/dropdown";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";
import React from "react";

export function CommonDropdown({
  defaultKey,
  valueSet,
  button,
  dropdownMenu,
  dropdownItems,
  tooltip,
}: DropdownParams) {
  const [selectedKeys, setSelectedKeys] = React.useState<Set<any>>(
    new Set([defaultKey]),
  );

  const selectedValue = React.useMemo(
    () =>
      Array.from(selectedKeys)
        .map((key) => valueSet[key])
        .join(", ")
        .replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <Dropdown>
      <Tooltip size="sm" content={tooltip}>
        <div>
          <DropdownTrigger>
            <Button
              variant={button.variant}
              size={button.size}
              className={button.className + " capitalize"}
            >
              {selectedValue}
            </Button>
          </DropdownTrigger>
        </div>
      </Tooltip>
      <DropdownMenu
        variant={dropdownMenu.variant}
        disallowEmptySelection={dropdownMenu.disallowEmptySelection}
        selectionMode={dropdownMenu.selectionMode}
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => setSelectedKeys(keys as Set<any>)}
      >
        {dropdownItems.map((item) => (
          <DropdownItem key={item.key} onClick={item.onClick}>
            {item.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
