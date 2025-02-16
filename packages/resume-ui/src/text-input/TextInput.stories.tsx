import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TextInput from '.';

const meta = {
  title: 'Atoms/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    classNameResolver: {
      table: {
        disable: true
      }
    }
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

//@ts-expect-error
const delayTime = typeof require === 'undefined' ? 250 : 0

export const Default: Story = {
  args: {
    placeholder: 'Hello world',
  }
};

export const HasIcons: Story = {
  args: {
    startIcon: '👋',
    placeholder: 'Hello world',
  }
}
