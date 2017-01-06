import {merge as mostMerge} from 'most'
import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import Button from '../button'
import Behaviors from './behaviors'
import State from './state'

export default function create ({name, type = 'text'}) {
  const children = {
    okButton: Button({name: 'save', variant: 'success'}),
    cancelButton: Button({name: 'cancel', variant: 'error'})
  }

  const behaviors = Behaviors({async})
  const state = State({
    mostMerge,
    ramdaMerge,
    okBehavior: children.okButton.behaviors.streams.press,
    cancelBehavior: children.cancelButton.behaviors.streams.press,
    updateBehavior: behaviors.streams.update
  })

  return {
    name,
    type,
    children,
    behaviors,
    state
  }
}
