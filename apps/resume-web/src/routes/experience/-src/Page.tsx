import { useNavigate } from '@tanstack/react-router';
import { ExperienceInfo, Form } from './components/Form';
import { useStep } from '@signals/progress';
import { CacheContext, CacheKeys } from '@providers/globalCache';
import { wait } from '@utils/wait';
import { use } from 'react';


export const Page = ()=>{
  const navigate = useNavigate({
    from: '/experience'
  });
  const setStep = useStep()
  const cache = use(CacheContext)

  const action = async (data: FormData)=>{
    const parsedData: ExperienceInfo = {
      company: String(data.get('company')),
      address: String(data.get('address')),
      employer: String(data.get('employer')),
      role: String(data.get('role')),
      startDate: String(data.get('startDate')),
      finishDate: String(data.get('finishDate'))
    }

    cache.getElement(CacheKeys.PersonalInfo)?.fromData(parsedData)

    await wait(1000)

    setStep(CacheKeys.PersonalInfo)

    await navigate({to: '/technical-skills'})
  }

  return <main>
    <Form action={action} />
  </main>
}
