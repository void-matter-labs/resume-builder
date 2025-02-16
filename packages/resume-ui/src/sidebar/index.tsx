import { PolymorphicProps } from "@resume/utility-types";
import { ElementType, LabelHTMLAttributes, ReactNode } from "react";
import Button from "../button";


export interface SidebarOwnProps {
  controlId: string;
  expandedWidth?: string;
  collapsedWidth?: string;
  controlIcon?: ReactNode;
  initialOpen?: boolean;
  controlLabelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

export default function Sidebar<T extends ElementType = 'aside'>(
  {
    as,
    children,
    controlId,
    expandedWidth = '100vw',
    collapsedWidth = '4rem',
    controlIcon,
    initialOpen,
    controlLabelProps,
    ...props
  }: PolymorphicProps<T, SidebarOwnProps>
){
  const Component = as ?? 'aside';

  return <Component {...props}>
    <input
      hidden
      defaultChecked={initialOpen}
      className="sidebar-outer-check"
      type="checkbox"
      id={controlId}
      aria-hidden
    />
    <div
      style={{
        // @ts-ignore
        '--expanded-width': expandedWidth,
        '--collapsed-width': collapsedWidth,
      }}
      className="sidebar-outer-container"
    >
      <div className="w-full flex justify-end">
        <Button
          as="label"
          {...controlLabelProps}
          htmlFor={controlId}
          role="button"
          aria-controls="sidebar"
        >
          {controlIcon}
        </Button>
      </div>
      <div className="sidebar-inner-container">
        {children}
      </div>
    </div>
  </Component>
}
