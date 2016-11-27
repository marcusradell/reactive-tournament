export default function create({async}) {
  const pressSubject = async()

  function pressTrigger() {
    pressSubject.next()
  }

  return {
    triggers: {
      press: pressTrigger
    },
    streams: {
      press: pressSubject
    }
  }
}
