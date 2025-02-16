

import { useNavigate } from '@tanstack/react-router';
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

  const action = async () => {

    await navigate({ to: '/education' })
  }

  return <main>
    <Form action={action} skills={skills} />
  </main>
}
