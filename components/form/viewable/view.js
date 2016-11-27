export default function create({h, children}) {
  const view = children
  .map(function onMap(childElms) {
    return h('div', childElms)
  })

  return view
}
