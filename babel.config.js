module.exports = {
  env: {
    test: {
      plugins: ['require-context-hook'],
    },
  },
  plugins: [
    'styled-components',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
}
