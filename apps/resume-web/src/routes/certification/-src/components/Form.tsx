import { useState } from "react";
import { Button, LabeledTextInput } from "@resume/ui";
import { ComponentProps } from "react";
import { AddCircle } from "@resume/icons";
import { useFormStatus } from "react-dom";

const FormButton = () => {
    const {
      pending
    } = useFormStatus();
    return <Button disabled={pending} className='py-6' themeColor='primary' variant='solid'>
      Submit
    </Button>
  }

export interface CertificationInfo {
    certifications?: string[]
}

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
                    label={`Certification #${++index}`}
                    placeholder={`E.g. Certification ${++index}`}
                    inputId={`certification-${++index}`}
                    name={`certification-${++index}`}
                />
            ))}
            <Button className='py-2 flex items-center gap-2 font-normal' type="button" onClick={addCertification} startIcon={<AddCircle />}>
                Add Certification / License
            </Button>
            <FormButton />
        </form>
    );
};