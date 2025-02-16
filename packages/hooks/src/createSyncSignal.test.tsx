import { composeStory } from '@storybook/react'
import {
  describe,
  it
} from 'vitest'


import meta, { PrimarySolid } from './createSyncSignal.stories'

describe('createSyncSignal', () => {
  it(
    'renders once the produces, multiple times the consumer',
    composeStory(PrimarySolid, meta).run
  )
})
