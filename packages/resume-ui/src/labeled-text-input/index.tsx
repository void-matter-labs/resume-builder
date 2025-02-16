import { ElementType, ReactNode } from "react";
import TextInput from "../text-input";
import { ComponentPropsWithData, PolymorphicProps } from "@resume/utility-types";

export interface LabeledTextInputOwnProps  {
  label: ReactNode;
  inputProps?: ComponentPropsWithData<typeof TextInput>;
  labelProps?: ComponentPropsWithData<'label'>;
  inputId?: string;
  placeholder?: string;
  name?: string;
}

export default function LabeledTextInput<T extends ElementType = 'div'>({
  label,
  inputProps,
  labelProps,
  as,
  className,
  inputId,
  placeholder,
  name,
  ...props
}: PolymorphicProps<T, Readonly<LabeledTextInputOwnProps>>){
  const Component = as ?? 'div';

  return <Component
    className={`flex flex-col gap-2 ${className ?? ''}`}
    {...props}
  >
    <label
      htmlFor={inputProps?.id ?? inputId}
      {...labelProps}
      className={`text-subtitle ${labelProps?.className ?? ''}`}
    >
      {label}
    </label>
    <TextInput
      {...inputProps}
      id={inputProps?.id ?? inputId}
      placeholder={inputProps?.placeholder ?? placeholder}
      name={inputProps?.name ?? name}
    />
  </Component>
}
