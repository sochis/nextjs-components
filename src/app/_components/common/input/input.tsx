import React from "react";
import { Input } from "@nextui-org/react";
import { ValidationInputParams } from "@/types/common/input/input";

export function ValidationInput({
  isRequired,
  className,
  size,
  variant,
  maxLength,
  type,
  label,
  placeholder,
  value,
  regexp,
  description,
  errorMessage,
  validationBehavior,
  onValueChange,
  onInput,
}: ValidationInputParams) {
  const isInvalid = React.useMemo(() => {
    if (value === "" || value === undefined) return false;

    return value.match(regexp) ? true : false;
  }, [value]);

  return (
    <Input
      isRequired={isRequired}
      className={className}
      size={size}
      variant={variant}
      maxLength={maxLength}
      value={value}
      type={type}
      label={label}
      placeholder={placeholder}
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "default"}
      description={description}
      errorMessage={errorMessage}
      validationBehavior={validationBehavior ?? "native"}
      onValueChange={onValueChange}
      onInput={onInput}
    />
  );
}
