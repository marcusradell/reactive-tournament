import React from 'react'
import {merge as ramdaMerge} from 'ramda'
import EntityList from '../../../entity-list/viewable'
import View from './view'

export default function create ({model}) {
  const userList = EntityList({model: model.children.userList})

  const children = {
    userList
  }

  const view = View({
    React,
    UserListView: userList.view
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
