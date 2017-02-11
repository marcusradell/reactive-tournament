import React from 'react'
import styled from 'styled-components'
import {merge as ramdaMerge} from 'ramda'
import ConnectObserver from '../../../utils/connect-observer'
import View from './view'

export default function create ({model}) {
  const pureView = View({
    React,
    styled,
    labels: model.labels,
    pressTrigger: model.actions.triggers.press
  })

  const view = ConnectObserver({
    view: pureView,
    state_: model.state_.combine((self, colorTheme) => {
      return {
        self,
        colorTheme
      }
    }, model.colorTheme.state_)
  })

  const viewable = {
    pureView,
    view
  }

  return ramdaMerge(
    model,
    viewable
  )
}
