export default function create ({ramdaMerge, setRouteBehavior}) {
  const initialState = {
    route: 'landing'
  }

  const setRouteReducer = setRouteBehavior
  .map(function onMap (route) {
    return function reduce (stateObject) {
      return ramdaMerge(
        stateObject,
        {route}
      )
    }
  })

  const state = setRouteReducer
  .scan(function onScan (stateObject, reduce) {
    return reduce(stateObject)
  }, initialState)

  return state
}
