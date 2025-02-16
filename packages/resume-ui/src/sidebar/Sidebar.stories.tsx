import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from '.';
import Button from '../button';

import "./styles.css";

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

export const Default: Story = {
  args: {
    className: 'sidebar',
    controlId: 'sidebar',
    controlIcon: '📚',
    collapsedWidth: '3.5rem',
    expandedWidth: '18rem',
    initialOpen: false,
    children: <Button
      fullWidth
      themeColor='primary'
      variant='solid'
      startIcon={<span>👋</span>}
    >
      Text that is very long and should trimed on close
    </Button>,
  }
};



