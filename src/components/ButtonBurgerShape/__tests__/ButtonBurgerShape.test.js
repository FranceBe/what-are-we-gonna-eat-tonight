import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import ButtonBurgerShape,
{ BurgerShape, ButtonText }
  from 'components/ButtonBurgerShape/ButtonBurgerShape.component'

describe('ButtonBurgerShape', () => {
  describe('styled components', () => {
    describe('BurgerShape', () => {
      it('should match snapshot', () => {
        const BurgerShapeTree = renderer.create(<BurgerShape/>).toJSON()
        expect(BurgerShapeTree).toMatchSnapshot()
      })
    })
    describe('ButtonText', () => {
      it('should match snapshot', () => {
        const ButtonTextTree = renderer.create(<ButtonText/>).toJSON()
        expect(ButtonTextTree).toMatchSnapshot()
      })
    })
  })
  describe('components rendering', () => {
    const children = 'Hello'
    it('should render BurgerShape and ButtonText with children', () => {
      const ButtonBurgerShapeWrapper = shallow(<ButtonBurgerShape>{children}</ButtonBurgerShape>)
      expect(ButtonBurgerShapeWrapper.find(BurgerShape)).toHaveLength(1)
      expect(ButtonBurgerShapeWrapper.find(ButtonText)).toHaveLength(1)
      expect(ButtonBurgerShapeWrapper.find(ButtonText).text()).toBe(children)
    })
    it('should call preventDefault if there is no props onClick passed', () => {
      const event = {
        preventDefault: jest.fn()
      }
      const ButtonBurgerShapeWrapper = shallow(<ButtonBurgerShape>{children}</ButtonBurgerShape>)
      ButtonBurgerShapeWrapper.find(BurgerShape).simulate('click', event)
      expect(event.preventDefault).toHaveBeenCalledTimes(1)
    })
    it('should call props onClick if there is one', () => {
      const props = {
        onClick: jest.fn()
      }
      const ButtonBurgerShapeWrapper = shallow(<ButtonBurgerShape {...props}>{children}</ButtonBurgerShape>)
      ButtonBurgerShapeWrapper.find(BurgerShape).simulate('click', {})
      expect(props.onClick).toHaveBeenCalledTimes(1)
    })
  })
})
