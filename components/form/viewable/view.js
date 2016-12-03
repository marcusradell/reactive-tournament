export default function create({h, mostOf, children}) {
  // const view = childViewsStream
  // .switchMap(function onFlatMap(childViews) {
  //   return Object.keys(childViews)
  //   .map(function onMapChildViews(key) {
  //     return h('div', [
  //       childViews[key]
  //     ])
  //   })
  // })
  // .map(function onMap(childViews) {
  //   return h('div',
  //     childViews
  //   )
  // })

  const mounts = children.map(function onMap(childrenComponents) {
    return Object.keys(childrenComponents)
    .reduce(function onReduce(acc, childName) {
      acc[childName] = h('div', [childName])
      return acc
    }, {})
  })

  const view = mounts.map(function onMap(mountsObject) {
    return h('div',
      Object.keys(mountsObject).map(function onMapObjToArr(mountKey) {
        return mountsObject[mountKey]
      })
    )
  })

  return {
    view,
    mounts
  }
}
