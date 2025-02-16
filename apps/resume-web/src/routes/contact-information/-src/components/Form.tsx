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

export interface PersonalInfo { }

export type PersonalInfoFormProps = PersonalInfo & ComponentProps<'form'>;

export const Form = (props: Readonly<PersonalInfoFormProps>) => {
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
      label="Phone Number"
      inputId='phone-number'
      name="phone-number"
      placeholder="e.g 08012345678"
    />
    <LabeledTextInput
      label="LinkedIn Profile Link"
      placeholder='e.g https://linkedin.com/in/johndoe'
      inputId='linkedin-profile'
      name="linkedin-profile"
    />
    <LabeledTextInput
      label="Twitter Profile Link"
      placeholder='e.g https://twitter.com/johndoe'
      inputId='twitter-profile'
      name="twitter-profile"
    />
    <LabeledTextInput
      label="GitHub Profile Link"
      placeholder='e.g https://github.com/johndoe'
      inputId='github-profile'
      name="github-profile"
    />
    <LabeledTextInput
      label="Portfolio Link"
      placeholder='e.g https://johndoe.com'
      inputId='portfolio-link'
      name="portfolio-link"
    />
    <FormButton />
  </form>
}
