import React from 'react'
import renderer from 'react-test-renderer'
import { RecipeCardsContainer } from 'components/RecipeCardsContainer'

describe('RecipeCardsContainer', () => {
  it('should match snapshot', () => {
    const RecipeCardsContainerTree = renderer.create(<RecipeCardsContainer />).toJSON()
    expect(RecipeCardsContainerTree).toMatchSnapshot()
  })
})
