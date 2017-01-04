import React from 'react'
import View from './view'

export default function create ({model}) {
  const view = View({React})

  return {
    view
  }
}
