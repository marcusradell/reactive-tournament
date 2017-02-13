import React from 'react'
import styled from 'styled-components'
import {merge as objectMerge} from 'ramda'
import ConnectObserver from '../../../utils/connect-observer'
import View from './view'
import ViewState from './view-state'

export default function create ({model}) {
  const pureView = View({
    React,
    styled,
    labels: model.labels,
    pressTrigger: model.actions.triggers.press
  })

  const viewState_ = ViewState({
    state_: model.state_,
    colorThemeState_: model.colorTheme.state_
  })

  const view = ConnectObserver({
    view: pureView,
    state_: viewState_
  })

  const viewable = {
    viewState_,
    pureView,
    view
  }

  return objectMerge(
    model,
    viewable
  )
}
