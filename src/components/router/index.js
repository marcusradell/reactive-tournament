import {merge as ramdaMerge} from 'ramda'
import {async as mostAsync} from 'most-subject'
import {fromEvent as mostFromEvent} from 'most'
import BrowserRouter from './browser-router'
import Pages from '../pages'
import Actions from './actions'
import State from './state'
import Epics from './epics'

export default function create ({provider}) {
  const {
    initialRoute,
    setRouteSource,
    setRouteSinkEffect
  } = BrowserRouter({
    mostFromEvent,
    // @TODO: Purify these two and the BrowserRouter
    // Should conceptually be able to replace window and window.location with a input field
    eventSource: window,
    eventName: 'hashchange'
  })
  const actions = Actions({mostAsync, setRouteSource})
  const epics = Epics({
    setRouteSinkEffect,
    setRouteBehavior: actions.streams.setRoute
  })
  const state_ = State({
    initialRoute,
    ramdaMerge,
    setRouteSuccess: epics.setRouteSuccess
  })
  const pages = Pages({provider, routerState_: state_})
  const children = {
    pages
  }

  return {
    children,
    actions,
    epics,
    state_
  }
}
