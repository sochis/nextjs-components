import React from "react";
import { Input } from "@nextui-org/react";

export default function ValidationInput({
  isRequired,
  className,
  type,
  label,
  placeholder,
  variant,
  initialValue,
  regexp,
  description,
  errorMessage,
  validationBehavior,
}: {
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
}) {
  const [value, setValue] = React.useState(initialValue ?? "");

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return value.match(regexp) ? true : false;
  }, [value]);

  return (
    <Input
      isRequired={isRequired}
      className={className}
      value={value}
      type={type}
      label={label}
      placeholder={placeholder}
      variant={variant}
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      description={description}
      errorMessage={errorMessage}
      validationBehavior={validationBehavior ?? "native"}
      onValueChange={setValue}
    />
  );
}
