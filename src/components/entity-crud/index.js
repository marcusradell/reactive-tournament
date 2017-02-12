import EntityCreate from '../entity-create'
import EntityList from '../entity-list'
import EntityForm from '../entity-form'

export default function create ({provider, entityType}) {
  const entityCreate = EntityCreate({provider, entityType})

  // @TODO: Select createResolved IDs
  const entityList = EntityList({provider, entityType})
  const entityForm_ = entityList.actions.streams.select
  .map(({id}) => {
    return EntityForm({
      provider,
      entityType,
      id
    })
  })

  const children = {
    entityCreate,
    entityList,
    entityForm_
  }

  return {
    children,
    entityType
  }
}
