import { ComponentPropsWithData } from "@resume/utility-types";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

export interface CheckboxProps extends
    ComponentPropsWithData<'input'>,
    Omit<VariantProps<typeof checkbox>, 'size'> {
    label?: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    type?: 'checkbox' | 'radio';
}

const base = 'border-placeholder rounded-sm cursor-pointer';

export const checkbox = tv({
    base: [base, 'appearance-none checked:bg-primary checked:border-transparent relative'],
    variants: {
        size: {
            sm: 'w-4 h-4',
            md: 'w-6 h-6',
            lg: 'w-8 h-8',
        }
    }
});

export default function Checkbox({
    label,
    size = 'md',
    className,
    classNameResolver = checkbox,
    type = 'checkbox',
    ...props
}: Readonly<CheckboxProps>) {
    return (
        <label className="flex items-center gap-3 relative">
            <input
            type={type}
            className={`${classNameResolver({ className, size })} peer border border-solid transition-all`}
            {...props}
            />
            <svg
            className={`hidden peer-checked:block absolute transition-all ${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-7 h-7' : 'w-5 h-5'} text-white`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M5 12l5 5L20 7" />
            </svg>
            {label && <span>{label}</span>}
        </label>
    );
}