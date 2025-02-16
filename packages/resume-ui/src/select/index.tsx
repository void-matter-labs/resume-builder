import { ComponentPropsWithData } from "@resume/utility-types";
import { ReactNode, useState } from "react";
import { tv, VariantProps } from "tailwind-variants";

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps extends
    ComponentPropsWithData<'select'>,
    Omit<VariantProps<typeof select>, 'hasIcon'>
{
    placeholder?: string;
    options: SelectOption[];
    endIcon?: ReactNode;
    classNameResolver?: typeof select;
    label?: string;
    forId?: string;
}

const base = 'border-placeholder rounded-sm p-4 relative';

export const select = tv({
    base: [base, 'placeholder:text-placeholder'],
    variants: {
        hasIcon: {
            false: 'border-solid border',
            undefined: 'border-solid border',
            true: 'border-none outline-none p-0 pl-2 pr-8'
        },
        isOpen: {
            true: 'border-primary',
            false: 'border-placeholder'
        }
    }
});

export default function Select({
    placeholder,
    options,
    endIcon,
    className,
    classNameResolver = select,
    label,
    forId,
    ...props
}: Readonly<SelectProps>) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);

    const handleSelect = (option: SelectOption) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {label && forId && <label htmlFor={forId} className="block mb-2">{label}</label>}
            <input
                id={forId}
                readOnly
                value={selectedOption ? selectedOption.label : ''}
                placeholder={placeholder}
                className={`${className ?? ''} ${base} ${classNameResolver({ className, hasIcon: !!endIcon, isOpen })}`}
                onClick={() => setIsOpen(!isOpen)}
                {...props}
            />
            {endIcon && <span className="absolute right-4 top-1/2 transform -translate-y-1/2">{endIcon}</span>}
            {isOpen && (
                <ul className="absolute mt-1 w-full bg-white border border-placeholder rounded-sm shadow-lg z-10">
                    {options.map(option => (
                        <li
                            key={option.value}
                        >
                            <label className={`flex items-center p-4 ${selectedOption?.value === option.value ? 'bg-primary text-white cursor-not-allowed' : 'hover:bg-primary hover:text-white cursor-pointer'}`}>
                                <input
                                    type="radio"
                                    name="select-option"
                                    value={option.value}
                                    checked={selectedOption?.value === option.value}
                                    onChange={() => handleSelect(option)}
                                    className="mr-2 appearance-none"
                                />
                                {option.label}
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}