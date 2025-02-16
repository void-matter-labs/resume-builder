import { Certification, Contact, Education, PersonIcon, PersonWithEditIcon, TechnicalSkills } from "@resume/icons"

import { MouseEvent, useCallback, useState } from "react"

import { Button, Sidebar } from "@resume/ui"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { ProgressBar } from "./ProgressBar"

const sideBarButtons = [
  {
    label: 'Personal Info',
    Icon: PersonIcon,
    navigateTo: '/personal-info'
  },
  {
    label: "Experience",
    Icon: PersonWithEditIcon,
    navigateTo: '/experience'
  },
  {
    label: "Technical Skills",
    Icon: TechnicalSkills,
    navigateTo: '/technical-skills'
  },
  {
    label: "Education",
    Icon: Education,
    navigateTo: '/education'
  },
  {
    label: "Contact Information",
    Icon: Contact,
    navigateTo: '/contact-info'
  },
  {
    label: "Certification",
    Icon: Certification,
    navigateTo: '/certification'
  }
]

export const StepSidebar = () => {
  const [steps] = useState<Record<string, number>>(() => ({
    'personal-info': 0,
    'experience': 1,
    'technical-skills': 2,
    'education': 3,
    'contact-info': 4,
    'certification': 5,
  }))


  const navigate = useNavigate({
  })

  // This seems to be a useEffect and a state update,
  // TODO: try to use useSyncExternalStore
  const { pathname } = useLocation();

  const handleClick = useCallback(async (event: MouseEvent<HTMLElement>) => {
    const { navigateTo } = event.currentTarget.dataset

    await navigate({
      to: navigateTo
    })
  }, [])

  return <Sidebar
    sidebarInnerContainerProps={{
      className: 'pt-4'
    }}
    className='absolute z-50 bg-white h-full'
    controlId='sidebar'
  >
    {
      sideBarButtons.map(({
        Icon,
        label,
        navigateTo
      }, index) => <Button
        data-navigate-to={navigateTo}
        onClick={handleClick}
        ejectPadding
        fullWidth
        themeColor={steps[pathname.substring(1)] === index ? 'primaryStep' : undefined}
        startIcon={<span className='p-6'>
          <Icon />
        </span>
        }
        key={label}
      >
          {label}
        </Button>)
    }
    <ProgressBar />
  </Sidebar>
}
