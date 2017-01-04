import {merge as ramdaMerge} from 'ramda'
import {async as mostAsync} from 'most-subject'
import Pages from '../pages'
import Behaviors from './behaviors'
import State from './state'
import Epics from './epics'

export default function create ({initialRoute, setRouteSource, setRouteSinkEffect}) {
  const behaviors = Behaviors({mostAsync, setRouteSource})
  const epics = Epics({
    setRouteSinkEffect,
    setRouteBehavior: behaviors.streams.setRoute
  })
  const state = State({
    initialRoute,
    ramdaMerge,
    setRouteSuccess: epics.setRouteSuccess
  })
  const pages = Pages({routeState$: state})
  const children = {
    pages
  }

  return {
    children,
    behaviors,
    epics,
    state
  }
}
