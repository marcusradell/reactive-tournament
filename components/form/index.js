import Input from '../input'
import Children from './children'

export default function create ({inputNames}) {
  const children = Children({Input, inputNames})

  return {
    children
  }
}
