import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import {
  Item,
  NextUIAutoCompleteParams,
} from "@/types/common/autocomplete/autocomplete";
import React from "react";

export function NextUIAutoComplete({
  className,
  classNames,
  allowsCustomValue,
  isRequired,
  label,
  placeholder,
  description,
  errorMessage,
  value,
  regexp,
  size,
  color,
  variant,
  maxLength,
  defaultItems,
  defaultSelectedKey,
  onValueChange,
  onInput,
  onSelectionChange,
}: Readonly<NextUIAutoCompleteParams>) {
  const isInvalid = React.useMemo(() => {
    if (regexp === undefined) return false;
    if (value === "" || value === undefined) return false;

    return value.match(regexp!) ? true : false;
  }, [value]);

  return (
    <Autocomplete
      aria-label="auto-complete"
      className={className}
      classNames={classNames}
      allowsCustomValue={allowsCustomValue}
      isRequired={isRequired}
      label={label}
      placeholder={placeholder}
      description={description}
      errorMessage={errorMessage}
      isInvalid={isInvalid}
      value={value}
      size={size}
      color={color}
      variant={variant}
      maxLength={maxLength}
      defaultInputValue={value}
      defaultItems={defaultItems}
      defaultSelectedKey={defaultSelectedKey}
      onValueChange={onValueChange}
      onInput={onInput}
      onSelectionChange={onSelectionChange}
    >
      {(item: Item) => (
        <AutocompleteItem
          aria-label="auto-complete-item"
          textValue={item.key.toString()}
          key={item.key}
        >
          {item.children}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
