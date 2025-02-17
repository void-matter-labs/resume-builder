import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Select, { SelectOption } from './index';

const meta = {
    title: 'Atoms/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: SelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
    { value: 'option6', label: 'Option 6' },
    { value: 'option7', label: 'Option 7' },
    { value: 'option8', label: 'Option 8' },
    { value: 'option9', label: 'Option 9' },
    { value: 'option10', label: 'Option 10' },
];

export const Default: Story = {
    args: {
        placeholder: 'Select an option',
        options,
    },
};

export const WithEndIcon: Story = {
    args: {
        placeholder: 'Select an option',
        options,
        endIcon: '🔽',
    },
};