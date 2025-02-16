import { useNavigate } from '@tanstack/react-router';
import { Form } from './components/Form';

export const Page = () => {
  const navigate = useNavigate({
    from: '/contact-information'
  });

  const action = async () => {
    await navigate({ to: '/certification' })
  }

  return <main>
    <Form action={action} />
  </main>
}
