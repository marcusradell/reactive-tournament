import Landing from './landing'
import Login from './login'

export default function create () {
  const landing = Landing()

  return {
    default: landing,
    landing,
    login: Login()
  }
}
