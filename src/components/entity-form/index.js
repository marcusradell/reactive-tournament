import Input from '../input'
import Children from './children'

export default function create ({provider, schema}) {
  const children = Children({provider, Input, schema})

  return {
    schema,
    children
  }
}
