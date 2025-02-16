import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/personal-info/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/personal-info/"!</div>
}
