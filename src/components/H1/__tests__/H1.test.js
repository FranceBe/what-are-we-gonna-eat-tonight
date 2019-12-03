import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import H1, { H1Default } from 'components/H1'

describe('H1', () => {
  describe('Styled component', () => {
    describe('H1Default', () => {
      it('should match snapshot', () => {
        const H1DefaultTree = renderer.create(<H1Default/>).toJSON()
        expect(H1DefaultTree).toMatchSnapshot()
      })
      it('should have font-size set to 1.875rem', () => {
        const H1DefaultTree = renderer.create(<H1Default/>).toJSON()
        expect(H1DefaultTree).toHaveStyleRule('font-size', '1.875rem')
      })
      it('should have text-align set to center', () => {
        const H1DefaultTree = renderer.create(<H1Default/>).toJSON()
        expect(H1DefaultTree).toHaveStyleRule('text-align', 'center')
      })
      it('should have text-shadow set to 1px 1px #EBA789', () => {
        const H1DefaultTree = renderer.create(<H1Default/>).toJSON()
        expect(H1DefaultTree).toHaveStyleRule('text-shadow', '1px 1px #EBA789')
      })
    })
  })
  describe('rendering', () => {
    describe('default props', () => {
      const children = 'I am an H1 title :)'
      it('should render H1Default component with its children', () => {
        const H1Wrapper = shallow(<H1>{children}</H1>)
        expect(H1Wrapper.find(H1Default)).toHaveLength(1)
        expect(H1Wrapper.find(H1Default).text()).toBe('I am an H1 title :)')
      })
    })
  })
})
