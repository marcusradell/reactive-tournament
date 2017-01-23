import {async as mostAsync} from 'most-subject'
import Actions from './actions'

// NOTE: This is more integration testing than unit testing.
// Mostly done here to show testability.
test('triggers.press produces a streams.press event', () => {
  const {triggers, streams} = Actions({mostAsync})
  const onForEach = jest.fn()

  const promise = streams.press
  .take(1)
  .forEach(onForEach)
  .then(() => {
    expect(onForEach).toHaveBeenCalledTimes(1)
  })

  triggers.press()
  return promise
})
