import EntityCreate from '../entity-create'
import EntityList from '../entity-list'
import EntityForm from '../entity-form'

export default function create ({provider, entityType}) {
  const entityCreate = EntityCreate({provider, entityType})

  // @TODO: Select createResolved IDs
  const entityList = EntityList({provider, entityType})
  const selectedId_ = entityList.actions.streams.select
  const entityForm = EntityForm({
    provider,
    entityType,
    selectedId_})

  const children = {
    entityCreate,
    entityList,
    entityForm
  }

  return {
    children,
    entityType
  }
}
