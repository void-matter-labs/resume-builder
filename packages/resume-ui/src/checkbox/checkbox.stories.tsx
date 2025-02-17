import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '.';

const meta = {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Default Checkbox',
    },
};

export const Checked: Story = {
    args: {
        label: 'Checked Checkbox',
        checked: true,
    },
};

export const WithCustomClass: Story = {
    args: {
        label: 'Custom Class Checkbox',
        className: 'custom-class',
    },
};