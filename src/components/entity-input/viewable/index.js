import React from 'react'
import {css, StyleSheet} from 'aphrodite'
import {merge as objectMerge} from 'ramda'
import ConnectObserver from '../../../utils/connect-observer'
import Children from './children'
import Button from '../../button/viewable'
import View from './view'

export default function create ({model}) {
  const children = Children({Button, children: model.children})
  const viewState_ = model.state_
  .combine(
    (local, service) => {
      return {local, service}
    },
    model.entityServiceFieldState_
  )
  const pureView = View({
    React,
    css,
    StyleSheet,
    fieldName: model.fieldName,
    type: model.type,
    updateTrigger: model.actions.triggers.update,
    OkButtonView: children.okButton.view,
    okTrigger: children.okButton.actions.triggers.press,
    CancelButtonView: children.cancelButton.view,
    cancelTrigger: children.cancelButton.actions.triggers.press
  })
  const view = ConnectObserver({
    state_: viewState_,
    view: pureView
  })
  const viewable = {
    children,
    viewState_,
    pureView,
    view
  }

  return objectMerge(
    model,
    viewable
  )
}
