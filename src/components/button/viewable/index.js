import React from 'react'
import styled from 'styled-components'
import {merge as ramdaMerge} from 'ramda'
import ConnectObserver from '../../../utils/connect-observer'
import View from './view'

export default function create ({model}) {
  const view = View({
    React,
    styled,
    ConnectObserver,
    state_: model.state_,
    labels: model.labels,
    pressTrigger: model.actions.triggers.press,
    press_: model.actions.streams.press
  })
  const viewable = {
    view
  }

  return ramdaMerge(
    model,
    viewable
  )
}
