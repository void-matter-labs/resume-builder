import { ComponentProps, ComponentPropsWithoutRef, ElementType, Ref } from 'react'

export interface PolymorphicBaseProps<T extends ElementType> {
  as?: T;
}

export interface DataProps {
  [data: `data-${string}`]: string;
}

export type ComponentPropsWithData<T extends ElementType> = ComponentProps<T>
  & DataProps;

export type ComponentPropsWithoutRefWithData<T extends ElementType> = ComponentPropsWithoutRef<T>
  &  DataProps;

export type PolymorphicProps<T extends ElementType, OwnProps> = PolymorphicBaseProps<T>
  & OwnProps
  & ComponentPropsWithoutRefWithData<T>
  & {
    ref?: Ref<T>;
    className?: string;
  };
