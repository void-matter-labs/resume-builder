import type { Meta, StoryObj } from '@storybook/react';
import LabeledNativeSelect from '.';
import { ComponentProps } from 'react';
import { expect, fn, userEvent, within } from '@storybook/test';
import Button from '../button';

const meta = {
  title: 'Atoms/LabeledNativeSelect',
  component: LabeledNativeSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selectProps: {
      size: {
        control: 'select',
        options: ['sm', 'md', 'lg']
      },
      bordered: {
        control: 'boolean'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabeledNativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

//@ts-expect-error
const delayTime = typeof require === 'undefined' ? 250 : 0

export const Default: Story = {
  args: {
    label: "Select",
    selectProps: {
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
      bordered: true,
      size: "lg"
    }
  }
};

interface ExampleRenderProps {
  onSubmit({
    email,
    name
  }: {
    email?: string;
    name?: string;
  }): void;
}

const options = [
  {
    label: 'JavaScript',
    value: 'javascript'
  },
  {
    label: 'NodeJs',
    value: 'nodejs'
  },
  {
    label: "React",
    value: 'react'
  }
]

const ExampleRender = ({ onSubmit }: ExampleRenderProps) => {
  const action: ComponentProps<'form'>['action'] = (data) => {

    onSubmit(Object.fromEntries(data.entries()));
  }

  return <form
    action={action}
    className='flex flex-col gap-4 w-96'
  >
    <LabeledNativeSelect
      selectId="languages"
      name="skill-1"
      label="Skill 1"
      selectProps={{
        options,
        bordered: true,
      }}
    />
    <LabeledNativeSelect
      selectId="skill-2"
      name="skill-2"
      label="Skill 2"
      selectProps={{
        options,
        bordered: true,
      }}
    />
    <Button variant='solid' themeColor='primary' type="submit">Submit</Button>
  </form>
}


export const Example: StoryObj<typeof ExampleRender> = {
  args: {
    onSubmit: fn()
  },
  render: ExampleRender,
  async play({ canvasElement, args }) {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    await userEvent.selectOptions(canvas.getByLabelText('Skill 1'), 'react', { delay: delayTime });

    await userEvent.selectOptions(canvas.getByLabelText('Skill 2'), 'nodejs', { delay: delayTime });

    await userEvent.click(button, {
      delay: delayTime
    });

    expect(args.onSubmit).toHaveBeenCalledWith({
      "skill-1": "react",
      "skill-2": "nodejs"
    });
  }
}
