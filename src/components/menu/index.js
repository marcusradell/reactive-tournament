import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import Behaviors from './behaviors'
import State from './state'

export default function create ({routes}) {
  const behaviors = Behaviors({async})
  const state = State({
    ramdaMerge,
    selectBehavior: behaviors.streams.select
  })

  return {
    routes,
    behaviors,
    state
  }
}
