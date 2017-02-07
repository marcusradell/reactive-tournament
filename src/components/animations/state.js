export default function create ({
  initialBaseMs,
  setBaseMs_
}) {
  const state_ = setBaseMs_
  .startWith(initialBaseMs)
  .map((baseMs) => {
    return {
      baseMs
    }
  })

  return state_
}
