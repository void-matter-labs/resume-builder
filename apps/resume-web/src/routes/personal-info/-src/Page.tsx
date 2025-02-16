import { useNavigate } from '@tanstack/react-router';
import { Form } from './components/Form';


export const Page = ()=>{
  const navigate = useNavigate({
    from: '/personal-info'
  });

  const action = ()=>{
    navigate({to: '/experience'})
  }

  return <main>
    <Form action={action} />
  </main>
}
