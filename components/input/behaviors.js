export default function create({async}) {
  const updateTriggerSubject = async()

  function updateTrigger(eventData) {
    if (typeof eventData !== 'string') {
      throw new Error('updateTrigger called with wrong type.')
    }

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
