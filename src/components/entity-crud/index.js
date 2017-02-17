import EntityList from '../entity-list'
import EntityForm from '../entity-form'

export default function create ({provider, entityType}) {
  const entityList = EntityList({
    provider,
    entityType
  })
  const entityForm_ = entityList.actions.streams.select
  .map(({id}) => {
    return EntityForm({
      provider,
      entityType,
      id
    })
  })

  const children = {
    entityList,
    entityForm_
  }

  return {
    children,
    entityType
  }
}
