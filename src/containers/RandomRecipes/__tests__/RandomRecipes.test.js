import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import RandomRecipes,
{ RecipeCardsContainer }
  from 'containers/RandomRecipes/RandomRecipes.container'
import H2 from 'components/H2'
import ButtonBurgerShape from 'components/ButtonBurgerShape'
import RecipeCard from 'components/RecipeCard'

describe('RandomRecipes', () => {
  describe('styled-components', () => {
    describe('RecipeCardsContainer', () => {
      it('should match snapshot', () => {
        const RecipeCardsContainerTree = renderer.create(<RecipeCardsContainer/>).toJSON()
        expect(RecipeCardsContainerTree).toMatchSnapshot()
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
    describe('rendering', () => {
      it('should render an H2 and a ButtonBurgerShape', () => {
        const RandomRecipesWrapper = shallow(<RandomRecipes/>)
        expect(RandomRecipesWrapper.find(H2)).toHaveLength(1)
        expect(RandomRecipesWrapper.find(H2).dive().text()).toBe(' Combien voulez vous de propositions ? ')
        expect(RandomRecipesWrapper.find(ButtonBurgerShape)).toHaveLength(1)
        expect(RandomRecipesWrapper.find(ButtonBurgerShape).dive().text()).toBe(' 10 ')
        expect(RandomRecipesWrapper.find(ButtonBurgerShape).props().onClick).toBe(
          RandomRecipesWrapper.instance().getRandomRecipes
        )
      })
      it('should render as many RecipeCard as there is objects in listOfRecipes state', () => {
        const RandomRecipesWrapper = shallow(<RandomRecipes/>)
        RandomRecipesWrapper.setState({
          listOfRecipes,
        })
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
      let RandomRecipesWrapper
      let getRandomIntSpy
      beforeAll(() => {
        RandomRecipesWrapper = shallow(<RandomRecipes/>)
        getRandomIntSpy =
          jest.spyOn(RandomRecipesWrapper.instance(), 'getRandomInt').mockImplementation(() => 12)
        fetch.mockResponse(JSON.stringify({ results: [...listOfRecipes] }))

      })
      afterAll(() => {
        jest.clearAllMocks()
      })
      describe('getRandomRecipes', () => {
        it('should call getRandomInt', () => {
          RandomRecipesWrapper.instance().getRandomRecipes()
          expect(getRandomIntSpy).toHaveBeenCalledTimes(1)
          expect(getRandomIntSpy).toHaveReturnedWith(12) // output is mocked in beforeAll
        })
        it('should call fetch', () => {
          RandomRecipesWrapper.instance().getRandomRecipes()
          expect(fetch).toHaveBeenCalledTimes(1)
          expect(fetch).toHaveBeenCalledWith("api/puppy/?p=12")
        })
      })
    })
  })
})
