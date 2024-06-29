export interface ValidationInputParams {
  isRequired?: boolean | undefined;
  className?: string | undefined;
  type?: string | undefined;
  label?: React.ReactNode;
  placeholder?: string | undefined;
  variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
  initialValue?: string;
  regexp: string | RegExp;
  description?: React.ReactNode;
  errorMessage: string;
  validationBehavior?: "native" | "aria" | undefined;
}
