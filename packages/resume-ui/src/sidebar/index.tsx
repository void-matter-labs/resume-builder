import { PolymorphicProps } from "@resume/utility-types";
import { ElementType, LabelHTMLAttributes, ReactNode } from "react";
import Button from "../button";

import "./styles.css";
import DefaultIcon from "./DefaultIcon";

export interface SidebarOwnProps {
  controlId: string;
  expandedWidth?: string;
  collapsedWidth?: string;
  controlIcon?: ReactNode;
  initialOpen?: boolean;
  controlLabelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  time?: string;
  sidebarInnerContainerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export default function Sidebar<T extends ElementType = 'aside'>(
  {
    as,
    children,
    controlId,
    expandedWidth = '100vw',
    collapsedWidth = '4rem',
    controlIcon = <DefaultIcon width={'1.2rem'} height={'1.2rem'} />,
    initialOpen,
    controlLabelProps,
    time = '0.3s',
    sidebarInnerContainerProps,
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
        '--time': time
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
      <div
        {...sidebarInnerContainerProps}
        className={`sidebar-inner-container ${sidebarInnerContainerProps?.className ?? ''}`}
      >
        {children}
      </div>
    </div>
  </Component>
}
