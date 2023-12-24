const { configure, presets } = require('eslint-kit');

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== 'production',

  presets: [presets.imports(), presets.node(), presets.prettier(), presets.typescript(), presets.react()],

  extend: {
    rules: {
      'import/no-default-export': 'off',
      'no-console': 'warn',
      'react/sort-comp': 'off',
      'react/state-in-constructor': 'off',
      'react/destructuring-assignment': 'off',
      'react/no-array-index-key': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'unicorn/prefer-add-event-listener': 'off',
      'simple-import-sort/imports': 'off',
    },
  },
});
