import { ComponentPropsWithData } from "@resume/utility-types";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";


export interface TextInputProps extends
  ComponentPropsWithData<'input'>,
  Omit<VariantProps<typeof textInput>, 'hasIcons'> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  classNameResolver?: typeof textInput;
  wrapperProps?: ComponentPropsWithData<'div'>;
}

const base = 'border-placeholder rounded-sm p-4'

export const textInput = tv({
  base: [base, 'placeholder:text-placeholder'],
  variants: {
    hasIcons: {
      false: 'border-solid border',
      undefined: 'border-solid border',
      true: 'border-noe outline-none p-0 pl-2'
    }
  }
})

export default function TextInput({
  startIcon,
  endIcon,
  className,
  wrapperProps,
  classNameResolver = textInput,
  ...props
}: Readonly<TextInputProps>) {
  const hasIcons = !!(startIcon || endIcon);

  if (hasIcons) {
    return <div
      {...wrapperProps}
      className={`${className ?? wrapperProps?.className ?? ''} ${base} border flex`}
    >
      {startIcon}
      <input
        type="text"
        {...props}
        className={classNameResolver({ className: "text-inner-input", hasIcons })}
      />
      {endIcon}
    </div>
  }

  return <input
    type="text"
    {...props}
    className={classNameResolver({ className, hasIcons })}
  />
}
