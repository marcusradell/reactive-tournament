import Landing from './landing'
import Login from './login'
import UserList from './user-list'

// TODO: Make a component
export default function create ({provider, routerState_}) {
  const state_ = routerState_
  const children = {
    landing: Landing({provider}),
    login: Login({provider}),
    userList: UserList({provider})
  }
  const defaultChild = 'login'
  return {
    state_,
    children,
    defaultChild
  }
}
