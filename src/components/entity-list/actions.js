export default function create ({async}) {
  const selectSubject = async()

  function selectTrigger (value) {
    selectSubject.next(value)
  }

  return {
    triggers: {
      select: selectTrigger
    },
    streams: {
      select: selectSubject
    }
  }
}
