import type { Meta, StoryObj } from '@storybook/react';
import TextLabeledInput from '.';
import { ComponentProps } from 'react';
import { expect, fn, userEvent, within } from '@storybook/test';
import Button from '../button';

const meta = {
  title: 'Atoms/TextLabeledInput',
  component: TextLabeledInput,
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
} satisfies Meta<typeof TextLabeledInput>;

export default meta;
type Story = StoryObj<typeof meta>;

//@ts-expect-error
const delayTime = typeof require === 'undefined' ? 250 : 0

export const Default: Story = {
  args: {
    placeholder: 'world',
    label: 'Hello'
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

const ExampleRender = ({ onSubmit }:ExampleRenderProps)=>{
  const action: ComponentProps<'form'>['action'] = (data)=>{
    const email = data.get('email')?.toString();
    const name = data.get('fullname')?.toString();

    onSubmit({email, name});
  }

  return <form
    action={action}
    className='flex flex-col gap-4'
  >
    <TextLabeledInput
      inputId="fullname"
      name="fullname"
      label="Name"
      placeholder="John Doe"
    />
    <TextLabeledInput
      inputId="email"
      name="email"
      label="Email"
      placeholder="e@a.com"
    />
    <Button variant='solid' themeColor='primary'  type="submit">Submit</Button>
</form>
}


export const Example: StoryObj<typeof ExampleRender>= {
  args: {
    onSubmit: fn()
  },
  render: ExampleRender,
  async play({ canvasElement, args }){
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    await userEvent.type(canvas.getByLabelText('Name'), 'John Doe', {
      delay: delayTime
    });
    await userEvent.type(canvas.getByLabelText('Email'), 'a@e.com', {
      delay: delayTime
    });

    await userEvent.click(button, {
      delay: delayTime
    });

    expect(args.onSubmit).toHaveBeenCalledWith({
      email: 'a@e.com',
      name: 'John Doe'
    });
  }
}
