import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import {merge as ramdaMerge} from 'ramda'
import ReactObserver from '../../../utils/react-observer'
import View from './view'

export default function create ({model}) {
  const view = View({
    React,
    StyleSheet,
    css,
    ReactObserver,
    stateStream: model.state,
    labels: model.labels,
    pressTrigger: model.behaviors.triggers.press,
    pressStream: model.behaviors.streams.press
  })
  const viewable = {
    view
  }

  return ramdaMerge(
    model,
    viewable
  )
}
