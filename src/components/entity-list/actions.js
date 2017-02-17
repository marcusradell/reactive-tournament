export default function create ({Subject, entityCreateResolved_}) {
  const selectSubject = Subject()

  function selectTrigger (value) {
    selectSubject.next(value)
  }

  const select_ = selectSubject.merge(entityCreateResolved_)

  return {
    triggers: {
      select: selectTrigger
    },
    streams: {
      select: select_
    }
  }
}
