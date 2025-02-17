import { Button, LabeledTextInput } from "@resume/ui"
import { ComponentProps } from "react"
import { useFormStatus } from "react-dom"


const FormButton = () => {
  const {
    pending
  } = useFormStatus();
  return <Button disabled={pending} className='py-6' themeColor='primary' variant='solid'>
    Next
  </Button>
}

export interface PersonalInfo {
  name?: string;
  email?: string;
  profession?: string;
  address?: string;
  city?: string;
  state?: string;
}

export type PersonalInfoFormProps = PersonalInfo & ComponentProps<'form'>;

export const Form = ({
  address,
  city,
  email,
  state,
  name,
  profession,
  ...props
}: Readonly<PersonalInfoFormProps>) => {
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
      defaultValue={name}
    />
    <LabeledTextInput
      label="Email"
      placeholder='Johndoe@gmail.com'
      inputId='email'
      name="email"
      defaultValue={email}
    />
    <LabeledTextInput
      label="Profession"
      placeholder='E.g Software Engineer'
      inputId='profession'
      name="profession"
      defaultValue={profession}
    />
    <LabeledTextInput
      label="Address"
      placeholder='123, Main Street, Lagos'
      inputId='address'
      name="address"
      defaultValue={address}
    />
    <div className='flex justify-end gap-3'>
      <LabeledTextInput
        label="City"
        className='w-[calc(50%-1rem)]'
        placeholder='Orlando'
        inputId='city'
        name='city'
        defaultValue={city}
      />
      <LabeledTextInput
        label="State"
        className='w-[50%]'
        placeholder='Florida'
        inputId='state'
        name='state'
        defaultValue={state}
      />
    </div>
    <FormButton />
  </form>
}
