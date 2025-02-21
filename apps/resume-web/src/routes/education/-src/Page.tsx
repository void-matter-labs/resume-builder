import { useNavigate } from "@tanstack/react-router"
import { Form, EducationInfo } from "./components/Form"
import { use } from 'react';
import { CacheContext, CacheKeys } from '@providers/globalCache';
import { wait } from '@utils/wait';

export const Page = () => {
  const navigate = useNavigate({
    from: '/education'
  });
  const cache = use(CacheContext);

  const action = async (data: FormData) => {
    const parsedData: EducationInfo = {
      schoolName: String(data.get('school-name')),
      schoolLocation: String(data.get('school-location')),
      degreeProgram: String(data.get('degree-program')),
      fieldOfStudy: String(data.get('field-of-study')),
      graduation: String(data.get('graduation')),
      graduationMonth: String(data.get('gradutation-month')),
      graduationYear: String(data.get('gradutation-year')),
    };

    cache.getElement(CacheKeys.Education)?.fromData(parsedData);

    await wait(1000);

    await navigate({ to: '/contact-info' });
  };

  return <main>
    <Form action={action} />
  </main>
}
