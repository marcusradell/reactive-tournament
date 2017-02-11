export default function create ({async}) {
  const updateTriggerSubject = async()

  function updateTrigger (eventData) {
    updateTriggerSubject.next(eventData)
  }

  return {
    triggers: {
      update: updateTrigger
    },
    streams: {
      update: updateTriggerSubject
    }
  }
}
