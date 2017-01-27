export default function create ({setState_, hold}) {
  const initialState = {}

  const setStateReducer_ = setState_
  .map((value) => () => (value))

  const state_ = setStateReducer_
  .scan((state, reduce) => {
    return reduce(state)
  }, initialState)

  return hold(state_)
}
