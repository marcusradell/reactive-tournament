import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import Actions from './actions'
import State from './state'

export default function create ({provider, name, variant}) {
  const actions = Actions({async})
  const state_ = State({
    ramdaMerge,
    press_: actions.streams.press,
    unpress_: actions.streams.unpress
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
