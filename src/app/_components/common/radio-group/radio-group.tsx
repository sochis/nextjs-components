"use client";

import { Radio, RadioGroup } from "@nextui-org/react";
import { ReactElement } from "react";
import { NextUIRadioGroupParams } from "@/types/common/radio-group/radio-group";

export function NextUIRadioGroup({
  label,
  color,
  value,
  defaultValue,
  isDisabled,
  isInvalid,
  orientation,
  onValueChange,
  radios,
}: NextUIRadioGroupParams): ReactElement {
  return (
    <RadioGroup
      label={label}
      color={color}
      value={value}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      orientation={orientation}
      onValueChange={onValueChange}
    >
      {radios.map((radio) => (
        <Radio value={radio.value} description={radio.description}>
          {radio.children}
        </Radio>
      ))}
    </RadioGroup>
  );
}
