export default function create ({mostAsync, setRouteSource}) {
  const setRouteSubject = mostAsync()

  function setRouteTrigger (route) {
    setRouteSubject.next(route)
  }

  const setRouteStream = setRouteSubject.merge(setRouteSource)

  return {
    triggers: {
      setRoute: setRouteTrigger
    },
    streams: {
      setRoute: setRouteStream
    }
  }
}
