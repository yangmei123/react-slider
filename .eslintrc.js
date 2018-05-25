module.exports = {
  "extends": "eslint-config-airbnb-base",
  "rules": {
    "comma-dangle": 0,
    "no-use-before-define": ["error", {
      "functions": false,
      "classes": false
    }],
    "indent": ["error", 2, {
      "MemberExpression": 1
    }]
  }
};
