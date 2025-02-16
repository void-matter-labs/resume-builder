import { Certification, Contact, Education, PersonIcon, PersonWithEditIcon, TechnicalSkills } from "@resume/icons"
import { Button, Sidebar } from "@resume/ui"
import { useLocation } from "@tanstack/react-router"
import { useState } from "react"


export const StepSidebar = () => {
  const [ steps ] = useState<Record<string, number>>(()=>( {
    'personal-info': 0,
    'experience': 1,
    'technical-skills': 2,
    'education':3,
    'contact':4,
    'certification':5,
  }))

  const [sideBarButtons] = useState(()=>[
    {
      label: 'Personal Info',
      Icon: PersonIcon,
    },
    {
      label: "Experience",
      Icon: PersonWithEditIcon
    },
    {
      label: "Technical Skills",
      Icon: TechnicalSkills
    },
    {
      label: "Education",
      Icon: Education
    },
    {
      label: 'Contact Information',
      Icon: Contact
    },
    {
      label: "Certification",
      Icon: Certification
    }
  ])

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
        label
      }, index) => <Button
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
  </Sidebar>
}
