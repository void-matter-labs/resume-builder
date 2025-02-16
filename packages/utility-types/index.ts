import { ComponentPropsWithoutRef, ElementType, Ref } from 'react'

export interface PolymorphicBaseProps<T extends ElementType> {
  as?: T;
}

export type PolymorphicProps<T extends ElementType, OwnProps> = PolymorphicBaseProps<T>
  & OwnProps
  & ComponentPropsWithoutRef<T>
  & {
    ref?: Ref<T>;
    [data: `data-${string}`]: string;
    className?: string;
  };
