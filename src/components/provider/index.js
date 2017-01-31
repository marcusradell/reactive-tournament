import EntityService from '../entity-service'
import * as schemas from '../schemas'

export default function create () {
  const localStorage = window.localStorage
  const entityServices = {
    user: EntityService({
      provider: {localStorage},
      entityType: 'user'})
  }

  return {
    entityServices,
    schemas
  }
}
