import { ClickableChip } from "@/components/common/chip/chip";
import { NextUILink } from "@/components/common/link/link";
import { Divider, Radio, RadioGroup } from "@nextui-org/react";
import React from "react";

export default function NextUIRadioContent() {
  const [selected, setSelected] = React.useState("london");

  const validOptions = ["buenos-aires", "san-francisco", "tokyo"];

  const isInvalid = !validOptions.includes(selected);
  return (
    <div className="flex flex-col gap-y-6 pt-3">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row flex-wrap gap-8">
          <RadioGroup label="Basic Radio Button">
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
          <RadioGroup label="Disable" isDisabled>
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
          <RadioGroup label="Default" color="secondary" defaultValue="london">
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
          <RadioGroup label="Description" color="warning">
            <Radio value="buenos-aires" description="The capital of Argentina">
              Buenos Aires
            </Radio>
            <Radio value="canberra" description="The capital of Australia">
              Canberra
            </Radio>
            <Radio value="london" description="The capital of England">
              London
            </Radio>
            <Radio value="tokyo" description="The capital of Japan">
              Tokyo
            </Radio>
          </RadioGroup>
          <RadioGroup
            label="Controlled"
            value={selected}
            onValueChange={setSelected}
          >
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
          <RadioGroup
            label="Validate"
            value={selected}
            isInvalid={isInvalid}
            onValueChange={setSelected}
          >
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
          <p className="text-default-500 text-small">Selected: {selected}</p>
          <RadioGroup label="Horizontal" orientation="horizontal">
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
        </div>
      </div>
      <Divider />
      <ClickableChip size="sm">
        <NextUILink
          isExternal
          className="text-white text-xs font-semibold"
          href={"https://nextui.org/docs/components/radio-group"}
        >
          Document Link
        </NextUILink>
      </ClickableChip>
    </div>
  );
}
