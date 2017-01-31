import Input from '../input'
import Children from './children'

export default function create ({provider, entityType, selectedId_}) {
  const schema = provider.schemas[entityType]

  const labels = {
    entityType
  }

  const children = Children({
    provider,
    Input,
    schema,
    entityType,
    selectedId_
  })

  return {
    schema,
    children,
    selectedId_,
    labels
  }
}
