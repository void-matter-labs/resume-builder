

import { useNavigate } from '@tanstack/react-router';
import { Form } from './components/Form';

export const Page = () => {
  const navigate = useNavigate({
    from: '/technical-skills'
  });

  const action = async () => {

    await navigate({ to: '/education' })
  }

  return <main>
    <Form action={action} />
  </main>
}
