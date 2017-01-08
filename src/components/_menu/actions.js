export default function create ({async}) {
  const selectSubject = async()

  function selectTrigger (key) {
    selectSubject.next(key)
  }

  return {
    triggers: {
      select: selectTrigger
    },
    stream: {
      select: selectSubject
    }
  }
}
