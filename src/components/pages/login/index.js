import EntityCrud from '../../entity-crud'

export default function create ({provider}) {
  const userCrud = EntityCrud({provider, entityType: 'user'})
  const children = {userCrud}

  return {
    children
  }
}
