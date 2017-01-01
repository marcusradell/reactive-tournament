import React from 'react'
import {merge as ramdaMerge} from 'ramda'
import Input from '../../input/react-viewable'
import DefaultView from './view'
import Children from './children'
import ReactObserver from '../../../utils/react-observer'

export default function create ({model, View = DefaultView}) {
  const children = Children({
    Input,
    ReactObserver,
    children: model.children
  })
  const view = View({
    React,
    children
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
