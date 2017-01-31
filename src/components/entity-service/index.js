// @TODO: Separate commands from queries.
import {async} from 'most-subject'
import {merge as ramdaMerge, omit as ramdaOmit} from 'ramda'
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
    ramdaMerge,
    ramdaOmit,
    uuidV4,
    entityType,
    setStateTrigger: actions.triggers.setState
  })

  return {
    labels,
    actions,
    state_,
    apiEffect
  }
}
