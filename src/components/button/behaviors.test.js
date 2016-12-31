import {async} from 'most-subject'
import Behaviors from './behaviors'

test('triggers.press produces a streams.press event', () => {
  const {triggers, streams} = Behaviors({async})
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
