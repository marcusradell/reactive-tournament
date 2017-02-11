import {async as Subject} from 'most-subject'
import Color from 'color'
import Actions from './actions'
import State from './state'

export const defaultPrimaryMain = '#AAA239'

export default function create ({initialPrimaryMain}) {
  const actions = Actions({Subject})
  const state_ = State({
    Color,
    initialPrimaryMain,
    setPrimaryMain_: actions.streams.setPrimaryMain
  })

  return {
    actions,
    state_
  }
}
