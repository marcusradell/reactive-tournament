import React from 'react'
import {css, StyleSheet} from 'aphrodite'
import {merge as objectMerge} from 'ramda'
import ConnectObserver from '../../../utils/connect-observer'
import Children from './children'
import Button from '../../button/viewable'
import View from './view'

export default function create ({model}) {
  const children = Children({Button, children: model.children})
  const view = View({
    React,
    css,
    StyleSheet,
    ConnectObserver,
    fieldName: model.fieldName,
    type: model.type,
    state_: model.state_,
    entityServiceFieldState_: model.entityServiceFieldState_,
    updateTrigger: model.actions.triggers.update,
    OkButtonView: children.okButton.view,
    okTrigger: children.okButton.actions.triggers.press,
    CancelButtonView: children.cancelButton.view,
    cancelTrigger: children.cancelButton.actions.triggers.press
  })
  const viewable = {
    children,
    view
  }

  return objectMerge(
    model,
    viewable
  )
}
