// import {run} from 'most-test'
import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import State from './state'

describe('state', () => {
  it('press_ and then unpress_ makes state_ emit an unpressed state', () => {
    const expected = {'isRecentlyPressed': false}
    const unpress_ = async()
    const press_ = async()
    const state_ = State({ramdaMerge, press_, unpress_})

    // Skip initial state and the press
    const promise = state_
    .skip(2)
    .take(1)
    .forEach((state) => {
      const actual = state
      expect(actual).toEqual(expected)
    })

    press_.next()
    unpress_.next()

    return promise
  })
})
