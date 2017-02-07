import {async as Subject} from 'most-subject'
import Color from 'color'
import Actions from './actions'
import State from './state'

export const defaultPrimaryMainHex = '#AAA239'

export default function create ({initialPrimaryMainHex}) {
  const actions = Actions({Subject})
  const state_ = State({
    Color,
    initialPrimaryMainHex,
    setPrimaryMainHex_: actions.streams.setPrimaryMainHex
  })

  return {
    actions,
    state_
  }
}
