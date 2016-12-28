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
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    debug: true
  }
}
