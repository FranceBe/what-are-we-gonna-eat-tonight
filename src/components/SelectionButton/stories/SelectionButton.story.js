import React from 'react'
import { storiesOf } from '@storybook/react'
import SelectionButton from 'components/SelectionButton'

storiesOf('SelectionButton', module)
  .add('Default', () => (
    <SelectionButton
      firstOption={'option 1'}
      secondOption={'option 2'}
      onSelect={() => {}}
      selectedOption={''}
    />
  ))
  .add('Option 2 is active', () => (
    <SelectionButton
      firstOption={'option 1'}
      secondOption={'option 2'}
      onSelect={() => {}}
      selectedOption={'option 2'}
    />
  ))
