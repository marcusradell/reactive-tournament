import Input from '../input'
import Children from './children'

export default function create ({provider, schema, entityType, id}) {
  const children = Children({provider, Input, schema, entityType, id})

  return {
    schema,
    children
  }
}
