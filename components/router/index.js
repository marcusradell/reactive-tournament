import {merge as ramdaMerge} from 'ramda'
import {async as mostAsync} from 'most-subject'
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

  return {
    behaviors,
    epics,
    state
  }
}
