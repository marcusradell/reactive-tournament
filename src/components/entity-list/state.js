export default function create ({ramdaMerge, select_}) {
  const initialState = {
    selectedId: 0
  }

  const selectReducer_ = select_
  .map(eventData =>
    state =>
      ramdaMerge(state, {selectedId: eventData.id})
  )

  const state_ = selectReducer_
  .scan((state, reduce) => reduce(state), initialState)

  return state_
}
