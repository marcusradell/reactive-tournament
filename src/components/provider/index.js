import {merge as objectMerge} from 'ramda'
import ColorTheme, {defaultPrimaryMain} from '../color-theme'
import AnimationTheme, {defaultBaseMs} from '../animation-theme'
import EntityService from '../entity-service'
import * as schemas from '../schemas'

export default function create ({localStorage}) {
  const providerWithLocalStorage = {
    localStorage,
    schemas
  }

  const entityServices = {
    user: EntityService({
      provider: providerWithLocalStorage,
      entityType: 'user'})
  }

  const colorTheme = ColorTheme({initialPrimaryMain: defaultPrimaryMain})
  const animationTheme = AnimationTheme({initialBaseMs: defaultBaseMs})

  return objectMerge(
    providerWithLocalStorage,
    {
      entityServices,
      colorTheme,
      animationTheme
    }
  )
}
