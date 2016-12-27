import {merge as ramdaMerge} from 'ramda'
import {async as mostAsync} from 'most-subject'
import Behaviors from './behaviors'
import State from './state'

export default function create ({initialRoute, setRouteSource}) {
  const behaviors = Behaviors({mostAsync, setRouteSource})
  const state = State({
    initialRoute,
    ramdaMerge,
    setRouteBehavior: behaviors.streams.setRoute
  })

  return {
    behaviors,
    state
  }
}
