import React from 'react'
import {merge as ramdaMerge} from 'ramda'
import ReactObserver from '../../../utils/react-observer'
import Children from './children'
import Button from '../../button/viewable'
import View from './view'

export default function create ({model}) {
  const children = Children({Button, children: model.children})

  const view = View({
    React,
    ReactObserver,
    name: model.name,
    state$: model.state,
    updateTrigger: model.behaviors.triggers.update,
    OkButtonView: children.okButton.view,
    okTrigger: children.okButton.behaviors.triggers.press,
    CancelButtonView: children.cancelButton.view,
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
