export default function create ({h, most, uuid, children}) {
  const view = children.map(function onMap (childrenComponents) {
    const childrenComponentViewsArray = Object.keys(childrenComponents)
    .map(function onMap (key) {
      return childrenComponents[key].view
    })
    return most.combineArray(function onCombine (...childVNodes) {
      return h('div',
        [...childVNodes]
      )
    }, childrenComponentViewsArray)
  })
  .switch()

  return {
    view
  }
}
