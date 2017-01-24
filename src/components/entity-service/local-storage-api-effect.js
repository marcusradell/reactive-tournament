export default function create ({
  localStorage,
  ramdaMerge,
  ramdaOmit,
  uuidV4,
  entityType,
  setStateTrigger
}) {
  function create () {
    return readAll()
    .then((state) => {
      const id = uuidV4()
      const newState = JSON.stringify(ramdaMerge(state, {[id]: {}}))
      localStorage.setItem(entityType, newState)
      return id
    })
    .then((id) => {
      setStateTrigger(readAll(entityType))
      return {id}
    })
  }

  function readAll () {
    return Promise.resolve(JSON.parse(localStorage.getItem(entityType) || '{}'))
  }

  function update (id, field, value) {
    return readAll()
    .then((state) => {
      const entityState = ramdaMerge(state[id], {[field]: value})
      const newState = JSON.stringify(ramdaMerge(state, {[id]: entityState}))
      localStorage.setItem(entityType, newState)
    })
    .then(() => {
      setStateTrigger(readAll(entityType))
      return {}
    })
  }

  function remove (id) {
    return readAll()
    .then((state) => {
      const newState = JSON.stringify(ramdaOmit([id], state))
      localStorage.setItem(entityType, newState)
    })
    .then(() => {
      setStateTrigger(readAll(entityType))
      return {}
    })
  }

  return {
    create,
    readAll,
    update,
    remove
  }
}
