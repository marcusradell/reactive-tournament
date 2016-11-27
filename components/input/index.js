import {async} from 'most-subject'
import {merge as objectMerge} from 'ramda'
import Behaviors from './behaviors'
import State from './state'

export default function create() {
  const behaviors = Behaviors({async})
  const state = State({
    objectMerge,
    updateStream: behaviors.streams.update
  })

  return {
    behaviors,
    state
  }
}
