import EntityService from '../entity-service'

export default function create () {
  const localStorage = window.localStorage
  const entityServices = {
    user: EntityService({
      provider: {localStorage},
      entityType: 'user'})
  }

  return {
    entityServices
  }
}
