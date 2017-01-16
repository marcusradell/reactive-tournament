export default function create ({mostAsync, delayMs}) {
  const pressSubject = mostAsync()

  function pressTrigger () {
    pressSubject.next()
  }

  const unpress = pressSubject
  .delay(delayMs)

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
