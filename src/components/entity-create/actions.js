export default function create ({Subject}) {
  const createResolvedSubject = Subject()

  function createResolvedTrigger (data) {
    createResolvedSubject.next(data)
  }

  return {
    triggers: {
      createResolved: createResolvedTrigger
    },
    streams: {
      createResolved: createResolvedSubject
    }
  }
}
