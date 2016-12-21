export default function create ({pages, state}) {
  const view = state.chain(function chain ({route}) {
    debugger
    return pages[route].view
  })

  return view
}
