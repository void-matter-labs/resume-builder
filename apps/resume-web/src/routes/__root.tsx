import { useState } from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { StepSidebar } from '@components/StepSidebar'
import { DefaultCache } from '../shared/services/DefaultCache'
import { CacheContext, CacheKeys } from '../shared/provider/globalCache'
import { DefaultCacheElement } from '../shared/services/DefaultCacheElement'

export const Route = createRootRoute({
  component: RootComponent,

})

function RootComponent() {
  const [cache] = useState(()=> new DefaultCache<CacheKeys>(
    [[CacheKeys.PersonalInfo, {
      element: new DefaultCacheElement()
    }]]
  ))
  console.log('asdasdasdasdasasasdasdasdasdasdasdasdasd')

  return (
    <CacheContext value={cache}>
      <StepSidebar />
      <Outlet />
    </CacheContext>
  )
}
