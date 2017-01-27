import EntityList from '../../entity-list'
import EntityForm from '../../entity-form'

export default function create ({provider}) {
  // @TODO: Implement entity-schemas
  const schema = [
    {name: 'firstName', type: 'text'},
    {name: 'lastName', type: 'text'}
  ]
  const entityType = 'user'
  const userList = EntityList({provider, entityType})
  const entityForm_ = userList.state_
  .map(({selectedId}) => (
    EntityForm({provider, schema, entityType, id: selectedId})
  ))
  const children = {userList}

  return {
    children,
    entityForm_
  }
}
