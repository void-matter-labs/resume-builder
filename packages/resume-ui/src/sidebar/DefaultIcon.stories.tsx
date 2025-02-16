import type { Meta, StoryObj } from '@storybook/react';
import DefaultSidebarIcon from './DefaultIcon';

const meta = {
  title: 'Atoms/DefaultSidebarIcon',
  component: DefaultSidebarIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultSidebarIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

//@ts-expect-error
const delayTime = typeof require === 'undefined' ? 250 : 0

export const Default: Story = {
  args: {
    width: '3.5rem',
    height: '3.5rem',
    className: 'text-gray-500',
  }
};

