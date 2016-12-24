export default function create ({ramdaMerge, routes, selectBehavior}) {
  const initialState = {
    selected: null
  }

  const selectReducer = selectBehavior
  .map(function onMap (key) {
    return function reduce (stateObject) {
      ramdaMerge(stateObject, {selected: key})
    }
  })

  const state = selectReducer.scan(function onScan (state, reduce) {
    return reduce(state)
  }, initialState)

  return state
}
