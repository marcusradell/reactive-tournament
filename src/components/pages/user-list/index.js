import EntityList from '../../entity-list'

export default function create ({provider}) {
  const userList = EntityList({provider, entityType: 'user'})
  const children = {userList}

  return {
    children
  }
}
