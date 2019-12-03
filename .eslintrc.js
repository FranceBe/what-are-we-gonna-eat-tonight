module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": [2, "never"],
    "indent": ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false, "ignoreJSX": "all" }],
    "max-len": [
      "error",
      {
        "code": 100
      }
    ],
    "no-multi-spaces": "error",
  },
  "settings": {
    "react": {
      "version": "16.3"
    }
  }
};
