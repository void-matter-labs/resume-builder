import { Button, LabeledTextInput, LabledNativeSelect } from "@resume/ui"
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

export interface TechnicalSkills { }

export type TechnicalSkillsFormProps = TechnicalSkills & ComponentProps<'form'>;

const options = [
  {
    label: 'React',
    value: 'react'
  },
  {
    label: 'Vue',
    value: 'vue'
  },
  {
    label: "Angular",
    value: 'angular'
  }
]

export const Form = (props: Readonly<TechnicalSkillsFormProps>) => {
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
    {Array.from({ length: 5 }).map((_, i) => (
      <LabledNativeSelect
        key={i}
        label={`Skill ${i + 1}`}
        selectId={`skill-${i + 1}`}
        name={`skill-${i + 1}`}
        selectProps={{
          options,
          bordered: true,
          size: "lg"
        }}
      />
    ))}
    <FormButton />
  </form>
}
