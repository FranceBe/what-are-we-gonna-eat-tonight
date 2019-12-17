import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Input, { InputField, Label, InputContainer } from 'components/Input'

describe('Input', () => {
  describe('component style', () => {
    describe('InputField', () => {
      it('should match snapshot', () => {
        const InputFieldTree = renderer.create(<InputField/>).toJSON()
        expect(InputFieldTree).toMatchSnapshot()
      })
    })
    describe('Label', () => {
      it('should match snapshot', () => {
        const LabelTree = renderer.create(<Label/>).toJSON()
        expect(LabelTree).toMatchSnapshot()
      })
    })
    describe('InputContainer', () => {
      it('should match snapshot', () => {
        const InputContainerTree = renderer.create(<InputContainer/>).toJSON()
        expect(InputContainerTree).toMatchSnapshot()
      })
    })
  })
  describe('component rendering', () => {
    const defaultProps = {
      label: 'Test label',
      type: 'text',
    }
    describe('given default props', () => {
      it('should render InputContainer, Label and InputField with props', () => {
        const InputWrapper = shallow(<Input {...defaultProps} />)
        expect(InputWrapper.find(InputContainer)).toHaveLength(1)
        expect(InputWrapper.find(Label)).toHaveLength(1)
        expect(InputWrapper.find(Label).text()).toBe(defaultProps.label)
        expect(InputWrapper.find(InputField)).toHaveLength(1)
        expect(InputWrapper.find(InputField).props().type).toBe(defaultProps.type)
      })
    })
  })
})
