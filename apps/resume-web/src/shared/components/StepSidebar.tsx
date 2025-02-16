import { PersonIcon, PersonWithEditIcon } from "@resume/icons"
import { Button, Sidebar } from "@resume/ui"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { MouseEvent, useCallback, useState } from "react"
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
    Icon: PersonIcon,
    navigateTo: '/technical-skills'
  }
]



export const StepSidebar = () => {
  const [ steps ] = useState<Record<string, number>>(()=>( {
    'personal-info': 0,
    'experience': 1,
    'technical-skills': 2
  }))

  const navigate = useNavigate({
  })

  // This seems to be a useEffect and a state update,
  // TODO: try to use useSyncExternalStore
  const { pathname } = useLocation();

  const handleClick = useCallback((event: MouseEvent<HTMLElement>)=>{
    const { navigateTo } = event.currentTarget.dataset

    navigate({
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
