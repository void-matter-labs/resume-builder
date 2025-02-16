import { Button, LabeledTextInput } from "@resume/ui"
import { ComponentProps } from "react"
import { useFormStatus } from "react-dom"


const FormButton = ()=>{
  const {
    pending
  } = useFormStatus();
  return <Button disabled={pending} className='py-6' themeColor='primary' variant='solid'>
    Next
  </Button>
}

export interface PersonalInfo {
  defaultFullName?: string;
  defaultEmail?: string;
  defaultProfession?: string;
  defaultAddress?: string;
  defaultCity?: string;
  defaultState?: string;
}

export type PersonalInfoFormProps = PersonalInfo & ComponentProps<'form'>;

export const Form = ({
  defaultAddress,
  defaultCity,
  defaultEmail,
  defaultState,
  defaultFullName,
  defaultProfession,
  ...props
}: Readonly<PersonalInfoFormProps>)=>{
  return <form
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
    label="Full Name"
    inputId='full-name'
    placeholder="John Doe"
    name="full-name"
    defaultValue={defaultFullName}
  />
  <LabeledTextInput
    label="Email"
    placeholder='Johndoe@gmail.com'
    inputId='email'
    name="email"
    defaultValue={defaultEmail}
  />
  <LabeledTextInput
    label="Profession"
    placeholder='E.g Software Engineer'
    inputId='profession'
    name="profession"
    defaultValue={defaultProfession}
  />
  <LabeledTextInput
    label="Address"
    placeholder='123, Main Street, Lagos'
    inputId='address'
    name="address"
    defaultValue={defaultAddress}
  />
  <div className='flex justify-end gap-3'>
    <LabeledTextInput
      label="City"
      className='w-[calc(50%-1rem)]'
      placeholder='Orlando'
      inputId='city'
      name='city'
      defaultValue={defaultCity}
    />
    <LabeledTextInput
      label="State"
      className='w-[50%]'
      placeholder='Florida'
      inputId='state'
      name='state'
      defaultValue={defaultState}
    />
  </div>
  <FormButton />
</form>
}
