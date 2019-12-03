import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { GlobalStyle } from 'styles/global-styles'

if (process.env.NODE_ENV !== 'test') {
  addDecorator(story => (
    <>
      <GlobalStyle/>
      {story()}
    </>
  ))
}

const loadStories = () => {
  const req = require.context('..', true, /(src|storybook)\/.*\.story\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
