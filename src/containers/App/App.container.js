import React from 'react'
import H1 from 'components/H1'
import SelectionButton from 'components/SelectionButton'
import RandomRecipes from 'containers/RandomRecipes'

import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const GET_RANDOM_RECIPES = 'Donnez moi des idées!'
const GET_RECIPES_FROM_FOOD_NAME = 'J\'ai une envie de...'
export class App extends React.PureComponent {
  // componentDidMount() {
  //   fetch('api/puppy')
  //     .then(res => res.json())
  //     .then(data => console.log(data.results))
  //     .catch(err => {
  //       throw Error(err)
  //     })
  // }

  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
    }
  }

  handleSelectOption = option => {
    this.setState({ selectedOption: option })
  }
  render() {
    return(
      <AppContainer>
        <H1> Qu&apos;est-ce qu&apos;on mange ce soir ? </H1>
        <SelectionButton
          firstOption={GET_RANDOM_RECIPES}
          secondOption={GET_RECIPES_FROM_FOOD_NAME}
          onSelect={this.handleSelectOption}
          selectedOption={this.state.selectedOption}
        />
        {this.state.selectedOption === GET_RANDOM_RECIPES && <RandomRecipes />}
        {this.state.selectedOption === GET_RECIPES_FROM_FOOD_NAME &&
        <div> {GET_RECIPES_FROM_FOOD_NAME} </div>
        }
      </AppContainer>
    )
  }
}

export default App
