import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonBurgerShape from 'components/ButtonBurgerShape'

storiesOf('ButtonBurgerShape', module)
  .add('Default', () => (
    <ButtonBurgerShape> 20 </ButtonBurgerShape>
  ))

