import {async} from 'most-subject'
import {merge as ramdaMerge} from 'ramda'
import Actions from './actions'
import State from './state'

export default function create ({routes}) {
  const actions = Actions({async})
  const state = State({
    ramdaMerge,
    selectBehavior: actions.streams.select
  })

  return {
    routes,
    actions,
    state
  }
}
