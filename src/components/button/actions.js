export default function create ({async}) {
  const pressSubject = async()

  function pressTrigger () {
    pressSubject.next()
  }

  const unpress = pressSubject
  .delay(500)

  return {
    triggers: {
      press: pressTrigger
    },
    streams: {
      press: pressSubject,
      unpress
    }
  }
}
