import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/experience/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/experience/"!</div>
}
