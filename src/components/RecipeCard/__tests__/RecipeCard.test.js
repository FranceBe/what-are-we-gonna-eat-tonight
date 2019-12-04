import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import RecipeCard,
{ ImageContainer, CardContainer, ImageIngredientsAndLink, IngredientsAndLink, PlaceHolder, Title }
  from 'components/RecipeCard/RecipeCard.component'

describe('RecipeCard', () => {
  describe('style-components', () => {
    describe('ImageContainer', () => {
      it('should match snapshot', () => {
        const ImageContainerTree = renderer.create(<ImageContainer/>).toJSON()
        expect(ImageContainerTree).toMatchSnapshot()
      })
    })
    describe('CardContainer', () => {
      it('should match snapshot', () => {
        const CardContainerTree = renderer.create(<CardContainer/>).toJSON()
        expect(CardContainerTree).toMatchSnapshot()
      })
    })
    describe('ImageIngredientsAndLink', () => {
      it('should match snapshot', () => {
        const ImageIngredientsAndLinkTree = renderer.create(<ImageIngredientsAndLink/>).toJSON()
        expect(ImageIngredientsAndLinkTree).toMatchSnapshot()
      })
    })
    describe('IngredientsAndLink', () => {
      it('should match snapshot', () => {
        const IngredientsAndLinkTree = renderer.create(<IngredientsAndLink/>).toJSON()
        expect(IngredientsAndLinkTree).toMatchSnapshot()
      })
    })
    describe('PlaceHolder', () => {
      it('should match snapshot', () => {
        const PlaceHolderTree = renderer.create(<PlaceHolder/>).toJSON()
        expect(PlaceHolderTree).toMatchSnapshot()
      })
    })
    describe('Title', () => {
      it('should match snapshot', () => {
        const TitleTree = renderer.create(<Title/>).toJSON()
        expect(TitleTree).toMatchSnapshot()
      })
    })
  })
  describe('component rendering', () => {
    const defaultProps = {
      title: 'Chocolate Cake',
      href: 'http://siteweb.site.web',
      ingredients: 'chocolat, cake, chocolate cake',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Chocolate_cake.jpg',
    }
    describe('given default props', () => {
      it('should render CardContainer,' +
        'Title, ImageIngredientsAndLink, ImageContainer, IngredientsAndLink with content', () => {
        const RecipeCardWrapper = shallow(<RecipeCard {...defaultProps} />)
        expect(RecipeCardWrapper.find(CardContainer)).toHaveLength(1)
        expect(RecipeCardWrapper.find(Title)).toHaveLength(1)
        expect(RecipeCardWrapper.find(Title).text()).toBe(defaultProps.title)
        expect(RecipeCardWrapper.find(ImageIngredientsAndLink)).toHaveLength(1)
        expect(RecipeCardWrapper.find(ImageContainer)).toHaveLength(1)
        expect(RecipeCardWrapper.find(ImageContainer).props().image).toBe(defaultProps.thumbnail)
        expect(RecipeCardWrapper.find(IngredientsAndLink)).toHaveLength(1)
        expect(RecipeCardWrapper.find(IngredientsAndLink).text()).toBe(defaultProps.ingredients
          + ' Lien vers la recette ')
        expect(RecipeCardWrapper.find('a')).toHaveLength(1)
        expect(RecipeCardWrapper.find('a').props().href).toBe(defaultProps.href)
        expect(RecipeCardWrapper.find('a').text()).toBe(' Lien vers la recette ')
      })
    })
    describe('given there is no thumbnail', () => {
      const props = {
        thumbnail: undefined,
      }
      it('should render the PlaceHolder component instead of ImageContainer', () => {
        const RecipeCardWrapper = shallow(<RecipeCard {...defaultProps} {...props} />)
        expect(RecipeCardWrapper.find(ImageContainer)).toHaveLength(0)
        expect(RecipeCardWrapper.find(PlaceHolder)).toHaveLength(1)
      })
    })
  })
})
