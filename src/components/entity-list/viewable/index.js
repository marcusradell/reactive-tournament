import React from 'react'
import styled from 'styled-components'
import {merge as objectMerge} from 'ramda'
import ConnectObserver from '../../../utils/connect-observer'
import EntityCreate from '../../entity-create/viewable'
import View from './view'

export default function create ({model}) {
  const entityCreate = EntityCreate({model: model.children.entityCreate})
  const children = objectMerge(
    model.children,
    {entityCreate}
  )
  const viewState = model.state_
  .combine(
    (self, entityService, colorTheme) => ({self, entityService, colorTheme}),
    model.children.entityService.state_,
    model.colorTheme.state_
  )

  const pureView = View({
    React,
    styled,
    EntityCreateView: entityCreate.view,
    selectTrigger: model.actions.triggers.select
  })

  const view = ConnectObserver({
    view: pureView,
    state_: viewState
  })

  const viewable = {
    children,
    pureView,
    view
  }

  return objectMerge(
    model,
    viewable
  )
}
