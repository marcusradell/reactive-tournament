import {async} from 'most-subject'
import {empty} from 'most'
import {merge as objectMerge} from 'ramda'
import State from './state'

test('initial state', () => {
  const press_ = empty()
  const unpress_ = empty()
  const state_ = State({objectMerge, press_, unpress_})
  const expected = {
    isRecentlyPressed: false
  }
  return state_.take(1).forEach((actual) => {
    expect(actual).toEqual(expected)
  })
})

test('press_', () => {
  const press_ = async()
  const unpress_ = empty()
  const state_ = State({objectMerge, press_, unpress_})
  const expected = {
    isRecentlyPressed: true
  }

  // Skip initial state
  const promise = state_.skip(1).take(1).forEach((actual) => {
    expect(actual).toEqual(expected)
  })

  press_.next()
  return promise
})

test('press_ and then unpress_', () => {
  const expected = {isRecentlyPressed: false}
  const unpress_ = async()
  const press_ = async()
  const state_ = State({objectMerge, press_, unpress_})

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
