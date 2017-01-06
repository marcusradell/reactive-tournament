import {merge as ramdaMerge} from 'ramda'
import {v4} from 'uuid'

export default function createStore () {
  function createVerbHandler (localStorage, entity, body = {}) {
    const state = JSON.parse(localStorage.getItem(entity))
    const newState = JSON.stringify(ramdaMerge(state, {[v4()]: body}))
    localStorage.setState(entity, newState)
    return Promise.resolve(JSON.parse(localStorage.getItem(entity)))
  }

  function send (verb, entity, body) {
    return verbHandlers[verb](window.localStorage, entity, body)
  }

  const verbHandlers = {
    create: createVerbHandler,
    // @TODO: Implement
    // read,
    // update,
    // remove
  }

  return {
    send
  }
}
