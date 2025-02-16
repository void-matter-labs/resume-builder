import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import createSyncSignal from './createSyncSignal';

const {
  setState,
  useSignal
} = createSyncSignal({
  initialState: 0,
})

const Consumer = fn(()=>{
  const state = useSignal();
  console.log("rendering consumer")

  return <div>{state}</div>
})

const Producer = fn(()=>{
  console.log("rendering producer")
  const onClick = ()=>{
    setState(prevState => prevState + 1)
  }

  return <button onClick={onClick}>Increment</button>
})

const Wrapper = fn(()=>{

  return <div>
    <p>Parent</p>
    <Consumer />
    <Producer />
  </div>
})

const meta = {
  title: 'createSyncSignal',
  component: Wrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

//@ts-expect-error
const delayTime = typeof require === 'undefined' ? 250 : 0

export const PrimarySolid: Story = {
  async play({ canvasElement }){
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button', { name: 'Increment' });

    await userEvent.click(button, {
      delay: delayTime
    });

    expect(Producer).toHaveBeenCalledTimes(1);
    await waitFor(()=>expect(Consumer).toHaveBeenCalledTimes(2));
  }
};
