import Landing from './landing'
import Login from './login'

// TODO: Make a component
export default function create ({provider, routerState_}) {
  const state_ = routerState_
  const landing = Landing({provider})
  const children = {
    landing,
    login: Login({provider})
  }
  const defaultChild = 'login'
  return {
    state_,
    children,
    defaultChild
  }
}
