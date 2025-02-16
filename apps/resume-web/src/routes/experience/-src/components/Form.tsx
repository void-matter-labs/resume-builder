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
        label="Company"
        placeholder='E.g. Google'
        inputId='company'
        name="company"
      />
      <LabeledTextInput
        label="Employer"
        placeholder='E.g. John Doe'
        inputId='employer'
        name="employer"
      />
      <LabeledTextInput
        label="Role"
        placeholder='E.g. Software Engineer'
        inputId='role'
        name="role"
      />
      <LabeledTextInput
        label="Address"
        placeholder='123, Main Street, Lagos'
        inputId='address'
        name="address"
      />
      <div className="flex justify-end gap-3">
        <LabeledTextInput
          label="Start Date"
          placeholder='MM / YY'
          inputId='start-date'
          name="start-date"
          className='w-[calc(50%-1rem)]'
        />
        <LabeledTextInput
          label="Finish Date"
          placeholder='MM / YY'
          inputId='finish-date'
          name="finish-date"
          className='w-[50%]'
        />
      </div>
      <Button className='py-6' themeColor='primary' variant='solid'>
        Next
      </Button>
    </form>
  )
}