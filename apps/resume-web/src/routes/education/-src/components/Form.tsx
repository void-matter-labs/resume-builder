import { ArrowDown } from "@resume/icons"
import { Button, LabeledTextInput, Select } from "@resume/ui"
import { ComponentProps } from "react"
import { selectMonths, selectYears } from "../data/educationSelectData"

export const Form = (props: ComponentProps<'form'>) => {
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
            <LabeledTextInput
                label="School Name"
                placeholder='E.g. Harvard University'
                inputId='school-name'
                name="school-name"
            />
            <LabeledTextInput
                label="School Location"
                placeholder='E.g. Cambridge, MA'
                inputId='school-location'
                name="school-location"
            />
            <LabeledTextInput
                label="Degree/Program"
                placeholder='E.g. Bachelor of Science'
                inputId='degree-program'
                name="degree-program"
            />
            <LabeledTextInput
                label="Field of Study"
                placeholder='E.g. Computer Science'
                inputId='field-of-study'
                name="field-of-study"
            />
            <LabeledTextInput
                label="Graduation"
                placeholder='E.g. 2023'
                inputId='graduation'
                name="graduation"
            />
            <Select label="Graduation Month" placeholder="MM" forId="gradutation-month" options={selectMonths} endIcon={<ArrowDown />}/>
            <Select label="Graduation Year" placeholder="YY" forId="gradutation-year" options={selectYears} endIcon={<ArrowDown />}/>
            <Button className='py-6' themeColor='primary' variant='solid'>
                Next
            </Button>
        </form>
    )
}