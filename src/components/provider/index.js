import {merge as ramdaMerge} from 'ramda'
import Colors, {defaultPrimaryMainHex} from '../colors'
import EntityService from '../entity-service'
import * as schemas from '../schemas'

export default function create () {
  const providerWithLocalStorage = {
    localStorage: window.localStorage,
    schemas
  }

  const entityServices = {
    user: EntityService({
      provider: providerWithLocalStorage,
      entityType: 'user'})
  }

  const colors = Colors({initialPrimaryMainHex: defaultPrimaryMainHex})

  return ramdaMerge(
    providerWithLocalStorage,
    {
      entityServices,
      colors
    }
  )
}
