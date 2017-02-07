export default function create ({Subject}) {
  const setPrimaryMainHexSubject = Subject()

  function setPrimaryMainHexTrigger (data) {
    setPrimaryMainHexSubject.next(data)
  }

  return {
    triggers: {
      setPrimaryMainHex: setPrimaryMainHexTrigger
    },
    streams: {
      setPrimaryMainHex: setPrimaryMainHexSubject
    }
  }
}
