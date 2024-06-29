import React from "react";
import { Input } from "@nextui-org/react";
import { ValidationInputParams } from "@/types/common/input/input";

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
}: ValidationInputParams) {
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
