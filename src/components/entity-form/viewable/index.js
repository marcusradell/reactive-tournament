import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import {merge as objectMerge} from 'ramda'
import EntityInput from '../../entity-input/viewable'
import View from './view'
import Children from './children'

export default function create ({model}) {
  const children = Children({
    EntityInput,
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

  return objectMerge(
    model,
    viewable
  )
}
