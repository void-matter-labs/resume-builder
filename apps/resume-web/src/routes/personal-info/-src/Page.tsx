import { useNavigate } from '@tanstack/react-router';
import { Form, PersonalInfo } from './components/Form';
import { wait } from '@utils/wait';
import { use } from 'react';
import { CacheContext, CacheKeys } from '../../../shared/provider/globalCache';
import { useStep } from '../../../shared/signals/progress';


export const Page = ()=>{
  const navigate = useNavigate({
    from: '/personal-info'
  });
  const setStep = useStep()
  const cache = use(CacheContext)

  const action = async (data: FormData)=>{
    const parsedData: PersonalInfo = {
      defaultFullName: String(data.get('full-name')),
      defaultAddress: String(data.get('address')),
      defaultCity: String(data.get('city')),
      defaultEmail: String(data.get('email')),
      defaultProfession: String(data.get('profession')),
      defaultState: String(data.get('state')),
    }



    cache.getElement(CacheKeys.PersonalInfo)?.fromData(parsedData)

    await wait(1000)

    setStep(CacheKeys.PersonalInfo)

    await navigate({to: '/experience'})
  }

  return <main>
    <Form action={action} {...cache.getElement<any>(CacheKeys.PersonalInfo)?.toJSON()}/>
  </main>
}
