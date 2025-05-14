import { useState } from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { StepSidebar } from '@components/StepSidebar'
import { DefaultCache } from '@services/DefaultCache'
import { CacheContext, CacheKeys } from '@providers/globalCache'
import { DefaultCacheElement } from '@services/DefaultCacheElement'

export const Route = createRootRoute({
  component: RootComponent,

})

function RootComponent() {
  const [cache] = useState(() => new DefaultCache<CacheKeys>(
    [
      [CacheKeys.PersonalInfo, {
        element: new DefaultCacheElement()
      }],
      [CacheKeys.TechnicalSkills, {
        element: new DefaultCacheElement()
      }],
      [CacheKeys.ContactInfo, {
        element: new DefaultCacheElement()
      }],
      [CacheKeys.Education, {
        element: new DefaultCacheElement()
      }],
      [CacheKeys.Experience, {
        element: new DefaultCacheElement()
      }],
      [CacheKeys.Certification, {
        element: new DefaultCacheElement()
      }
    ]
  ]
  ))

  return (
    <CacheContext value={cache}>
      <StepSidebar />
      <Outlet />
    </CacheContext>
  )
}
