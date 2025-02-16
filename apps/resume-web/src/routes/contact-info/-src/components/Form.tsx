import { ComponentProps } from "react"
import { useFormStatus } from "react-dom"
import { Button, LabeledTextInput } from "@resume/ui"

import FormWrapper from "@components/FormWrapper";

const FormButton = () => {
  const {
    pending
  } = useFormStatus();
  return <Button disabled={pending} className='py-6' themeColor='primary' variant='solid'>
    Next
  </Button>
}


export interface ContactInfo {
  phoneNumber?: string;
  linkedInProfile?: string;
  twitterProfile?: string;
  githubProfile?: string;
  portfolioLink?: string;
}

export type ContacInfotFormProps = ContactInfo & ComponentProps<'form'>;

export const Form = ({
  phoneNumber,
  linkedInProfile,
  twitterProfile,
  githubProfile,
  portfolioLink,
  ...props
}: Readonly<ContacInfotFormProps>) => {
  return <FormWrapper {...props}>
    <LabeledTextInput
      label="Phone Number"
      inputId='phone-number'
      name="phone-number"
      placeholder="e.g 08012345678"
      defaultValue={phoneNumber}
    />
    <LabeledTextInput
      label="LinkedIn Profile Link"
      placeholder='e.g https://linkedin.com/in/johndoe'
      inputId='linkedin-profile'
      name="linkedin-profile"
      defaultValue={linkedInProfile}
    />
    <LabeledTextInput
      label="Twitter Profile Link"
      placeholder='e.g https://twitter.com/johndoe'
      inputId='twitter-profile'
      name="twitter-profile"
      defaultValue={twitterProfile}
    />
    <LabeledTextInput
      label="GitHub Profile Link"
      placeholder='e.g https://github.com/johndoe'
      inputId='github-profile'
      name="github-profile"
      defaultValue={githubProfile}
    />
    <LabeledTextInput
      label="Portfolio Link"
      placeholder='e.g https://johndoe.com'
      inputId='portfolio-link'
      name="portfolio-link"
      defaultValue={portfolioLink}
    />
    <FormButton />
  </FormWrapper>
}
