import {merge as ramdaMerge} from 'ramda'
import {async} from 'most-subject'
import Behaviors from './behaviors'
import State from './state'

export default function create () {
  const behaviors = Behaviors({async})
  const state = State({
    ramdaMerge,
    setRouteBehavior: behaviors.streams.setRoute
  })

  return {
    behaviors,
    state
  }
}
