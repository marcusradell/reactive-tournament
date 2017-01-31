// @TODO: Rename to entity-input
import {merge as mostMerge, fromPromise as streamFromPromise} from 'most'
import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import Button from '../button'
import Actions from './actions'
import State from './state'
import Epics from './epics'

export default function create ({
  provider,
  entityType,
  fieldName,
  selectedId_,
  type = 'text'}) {
  const entityServiceFieldState_ = provider.entityServices.user.state_
  .combine(
    (state, {id}) => {
      return state[id] && state[id][fieldName]
    },
    selectedId_
  )

  function updateFieldById ({id, value}) {
    return provider.entityServices[entityType].apiEffect.update(id, fieldName, value)
  }

  const okButton = Button({provider, name: 'save', variant: 'success'})
  const cancelButton = Button({provider, name: 'cancel', variant: 'error'})

  const children = {
    okButton,
    cancelButton
  }

  const actions = Actions({async})
  const state_ = State({
    mostMerge,
    ramdaMerge,
    okBehavior: okButton.actions.streams.press,
    cancelBehavior: cancelButton.actions.streams.press,
    updateBehavior: actions.streams.update
  })

  const epics = Epics({
    streamFromPromise,
    updateFieldById,
    actions,
    selectedId_,
    save_: actions.streams.update.sampleWith(okButton.actions.streams.press)
  })
  // @TODO: Fix if it doesn't complete when unmounted
  epics.merged_.drain()

  return {
    fieldName,
    type,
    children,
    actions,
    state_,
    entityServiceFieldState_,
    epics
  }
}
