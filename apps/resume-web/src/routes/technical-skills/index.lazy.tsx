import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/technical-skills/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/technical-skills/"!</div>
}
