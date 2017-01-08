import React from 'react'
import {merge as ramdaMerge} from 'ramda'
import Form from '../../../entity-form/viewable'
import View from './view'

export default function create ({model}) {
  const form = Form({model: model.children.form})

  const children = {
    form
  }

  const view = View({
    React,
    FormView: form.view
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
