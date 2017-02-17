export default function create ({
  Subject,
  entityCreateResolved_,
  entityServiceState_
}) {
  const selectSubject = Subject()

  function selectTrigger (value) {
    selectSubject.next(value)
  }

  const select_ = selectSubject.merge(
    entityCreateResolved_
    .map((data) => {
      return entityServiceState_
      .filter((entityServiceState) => {
        return entityServiceState[data.id]
      })
      .map(() => {
        return data
      })
      .take(1)
    })
    .switch()
  )

  return {
    triggers: {
      select: selectTrigger
    },
    streams: {
      select: select_
    }
  }
}
