export interface ValidationInputParams {
  isRequired?: boolean | undefined;
  className?: string | undefined;
  size?: "lg" | "sm" | "md" | undefined;
  variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
  maxLength?: number | undefined;
  type?: string | undefined;
  label?: React.ReactNode;
  placeholder?: string | undefined;
  value?: string | (readonly string[] & string) | undefined;
  regexp: string | RegExp;
  description?: React.ReactNode;
  errorMessage: string;
  validationBehavior?: "native" | "aria" | undefined;
  onValueChange?: ((value: string) => void) | undefined;
  onInput?: React.FormEventHandler<HTMLInputElement> | undefined;
}
