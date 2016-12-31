export default function create ({
  mostOf,
  h,
  name,
  pressTrigger
}) {
  function onClick () {
    pressTrigger()
  }

  const view = mostOf(
    h('button',
    {on: {click: onClick}},
    [name])
  )

  return view
}
