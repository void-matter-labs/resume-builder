import type { Meta, StoryObj } from '@storybook/react';
import NativeSelect from '.';

const meta = {
  title: 'Atoms/NativeSelect',
  component: NativeSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    bordered: {
      control: 'boolean'
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

//@ts-expect-error
const delayTime = typeof require === 'undefined' ? 250 : 0

export const Default: Story = {
  args: {
    options: [
      {
        label: 'Option 1',
        value: 'option-1'
      },
      {
        label: 'Option 2',
        value: 'option-2'
      }
    ],
  }
};
