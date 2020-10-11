module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    // "plugin:vue/base"
    "plugin:vue/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "html",
    "standard"
  ],
  "rules": {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow console log
    "no-console": "off",
    // allow unused vars
    "no-unused-vars": "off",
    // allow prototype builtins
    "no-prototype-builtins": "off",
    // indent
    "indent": ["error", 2, {
      "SwitchCase": 1,
      //"FunctionExpression": {"parameters": "first"},
    }],
    "vue/script-indent": ["error", 2, {
      "switchCase": 1,
      "baseIndent": 1,
      "ignores": []
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "multiline": "never"
    }],
    // Enforce order of properties in components
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "fetch",
        "asyncData",
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        "head",
        ["template", "render"],
        "renderError"
      ]
    }],
    // Enforce order of attributes
    "vue/attributes-order": ["error", {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        "UNIQUE",
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT"
      ],
      "alphabetical": false
    }],
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
};