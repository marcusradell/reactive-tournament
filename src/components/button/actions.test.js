import {async} from 'most-subject'
import Actions from './actions'

test('triggers.press produces a streams.press event', () => {
  const {triggers, streams} = Actions({async})
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
