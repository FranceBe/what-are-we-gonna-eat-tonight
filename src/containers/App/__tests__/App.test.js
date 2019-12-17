import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import App, { AppContainer, GET_RANDOM_RECIPES, GET_RECIPES_FROM_FOOD_NAME } from 'containers/App'
import H1 from 'components/H1'
import SelectionButton from 'components/SelectionButton'
import RandomRecipes from 'containers/RandomRecipes'
import RecipesWithAliments from 'containers/RecipesWithAliments'

describe('App', () => {
  describe('styled components', () => {
    describe('AppContainer', () => {
      it('should match snapshot', () => {
        const AppContainerTree = renderer.create(<AppContainer/>).toJSON()
        expect(AppContainerTree).toMatchSnapshot()
      })
    })
  })
  describe('rendering', () => {
    describe('given there is no button selected', () => {
      it('should have default selectedOption state value set to ""', () => {
        const AppWrapper = shallow(<App/>)
        expect(AppWrapper.state().selectedOption).toBe('')
      })
      it('should render AppContainer, H1, SelectionButton with props', () => {
        const AppWrapper = shallow(<App/>)
        expect(AppWrapper.find(AppContainer)).toHaveLength(1)
        expect(AppWrapper.find(H1)).toHaveLength(1)
        expect(AppWrapper.find(H1).dive().text()).toBe(' Qu\'est-ce qu\'on mange ce soir ? ')
        expect(AppWrapper.find(SelectionButton)).toHaveLength(1)
        expect(AppWrapper.find(SelectionButton).props().firstOption).toBe(GET_RANDOM_RECIPES)
        expect(AppWrapper.find(SelectionButton).props().secondOption).toBe(GET_RECIPES_FROM_FOOD_NAME)
        expect(AppWrapper.find(SelectionButton).props().onSelect)
          .toBe(AppWrapper.instance().handleSelectOption)
        expect(AppWrapper.find(SelectionButton).props().selectedOption)
          .toBe(AppWrapper.state().selectedOption)
      })
    })
    describe('given selected button is first option GET_RANDOM_RECIPES', () => {
      it('should render RandomRecipes', () => {
        const AppWrapper = shallow(<App/>)
        AppWrapper.setState({ selectedOption: GET_RANDOM_RECIPES })
        expect(AppWrapper.find(RandomRecipes)).toHaveLength(1)
        expect(AppWrapper.find(RecipesWithAliments)).toHaveLength(0)
      })
    })
    describe('given selected button is second option GET_RECIPES_FROM_FOOD_NAME', () => {
      it('should render RandomRecipes', () => {
        const AppWrapper = shallow(<App/>)
        AppWrapper.setState({ selectedOption: GET_RECIPES_FROM_FOOD_NAME })
        expect(AppWrapper.find(RecipesWithAliments)).toHaveLength(1)
        expect(AppWrapper.find(RandomRecipes)).toHaveLength(0)
      })
    })
  })
  describe('methods', () => {
    describe('handleSelectOption', () => {
      it('set selectedOption state with provided option', () => {
        const AppWrapper = shallow(<App/>)
        AppWrapper.instance().handleSelectOption('test option')
        expect(AppWrapper.state().selectedOption).toBe('test option')
      })
    })
  })
})
