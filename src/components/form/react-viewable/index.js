import React from 'react'
import {merge as ramdaMerge} from 'ramda'
import Input from '../../input/react-viewable'
import View from './view'
import Children from './children'
import ReactObserver from '../../../utils/react-observer'

export default function create ({model}) {
  const {children, childViews} = Children({
    Input,
    ReactObserver,
    children: model.children
  })
  const view = View({
    React,
    childViews
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
