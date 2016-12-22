export default function create ({pages, state}) {
  const view = state.chain(function chain ({route}) {
    return pages[route].view
  })

  return view
}
