import React from 'react'
import {merge as ramdaMerge} from 'ramda'
import View from './view'

export default function create ({model}) {
  const view = View({
    React,
    name: model.name,
    pressTrigger: model.behaviors.triggers.press
  })
  const viewable = {
    view
  }

  return ramdaMerge(
    model,
    viewable
  )
}
