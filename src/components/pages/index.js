import Landing from './landing'
import Login from './login'

// TODO: Make a component
export default function create ({routeState$}) {
  const state$ = routeState$
  const landing = Landing()
  const children = {
    default: landing,
    landing,
    login: Login()
  }

  return {
    state$,
    children
  }
}
