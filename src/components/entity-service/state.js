// @TODO: continue here.

export default function create ({setState_}) {
  const initialState = {}

  const setStateReducer_ = setState_
  .map((value) => () => (value))

  const state_ = setStateReducer_
  .scan((state, reduce) => (
    reduce(state)
  ), initialState)

  return state_
}
