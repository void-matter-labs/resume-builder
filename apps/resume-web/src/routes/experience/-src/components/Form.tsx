import { Button, CheckBox, LabeledTextInput } from "@resume/ui"
import { ComponentProps } from "react"
import { useFormStatus } from "react-dom";

const FormButton = () => {
  const {
    pending
  } = useFormStatus();
  return <Button disabled={pending} className='py-6' themeColor='primary' variant='solid'>
    Next
  </Button>
}

export interface ExperienceInfo {
  company?:string,
  employer?:string,
  role?:string,
  address?:string,
  startDate?:string,
  finishDate?:string
}

export type ExperienceInfoProps = ExperienceInfo & ComponentProps<'form'>

export const Form = ({
  company,
  employer,
  role,
  address,
  startDate,
  finishDate,
  ...props
}: Readonly<ExperienceInfoProps>) => {
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
        defaultValue={company}
      />
      <LabeledTextInput
        label="Employer"
        placeholder='E.g. John Doe'
        inputId='employer'
        name="employer"
        defaultValue={employer}
      />
      <LabeledTextInput
        label="Role"
        placeholder='E.g. Software Engineer'
        inputId='role'
        name="role"
        defaultValue={role}
      />
      <LabeledTextInput
        label="Address"
        placeholder='123, Main Street, Lagos'
        inputId='address'
        name="address"
        defaultValue={address}
      />
      <div className="flex justify-end gap-3">
        <LabeledTextInput
          label="Start Date"
          placeholder='MM / YY'
          inputId='start-date'
          name="start-date"
          className='w-[calc(50%-1rem)]'
          defaultValue={startDate}
        />
        <LabeledTextInput
          label="Finish Date"
          placeholder='MM / YY'
          inputId='finish-date'
          name="finish-date"
          className='w-[50%]'
          defaultValue={finishDate}
        />
      </div>
      <CheckBox label="Currently work here"  />
      <FormButton />
    </form>
  )
}