import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import RandomRecipes, { ButtonsContainer } from 'containers/RandomRecipes/RandomRecipes.container'
import { RecipeCardsContainer } from 'components/RecipeCardsContainer'
import H2 from 'components/H2'
import ButtonBurgerShape from 'components/ButtonBurgerShape'
import * as randomService from 'services/random.service'

import RecipeCard from 'components/RecipeCard'

describe('RandomRecipes', () => {
  describe('styled-components', () => {
    describe('ButtonsContainer', () => {
      it('should match snapshot', () => {
        const ButtonsContainerTree = renderer.create(<ButtonsContainer/>).toJSON()
        expect(ButtonsContainerTree).toMatchSnapshot()
      })
    })
  })
  describe('component', () => {
    const listOfRecipes = [
      {
        title: 'Chocolate Cake',
        href: 'http://siteweb.site.web',
        ingredients: 'chocolat, cake, chocolate cake',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Chocolate_cake.jpg',
      },
      {
        title: 'Cheese Cake',
        href: 'http://cheese.cake',
        ingredients: 'cheese, cake',
        thumbnail: '',
      }
    ]
    let getRandomIntSpy
    beforeAll(() => {
      getRandomIntSpy =
        jest.spyOn(randomService, 'getRandomInt').mockImplementation(() => 12)
      fetch.mockResponse(JSON.stringify({ results: [...listOfRecipes] }))
    })
    afterAll(() => {
      jest.resetAllMocks()
    })
    describe('rendering', () => {
      it('should render an H2 and a ButtonBurgerShape', () => {
        const RandomRecipesWrapper = shallow(<RandomRecipes/>)
        expect(RandomRecipesWrapper.find(H2)).toHaveLength(1)
        expect(RandomRecipesWrapper.find(H2).dive().text()).toBe(' Combien voulez vous de propositions ? ')
        expect(RandomRecipesWrapper.find(ButtonBurgerShape)).toHaveLength(3)
        expect(RandomRecipesWrapper.find(ButtonBurgerShape).at(0).dive().text())
          .toBe(' 1 ')
        expect(RandomRecipesWrapper.find(ButtonBurgerShape).at(1).dive().text())
          .toBe(' 5 ')
        expect(RandomRecipesWrapper.find(ButtonBurgerShape).at(2).dive().text())
          .toBe(' 10 ')
      })
      it('should call getRandomRecipes when a BurgerButton is clicked', () => {
        const RandomRecipesWrapper = shallow(<RandomRecipes/>)
        const getRandomRecipesSpy = jest.spyOn(RandomRecipesWrapper.instance(), 'getRandomRecipes')
        RandomRecipesWrapper.find(ButtonBurgerShape).at(0).props().onClick()
        expect(getRandomRecipesSpy).toHaveBeenCalledTimes(1)
      })
      it('should render as many RecipeCard as there is objects in listOfRecipes state', () => {
        const RandomRecipesWrapper = shallow(<RandomRecipes/>)
        RandomRecipesWrapper.setState({
          listOfRecipes,
        })
        expect(RandomRecipesWrapper.find(RecipeCardsContainer)).toHaveLength(1)
        const RecipeCardWrapper = RandomRecipesWrapper.find(RecipeCard)
        expect(RecipeCardWrapper).toHaveLength(2)
        expect(RecipeCardWrapper.at(0).props().title).toEqual(listOfRecipes[0].title)
        expect(RecipeCardWrapper.at(0).props().ingredients).toEqual(listOfRecipes[0].ingredients)
        expect(RecipeCardWrapper.at(0).props().href).toEqual(listOfRecipes[0].href)
        expect(RecipeCardWrapper.at(0).props().thumbnail).toEqual(listOfRecipes[0].thumbnail)
        expect(RecipeCardWrapper.at(1).props().title).toEqual(listOfRecipes[1].title)
        expect(RecipeCardWrapper.at(1).props().ingredients).toEqual(listOfRecipes[1].ingredients)
        expect(RecipeCardWrapper.at(1).props().href).toEqual(listOfRecipes[1].href)
        expect(RecipeCardWrapper.at(1).props().thumbnail).toEqual(listOfRecipes[1].thumbnail)
      })
    })
    describe('methods', () => {
      describe('getRandomRecipes', () => {
        it('should call getRandomInt', () => {
          const RandomRecipesWrapper = shallow(<RandomRecipes/>)
          RandomRecipesWrapper.instance().getRandomRecipes()
          expect(getRandomIntSpy).toHaveBeenCalledTimes(1)
          expect(getRandomIntSpy).toHaveReturnedWith(12) // output is mocked in beforeAll
        })
        it('should call fetch', () => {
          const RandomRecipesWrapper = shallow(<RandomRecipes/>)
          RandomRecipesWrapper.instance().getRandomRecipes()
          expect(fetch).toHaveBeenCalledTimes(1)
          expect(fetch).toHaveBeenCalledWith("api/puppy/?p=12")
        })
      })
    })
  })
})
