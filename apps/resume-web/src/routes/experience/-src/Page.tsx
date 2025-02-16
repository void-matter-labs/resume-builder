import { useNavigate } from '@tanstack/react-router';
import { Form } from './components/Form';


export const Page = ()=>{
  const navigate = useNavigate({
    from: '/experience'
  });

  const action = ()=>{
    navigate({to: '/technical-skills'})
  }

  return <main>
    <Form action={action} />
  </main>
}
