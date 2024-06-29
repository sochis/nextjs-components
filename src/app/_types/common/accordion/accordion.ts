export interface NextUIAccordionParams {
  className?: string | undefined;
  accordionItems: {
    key?: string | number | undefined;
    "aria-label"?: string | undefined;
    title?: React.ReactNode;
    children?: React.ReactNode;
  }[];
}
