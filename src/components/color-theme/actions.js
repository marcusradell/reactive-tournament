export default function create ({Subject}) {
  const setPrimaryMainSubject = Subject()

  function setPrimaryMainTrigger (data) {
    setPrimaryMainSubject.next(data)
  }

  return {
    triggers: {
      setPrimaryMain: setPrimaryMainTrigger
    },
    streams: {
      setPrimaryMain: setPrimaryMainSubject
    }
  }
}
