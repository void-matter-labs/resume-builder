import { CacheKeys } from '@providers/globalCache';
import { Document, HeadingLevel, Packer, Paragraph, TextRun } from 'docx'
import { PersonalInfo } from '../../personal-info/-src/components/Form';

interface DehydratedCacheData {
  [CacheKeys.PersonalInfo]: PersonalInfo
}

self.addEventListener('message', async (event) => {
  const message = event.data.action
  if (message !== 'create-docx')
    return;

  const cacheData: DehydratedCacheData | null = event.data.cacheData;

  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            alignment: 'center',
            children: [
              new TextRun({
                text: cacheData ? (cacheData[CacheKeys.PersonalInfo]?.defaultFullName ?? 'No name') : 'No name',
                bold: true,
                size: 32,
                color: '000000'
              }),
            ]
          }),
          new Paragraph({

          })
        ]
      }
    ]
  })

  const blob = await Packer.toBlob(doc)

  self.postMessage({
    blob,
    hasFinished: true
  })
})
