import React from 'react'
import { GlobalStyle } from 'styles/global-styles'
import renderer from 'react-test-renderer'

describe('GlobalStyle', () => {
  it('should match snapshot', () => {
    const GlobalStyleTree = renderer.create(<GlobalStyle />).toJSON()
    expect(GlobalStyleTree).toMatchSnapshot()
  })
})
