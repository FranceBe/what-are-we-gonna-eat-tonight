import React from 'react'
import styled from 'styled-components'
import H2 from 'components/H2'
import ButtonBurgerShape from 'components/ButtonBurgerShape'
import RecipeCard from 'components/RecipeCard'
import { getRandomInt, getRandomNItems } from 'services/random.service'
import { RecipeCardsContainer } from 'components/RecipeCardsContainer'

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  & button:not(:last-of-type) {
    margin-right: 10px;
  }
`

export class RandomRecipes extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      listOfRecipes: [],
    }
  }

  getRandomRecipes = n => {
    const randomPage = getRandomInt(50)
    fetch(`api/puppy/?p=${randomPage}`)
      .then(res => res.json())
      .then(data => {
        const listOfRecipes = getRandomNItems(data.results, n)
        this.setState({ listOfRecipes })
      })
      .catch(err => {
        throw Error(err)
      })
  }

  render() {
    return (
      <>
        <H2> Combien voulez vous de propositions ? </H2>
        <ButtonsContainer>
          <ButtonBurgerShape onClick={() => this.getRandomRecipes(1)}> 1 </ButtonBurgerShape>
          <ButtonBurgerShape onClick={() => this.getRandomRecipes(5)}> 5 </ButtonBurgerShape>
          <ButtonBurgerShape onClick={() => this.getRandomRecipes(10)}> 10 </ButtonBurgerShape>
        </ButtonsContainer>
        {this.state.listOfRecipes.length > 0 &&
        <RecipeCardsContainer>
          {this.state.listOfRecipes.map((recipe, i) => {
            return (
              <RecipeCard
                key={`recipe-${i}`}
                title={recipe.title}
                ingredients={recipe.ingredients}
                href={recipe.href}
                thumbnail={recipe.thumbnail}
              />
            )
          })}
        </RecipeCardsContainer>
        }
      </>
    )
  }
}

export default RandomRecipes
