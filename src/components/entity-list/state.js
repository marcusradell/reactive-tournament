export default function create ({objectMerge, select_}) {
  const initialState = {
    selectedId: 0
  }

  const selectReducer_ = select_
  .map(eventData =>
    state =>
      objectMerge(state, {selectedId: eventData.id})
  )

  const state_ = selectReducer_
  .scan((state, reduce) => reduce(state), initialState)

  return state_
}
