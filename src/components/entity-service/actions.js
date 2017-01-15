export default function create ({async}) {
  const setStateSubject = async()

  function setStateTrigger (value) {
    setStateSubject.next(value)
  }

  return {
    triggers: {
      setState: setStateTrigger
    },
    streams: {
      setState: setStateSubject
    }
  }
}
