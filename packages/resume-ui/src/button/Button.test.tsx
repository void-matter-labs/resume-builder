import { composeStory } from '@storybook/react';
import {
  describe,
  it
} from 'vitest';

import meta, { PrimarySolid, AsAnchorBecauseOfHrefProp, AsAnotherBecauseOfAsProp } from './Button.stories'
import { ElementType } from 'react';


interface AsRenderParameters {
  args: {
    as: ElementType,
    children: string
  },
  parameters: {
    instance: typeof HTMLElement;
  }
}

describe('Button', ()=>{
  it(
    'When clicked calls fn',
    composeStory(PrimarySolid, meta).run
  )

  it(
    'When href is provided, renders as anchor',
    composeStory(AsAnchorBecauseOfHrefProp, meta).run
  );


  const eachData : AsRenderParameters [] = [
    {args: {as: 'div', children: 'As Div'}, parameters : { instance: HTMLDivElement }},
    {args: {as: 'span', children: 'As Span'}, parameters : { instance: HTMLSpanElement }},
    {args: {as: 'a', children: 'As Anchor'}, parameters : { instance: HTMLAnchorElement }},
    {args: {as: 'label', children: 'As label'}, parameters : { instance: HTMLLabelElement }},
  ]

  it
    .each(eachData)(
      'When as prop is provided, renders as provided',
      composeStory(AsAnotherBecauseOfAsProp, meta).run
    )
})
