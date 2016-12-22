import {init as snabbdomInit} from 'snabbdom'
import eventListeners from 'snabbdom/modules/eventlisteners'
import props from 'snabbdom/modules/props'
import style from 'snabbdom/modules/style'
import '../static/css/style.css'
import RouterModel from '../components/router'
import Router from '../components/router/viewable'

export default function create (domElm) {
  const patch = snabbdomInit([
    eventListeners,
    props,
    style
  ])

  const routerModel = RouterModel()
  const router = Router({model: routerModel})

  router.view
  .scan(function onScan (elm, nextElm) {
    patch(elm, nextElm)
    return nextElm
  }, domElm)
  .drain()

  // TODO: Remove
  const route = window.location.hash
  ? window.location.hash.slice(1)
  : 'login'
  router.behaviors.triggers.setRoute(route)
}
