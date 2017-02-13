// @TODO: Separate commands from queries.
import {async} from 'most-subject'
import {merge as objectMerge, omit as objectOmit} from 'ramda'
import {v4 as uuidV4} from 'uuid'
import Actions from './actions'
import State from './state'
import LocalStorageApiEffect from './local-storage-api-effect'
import {hold} from '@most/hold'

export default function create ({provider, entityType}) {
  const {localStorage} = provider

  const labels = {
    entityType
  }
  const actions = Actions({async})
  const state_ = State({hold, setState_: actions.streams.setState})
  const apiEffect = LocalStorageApiEffect({
    localStorage,
    objectMerge,
    objectOmit,
    uuidV4,
    entityType,
    setStateTrigger: actions.triggers.setState
  })

  // @TODO: Move to better place. Consolidate with epics.
  state_.drain()
  apiEffect.updateCache()

  return {
    labels,
    actions,
    state_,
    apiEffect
  }
}
