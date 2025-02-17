import { useNavigate } from '@tanstack/react-router';
import { Form, PersonalInfo } from './components/Form';
import { wait } from '@utils/wait';
import { use } from 'react';
import { CacheContext, CacheKeys } from '@providers/globalCache';
import { useStep } from '@signals/progress';


export const Page = () => {
  const navigate = useNavigate({
    from: '/personal-info'
  });
  const setStep = useStep()
  const cache = use(CacheContext)

  const action = async (data: FormData) => {
    const parsedData: PersonalInfo = {
      name: String(data.get('full-name')),
      address: String(data.get('address')),
      city: String(data.get('city')),
      email: String(data.get('email')),
      profession: String(data.get('profession')),
      state: String(data.get('state')),
    }

    cache.getElement(CacheKeys.PersonalInfo)?.fromData(parsedData)

    await wait(1000)

    setStep(CacheKeys.PersonalInfo)

    await navigate({ to: '/experience' })
  }

  return <main>
    <Form action={action} {...cache.getElement<any>(CacheKeys.PersonalInfo)?.toJSON()} />
  </main>
}
