import { use, useEffect, useRef, useState } from 'react'
import { Button } from '@resume/ui'
import { createFileRoute } from '@tanstack/react-router'
import { CacheContext, CacheKeys } from '@providers/globalCache'
import { DownloadIcon } from '@resume/icons'
import { Cache } from '@services/Cache.types'

const worker = new Worker(new URL('./-src/worker.ts', import.meta.url), { type: 'module' })

export const Route = createFileRoute('/pdf/')({
  component: RouteComponent,
})

// TODO: Rethink, each section have to manage its validations
function isCacheComplete(cache: Cache<CacheKeys>): boolean {
  const cacheData = cache.dehydrate();
  const personalInfo = cacheData[CacheKeys.PersonalInfo];
  const education = cacheData[CacheKeys.Education];
  const experience = cacheData[CacheKeys.Experience];
  const technicalSkills = cacheData[CacheKeys.TechnicalSkills];
  const contactInfo = cacheData[CacheKeys.ContactInfo];

  return Boolean(
    personalInfo?.name &&
    personalInfo?.address &&
    personalInfo?.city &&
    personalInfo?.email &&
    personalInfo?.profession &&
    personalInfo?.state &&
    education?.length &&
    experience?.length &&
    technicalSkills?.skillList?.length &&
    contactInfo?.phoneNumber &&
    contactInfo?.linkedInProfile &&
    contactInfo?.twitterProfile &&
    contactInfo?.githubProfile &&
    contactInfo?.portfolioLink
  );
}


function RouteComponent() {
  const [hasFinished, setHasFinished] = useState(true)
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const cache = use(CacheContext)

  const isComplete = isCacheComplete(cache);

  useEffect(() => {
    worker.onmessage = (event) => {
      if (event.type !== 'message') {
        return
      }

      setHasFinished(event.data.hasFinished)

      if (!anchorRef.current) {
        return
      }

      anchorRef.current.href = URL.createObjectURL(event.data.blob)
      anchorRef.current.download = 'resume.docx'
      anchorRef.current.click()

      URL.revokeObjectURL(anchorRef.current.href)
    }
  }, [])

  const handleClick = () => {
    setHasFinished(false)

    worker.postMessage({
      action: 'create-docx',
      cacheData: cache.dehydrate()
    })
  }

  return (
    <div className="relative left-16 flex flex-col items-center justify-center min-h-screen max-w-md mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
      <p className="text-lg mb-4 text-gray-700 text-center">
        Your resume is awesome ready for download. Get it in DOCX format.
      </p>
      <Button
        gap={2}
        disabled={!hasFinished || !isComplete}
        onClick={handleClick}
        themeColor='primary'
        variant='solid'
        endIcon={<DownloadIcon />}
      >
        Download
      </Button>
      <a ref={anchorRef} hidden download='resume.docx' />
    </div>
  )
}
