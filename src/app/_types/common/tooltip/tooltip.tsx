export interface CommonTooltipParams {
  content: React.ReactNode;
  closeDelay?: number;
  placement?:
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "left-start"
    | "left-end"
    | "right-start"
    | "right-end"
    | undefined;
  size?: "sm" | "md" | "lg" | undefined;
  children: React.ReactNode;
}
