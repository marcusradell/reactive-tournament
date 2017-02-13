import React from 'react'
import {merge as objectMerge} from 'ramda'
import Pages from '../../pages/viewable'
import View from './view'

export default function create ({model}) {
  const pages = Pages({model: model.children.pages})
  const children = {pages}
  const view = View({
    React,
    PagesView: pages.view
  })

  const viewable = {
    children,
    view
  }

  return objectMerge(
    model,
    viewable
  )
}
