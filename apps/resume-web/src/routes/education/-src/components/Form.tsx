import { Button, LabeledTextInput } from "@resume/ui"
import { ComponentProps } from "react"

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
            <LabeledTextInput
                label="Graduation Month"
                placeholder='MM'
                inputId='graduation-month'
                name="graduation-month"
            />
            <LabeledTextInput
                label="Graduation Year"
                placeholder='YYYY'
                inputId='graduation-year'
                name="graduation-year"
            />
            <Button className='py-6' themeColor='primary' variant='solid'>
                Next
            </Button>
        </form>
    )
}