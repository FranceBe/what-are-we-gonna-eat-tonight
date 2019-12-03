import initStoryshots, { shallowSnapshot } from '@storybook/addon-storyshots'

initStoryshots({
  configPath: 'storybook',
  test: shallowSnapshot,
})
