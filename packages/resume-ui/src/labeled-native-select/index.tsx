
import { ElementType, ReactNode } from "react";
import { ComponentPropsWithData, PolymorphicProps } from "@resume/utility-types";
import NativeSelect from "../native-select";

export interface LabeledNativeSelectOwnProps {
  label: ReactNode;
  selectProps: ComponentPropsWithData<typeof NativeSelect>;
  labelProps?: ComponentPropsWithData<'label'>;
  selectId?: string;
  placeholder?: string;
  name?: string;
}

export default function LabeledNativeSelect<T extends ElementType = 'div'>({
  label,
  selectProps,
  labelProps,
  as,
  className,
  selectId: inputId,
  placeholder,
  name,
  ...props
}: PolymorphicProps<T, Readonly<LabeledNativeSelectOwnProps>>) {
  const Component = as ?? 'div';

  return <Component
    className={`flex flex-col gap-2 ${className ?? ''}`}
    {...props}
  >
    <label
      htmlFor={selectProps?.id ?? inputId}
      {...labelProps}
      className={`text-subtitle ${labelProps?.className ?? ''}`}
    >
      {label}
    </label>
    <NativeSelect
      {...selectProps}
      id={selectProps?.id ?? inputId}
      placeholder={selectProps?.placeholder ?? placeholder}
      name={selectProps?.name ?? name}
    />
  </Component>
}
