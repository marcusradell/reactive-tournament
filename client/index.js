import {fromEvent as mostFromEvent} from 'most'
import {init as snabbdomInit} from 'snabbdom'
import eventListeners from 'snabbdom/modules/eventlisteners'
import props from 'snabbdom/modules/props'
import style from 'snabbdom/modules/style'
import '../static/css/style.css'
import RouterModel from '../components/router'
import Router from '../components/router/viewable'
import Renderer from './renderer'
import SetRouteSource from './set-route-source'

export default function create (domElm) {
  const patch = snabbdomInit([
    eventListeners,
    props,
    style
  ])

  function selectPath () {
    return window.location.hash.slice(1)
  }

  const setRouteSource = SetRouteSource({
    mostFromEvent,
    eventName: 'hashchange',
    eventSource: window,
    selectPath
  })
  const initialRoute = selectPath()
  const routerModel = RouterModel({initialRoute, setRouteSource})
  const router = Router({model: routerModel})

  Renderer({
    patch,
    domElm,
    view: router.view
  })
}
