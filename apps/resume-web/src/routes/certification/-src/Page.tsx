import { useNavigate } from "@tanstack/react-router";
import { Form } from "./components/Form"


export const Page = () => {
  const navigate = useNavigate({
    from: '/certification'
  });

  const action = async () => {
    // Download PDF

    await navigate({ to: '/pdf' })
  }

  return <main>
    <Form action={action} />
  </main>
}