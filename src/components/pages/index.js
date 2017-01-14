import Landing from './landing'
import Login from './login'

// TODO: Make a component
export default function create ({routerState_}) {
  const state_ = routerState_
  const landing = Landing()
  const children = {
    landing,
    login: Login()
  }
  const defaultChild = 'login'
  return {
    state_,
    children,
    defaultChild
  }
}
