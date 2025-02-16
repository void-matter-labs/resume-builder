import { useState } from "react";
import { Button, LabeledTextInput } from "@resume/ui";
import { ComponentProps } from "react";
import { AddCircle } from "@resume/icons";

export const Form = (props: ComponentProps<'form'>) => {
    const [certificationCount, setCertificationCount] = useState(1);

    const addCertification = () => {
        setCertificationCount((prev) => ++prev);
    };

    return (
        <form
            {...props}
            className={[
                'relative',
                'pt-5',
                'flex',
                'flex-col',
                'px-6',
                'gap-4',
                'shrink-0',
                'left-[4rem]',
                'w-[calc(100vw-4rem)]',
                props.className ?? ''
            ].join(' ')}
        >
            {Array.from({ length: certificationCount }, (_, index) => (
                <LabeledTextInput
                    key={index}
                    label={`Certification #${index + 1}`}
                    placeholder={`E.g. Certification ${index + 1}`}
                    inputId={`certification-${index + 1}`}
                    name={`certification-${index + 1}`}
                />
            ))}
            <Button className='py-2 flex items-center gap-2 font-normal' type="button" onClick={addCertification} startIcon={<AddCircle />}>
                Add Certification / License
            </Button>
            <Button className='py-6' themeColor='primary' variant='solid' type="submit">
                Submit
            </Button>
        </form>
    );
};