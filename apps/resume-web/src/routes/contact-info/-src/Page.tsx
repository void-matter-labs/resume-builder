import { use } from 'react';
import { useNavigate } from '@tanstack/react-router';

import { useStep } from '@signals/progress';
import { CacheContext, CacheKeys } from '@providers/globalCache';
import { Form } from './components/Form';

export const Page = () => {
  const navigate = useNavigate({
    from: '/contact-info'
  });
  const setStep = useStep()
  const cache = use(CacheContext)

  const action = async (data: FormData) => {
    const parsedData = {
      phoneNumber: String(data.get('phone-number')),
      linkedInProfile: String(data.get('linkedin-profile')),
      twitterProfile: String(data.get('twitter-profile')),
      githubProfile: String(data.get('github-profile')),
      portfolioLink: String(data.get('portfolio-link')),
    }

    cache.getElement(CacheKeys.ContactInfo)?.fromData(parsedData)

    setStep(CacheKeys.ContactInfo)

    await navigate({ to: '/certification' })
  }

  return (
    <main>
      <Form
        {...cache.getElement<any>(CacheKeys.ContactInfo)?.toJSON()}
        action={action} />
    </main>
  )
}
