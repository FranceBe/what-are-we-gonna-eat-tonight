import React from 'react'
import styled from 'styled-components'
import H2 from 'components/H2'
import Input, { InputContainer } from 'components/Input'
import ButtonBurgerShape from 'components/ButtonBurgerShape'
import RecipeCard from 'components/RecipeCard'
import { getRandomInt, getRandomNItems } from 'services/random.service'
import { RecipeCardsContainer } from 'components/RecipeCardsContainer'
import { spaces, colors } from 'styles/variables'

export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${InputContainer} {
    flex: 1 1 30%;
  }
`
export const TitleAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 30%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  & button:not(:last-of-type) {
    margin-right: 10px;
  }
`

export const NotFoundMessage = styled.div`
  margin: ${spaces.medium};
  color: ${colors.tertiary_default};
`

export class RecipesWithAliments extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ingredient: '',
      listOfRecipes: [],
      noRecipeFound: false,
    }
  }

  handleChange = event => {
    if (this.state.noRecipeFound) {
      this.setState({ noRecipeFound: false })
    }
    this.setState({ ingredient: event.target.value })
  }

  getRandomRecipes = n => {
    const randomPage = getRandomInt(50)
    const url = this.state.ingredient ?
      `api/puppy/?q=${this.state.ingredient}&p=${randomPage}` :
      `api/puppy/?p=${randomPage}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const listOfRecipes = getRandomNItems(data.results, n)
        this.setState({ listOfRecipes, noRecipeFound: data.results.length === 0 })
      })
      .catch(err => {
        throw Error(err)
      })
  }

  render() {
    return (
      <>
        <InputAndButtonContainer>
          <Input
            label={'Une envie de...'}
            type="text"
            value={this.state.ingredient}
            onChange={this.handleChange}
          />
          <TitleAndButtonsContainer>
            <H2>...combien voulez vous de proppositions ?</H2>
            <ButtonsContainer>
              <ButtonBurgerShape onClick={() => this.getRandomRecipes(1)}> 1 </ButtonBurgerShape>
              <ButtonBurgerShape onClick={() => this.getRandomRecipes(5)}> 5 </ButtonBurgerShape>
              <ButtonBurgerShape onClick={() => this.getRandomRecipes(10)}> 10 </ButtonBurgerShape>
            </ButtonsContainer>
          </TitleAndButtonsContainer>
        </InputAndButtonContainer>
        {this.state.listOfRecipes.length > 0 &&
        <RecipeCardsContainer>
          {this.state.listOfRecipes.map((recipe, i) => (
            <RecipeCard
              key={`recipe-${i}`}
              title={recipe.title}
              ingredients={recipe.ingredients}
              href={recipe.href}
              thumbnail={recipe.thumbnail}
            />
          ))}
        </RecipeCardsContainer>
        }
        {this.state.noRecipeFound &&
        <NotFoundMessage>
          Désolé, nous n&apos;avons trouvé aucune recette qui correspond :&apos;(
        </NotFoundMessage>
        }
      </>
    )
  }
}

export default RecipesWithAliments
