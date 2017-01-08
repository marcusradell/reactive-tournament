import {merge as ramdaMerge} from 'ramda'
import {async as mostAsync} from 'most-subject'
import Pages from '../pages'
import Actions from './actions'
import State from './state'
import Epics from './epics'

export default function create ({initialRoute, setRouteSource, setRouteSinkEffect}) {
  const actions = Actions({mostAsync, setRouteSource})
  const epics = Epics({
    setRouteSinkEffect,
    setRouteBehavior: actions.streams.setRoute
  })
  const state$ = State({
    initialRoute,
    ramdaMerge,
    setRouteSuccess: epics.setRouteSuccess
  })
  const pages = Pages({routerState$: state$})
  const children = {
    pages
  }

  return {
    children,
    actions,
    epics,
    state$
  }
}
