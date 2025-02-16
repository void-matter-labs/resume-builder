import { Button, LabeledTextInput } from "@resume/ui"
import { ComponentProps } from "react"


export const Form = (props: ComponentProps<'form'>)=>{
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
    placeholder='John Doe'
    inputId='full-name'
    name="full-name"
  />
  <LabeledTextInput
    label="Email"
    placeholder='Johndoe@gmail.com'
    inputId='email'
    name="email"
  />
  <LabeledTextInput
    label="Profession"
    placeholder='E.g Software Engineer'
    inputId='profession'
    name="profession"
  />
  <LabeledTextInput
    label="Address"
    placeholder='123, Main Street, Lagos'
    inputId='address'
    name="address"
  />
  <div className='flex justify-end gap-3'>
    <LabeledTextInput
      label="City"
      className='w-[calc(50%-1rem)]'
      placeholder='Orlando'
      inputId='city'
      name='city'
    />
    <LabeledTextInput
      label="State"
      className='w-[50%]'
      placeholder='Florida'
      inputId='state'
      name='state'
    />
  </div>
  <Button className='py-6' themeColor='primary' variant='solid'>
    Next
  </Button>
</form>
}
