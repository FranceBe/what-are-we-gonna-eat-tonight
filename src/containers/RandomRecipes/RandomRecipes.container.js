import React from 'react'
import styled from 'styled-components'
import H2 from 'components/H2'
import ButtonBurgerShape from 'components/ButtonBurgerShape'
import RecipeCard from 'components/RecipeCard'
import { spaces } from 'styles/variables'

export const RecipeCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${spaces.regular} 0;
`

export class RandomRecipes extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      listOfRecipes: [],
    }
  }

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  getRandomRecipes = () => {
    const randomPage = this.getRandomInt(50)
    fetch(`api/puppy/?p=${randomPage}`)
      .then(res => res.json())
      .then(data => this.setState({ listOfRecipes: data.results }))
      .catch(err => {
        throw Error(err)
      })
  }

  render() {
    return (
      <>
        <H2> Combien voulez vous de propositions ? </H2>
        <ButtonBurgerShape onClick={this.getRandomRecipes}> 10 </ButtonBurgerShape>
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
