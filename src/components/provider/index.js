import {merge as ramdaMerge} from 'ramda'
import ColorTheme, {defaultPrimaryMain} from '../color-theme'
import AnimationTheme, {defaultBaseMs} from '../animation-theme'
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

  const colorTheme = ColorTheme({initialPrimaryMain: defaultPrimaryMain})
  const animationTheme = AnimationTheme({initialBaseMs: defaultBaseMs})

  return ramdaMerge(
    providerWithLocalStorage,
    {
      entityServices,
      colorTheme,
      animationTheme
    }
  )
}
