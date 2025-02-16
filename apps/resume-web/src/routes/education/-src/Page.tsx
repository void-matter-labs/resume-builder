import { useNavigate } from "@tanstack/react-router"
import { Form } from "./components/Form"

export const Page = () => {
  const navigate = useNavigate({
    from: '/education'
  })

  const action = () => {
    navigate({ to: '/contact-information' })
  }

  return <main>
    <Form action={action} />
  </main>
}
