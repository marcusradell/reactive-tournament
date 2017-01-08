import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import Actions from './actions'
import State from './state'

export default function create ({name, variant}) {
  const actions = Actions({async})
  const state_ = State({
    ramdaMerge,
    press_: actions.streams.press
  })

  const labels = {
    name,
    variant
  }

  return {
    labels,
    actions,
    state_
  }
}
