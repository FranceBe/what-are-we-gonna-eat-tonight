import React from 'react'
import { storiesOf } from '@storybook/react'
import RecipeCard from 'components/RecipeCard'

storiesOf('RecipeCard', module)
  .add('Default', () => (
    <RecipeCard
      title={'Chocolate Cake'}
      href={'http://siteweb.site.web'}
      ingredients={'chocolat, cake, chocolate cake'}
      thumbnail={'https://upload.wikimedia.org/wikipedia/commons/d/df/Chocolate_cake.jpg'}
    />
  ))

