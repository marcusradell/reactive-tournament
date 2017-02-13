import {async} from 'most-subject'
import {merge as objectMerge} from 'ramda'
import Actions from './actions'
import State from './state'

export default function create ({provider, entityType}) {
  const labels = {
    entityType
  }
  const children = {
    entityService: provider.entityServices[entityType]
  }
  const actions = Actions({async})
  const state_ = State({
    objectMerge,
    select_: actions.streams.select
  })

  return {
    labels,
    children,
    actions,
    state_
  }
}
