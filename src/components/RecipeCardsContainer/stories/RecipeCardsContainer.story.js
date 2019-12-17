import React from 'react'
import { storiesOf } from '@storybook/react'
import RecipeCard from 'components/RecipeCard'
import { RecipeCardsContainer } from 'components/RecipeCardsContainer'

const renderMultipleCards = max => {
  let neededArray = []
  for (let i = 0; i < max; i++) {
    neededArray.push(i)
  }
  return neededArray.map((time) => {
    return (
      <RecipeCard
        key={time}
        title={'Chocolate Cake'}
        href={'http://siteweb.site.web'}
        ingredients={'chocolat, cake, chocolate cake'}
        thumbnail={'https://upload.wikimedia.org/wikipedia/commons/d/df/Chocolate_cake.jpg'}
      />
    )
  })
}
storiesOf('RecipeCardsContainer', module)
  .add('with 10 cards', () => (
    <RecipeCardsContainer>
      {renderMultipleCards(10)}
    </RecipeCardsContainer>
  ))
  .add('with 5 cards', () => (
    <RecipeCardsContainer>
      {renderMultipleCards(5)}
    </RecipeCardsContainer>
  ))
  .add('with 1 cards', () => (
    <RecipeCardsContainer>
      {renderMultipleCards(1)}
    </RecipeCardsContainer>
  ))

