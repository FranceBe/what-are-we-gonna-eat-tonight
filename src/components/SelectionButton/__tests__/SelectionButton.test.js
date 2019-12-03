import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import SelectionButton,
{ SingleButton, ButtonsContainer }
  from 'components/SelectionButton/SelectionButton.component'

describe('SelectionButton', () => {
  describe('styled components', () => {
    describe('SingleButton', () => {
      it('should match snapshot', () => {
        const SingleButtonTree = renderer.create(<SingleButton />).toJSON()
        expect(SingleButtonTree).toMatchSnapshot()
      })
      describe('given isActive is false', () => {
        it('should have white background, #5F4C44 color and no text-decoration', () => {
          const SingleButtonTree = renderer.create(<SingleButton />).toJSON()
          expect(SingleButtonTree).toHaveStyleRule('background-color', '#FFF')
          expect(SingleButtonTree).toHaveStyleRule('color', '#5F4C44')
          expect(SingleButtonTree).toHaveStyleRule('text-decoration', 'none')
        })
      })
      describe('given isActive is true', () => {
        it('should have #EBA789 background, #FFF color and underline text-decoration', () => {
          const SingleButtonTree = renderer.create(<SingleButton isActive />).toJSON()
          expect(SingleButtonTree).toHaveStyleRule('background-color', '#EBA789')
          expect(SingleButtonTree).toHaveStyleRule('color', '#FFF')
          expect(SingleButtonTree).toHaveStyleRule('text-decoration', 'underline')
        })
      })
    })
    describe('ButtonsContainer', () => {
      it('should match snapshot', () => {
        const ButtonsContainerTree = renderer.create(<ButtonsContainer />).toJSON()
        expect(ButtonsContainerTree).toMatchSnapshot()
      })
    })
  })
  describe('component rendering', () => {
    const defaultProps = {
      firstOption: 'option 1',
      secondOption: 'option 2',
      onSelect: () => {},
      selectedOption: '',
    }
    describe('default props', () => {
      it('should render 1 ButtonsContainer and 2 SingleButton with props', () => {
        const SelectionButtonWrapper = shallow(<SelectionButton {...defaultProps} />)
        expect(SelectionButtonWrapper.find(ButtonsContainer)).toHaveLength(1)
        const SingleButtonWrapper = SelectionButtonWrapper.find(SingleButton)
        expect(SingleButtonWrapper).toHaveLength(2)
        expect(SingleButtonWrapper.at(0).props().isActive).toBe(false)
        expect(SingleButtonWrapper.at(1).props().isActive).toBe(false)
      })
      it('should call onSelect with args when button is clicked', () => {
        const props = {
          onSelect: jest.fn()
        }
        const SelectionButtonWrapper = shallow(<SelectionButton {...defaultProps} {...props} />)
        const SingleButtonWrapper = SelectionButtonWrapper.find(SingleButton)
        SingleButtonWrapper.at(0).props().onClick()
        expect(props.onSelect).toHaveBeenCalledTimes(1)
        expect(props.onSelect).toHaveBeenCalledWith(defaultProps.firstOption)

        SingleButtonWrapper.at(1).props().onClick()
        expect(props.onSelect).toHaveBeenCalledWith(defaultProps.secondOption)
      })
      it('should set isActive to true if props.selectedOption equal the button\'s options', () => {
        const props = {
          selectedOption: 'option 1',
        }
        const SelectionButtonWrapper = shallow(<SelectionButton {...defaultProps} {...props} />)
        const SingleButtonWrapper = SelectionButtonWrapper.find(SingleButton)
        expect(SingleButtonWrapper.at(0).props().isActive).toBe(true)
        expect(SingleButtonWrapper.at(1).props().isActive).toBe(false)
      })
    })
  })
})
