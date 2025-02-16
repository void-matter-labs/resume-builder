import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import Button from '.';

const meta = {
  title: 'Atoms/Button',
  component: Button,
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
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

//@ts-expect-error
const delayTime = typeof require === 'undefined' ? 250 : 0

export const PrimarySolid: Story = {
  args: {
    themeColor: 'primary',
    variant: 'solid',
    children: 'Primary Solid Button'
  },
  async play({ canvasElement , args}){
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button', { name: 'Primary Solid Button' });

    await userEvent.click(button, {
      delay: delayTime
    });

    expect(args.onClick).toHaveBeenCalledOnce();
  }
};

export const AsAnchorBecauseOfHrefProp: Story = {
  args: {
    href: 'https://example.com',
    themeColor: 'primary',
    variant: 'solid',
    children: 'As anchor'
  },
  async play({ canvasElement }){
    const canvas = within(canvasElement);

    const button = canvas.getByText('As anchor');

    expect(button instanceof HTMLAnchorElement).toBeTruthy();
  }
}

export const AsAnotherBecauseOfAsProp: Story = {
  args: {
    themeColor: 'primary',
    variant: 'solid',
    children: 'As another',
    as: 'div'
  },
  parameters: {
    instance: HTMLDivElement
  },
  async play({ canvasElement, parameters, args }){
    const canvas = within(canvasElement);

    const button = canvas.getByText(args.children);

    expect(button instanceof parameters.instance).toBeTruthy()
  }
}

export const PrimarySolidGrowsOnHover: Story = {
  args: {
    themeColor: 'primary',
    variant: 'solid',
    children: 'Primary Solid Button',
    hoverEffect: 'grow'
  },
};

export const PrimarySolidShrinksOnHover: Story = {
  args: {
    themeColor: 'primary',
    variant: 'solid',
    children: 'Primary Solid Button',
    hoverEffect: 'shrink'
  },
};


export const PrimaryOutline: Story = {
  args: {
    themeColor: 'primary',
    variant: 'outline',
    children: 'Primary Outline Button'
  },
};

export const PrimaryOutlineGrowsOnHover: Story = {
  args: {
    themeColor: 'primary',
    variant: 'outline',
    children: 'Primary Outline Button',
    hoverEffect: 'grow'
  },
};

export const PrimaryOutlineShrinksOnHover: Story = {
  args: {
    themeColor: 'primary',
    variant: 'outline',
    children: 'Primary Outline Button',
    hoverEffect: 'shrink'
  },
};


export const SecondarySolid: Story = {
  args: {
    themeColor: 'secondary',
    variant: 'solid',
    children: 'Secondary Solid Button'
  },
};

export const SecondaryOutline: Story = {
  args: {
    themeColor: 'secondary',
    variant: 'outline',
    children: 'Secondary Outline Button'
  },
};
