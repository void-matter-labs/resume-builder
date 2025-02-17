import { useState } from "react"
import { useLocation } from "@tanstack/react-router"
import { Certification, Contact, Education, PersonIcon, PersonWithEditIcon, TechnicalSkills } from "@resume/icons"
import { Button, Sidebar } from "@resume/ui"

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

  // This seems to be a useEffect and a state update,
  // TODO: try to use useSyncExternalStore
  const { pathname } = useLocation();

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
