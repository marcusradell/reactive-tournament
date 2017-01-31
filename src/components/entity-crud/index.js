import EntityCreate from '../entity-create'
import EntityList from '../entity-list'
import EntityForm from '../entity-form'

export default function create ({provider, entityType}) {
  const entityCreate = EntityCreate({provider, entityType})
  const entityList = EntityList({provider, entityType})

  // @TODO: Remove
  const schema = [
    {name: 'first name', type: 'text'},
    {name: 'last name', type: 'text'},
    {name: 'email', type: 'text'},
    {name: 'password', type: 'password'}
  ]

  const entityForm = EntityForm({provider, entityType, schema})

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
