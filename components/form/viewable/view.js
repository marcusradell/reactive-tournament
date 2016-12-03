export default function create({h, children}) {
  const mounts = children.map(function onMap(childrenComponents) {
    return Object.keys(childrenComponents)
    .reduce(function onReduce(acc, childName) {
      acc[childName] = h('div', [childName])
      return acc
    }, {})
  })

  const view = mounts.map(function onMap(mountsObject) {
    // TODO: return directly after debugging is done.
    const elm = h('div',
      Object.keys(mountsObject).map(function onMapObjToArr(mountKey) {
        return mountsObject[mountKey]
      })
    )
    return elm
  })

  return {
    view,
    mounts
  }
}
