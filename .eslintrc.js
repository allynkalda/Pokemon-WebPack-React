const DISABLE = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  "extends": [
    "react-app",
    "airbnb"
  ],
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "rules": {
    "semi": ERROR,
    "no-trailing-spaces": WARN,
    "array-bracket-spacing": ["error", "always"],
    "array-callback-return": DISABLE,
    "comma-dangle": ["error", "never"],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "prefer-promise-reject-errors": WARN,
    "prefer-template": WARN,
    "no-underscore-dangle": DISABLE,
    "prop-types": DISABLE,
    "quotes": [ ERROR, "single", { "avoidEscape": true } ],
    "no-else-return": DISABLE,
    "import/no-unresolved": DISABLE, // Check how to fix properly
    "import/no-extraneous-dependencies": DISABLE, // Check how to fix properly
    "import/extensions": [ERROR, "ignorePackages", {
      "js": "never",
      "json": "never"
    }],
    "react/jsx-one-expression-per-line": DISABLE,
    "react/no-array-index-key": WARN,
    "react/prop-types": WARN,
    "react/require-default-props": DISABLE,
    "react/forbid-prop-types": WARN,
    "react/no-unused-prop-types": WARN,
    "react/jsx-props-no-spreading": DISABLE,
    "react/jsx-filename-extension": [ ERROR, { "extensions": [".js", ".jsx"] } ],
    "jsx-a11y/control-has-associated-label": WARN
  }
};
