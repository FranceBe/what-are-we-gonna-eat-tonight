import initStoryshots, { shallowSnapshot } from '@storybook/addon-storyshots'
import { resolve, join } from 'path'
const baseDir = resolve(__dirname, '../../../')

initStoryshots({
  configPath: `${join(baseDir)}/storybook`,
  test: shallowSnapshot,
})
