import { use, useEffect, useRef, useState } from 'react'
import { Button } from '@resume/ui'
import { createFileRoute } from '@tanstack/react-router'
import { CacheContext } from '@providers/globalCache'
import { Download } from '@resume/icons'

const worker = new Worker(new URL('./-src/worker.ts', import.meta.url), { type: 'module' })

export const Route = createFileRoute('/pdf/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [_, setHasFinished] = useState(true)
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const cache = use(CacheContext)


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
    <div className="relative left-6 flex flex-col items-center justify-center min-h-screen max-w-md mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
      <p className="text-lg mb-4 text-gray-700 text-center">
        Your resume is awesome ready for download. Get it in DOCX format.
      </p>
      <Button
        gap={2}
        // TODO: THIS IS MOMENTANEOUSLY BECAUSE IT NEVERS ENABLE RN
        disabled={false}
        onClick={handleClick}
        themeColor='primary'
        variant='solid'
        endIcon={<Download />}
      >
        Download
      </Button>
      <a ref={anchorRef} hidden download='resume.docx' />
    </div>
  )
}
