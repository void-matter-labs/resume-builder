import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { StepSidebar } from '@components/StepSidebar'

export const Route = createRootRoute({
  component: RootComponent,

})

function RootComponent() {
  return (
    <React.Fragment>
      <StepSidebar />
      <Outlet />
    </React.Fragment>
  )
}
