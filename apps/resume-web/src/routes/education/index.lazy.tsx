import { createLazyFileRoute } from '@tanstack/react-router'
import { Page } from './-src/Page'

export const Route = createLazyFileRoute('/education/')({
  component: Page,
})