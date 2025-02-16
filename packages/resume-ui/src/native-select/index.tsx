import { NoPolymorphicProps } from "@resume/utility-types";
import { ElementType } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const nativeSelect = tv({
  base: [
    "inline-flex",
    "cursor-pointer",
    "select-none",
    "appearance-none",
    "rounded-lg",
    "border",
    "border-transparent",
    "bg-white",
    "bg-[linear-gradient(45deg,transparent_50%,currentColor_50%),linear-gradient(135deg,currentColor_50%,transparent_50%)]",
    "bg-[position:calc(100%-20px)_calc(1px+50%),calc(100%-16.1px)_calc(1px+50%)]",
    "bg-[size:4px_4px,4px_4px]",
    "bg-no-repeat",
    "w-full",
  ],
  variants: {
    bordered: {
      true: "border-gray-300",
    },
    size: {
      sm: "h-10 min-h-[2.5rem] pl-3 pr-8 text-xs",
      md: "h-12 min-h-[3rem] pl-4 pr-10 text-sm",
      lg: "h-14 min-h-[3.5rem] pl-5 pr-12 text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
})


export interface NativeSelectOwnProps extends VariantProps<typeof nativeSelect> {
  options: {
    value: string;
    label: string;
  }[]
}

export default function NativeSelect<T extends ElementType = 'select'>({
  className,
  options,
  size,
  bordered,
  ...props
}: NoPolymorphicProps<T, Readonly<NativeSelectOwnProps>>) {
  const resolvedClassName = nativeSelect({ className, size, bordered })

  return (
    <select className={resolvedClassName} {...props}>
      {/* TODO: create a Option component, Just receive a children */}
      <option disabled value="" selected hidden>Select</option>
      {
        options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))
      }
    </select>
  )
}
