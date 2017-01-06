import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import Behaviors from './behaviors'
import State from './state'

export default function create ({name, variant}) {
  const behaviors = Behaviors({async})
  const state = State({
    ramdaMerge,
    pressStream: behaviors.streams.press
  })

  const labels = {
    name,
    variant
  }

  return {
    labels,
    behaviors,
    state
  }
}
