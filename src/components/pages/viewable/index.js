import React from 'react'
import ConnectObserver from '../../../utils/connect-observer'
import {merge as ramdaMerge} from 'ramda'
import Landing from '../landing/viewable'
import Login from '../login/viewable'
import View from './view'

export default function create ({model}) {
  const landing = Landing({model: model.children.landing})
  const login = Login({model: model.children.login})

  const children = {
    landing,
    login
  }

  const view = View({
    React,
    ConnectObserver,
    children,
    defaultChild: model.defaultChild,
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
