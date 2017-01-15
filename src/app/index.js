import React from 'react'
import ReactDOM from 'react-dom'
import {fromEvent as mostFromEvent} from 'most'
import RouterModel from '../components/router'
import Router from '../components/router/viewable'
import Renderer from './renderer'
import SetRouteSource from './set-route-source'
import EntityService from '../components/entity-service'

export default function create ({domElm}) {
  const userService = EntityService({entityType: 'user'})

  const provider = {
    userService
  }

  function selectPath () {
    return window.location.hash.slice(1)
  }

  const setRouteSource = SetRouteSource({
    mostFromEvent,
    eventName: 'hashchange',
    eventSource: window,
    selectPath
  })

  function setRouteSinkEffect (route) {
    window.location.href = `/#${route}`
  }

  const initialRoute = selectPath()
  const routerModel = RouterModel({
    provider,
    initialRoute,
    setRouteSource,
    setRouteSinkEffect
  })
  const router = Router({model: routerModel})

  window.router = router

  Renderer({
    React,
    render: ReactDOM.render,
    domElm,
    View: router.view
  })
}
