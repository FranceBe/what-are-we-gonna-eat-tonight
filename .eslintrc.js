module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
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
  "plugins": ["react", "jest"],
  "rules": {
    "semi": [2, "never"],
    "indent": ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false, "ignoreJSX": "all" }],
    "max-len": [
      "error",
      {
        "code": 110
      }
    ],
    "no-multi-spaces": "error",
  },
  "settings": {
    "react": {
      "version": "16.12"
    }
  }
};
