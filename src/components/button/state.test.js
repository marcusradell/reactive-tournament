import {run} from 'most-test'
import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import State from './state'

describe('state', () => {
  it('press_ makes state_ emit an unpressed state after 500ms', () => {
    const expected = {'isRecentlyPressed': false}
    const press_ = async()
    const state_ = State({ramdaMerge, press_})
    const env = run(state_)
    press_.next()
    return env.tick(500)
    .then((result) => {
      expect(result.events.length).toBe(2)
      const actual = result.events
      expect(actual).toEqual(expected)
    })
  })
})
