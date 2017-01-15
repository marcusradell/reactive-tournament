export default function create ({async, ramdaMerge}) {
  const createSubject = async()

  function createTrigger (data) {
    createSubject.next(data)
  }

  const createResolvedSubject = async()

  function createResolvedTrigger (data) {
    createResolvedSubject.next(data)
  }

  const createRejectedSubject = async()

  function createRejectedTrigger (data) {
    createRejectedSubject.next(data)
  }

  const readSubject = async()

  function readTrigger (data) {
    readSubject.next(data)
  }

  const readResolvedSubject = async()

  function readResolvedTrigger (data) {
    readResolvedSubject.next(data)
  }

  const readRejectedSubject = async()

  function readRejectedTrigger (data) {
    readRejectedSubject.next(data)
  }

  const updateSubject = async()

  function updateTrigger (data) {
    updateSubject.next(data)
  }

  const updateResolvedSubject = async()

  function updateResolvedTrigger (data) {
    updateResolvedSubject.next(data)
  }

  const updateRejectedSubject = async()

  function updateRejectedTrigger (data) {
    updateRejectedSubject.next(data)
  }

  const removeSubject = async()

  function removeTrigger (data) {
    removeSubject.next(data)
  }

  const removeResolvedSubject = async()

  function removeResolvedTrigger (data) {
    removeResolvedSubject.next(data)
  }

  const removeRejectedSubject = async()

  function removeRejectedTrigger (data) {
    removeRejectedSubject.next(data)
  }

  return {
    triggers: {
      create: createTrigger,
      createResolved: createResolvedTrigger,
      createRejected: createRejectedTrigger,
      read: readTrigger,
      readResolved: readResolvedTrigger,
      readRejected: readRejectedTrigger,
      update: updateTrigger,
      updateResolved: updateResolvedTrigger,
      updateRejected: updateRejectedTrigger,
      remove: removeTrigger,
      removeResolved: removeResolvedTrigger,
      removeRejected: removeRejectedTrigger
    },
    streams: {
      create: createSubject,
      createResolved: createResolvedSubject,
      createRejected: createRejectedSubject,
      read: readSubject,
      readResolved: readResolvedSubject,
      readRejected: readRejectedSubject,
      update: updateSubject,
      updateResolved: updateResolvedSubject,
      updateRejected: updateRejectedSubject,
      remove: removeSubject,
      removeResolved: removeResolvedSubject,
      removeRejected: removeRejectedSubject
    }
  }
}
