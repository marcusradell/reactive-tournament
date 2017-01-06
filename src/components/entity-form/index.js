import Input from '../input'
import Children from './children'

export default function create ({schema}) {
  const children = Children({Input, schema})

  return {
    schema,
    children
  }
}
