import {async as Subject} from 'most-subject'
import {merge as objectMerge} from 'ramda'
import EntityCreate from '../entity-create'
import Actions from './actions'
import State from './state'

export default function create ({provider, entityType}) {
  const entityService = provider.entityServices[entityType]

  const entityCreate = EntityCreate({provider, entityType})
  const labels = {
    entityType
  }
  const children = {
    entityService,
    entityCreate
  }
  // @TODO: remove if not needed.
  // .merge(
  //   entityCreate.epics.createResolved_
  //   .map((data) => {
  //     return entityService.state_
  //     .filter((entityServiceState) => {
  //       return entityServiceState[data.id]
  //     })
  //     .map(() => {
  //       return data
  //     })
  //     .take(1)
  //   })
  //   .switch()
  // )
  const actions = Actions({
    Subject,
    entityCreateResolved_: entityCreate.actions.streams.createResolved
  })
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
