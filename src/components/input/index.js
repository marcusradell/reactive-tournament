import {merge as mostMerge} from 'most'
import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import Button from '../button'
import Actions from './actions'
import State from './state'

export default function create ({provider, name, type = 'text'}) {
  const children = {
    okButton: Button({provider, name: 'save', variant: 'success'}),
    cancelButton: Button({provider, name: 'cancel', variant: 'error'})
  }

  const actions = Actions({async})
  const state_ = State({
    mostMerge,
    ramdaMerge,
    okBehavior: children.okButton.actions.streams.press,
    cancelBehavior: children.cancelButton.actions.streams.press,
    updateBehavior: actions.streams.update
  })

  return {
    name,
    type,
    children,
    actions,
    state_
  }
}
