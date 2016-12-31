import h from 'snabbdom/h'
import {merge as ramdaMerge} from 'ramda'
import Children from './children'
import Button from '../../button/viewable'
import View from './view'

export default function create ({model}) {
  const children = Children({Button, children: model.children})

  const view = View({
    h,
    name: model.name,
    state: model.state,
    updateTrigger: model.behaviors.triggers.update,
    okButtonView: children.okButton.view,
    okTrigger: children.okButton.behaviors.triggers.press,
    cancelButtonView: children.cancelButton.view,
    cancelTrigger: children.cancelButton.behaviors.triggers.press
  })
  const viewable = {
    children,
    view
  }

  return ramdaMerge(
    model,
    viewable
  )
}
