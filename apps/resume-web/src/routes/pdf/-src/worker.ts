import { CacheKeys } from '@providers/globalCache';
import { Packer } from 'docx'
import { PersonalInfo } from '../../personal-info/-src/components/Form';
import { ResumeGenerator, ResumeGeneratorData } from '@services/ResumeGenerator';

interface DehydratedCacheData {
  [CacheKeys.PersonalInfo]: PersonalInfo
}

self.addEventListener('message', async (event) => {
  const message = event.data.action
  if (message !== 'create-docx')
    return;

  const cacheData: DehydratedCacheData = event.data.cacheData;

  const resumeGenerator = new ResumeGenerator(cacheData as ResumeGeneratorData)

  const doc = resumeGenerator.generate()

  const blob = await Packer.toBlob(doc)

  self.postMessage({
    blob,
    hasFinished: true
  })
})
