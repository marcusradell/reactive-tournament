import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import {merge as ramdaMerge} from 'ramda'
import Input from '../../input/viewable'
import View from './view'
import Children from './children'

export default function create ({model}) {
  const children = Children({
    Input,
    children: model.children
  })
  const view = View({
    React,
    StyleSheet,
    css,
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
