import EntityInput from '../entity-input'
import Children from './children'

export default function create ({provider, entityType, id}) {
  const schema = provider.schemas[entityType]

  const labels = {
    entityType
  }

  const children = Children({
    provider,
    EntityInput,
    schema,
    entityType,
    id
  })

  return {
    schema,
    children,
    id,
    labels
  }
}
