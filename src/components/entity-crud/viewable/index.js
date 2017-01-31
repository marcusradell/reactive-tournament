import React from 'react'
import {merge as objectMerge} from 'ramda'
import EntityCreate from '../../entity-create/viewable'
import EntityList from '../../entity-list/viewable'
import EntityForm from '../../entity-form/viewable'
import View from './view'

export default function create ({model}) {
  const entityCreate = EntityCreate({model: model.children.entityCreate})
  const entityList = EntityList({model: model.children.entityList})
  const entityForm = EntityForm({model: model.children.entityForm})

  const children = {
    entityCreate,
    entityList,
    entityForm
  }

  const view = View({
    React,
    CreateView: entityCreate.view,
    ListView: entityList.view,
    FormView: entityForm.view
  })

  const viewable = {
    children,
    view
  }

  return objectMerge(model, viewable)
}
