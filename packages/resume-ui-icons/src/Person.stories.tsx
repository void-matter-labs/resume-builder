import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Person from './Person';

const meta = {
  title: 'Icons/Person',
  component: Person,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { onClick: fn() },
} satisfies Meta<typeof Person>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
