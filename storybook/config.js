import { configure } from '@storybook/react'

configure(require.context('../src', true, /\.stories\.js$/), module)

const loadStories = () => {
  const req = require.context('..', true, /(src|storybook)\/.*\.story\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
