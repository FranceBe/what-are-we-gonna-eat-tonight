/**
 * special webpack config for storybook
 * storybook has its own webpack config and since we use @svgr/webpack instead of default svg loader
 * we need to specify a rule to avoid conflicts with default configuration
 * that way svg file are correctly load with @svgr/webpack in storybook
 */

const { resolve } = require('path')

const baseDir = __dirname

module.exports = async ({ config }) => {
  config.performance = {
    hints: false,
  }
  config.resolve.modules.push(resolve(baseDir, '../src'), resolve(baseDir, '../node_modules'))
  config.resolve.alias = {
    assets: resolve(baseDir, '../assets'),
  }

  config.plugins = config.plugins.filter(({ constructor }) => constructor.name !== 'ProgressPlugin')

  return config
}
