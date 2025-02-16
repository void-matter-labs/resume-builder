import {
  tv,
  type VariantProps
} from 'tailwind-variants'

import { type PolymorphicProps } from '@resume/utility-types'
import { ElementType, ReactNode } from 'react'

const button = tv({
  base: 'rounded-sm cursor-pointer transition-all duration-200 ease-in-out',
  variants: {
    hoverEffect: {
      grow: 'hover:scale-105',
      shrink: 'hover:scale-95',
    },
    hasIcons: {
      true: 'flex items-center justify-center space-x-2',
    },
    ejectPadding: {
      true: 'p-0',
      false: 'px-4 py-2',
      undefined: 'px-4 py-2',
    },
    themeColor: {
      primary: '',
      secondary: '',
    },
    variant: {
      outline: 'border-solid ',
      solid: '',
    }
  },
  compoundVariants: [
    {
      themeColor: 'primary',
      variant: 'solid',
      className: [
        'bg-primary',
        'text-white',
        'hover:bg-primary-hover',
      ]
    },
    {
      themeColor: 'primary',
      variant: 'outline',
      className: [
        'border-solid',
        'border',
        'border-primary',
        'text-primary',
        'hover:bg-primary',
        'hover:text-white'
      ]
    },
    {
      themeColor: 'secondary',
      variant: 'solid',
      className: [
        'bg-secondary',
        'text-white',
        'hover:bg-secondary-hover',
      ]
    },
    {
      themeColor: 'secondary',
      variant: 'outline',
      className: [
        'border-solid',
        'border',
        'border-secondary',
        'text-secondary',
        'hover:bg-secondary',
        'hover:text-white'
      ]
    }
  ]
})

export interface ButtonOwnProps extends Readonly<Omit<VariantProps<typeof button>, 'hasIcons'>> {
  classNameResolver?: typeof button;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export type ButtonProps<T extends ElementType = 'button'> = PolymorphicProps<T, ButtonOwnProps>

export default function Button<T extends ElementType = 'button'>(
  {
    as,
    className,
    classNameResolver = button,
    themeColor,
    ejectPadding,
    variant,
    startIcon,
    endIcon,
    children,
    hoverEffect,
    ...props
  }:ButtonProps<T>
){
  const Component = props.href? 'a': (as ?? 'button');

  return <Component
    className={classNameResolver({
      className,
      themeColor,
      ejectPadding,
      variant,
      hoverEffect,
      hasIcons: !!(startIcon || endIcon)
    })}
    {...props}
  >
    {startIcon}
    {children}
    {endIcon}
  </Component>
}
