export default function create ({Subject}) {
  const setBaseMsSubject = Subject()

  function setBaseMsTrigger (data) {
    setBaseMsSubject.next(data)
  }

  return {
    triggers: {
      setBaseMs: setBaseMsTrigger
    },
    streams: {
      setBaseMs: setBaseMsSubject
    }
  }
}
