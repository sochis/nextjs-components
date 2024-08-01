import { CommonTooltipParams } from "@/types/common/tooltip/tooltip";
import { Tooltip } from "@nextui-org/react";

export default function CommonTooltip({
  content,
  placement = "bottom",
  closeDelay = 100,
  size = "sm",
  children,
}: CommonTooltipParams) {
  return (
    <Tooltip
      content={content}
      placement={placement}
      closeDelay={closeDelay}
      size={size}
    >
      <div>{children}</div>
    </Tooltip>
  );
}
