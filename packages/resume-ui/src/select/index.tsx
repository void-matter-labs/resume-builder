import { ComponentPropsWithData } from "@resume/utility-types";
import { ReactNode, useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useClickAway } from "@resume/hooks"

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps extends
    ComponentPropsWithData<'input'>,
    Omit<VariantProps<typeof select>, 'hasIcon'> {
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
            true: 'border-solid border outline-none '
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
    const ref = useClickAway<HTMLDivElement>(() => setIsOpen(false));

    const handleSelect = (option: SelectOption) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleInputClick = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className="relative" ref={ref}>
            {label && forId && <label htmlFor={forId} className="block mb-2">{label}</label>}
            <input
                id={forId}
                readOnly
                value={selectedOption ? selectedOption.label : ''}
                placeholder={placeholder}
                className={`${className ?? ''} ${base} ${classNameResolver({ className, hasIcon: !!endIcon, isOpen })}`}
                onClick={handleInputClick}
                {...props}
            />
            {endIcon && <span className="absolute right-4 bottom-3 transform -translate-y-1/2">{endIcon}</span>}
            <ul className={`absolute mt-1 w-full bg-white border border-placeholder rounded-sm shadow-lg z-10 transition-opacity duration-200 max-h-[10.5rem] overflow-y-auto ${isOpen ? 'opacity-100' : ' opacity-0 pointer-events-none'}`}>
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
        </div>
    );
}