import {merge as objectMerge} from 'ramda'
import React from 'react'
import styled from 'styled-components'
import View from './view'
import ConnectObserver from '../../../utils/connect-observer'

export default function create ({model}) {
  const pureView = View({
    React,
    styled,
    setBaseMsTrigger: model.actions.triggers.setBaseMs
  })

  const view = ConnectObserver({
    state_: model.state_,
    view: pureView
  })

  const viewable = {
    view,
    pureView
  }

  return objectMerge(model, viewable)
}
