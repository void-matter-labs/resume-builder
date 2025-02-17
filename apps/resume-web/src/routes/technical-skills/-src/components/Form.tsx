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

export interface Skill {
  value: string;
  label: string;
}

export interface TechnicalSkills {
  skills: Skill[]
  selectedSkills: Record<string, string>
}

export type TechnicalSkillsFormProps = TechnicalSkills & ComponentProps<'form'>;

// TODO: Rethink design maybe only use text fields
export const Form = ({ skills, selectedSkills, ...props }: Readonly<TechnicalSkillsFormProps>) => {
  return (
    <FormWrapper {...props}>
      {Array.from({ length: 5 }).map((_, i) => {
        const selectedSkill = selectedSkills?.[`skill-${i + 1}`]

        return (
          <LabledNativeSelect
            key={i}
            label={`Skill ${i + 1}`}
            selectId={`skill-${i + 1}`}
            name={`skill-${i + 1}`}
            selectProps={{
              options: skills,
              bordered: true,
              defaultValue: selectedSkill,
              size: "lg"
            }}
          />
        )
      })}
      <FormButton />
    </FormWrapper>
  )
}
