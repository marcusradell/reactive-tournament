export default function create ({pages, state}) {
  const view = state.chain(function chain ({route}) {
    return pages[route] ? pages[route].view : pages.default.view
  })

  return view
}
