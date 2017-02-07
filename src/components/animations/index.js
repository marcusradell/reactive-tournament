import {async as Subject} from 'most-subject'
import Actions from './actions'
import State from './state'

export const defaultBaseMs = 400

export default function create ({initialBaseMs}) {
  const actions = Actions({Subject})
  const state_ = State({
    initialBaseMs,
    setBaseMs_: actions.streams.setBaseMs
  })

  return {
    actions,
    state_
  }
}
