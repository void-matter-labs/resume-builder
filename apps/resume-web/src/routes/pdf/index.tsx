import { use, useEffect, useRef, useState } from 'react'
import { Button } from '@resume/ui'
import { createFileRoute } from '@tanstack/react-router'
import { CacheContext } from '@providers/globalCache'

const worker = new Worker(new URL('./-src/worker.ts', import.meta.url), { type: 'module' })

export const Route = createFileRoute('/pdf/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [hasFinished, setHasFinished] = useState(true)
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

  return <div className='relative left-16'>
    <Button disabled={!hasFinished} onClick={handleClick} themeColor='primary' variant='solid'>
      Create pdf
    </Button>
    <a ref={anchorRef} hidden download='resume.pdf' />
  </div>

}
