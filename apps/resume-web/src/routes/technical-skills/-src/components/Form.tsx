import FormWrapper from "@components/FormWrapper";
import { Button, LabledNativeSelect } from "@resume/ui"
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

export interface TechnicalSkills {
  skills: {
    value: string;
    label: string;
  }[]
}

export type TechnicalSkillsFormProps = TechnicalSkills & ComponentProps<'form'>;

export const Form = ({ skills, ...props }: Readonly<TechnicalSkillsFormProps>) => {
  return <FormWrapper {...props}>
    {Array.from({ length: 5 }).map((_, i) => (
      <LabledNativeSelect
        key={i}
        label={`Skill ${i + 1}`}
        selectId={`skill-${i + 1}`}
        name={`skill-${i + 1}`}
        selectProps={{
          options: skills,
          bordered: true,
          size: "lg"
        }}
      />
    ))}
    <FormButton />
  </FormWrapper>
}
