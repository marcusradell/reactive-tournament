import React from 'react'
import styled from 'styled-components'
import {merge as objectMerge} from 'ramda'
import ConnectObserver from '../../../utils/connect-observer'
import View from './view'

export default function create ({model}) {
  const viewState = model.state_
  .combine(
    (self, entityService) => ({self, entityService}),
    model.children.entityService.state_
  )

  const pureView = View({
    React,
    styled,
    selectTrigger: model.actions.triggers.select
  })

  const view = ConnectObserver({
    view: pureView,
    state_: viewState
  })

  const viewable = {
    pureView,
    view
  }

  return objectMerge(
    model,
    viewable
  )
}
