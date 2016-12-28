module.exports = function onWallaby (wallaby) {
  return {
    files: [
      'components/**/*.js',
      '!components/**/*.test.js'
    ],
    tests: [
      'components/**/*.test.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest',
    setup: function (wallaby) {
      wallaby.testFramework.configure({
        'transform': {
          '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
        }
      })
    },
    debug: true
  }
}
