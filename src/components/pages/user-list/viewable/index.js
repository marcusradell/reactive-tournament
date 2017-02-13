import React from 'react'
import {merge as objectMerge} from 'ramda'
import ConnectObserver from '../../../../utils/connect-observer'
import EntityList from '../../../entity-list/viewable'
import EntityForm from '../../../entity-form/viewable'
import View from './view'

export default function create ({model}) {
  const userList = EntityList({model: model.children.userList})

  const children = {
    userList
  }

  const entityForm_ = model.entityForm_
  .map((entityFormModel) => (
    EntityForm({model: entityFormModel})
  ))

  const pureView = View({
    React,
    UserListView: userList.view
  })

  const view = ConnectObserver({
    view: pureView,
    state_: entityForm_
  })

  const viewable = {
    children,
    view,
    pureView,
    entityForm_
  }

  return objectMerge(
    model,
    viewable
  )
}
