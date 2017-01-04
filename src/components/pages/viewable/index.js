import React from 'react'
import ReactObserver from '../../../utils/react-observer'
import {merge as ramdaMerge} from 'ramda'
import Landing from '../landing/viewable'
import Login from '../login/viewable'
import View from './view'

// TODO: Make model that exposes child components
export default function create ({model}) {
  const landing = Landing({model: model.children.landing})
  const login = Login({model: model.children.login})

  const children = {
    landing,
    login,
    // TODO: duplication. Refactor to a key string.
    default: landing
  }

  const view = View({
    React,
    ReactObserver,
    children,
    state$: model.state$
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
