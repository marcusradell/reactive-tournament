export default function create ({async}) {
  const setRouteSubject = async()

  function setRouteTrigger (route) {
    setRouteSubject.next(route)
  }

  return {
    triggers: {
      setRoute: setRouteTrigger
    },
    streams: {
      setRoute: setRouteSubject
    }
  }
}
