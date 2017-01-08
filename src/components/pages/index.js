import Landing from './landing'
import Login from './login'

// TODO: Make a component
export default function create ({routerState$}) {
  const state$ = routerState$
  const landing = Landing()
  const children = {
    landing,
    login: Login()
  }
  const defaultChild = 'login'
  return {
    state$,
    children,
    defaultChild
  }
}
