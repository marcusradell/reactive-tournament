export default function create ({ramdaMerge, pressStream}) {
  const initialState = {
    isRecentlyPressed: false
  }

  const pressReducerStream = pressStream
  .map(() => state => (
    ramdaMerge(state, {isRecentlyPressed: true})
  ))

  const unpressReducerStream = pressStream
  .delay(500)
  .map(() => state => (
      ramdaMerge(state, {isRecentlyPressed: false})
  ))

  const stateStream = pressReducerStream
  .merge(unpressReducerStream)
  .scan((state, reduce) => (
    reduce(state)
  ), initialState)

  return stateStream
}
