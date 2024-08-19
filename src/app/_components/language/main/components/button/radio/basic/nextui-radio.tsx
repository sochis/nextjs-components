import { ClickableChip } from "@/components/common/chip/chip";
import { NextUILink } from "@/components/common/link/link";
import { NextUIRadioGroup } from "@/components/common/radio-group/radio-group";
import { Divider } from "@nextui-org/react";
import React from "react";

export default function NextUIRadioContent() {
  const [selected, setSelected] = React.useState("london");

  const validOptions = ["buenos-aires", "san-francisco", "tokyo"];
  const isInvalid = !validOptions.includes(selected);

  const radioOptions = [
    {
      value: "buenos-aires",
      label: "Buenos Aires",
      description: "The capital of Argentina",
    },
    {
      value: "sydney",
      label: "Sydney",
      description: "The capital of Australia",
    },
    { value: "san-francisco", label: "San Francisco" },
    { value: "london", label: "London", description: "The capital of England" },
    { value: "tokyo", label: "Tokyo", description: "The capital of Japan" },
  ];

  const renderRadioGroup = (props: any) => (
    <NextUIRadioGroup
      radios={radioOptions.map(({ value, label, description }) => ({
        value,
        children: <>{label}</>,
        description: props.showDescription ? description : undefined,
      }))}
      {...props}
    />
  );

  return (
    <div className="flex flex-col gap-y-6 pt-3">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row flex-wrap gap-8">
          {renderRadioGroup({ label: "Basic Radio Button" })}
          {renderRadioGroup({ label: "Disable", isDisabled: true })}
          {renderRadioGroup({
            label: "Default",
            color: "secondary",
            defaultValue: "london",
          })}
          {renderRadioGroup({
            label: "Description",
            color: "warning",
            showDescription: true,
          })}
          {renderRadioGroup({
            label: "Controlled",
            value: selected,
            onValueChange: setSelected,
          })}
          {renderRadioGroup({
            label: "Validate",
            value: selected,
            isInvalid,
            onValueChange: setSelected,
          })}
          <p className="text-default-500 text-small">Selected: {selected}</p>
          {renderRadioGroup({ label: "Horizontal", orientation: "horizontal" })}
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
