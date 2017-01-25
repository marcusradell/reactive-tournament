

export default function create ({
  mostFromEvent,
  eventSource,
  eventName
}) {
  function selectPath () {
    return window.location.hash.slice(1)
  }

  const setRouteSource = mostFromEvent(eventName, eventSource)
  .map(function onMap () {
    return selectPath()
  })

  function setRouteSinkEffect (route) {
    window.location.href = `/#${route}`
  }

  const initialRoute = selectPath()

  return {
    initialRoute,
    setRouteSource,
    setRouteSinkEffect
  }
}
