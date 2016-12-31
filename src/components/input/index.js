import {merge as mostMerge} from 'most'
import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import Button from '../button'
import Behaviors from './behaviors'
import State from './state'

export default function create ({name}) {
  const children = {
    okButton: Button({name: 'OK'}),
    cancelButton: Button({name: 'cancel'})
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
    children,
    behaviors,
    state
  }
}
