import {async as Subject} from 'most-subject'
import {fromPromise as observableFromPromise} from 'most'
import Button, {variants as buttonVariants} from '../button'
import Actions from './actions'
import Epics from './epics'

export default function create ({provider, entityType}) {
  const entityService = provider.entityServices[entityType]

  const createButton = Button({
    provider,
    name: 'create',
    variant: buttonVariants.success
  })

  const children = {
    createButton
  }

  const actions = Actions({Subject})

  const epics = Epics({
    observableFromPromise,
    create_: createButton.actions.streams.press,
    createEntityEffect: entityService.apiEffect.create,
    createResolvedTrigger: actions.triggers.createResolved
  })

  return {
    children,
    entityService,
    actions,
    epics
  }
}
