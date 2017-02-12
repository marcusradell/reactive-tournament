import React from 'react'
import {merge as objectMerge} from 'ramda'
import ConnectObserver from '../../../utils/connect-observer'
import EntityCreate from '../../entity-create/viewable'
import EntityList from '../../entity-list/viewable'
import EntityForm from '../../entity-form/viewable'
import View from './view'

export default function create ({model}) {
  const entityCreate = EntityCreate({model: model.children.entityCreate})
  const entityList = EntityList({model: model.children.entityList})
  const entityForm_ = model.children.entityForm_
  .map((entityFormModel) => {
    return EntityForm({model: entityFormModel})
  })

  const children = {
    entityCreate,
    entityList,
    entityForm_
  }

  const pureView = View({
    React,
    CreateView: entityCreate.view,
    ListView: entityList.view
  })

  entityForm_.startWith({}).forEach(console.log)

  const view = ConnectObserver({
    state_: entityForm_.startWith({}),
    view: pureView
  })

  const viewable = {
    children,
    pureView,
    view
  }

  return objectMerge(model, viewable)
}
