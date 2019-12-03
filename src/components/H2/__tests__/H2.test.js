import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import H2, { H2Default } from 'components/H2'

describe('H2', () => {
  describe('Styled component', () => {
    describe('H2Default', () => {
      it('should match snapshot', () => {
        const H2DefaultTree = renderer.create(<H2Default/>).toJSON()
        expect(H2DefaultTree).toMatchSnapshot()
      })
      it('should have font-size set to 1.25rem', () => {
        const H2DefaultTree = renderer.create(<H2Default/>).toJSON()
        expect(H2DefaultTree).toHaveStyleRule('font-size', '1.25rem')
      })
      it('should have text-align set to center', () => {
        const H2DefaultTree = renderer.create(<H2Default/>).toJSON()
        expect(H2DefaultTree).toHaveStyleRule('text-align', 'center')
      })
      it('should have text-shadow set to 1px 1px #EBA789', () => {
        const H2DefaultTree = renderer.create(<H2Default/>).toJSON()
        expect(H2DefaultTree).toHaveStyleRule('text-shadow', '1px 1px #EBA789')
      })
    })
  })
  describe('rendering', () => {
    describe('default props', () => {
      const children = 'I am an H2 title :)'
      it('should render H2Default component with its children', () => {
        const H2Wrapper = shallow(<H2>{children}</H2>)
        expect(H2Wrapper.find(H2Default)).toHaveLength(1)
        expect(H2Wrapper.find(H2Default).text()).toBe('I am an H2 title :)')
      })
    })
  })
})
