export default function create ({
  setRouteSinkEffect,
  setRouteBehavior
}) {
  const setRouteSuccess = setRouteBehavior
  .tap(function onDo (route) {
    setRouteSinkEffect(route)
  })

  return {
    setRouteSuccess,
    merged: setRouteSuccess
  }
}
