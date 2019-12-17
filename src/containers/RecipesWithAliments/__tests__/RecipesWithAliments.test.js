import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import RecipesWithAliments, {
  InputAndButtonContainer,
  BurgerButtonsContainer,
  NotFoundMessage
} from 'containers/RecipesWithAliments'
import Input from 'components/Input'
import ButtonBurgerShape from 'components/ButtonBurgerShape'
import H2 from 'components/H2'
import RecipeCard from 'components/RecipeCard'
import * as randomService from 'services/random.service'

describe('RecipesWithAliments', () => {
  describe('component style', () => {
    describe('InputAndButtonContainer', () => {
      it('should match snapshot', () => {
        const InputAndButtonContainerTree = renderer.create(<InputAndButtonContainer/>).toJSON()
        expect(InputAndButtonContainerTree).toMatchSnapshot()
      })
    })
    describe('BurgerButtonsContainer', () => {
      it('should match snapshot', () => {
        const BurgerButtonsContainerTree = renderer.create(<BurgerButtonsContainer/>).toJSON()
        expect(BurgerButtonsContainerTree).toMatchSnapshot()
      })
    })
    describe('NotFoundMessage', () => {
      it('should match snapshot', () => {
        const NotFoundMessageTree = renderer.create(<NotFoundMessage/>).toJSON()
        expect(NotFoundMessageTree).toMatchSnapshot()
      })
    })
  })
  describe('component rendering', () => {
    describe('given api call has not been done yet', () => {
      it('should have default values for states', () => {
        const RecipesWithAlimentsWrapper = shallow(<RecipesWithAliments/>)
        expect(RecipesWithAlimentsWrapper.state().ingredient).toBe('')
        expect(RecipesWithAlimentsWrapper.state().listOfRecipes).toEqual([])
        expect(RecipesWithAlimentsWrapper.state().noRecipeFound).toBe(false)
      })
      it('should render InputAndButtonContainer, Input with props', () => {
        const RecipesWithAlimentsWrapper = shallow(<RecipesWithAliments/>)
        expect(RecipesWithAlimentsWrapper.find(InputAndButtonContainer)).toHaveLength(1)
        expect(RecipesWithAlimentsWrapper.find(Input)).toHaveLength(1)
        expect(RecipesWithAlimentsWrapper.find(Input).props().label).toBe('Une envie de...')
        expect(RecipesWithAlimentsWrapper.find(Input).props().type)
          .toBe('text')
        expect(RecipesWithAlimentsWrapper.find(Input).props().value)
          .toEqual(RecipesWithAlimentsWrapper.state().ingredient)
        expect(RecipesWithAlimentsWrapper.find(Input).props().onChange)
          .toBe(RecipesWithAlimentsWrapper.instance().handleChange)
      })
      it('should render BurgerButtonsContainer, H2 and ButtonBurgerShape with props', () => {
        const RecipesWithAlimentsWrapper = shallow(<RecipesWithAliments/>)
        expect(RecipesWithAlimentsWrapper.find(BurgerButtonsContainer)).toHaveLength(1)
        expect(RecipesWithAlimentsWrapper.find(H2)).toHaveLength(1)
        expect(RecipesWithAlimentsWrapper.find(H2).dive().text())
          .toBe('...combien voulez vous de proppositions ?')
        expect(RecipesWithAlimentsWrapper.find(ButtonBurgerShape)).toHaveLength(1)
        expect(RecipesWithAlimentsWrapper.find(ButtonBurgerShape).dive().text())
          .toBe(' 10 ')
        expect(RecipesWithAlimentsWrapper.find(ButtonBurgerShape).props().onClick)
          .toBe(RecipesWithAlimentsWrapper.instance().handleSubmit)
      })
      it('should not render any RecipeCard', () => {
        const RecipesWithAlimentsWrapper = shallow(<RecipesWithAliments/>)
        expect(RecipesWithAlimentsWrapper.find(RecipeCard)).toHaveLength(0)
      })
    })
    describe('given api call has been done and listOfRecipes is filled', () => {
      it('should render as many RecipeCard as item in listOfRecipes', () => {
        const RecipesWithAlimentsWrapper = shallow(<RecipesWithAliments/>)
        RecipesWithAlimentsWrapper.setState({
          listOfRecipes: [
            {
              title: 'Recipe test',
              ingredients: 'Ingredient, another one, something else',
              href: 'http://recipe.recipe',
              thumbnail: 'http://image.image',
            },
            {
              title: 'Recipe test2',
              ingredients: 'Ingredient, another one, something else2',
              href: 'http://recipe.recipe2',
              thumbnail: 'http://image.image2',
            }
          ]
        })
        expect(RecipesWithAlimentsWrapper.find(RecipeCard)).toHaveLength(2)
        expect(RecipesWithAlimentsWrapper.find(RecipeCard).at(0).props().title)
          .toBe('Recipe test')
        expect(RecipesWithAlimentsWrapper.find(RecipeCard).at(0).props().ingredients)
          .toBe('Ingredient, another one, something else')
        expect(RecipesWithAlimentsWrapper.find(RecipeCard).at(0).props().href)
          .toBe('http://recipe.recipe')
        expect(RecipesWithAlimentsWrapper.find(RecipeCard).at(0).props().thumbnail)
          .toBe('http://image.image')
        expect(RecipesWithAlimentsWrapper.find(RecipeCard).at(1).props().title)
          .toBe('Recipe test2')
        expect(RecipesWithAlimentsWrapper.find(RecipeCard).at(1).props().ingredients)
          .toBe('Ingredient, another one, something else2')
        expect(RecipesWithAlimentsWrapper.find(RecipeCard).at(1).props().href)
          .toBe('http://recipe.recipe2')
        expect(RecipesWithAlimentsWrapper.find(RecipeCard).at(1).props().thumbnail)
          .toBe('http://image.image2')
      })
    })
    describe('given api respond with nothing', () => {
      it('should render NotFoundMessage', () => {
        const RecipesWithAlimentsWrapper = shallow(<RecipesWithAliments/>)
        RecipesWithAlimentsWrapper.setState({ noRecipeFound: true })
        expect(RecipesWithAlimentsWrapper.find(NotFoundMessage)).toHaveLength(1)
        expect(RecipesWithAlimentsWrapper.find(NotFoundMessage).text())
          .toBe('Désolé, nous n\'avons trouvé aucune recette qui correspond :\'(')
      })
    })
  })
  describe('methods', () => {
    describe('handleChange', () => {
      it('should set noRecipeFound state to false if it was true', () => {
        const RecipesWithAlimentsWrapper = shallow(<RecipesWithAliments/>)
        RecipesWithAlimentsWrapper.setState({ noRecipeFound: true })
        RecipesWithAlimentsWrapper.instance().handleChange({ target: { value: '' } })
        expect(RecipesWithAlimentsWrapper.state().noRecipeFound).toBe(false)
      })
      it('should set ingredient state with the value of event.target.value', () => {
        const RecipesWithAlimentsWrapper = shallow(<RecipesWithAliments/>)
        RecipesWithAlimentsWrapper.instance().handleChange({ target: { value: 'My Ingredient' } })
        expect(RecipesWithAlimentsWrapper.state().ingredient).toBe('My Ingredient')
      })
    })
    describe('handleSubmit', () => {
      const listOfRecipes = [
        {
          title: 'Chocolate Cake',
          href: 'http://siteweb.site.web',
          ingredients: 'chocolat, cake, chocolate cake',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Chocolate_cake.jpg',
        },
        {
          title: 'Chocolate Cheese Cake',
          href: 'http://cheese.cake',
          ingredients: 'chocolate, cheese, cake',
          thumbnail: '',
        }
      ]
      let getRandomIntSpy
      beforeAll(() => {
        getRandomIntSpy =
          jest.spyOn(randomService, 'getRandomInt').mockImplementation(() => 15)
        fetch.mockResponse(JSON.stringify({ results: [...listOfRecipes] }))
      })
      afterAll(() => {
        jest.resetAllMocks()
      })
      describe('ingredient is correctly filled', () => {
        it('should call fetch with api filled with random page and ingredient', () => {
          const RecipesWithAlimentsWrapper = shallow(<RecipesWithAliments/>)
          RecipesWithAlimentsWrapper.setState({ ingredient: 'chocolate' })
          RecipesWithAlimentsWrapper.instance().handleSubmit()
          expect(getRandomIntSpy).toHaveBeenCalledTimes(1)
          expect(getRandomIntSpy).toHaveReturnedWith(15) // output is mocked in beforeAll
          expect(fetch).toHaveBeenCalledTimes(1)
          expect(fetch).toHaveBeenCalledWith("api/puppy/?q=chocolate&p=15")
        })
      })
      describe('ingredient is not filled', () => {
        it('should call fetch with api filled with only random page', () => {
          const RecipesWithAlimentsWrapper = shallow(<RecipesWithAliments/>)
          RecipesWithAlimentsWrapper.instance().handleSubmit()
          expect(getRandomIntSpy).toHaveBeenCalledTimes(1)
          expect(getRandomIntSpy).toHaveReturnedWith(15) // output is mocked in beforeAll
          expect(fetch).toHaveBeenCalledTimes(1)
          expect(fetch).toHaveBeenCalledWith("api/puppy/?p=15")
        })
      })
    })
  })
})
