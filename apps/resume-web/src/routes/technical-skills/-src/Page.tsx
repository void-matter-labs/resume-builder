import { use } from 'react';
import { useNavigate } from '@tanstack/react-router';

import { useStep } from '@signals/progress';
import { CacheContext, CacheKeys } from '@providers/globalCache';
import { Form } from './components/Form';

const skills = [
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

export const Page = () => {
  const navigate = useNavigate({
    from: '/technical-skills'
  });

  const setStep = useStep()
  const cache = use(CacheContext)

  const action = async (data: FormData) => {
    const selectedSkills = Object.fromEntries(data.entries())

    cache.getElement(CacheKeys.TechnicalSkills)?.fromData({
      selectedSkills
    })

    setStep(CacheKeys.TechnicalSkills)

    await navigate({ to: '/education' })
  }

  return (
    <main>
      <Form
        selectedSkills={cache.getElement<any>(CacheKeys.TechnicalSkills)?.toJSON()?.selectedSkills}
        action={action}
        skills={skills} />
    </main>
  )
}
