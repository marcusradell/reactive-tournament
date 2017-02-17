import React from 'react'
import {merge as objectMerge} from 'ramda'
import ConnectObserver from '../../../utils/connect-observer'
import EntityList from '../../entity-list/viewable'
import EntityForm from '../../entity-form/viewable'
import ViewState from './view-state'
import View from './view'

export default function create ({model}) {
  const entityList = EntityList({model: model.children.entityList})
  const entityForm_ = model.children.entityForm_
  .map((entityFormModel) => {
    return EntityForm({model: entityFormModel})
  })

  const children = {
    entityList,
    entityForm_
  }

  const viewState_ = ViewState({entityForm_})

  const pureView = View({
    React,
    ListView: entityList.view
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

  return objectMerge(model, viewable)
}
