export default function create ({
  mostMerge,
  objectMerge,
  okBehavior,
  cancelBehavior,
  updateBehavior
}) {
  const initialState = {
    value: '',
    savedValue: ''
  }

  const updateReducer = updateBehavior
  .map(function onMap (eventData) {
    return function reduce (stateData) {
      return objectMerge(
        stateData,
        {value: eventData}
      )
    }
  })

  const okReducer = okBehavior
  .map(function onMap () {
    return function reduce (stateData) {
      return objectMerge(
        stateData,
        {savedValue: stateData.value}
      )
    }
  })

  const cancelReducer = cancelBehavior
  .map(function onMap () {
    return function reduce (stateData) {
      return objectMerge(
        stateData,
        {value: stateData.savedValue}
      )
    }
  })

  const state = mostMerge(
    updateReducer,
    okReducer,
    cancelReducer
  )
  .scan(function onScan (stateData, reduce) {
    return reduce(stateData)
  }, initialState)

  return state
}
