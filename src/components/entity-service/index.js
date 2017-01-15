import {async} from 'most-subject'
import Actions from './actions'
import State from './state'
import LocalStorage from './local-storage'

export default function create ({entityType}) {
  const labels = {
    entityType
  }
  const actions = Actions({async})
  const state = State({setState_: actions.streams.setState})
  const apiEffect = LocalStorage({entityType, setStateTrigger: actions.triggers.setState})

  return {
    labels,
    actions,
    state,
    apiEffect
  }
}
