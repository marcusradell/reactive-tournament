import {merge as ramdaMerge, omit as ramdaOmit} from 'ramda'
import {v4 as uuidV4} from 'uuid'

export default function create ({entityType, setStateTrigger}) {
  const localStorage = window.localStorage

  function create () {
    const state = JSON.parse(localStorage.getItem(entityType))
    const id = uuidV4()
    const newState = JSON.stringify(ramdaMerge(state, {[id]: {}}))
    localStorage.setItem(entityType, newState)
    return Promise.resolve()
    .then(() => {
      return readAll(entityType)
    })
    .then((entities) => {
      setStateTrigger(entities)
    })
    .then(() => (
      {id}
    ))
  }

  function readAll () {
    return Promise.resolve(JSON.parse(localStorage.getItem(entityType)))
  }

  function update (id, field, value) {
    const state = JSON.parse(localStorage.getItem(entityType))
    const entityState = ramdaMerge(state[id], {[field]: value})
    const newState = JSON.stringify(ramdaMerge(state, {[id]: entityState}))
    localStorage.setItem(entityType, newState)
    return Promise.resolve()
    .then(() => {
      return readAll(entityType)
    })
    .then((entities) => {
      setStateTrigger(entities)
    })
    .then({})
  }

  function remove (id) {
    const state = JSON.parse(localStorage.getItem(entityType))
    const newState = JSON.stringify(ramdaOmit([id], state))
    localStorage.setItem(entityType, newState)
    return Promise.resolve()
    .then(() => {
      return readAll(entityType)
    })
    .then((entities) => {
      setStateTrigger(entities)
    })
    .then({})
  }

  return {
    create,
    readAll,
    update,
    remove
  }
}
