import {of as observableOf} from 'most'
import {merge as objectMerge} from 'ramda'
import React from 'react'
import ConnectObserver from '../../../utils/connect-observer'
import ButtonViewable from '../../button/viewable'
import View from './view'

export default function create ({model}) {
  const button = ButtonViewable({
    model: model.children.createButton
  })

  const pureView = View({
    React,
    ButtonView: button.view
  })

  // @TODO: Find better pattern
  // Prob use "app level middleware"
  // Or use dangling .drain() if the parent stream always completes.
  const fakeState_ = observableOf({}).merge(model.epics.combined_).merge(model.actions.streams.createResolved)
  const view = ConnectObserver({view: pureView, state_: fakeState_})

  const viewable = {
    view
  }

  return objectMerge(model, viewable)
}
