export interface CustomModalParams {
  isOpen?: boolean | undefined;
  onOpenChange?: ((isOpen: boolean) => void) | undefined;
  children: React.ReactNode;
  header: React.ReactNode;
  footer: (onClose: () => void) => React.ReactNode;
  size?:
    | "full"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | undefined;
}
