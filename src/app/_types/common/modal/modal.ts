export interface CustomModalParams {
  className?: string;
  classNames?: Partial<Record<"header" | "body" | "footer", string>>;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  header?: React.ReactNode;
  children?: (onClose: () => void) => React.ReactNode;
  footer?: (onClose: () => void) => React.ReactNode;
  size?: "sm" | "md" | "lg";
  hideCloseButton?: boolean;
}
