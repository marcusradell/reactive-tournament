import React from 'react'
import Form from '../../../form/viewable'
import View from './view'

export default function create ({model}) {
  const form = Form({model: model.children.form})

  const view = View({
    React,
    FormView: form.view
  })

  return {
    view
  }
}
