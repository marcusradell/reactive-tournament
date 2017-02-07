import React from 'react'
import {merge as ramdaMerge} from 'ramda'
import EntityCrud from '../../../entity-crud/viewable'
import View from './view'

export default function create ({model}) {
  const userCrud = EntityCrud({model: model.children.userCrud})

  const children = {
    userCrud
  }

  const view = View({
    React,
    UserCrud: userCrud.view
  })

  const viewable = {
    children,
    view
  }

  return ramdaMerge(
    model,
    viewable
  )
}
