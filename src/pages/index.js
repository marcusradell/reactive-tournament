import Landing from './landing'
import Login from './login'

// TODO: Make model that exposes child components
export default function create () {
  const landing = Landing()

  return {
    default: landing,
    landing,
    login: Login()
  }
}
