export default function create ({ramdaMerge, press_, unpress_}) {
  const initialState = {
    isRecentlyPressed: false
  }

  const pressReducer_ = press_
  .map(() => state => (
    ramdaMerge(state, {isRecentlyPressed: true})
  ))

  const unpressReducer_ = unpress_
  .map(() => state => (
      ramdaMerge(state, {isRecentlyPressed: false})
  ))

  const state_ = pressReducer_
  .merge(unpressReducer_)
  .scan((state, reduce) => (
    reduce(state)
  ), initialState)

  return state_
}
