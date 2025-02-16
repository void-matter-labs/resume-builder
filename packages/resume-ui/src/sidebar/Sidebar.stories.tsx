import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from '.';
import Button from '../button';

import { PersonIcon, PersonWithEditIcon } from '@resume/icons';

const meta = {
  title: 'Atoms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    classNameResolver: {
      table: {
        disable: true
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

//@ts-expect-error
const delayTime = typeof require === 'undefined' ? 250 : 0

const sidebarData = [
  {
    label: 'Personal Information',
    Icon: PersonIcon,
  },
  {
    label: 'Experience',
    Icon: PersonWithEditIcon
  }
]

export const Default: Story = {
  args: {
    controlId: 'sidebar',
    collapsedWidth: '6rem',
    expandedWidth: 'min(20rem, 100vw)',
    initialOpen: false,
    time: '0.5s',
    children: sidebarData.map(({
      Icon,
      label
    }, index)=><Button
      key={label}
      ejectPadding
      className='py-5'
      fullWidth
      startIcon={<span className='px-10'>
        <Icon />
      </span>}
      themeColor={!index? 'primaryStep': undefined}
      variant='solid'
    >
      {label}
    </Button>),
  }
};



