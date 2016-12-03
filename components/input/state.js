export default function create({objectMerge, updateStream}) {
  const initialState = {
    value: ''
  }

  const updateStreamReducer = updateStream
  .map(function onMap(eventData) {
    return function reduce(stateData) {
      return objectMerge(
        stateData,
        {value: eventData}
      )
    }
  })

  const stateStream = updateStreamReducer
  .scan(function onScan(stateData, reduce) {
    return reduce(stateData)
  }, initialState)

  return stateStream
}
