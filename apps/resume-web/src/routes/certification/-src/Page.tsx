import { useNavigate } from "@tanstack/react-router";
import { Form, CertificationInfo } from "./components/Form";
import { use } from 'react';
import { CacheContext, CacheKeys } from '@providers/globalCache';
import { wait } from '@utils/wait';
import { useStep } from "@signals/progress";

export const Page = () => {
  const navigate = useNavigate({
    from: '/certification'
  });
  const cache = use(CacheContext);

  const setState = useStep()

  const action = async (data: FormData) => {
    const certifications: string[] = [];
    data.forEach((value, key) => {
      if (key.startsWith('certification-')) {
        certifications.push(String(value));
      }
    });

    const parsedData: CertificationInfo = {
      certifications
    };

    cache.getElement(CacheKeys.Certification)?.fromData(parsedData);

    setState(CacheKeys.Certification)

    await wait(1000);

    await navigate({ to: '/pdf' });
  };

  return <main>
    <Form action={action} />
  </main>
}