import {async as mostAsync} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import Actions from './actions'
import State from './state'
export {default as variants} from './variants'

export default function create ({provider, name, variant}) {
  // @TODO: delayMs should be set as a part of the global animation style.
  const actions = Actions({mostAsync, delayMs: 500})
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
