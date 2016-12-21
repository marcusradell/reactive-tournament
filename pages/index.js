import Landing from './landing'
import Login from './login'

export default function create () {
  return {
    landing: Landing(),
    login: Login()
  }
}
